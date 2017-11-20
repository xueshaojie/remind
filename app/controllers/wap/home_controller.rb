class Wap::HomeController < Wap::BaseController
  skip_before_filter :require_user, only: :reset_success

  def index
    @products_count = @user.shop.products.count
    @orders_count = @user.shop.orders.count
    @shop_customers_count = @user.shop.shop_customers.count
  end

  def check_old_password
    if @user.authenticate(params[:old_password])
      redirect_to wap_set_new_password_path
    else
      render 'reset_password'
    end
  end

  def change_password
    if @user.update_attributes(password: params[:new_password], password_confirmation: params[:new_password])
      session[:shop_user_id] = nil
      redirect_to wap_reset_success_path
    else
      redirect_to wap_reset_password
    end
  end

  def reset_success
  end

end