class Admin::ShopsController < Admin::BaseController
  before_filter :find_shop, only: [:show, :update, :frost, :normal]
  # , :plus, :reduce
  def index
    @search =  Shop.search(params[:search])
    @shops = @search.order(:position).page(params[:page])
  end

  def show
    render layout: 'application_pop'
  end

  def new
    @shop = Shop.new(params[:shop])
    @shop_user = @shop.new
    render layout: 'application_pop'
  end

  def create
    @shop = Shop.new(params[:shop])
    if @shop.save
      flash[:notice] = '保存成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'保存失败，请确认数据正确和必填项'
    end
  end

  def update
    if @shop.update_attributes(params[:shop])
      flash[:notice] = '更新成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'更新失败，请确认数据正确和必填项'
    end
  end

  def frost
    if @shop.frost!
      redirect_to :back, notice: '冻结成功'
    else
      redirect_to :back, notice: '冻结失败'
    end
  end

  def normal
    if @shop.normal!
      redirect_to :back, notice: '解冻成功!'
    else
      redirect_to :back, notice: '解冻失败!'
    end
  end

  # def plus
  #   if @shop.update_attributes(params[:shop])
  #     flash[:notice] = '充值成功'
  #     render inline: '<script>parent.location.reload();</script>'
  #   else
  #     return redirect_to :back, alert:'充值失败'
  #   end
  # end

  # def reduce
  #   render layout: 'application_pop'
  # end

  # def change_amount
  #   @shop_deposit_log = @shop.shop_deposit_log.new(params[:shop_deposit_log])
  # end

    private

    def find_shop
      @shop = Shop.find(params[:id])
    end

end