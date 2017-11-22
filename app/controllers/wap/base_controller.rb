class Wap::BaseController < ActionController::Base
  layout "wap/main"

  before_filter :require_user
  helper_method :current_user

  def require_user
    unless current_user
      return redirect_to wap_sign_in_path
    end
  end

  def current_user
    @user = ShopUser.normal.where(id: session[:shop_user_id]).first
  end
end