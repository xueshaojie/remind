class Wap::ShopCustomersController < Wap::BaseController
  before_filter :find_shop_customer, only: [:show, :edit, :update, :destroy]
  def index
    @shop_customers = @user.shop.shop_customers
  end

  def new
    @shop_customer = @user.shop.shop_customers.new
  end

  def create
    @shop_customer = @user.shop.shop_customers.new(params[:shop_customer])
    if @shop_customer.save
      redirect_to wap_shop_customers_path
    else
      render 'new'
    end
  end

  private

    def find_shop_customer
      @shop_customer = @user.shop.shop_customers.where(id: params[:id]).first
    end
end
