class Api::Mp::BaseController < ActionController::Base
  skip_before_filter :verify_authenticity_token
  before_filter :set_wx_mp_user, :set_wx_user
  
  private
    def set_wx_user
      @current_wx_user = @current_mp_user.wx_users.where(openid: params[:openid]).first
      return @current_wx_user = 400 unless @current_wx_user
    end

    def set_wx_mp_user
      @current_mp_user = WxMpUser.find_by_app_id(params[:app_id]) rescue nil
      raise ActiveRecord::RecordNotFound unless @current_mp_user
    end
end
