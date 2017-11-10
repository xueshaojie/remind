class Admin::AssetsController < Admin::BaseController

  before_filter :find_asset, only: [:show, :edit, :update, :destroy, :check, :detail, :print]

  def index
    params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_created_at_between).split(' - ') if params[:search][:created_at_created_at_between]

    # @search = (current_user.admin? ? Asset : current_user.department.assets).search(params[:search])
    if current_user.admin?
      @search = Asset.search(params[:search])
    else
      @search = Asset.where(id: (current_user.department.assets.pluck(:id)+current_user.asset_logs.pluck(:asset_id)).uniq).search(params[:search])
    end
    @assets = @search.order("assets.created_at desc").page(params[:page])
  end

  def new
    @asset = current_user.assets.new
    render layout: 'application_pop'
  end

  def create
    @asset = current_user.assets.new(params[:asset])
    if @asset.save
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '保存失败'
    end
  end

  def show
    if @asset.asset_logs.where(user_id: current_user.id).present?
      flash[:notice] = "您已对该申请进行审核，请勿重复操作!"
      render inline: "<script>parent.location.reload();</script>"
    else
      @asset_log = @asset.asset_logs.build
      render layout: 'application_pop'
    end
  end

  def edit
    render layout: 'application_pop'
  end

  def update
    if @asset.update_attributes(params[:asset])
      flash[:notice] = "更新成功"
      render inline: "<script>parent.location.reload();</script>"
    else
        redirect_to :back, alert: '更新失败'
    end
  end

  def approve
    @asset_log = AssetLog.find_by_id(params[:id])
    render layout: 'application_pop'
  end

  def deal
    @asset_log = AssetLog.find_by_id(params[:id])
    if @asset_log.update_attributes(params[:asset_log])
      if params[:asset_log][:status].to_i == -1
        @asset_log.asset.wait!
      elsif @asset_log.asset.asset_logs.pass.count == @asset_log.asset.asset_logs.count
        @asset_log.asset.pass!
      end
      flash[:notice] = "保存成功"
      return render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '操作失败'
    end
  end

  def destroy
    if !@asset.wait?
      return redirect_to :back, alert: '只有未提交状态才可以删除!'
    elsif @asset.destroy
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, alert: '删除失败'
    end
  end

  # def check
  #   @asset_log = current_user.asset_logs.build(params[:asset_log])
  #   if @asset_log.save
  #     @asset.process!
  #     flash[:notice] = "审核成功"
  #     render inline: "<script>parent.location.reload();</script>"
  #   else
  #     redirect_to :back, alert: '审核失败'
  #   end
  # end

  def check
    if !@asset.can_apply?
      redirect_to :back, alert: '财务主管、办公室主管或园区主管的审核人员没有配置'
    elsif @asset.apply
      redirect_to :back, notice: '提交成功'
    else
      redirect_to :back, alert: '提交失败'
    end
  end

  def detail
    @asset_logs = @asset.asset_logs
  end

  def print
    @asset_logs = @asset.asset_logs
    render layout: 'application_pop'
  end

  private
  def find_asset
    @asset = Asset.find(params[:id])
  end
end