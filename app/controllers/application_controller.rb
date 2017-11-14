# -*- coding: utf-8 -*-
class ApplicationController < ActionController::Base
  include ErrorHandler, ApplicationHelper

  protect_from_forgery with: :exception

  layout :user_layout

  # 用户登录后24小时内不做任何操作将自动退出
  MAX_SESSION_TIME = 60 * 60 * 24

  before_filter :prepare_session, :required_sign_in

  helper_method :current_user, :can?, :page_can?

  private

  def prepare_session
    # return redirect_to 'http://www.biaotutech.com' if Rails.env.production? && request.host !~ /biaotutech\.com/

    if session[:expiry_time].present? and session[:expiry_time] < Time.now
      reset_session
    end

    session[:expiry_time] = MAX_SESSION_TIME.seconds.from_now

    return true
  end

  def current_user(force_reload = false)
    @current_user ||= if session[:user_id]
                        User.find(session[:user_id])
                      end
    @current_user.reload if force_reload
    @current_user
  end

  def current_site
    @current_site ||= current_region.site
  end

  def user_layout
    # if current_user.is_a?(SubAccount) && current_user.shop_account?
    #   'micro_shop'
    # else
      'application'
    # end
  end

  def required_sign_in
    unless current_user
      if action_name == 'console'
        return redirect_to '/'
      end
      flash[:alert] = "你还没有登录，请先登录..."
      store_location
      redirect_to sign_in_path
    end
  end

  def set_current_user
    Account.current = current_user
  end

  def clear_sign_in_session
    session[:account_id] = nil
    session[:sub_account_id] = nil
    session[:role] = nil
  end

  def add_login_wrong_count
    session[:add_login_wrong_count] ||= 0
    session[:add_login_wrong_count] = session[:add_login_wrong_count] + 1
  end

  def clear_login_wrong_count
    session[:add_login_wrong_count] = nil
  end

  def store_location
    # session[:return_to] = request.referrer
    session[:return_to] = request.path unless request.path == '/'
  end

  def redirect_to_target_or_default(default = '/', *args)
    redirect_to(session[:return_to] || default, *args)
    session[:return_to] = nil
  end

  def deny_access
    flash[:alert] = "您没有权限进行此操作！如有问题请与技术部联系."
    redirect_to_target_or_default
  end

  #登陆账号session保存
  #管理员登陆
  def current_account(force_reload = false)
    @current_account ||= Account.active.where(id: session[:account_id]).first
    @current_account.reload if force_reload
    @current_account
  end

  def clear_account_sign_in_session
    session[:account_id] = nil
    session[:sub_account_id] = nil
    session[:role] = nil
  end

  def required_account_sign_in
    if session[:user_id] || session[:account_id] 
      return true
    else
      flash[:alert] = "你还没有登录，请先登录..."
      #store_location
      redirect_to sign_in_path
    end
  end

  def required_merchant_sign_in
    if session[:shop_user_id]
      return true
    else
      flash[:alert] = "你还没有登录，请先登录..."
      redirect_to merchant_sign_in_path
    end
  end

  def clear_user_sign_in_session
    session[:user_id] = nil
  end

  def clear_shop_user_sign_in_session
    session[:shop_user_id] = nil
  end

  def required_city_sign_in
    if current_city_user
      return true
    elsif session[:city_user_id]
      flash[:alert] = "账号已被冻结，请联系客服..."
      #store_location
      redirect_to sign_in_path
    else
      flash[:alert] = "你还没有登录，请先登录..."
      #store_location
      redirect_to sign_in_path
    end
  end

  #权限判断
  def can?(id)
    permission_ids = []
    current_user.roles.each do |role|
      role.role_permission_maps.each do |t|
        permission_ids.push(t.permission_id)
      end
    end
    if permission_ids.include?(id)
      return true
    else
      return false
    end
  end

  def page_can?
    permission_id = find_permission_id(params[:controller])
    if can?(permission_id)
      return true
    else
      render text: '无权访问!'
    end
  end

  def find_permission_id(controller)
    case controller
    when 'admin/users' then 2
    when 'departments' then 3
    when 'admin/roles' then 4
    when 'admin/task_templates' then 5
    when 'admin/tasks' then 6
    else
      7
    end
  end

  protected

  def render_with_alert(template, message, options = {})
    flash.alert = message
    render template, options
  end

  def render_with_notice(template, message, options = {})
    flash.notice = message
    render template, options
  end

  def valid_verify_code?(code)
    # image_code = session.delete(:image_code)
    # image_code && image_code == code
    session[:image_code] == code
  end
end
