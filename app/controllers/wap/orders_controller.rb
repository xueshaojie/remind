class Wap::OrdersController < Wap::BaseController
  before_filter :find_order, only: [:show, :success]
  def index
    @orders = @user.shop.orders
  end

  def new
    @order = @user.shop.orders.new
  end

  def create
    @order = @user.shop.orders.new(params[:order])
    if @order.save
      redirect_to success_wap_order_path(@order)
    else
      render 'new'
    end
  end

  private

    def find_order
      @order = @user.shop.orders.where(id: params[:id]).first
    end
end
