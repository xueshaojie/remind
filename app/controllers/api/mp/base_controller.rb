class Api::Mp::BaseController < ActionController::Base
  skip_before_filter :verify_authenticity_token
  before_filter :set_wx_mp_user, :set_wx_user

  private
    def set_wx_user
      return render json: {code: 4001, errormsg: "未找到此应用"} unless @current_mp_user
      @current_wx_user = @current_mp_user.wx_users.where(openid: params[:openid]).first
      return render json: {code: 400,  errormsg: "你还未授权 请10分钟后再次点击授权 或删除小程序重新进入"} unless @current_wx_user
    end

    def set_wx_mp_user
      @current_mp_user = WxMpUser.find_by_app_id(params[:app_id]) rescue nil
    end
end
