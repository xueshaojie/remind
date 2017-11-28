class Api::WxUsers::SessionsController < ActionController::Base


  def clear_shop_user_sign_in_session
    session[:shop_user_id] = nil
  end

  def new
    clear_shop_user_sign_in_session
    if params[:login].blank?
      return render json: {code: -2, errormsg: "登录名为空"}
    elsif params[:password].blank?
      return render json: {code: -3, errormsg: "密码为空"}
    elsif params[:login].present? && params[:password].present?
      if shop_user = ShopUser.authenticated(params[:login], params[:password])
        if shop_user.normal?
          session[:shop_user_id] = shop_user.id
          return render json: {code: 1, errormsg: "登录成功"}
        else
          return render json: {code: 0, errormsg: "用户被冻结"}
        end
      else
        return render json: {code: -1, errormsg: "用户名与密码不匹配"}
      end
    end
  end

  def logout
    clear_shop_user_sign_in_session
    return render json: {code: 1, errormsg: "退出成功"}
  end

  def index
    if session[:shop_user_id].present?
      @shop_roles = ShopUser.where(id: session[:shop_user_id]).first.shop_roles.where(id: [3, 7])
    else
      return render json: {code: -1, errormsg: "请先登录"}
    end
    
  end
end