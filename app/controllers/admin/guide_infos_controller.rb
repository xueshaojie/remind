class Admin::GuideInfosController < Admin::BaseController
  before_filter :find_guide_info, only: [:show, :update, :destroy]
  def index
    @search =  GuideInfo.search(params[:search])
    @guide_infos = @search.order(:position).order("updated_at desc").page(params[:page])
  end

  def show
    render layout: 'application_pop'
  end

  def new
    @guide_info = GuideInfo.new(params[:guide_info])
    render layout: 'application_pop'
  end

  def create
    @guide_info = GuideInfo.new(params[:guide_info])
    if @guide_info.save
      flash[:notice] = '保存成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'保存失败，请确认数据正确和必填项'
    end
  end

  def update
    if @guide_info.update_attributes(params[:guide_info])
      flash[:notice] = '更新成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'更新失败，请确认数据正确和必填项'
    end
  end

  def destroy
    if @guide_info.destroy
      flash[:notice] = "删除成功"
      redirect_to admin_guide_infos_path
    else
      return redirect_to :back , alert: "删除失败"
    end
  end

    private

    def find_guide_info
      @guide_info = GuideInfo.find(params[:id])
    end

end