class Wap::BaseController < ActionController::Base
  layout "wap/main"

  before_filter :require_user

  helper_method :current_user

  def require_user
    if params[:uid].present?
      user = User.where(id: params[:uid].to_i).first

      session[:user_id] = user.id if user
    end

    unless current_user
      return render text: '没有权限访问'
    end
  end

  def current_user
    @user = User.where(id: session[:user_id]).first
  end
end