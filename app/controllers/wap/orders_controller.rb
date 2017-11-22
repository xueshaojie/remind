class Wap::OrdersController < Wap::BaseController
  before_filter :find_order, only: [:show, :edit, :update, :success, :cancel]
  def index
    if params[:shop_customer_id].present?
      @orders = ShopCustomer.where(id: params[:shop_customer_id]).first.products
    else
      @orders = @user.shop.orders
    end
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

  def update
    if @order.update_attributes(params[:order])
      redirect_to wap_order_path(@order)
    else
      render 'edit'
    end
  end

  def cancel
    @order.canceled!
    redirect_to wap_order_path(@order)
  end

  private

    def find_order
      @order = @user.shop.orders.where(id: params[:id]).first
    end
end
