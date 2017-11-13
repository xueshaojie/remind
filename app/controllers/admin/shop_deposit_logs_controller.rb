class Admin::ShopDepositLogsController < Admin::BaseController
  before_filter :find_shop_deposit_log, only: [:frost]
  def index
    @search =  ShopDepositLog.search(params[:search])
    @shop_deposit_logs = @search.order(:created_at).page(params[:page])
  end

  def show
    @shop_deposit_log = ShopDepositLog.find(params[:id])
    render layout: 'application_pop'
  end

  def new
    @shop = Shop.find(params["shop_id"].to_i)
    @shop_deposit_log = @shop.shop_deposit_logs.new(direction: params["direction"].to_i)
    render layout: 'application_pop'
  end

  def create
    @shop_deposit_log = ShopDepositLog.new(params[:shop_deposit_log])
    if @shop_deposit_log.save
      if @shop_deposit_log.plus?
        flash[:notice] = '充值成功'
      else
        flash[:notice] = "提取成功"
      end
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'保存失败，请确认数据正确和必填项'
    end
  end

  def update
    @shop_deposit_log = ShopDepositLog.find(params[:id])
    if @shop_deposit_log.update_attributes(params[:shop_deposit_log])
      flash[:notice] = '更新成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'更新失败，请确认数据正确和必填项'
    end
  end

  # def destroy
  #   @product_category = ProductCategory.find(params[:id])
  #   if @product_category.task_templates.count > 0
  #     return redirect_to :back,alert:'该类型下，有相应的任务模版，不能删除!'
  #   elsif @product_category.destroy
  #     redirect_to :back, notice:'删除成功'
  #   else
  #     redirect_to :back, alert:'删除失败'
  #   end
  # end

  def frost
    if @shop_deposit_log.frost!
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, notice: '删除失败'
    end
  end

    private

    def find_shop_deposit_log
      @shop_deposit_log = ShopDepositLog.find(params[:id])
    end

end