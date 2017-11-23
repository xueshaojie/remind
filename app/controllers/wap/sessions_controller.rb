class Wap::SessionsController < Wap::BaseController
  skip_before_filter :require_user

  def new
  end

  def create
    if @user = ShopUser.normal.authenticated(params[:login_name], params[:password])
      session[:shop_user_id] = @user.id
      redirect_to wap_root_path
    else
      render 'new'
    end
  end

  def destroy
    session[:shop_user_id] = nil
    redirect_to wap_root_path
  end
end
