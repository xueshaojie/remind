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

    if account = Account.authenticated(params[:login], params[:password])
      session[:account_id] = account.id
      return render json: {code: 0, url: root_url, message: "登录成功!", num: 2, status: 1}
    else
      add_login_wrong_count
      return render json: {code: -2, message: "帐号或密码错误", num: 1, status: 0}
    end
  rescue => error
    return render json: {code: -3, message: '登录失败', num: 2, status: 0}
  end

  def destroy
    if session[:account_id]
      clear_user_sign_in_session
      redirect_to root_url
    end
  end

end
