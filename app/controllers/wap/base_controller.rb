class Wap::BaseController < ActionController::Base
  layout "wap/main"

  before_filter :require_user
  helper_method :current_user

  def require_user
    if params[:id].present?
      @user = ShopUser.where(id: params[:id].to_i).first
      session[:shop_user_id] = @user.id if @user
    end

    unless current_user
      return redirect_to wap_sign_in_path
    end
  end

  def current_user
    @user = ShopUser.where(id: session[:shop_user_id]).first
  end
end