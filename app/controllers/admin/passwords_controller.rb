# -*- encoding : utf-8 -*-
class Admin::PasswordsController < Admin::BaseController
  
  def create
    if params[:user][:current_password]
      if !current_user.authenticate(params[:user][:current_password])
        return redirect_to :back, alert: '当前密码为空或不正确'
      elsif params[:user][:password].blank?
        return redirect_to :back, alert: '新密码不能为空'
      elsif params[:user][:password] != params[:user][:password_confirmation]
        return redirect_to :back, alert: '两次密码不一致'
      end
    end

    if current_user.update_attributes!(:password => params[:user][:password])
      clear_sign_in_session
      redirect_to sign_in_path, notice: "修改密码成功,请使用新密码登录"
    else
      flash[:alert] = "当前用户或密码不正确!"
      render 'new'
    end
  end

end
