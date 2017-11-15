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

  private

    def find_shop_user
      @shop_user = @user.shop.shop_users.where(id: params[:id]).first
    end
end
