class Wap::ShopUsersController < Wap::BaseController
  before_filter :find_shop_user, only: [:show, :edit, :update, :destroy]

  def index
    @shop_users = @user.shop.shop_users
  end

  def new
    @shop_user = @user.shop.shop_users.new
  end

  def create
    @shop_user = @user.shop.shop_users.new(params[:shop_user])
    if @shop_user.save
      redirect_to wap_shop_users_path
    else
      render 'new'
    end
  end

  def update
    if @shop_user.update_attributes(params[:shop_user])
      redirect_to wap_shop_users_path
    else
      redirect_to wap_shop_users_path
    end
  end

  def list
    @shop_user = current_user
    @search =  @shop_user.products.search(params[:search])
    @products = @search.order("created_at desc").order("purchase_price desc").order("quantity desc").page(params[:page])
  end

  def destroy
    @shop_user.destroy
    redirect_to wap_shop_users_path
  end

  private

    def find_shop_user
      @shop_user = @user.shop.shop_users.where(id: params[:id]).first
    end
end
