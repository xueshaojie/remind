class Api::Mp::BaseController < ActionController::Base
  skip_before_filter :verify_authenticity_token
  before_filter :set_wx_user

  private
    def set_wx_user
      @current_wx_user = WxUser.where(openid: params[:openid]).first
      #@current_wx_user = WxUser.first
      return render json: {errcode: 400,  errmsg: "你还未授权 请10分钟后再次点击授权 或删除小程序重新进入"} unless @current_wx_user
    end
end
