class Wap::OrdersController < Wap::BaseController
  def index
    @orders = @user.shop.orders
  end

  def show
  end
end
