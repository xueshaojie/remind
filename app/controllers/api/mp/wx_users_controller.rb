class Api::Mp::WxUsersController < Api::Mp::BaseController

  def create
    if params[:code].present?
      app_id = ""
      secret = ""
      code = params[:code].gsub(" ", "+")
      encrypted_data = params[:encryptedData].gsub(" ", "+")
      iv = params[:iv].gsub(" ", "+")


      url = "https://api.weixin.qq.com/sns/jscode2session?appid=#{app_id}&secret=#{secret}&js_code=#{params[:code]}&grant_type=authorization_code"
      result = RestClient.get(url)
      session[:session_info] = JSON(result)

      encrypt_decrypt_key, openid = session[:session_info].values_at("session_key", "openid")
      wx_user = WxUser.where(openid: openid).first_or_create

      wx_middle = WxBizDataCrypt.new(app_id, encrypt_decrypt_key).decrypt(encrypted_data, iv)
      nickName, openId, gender, city, province, country, avatarUrl, unionid = wx_middle.values_at("nickName", "openId", "gender", "city", "province", "country", "avatarUrl", "unionid")

      if openId == openid
        begin
          wx_user.update_attributes(
            nickname: nickName,
            sex: gender,
            city: city,
            province: province,
            country: country,
            headimgurl: avatarUrl,
            unionid: unionid
          )
        rescue
        end
      end

      @openid = wx_user.try(:openid)
      if @openid
        session[:openid] = @openid
        return render json: {openid: @openid}
      end
    end
  end

end
