class Wap::HomeController < Wap::BaseController
  def index
    @products_count = @user.shop.products.count
    @orders_count = @user.shop.orders.count
    @shop_customers_count = @user.shop.shop_customers.count
  end
end