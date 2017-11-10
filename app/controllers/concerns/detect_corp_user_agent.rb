include ERB::Util
module DetectCorpUserAgent
  def load_corp
    @corp ||= Corp.first

    if @corp.blank? || !@corp.set?
      return render text: '企业号未设置'
    end
  end

  def load_user
    @user ||= User.where(userid: params[:userid] || session[:userid]).first

    if @user.present?
      session[:userid] = @user.userid
    else
      return render text: '传入userid获取当前用户' if Rails.env.development?
      auth_user
    end
  end

  def auth_user
    load_corp
    # return unless wx_browser?

    corpid = @corp.corpid
    redirect_uri = url_encode(request.url)
    scope = "snsapi_base"
    state = "symrise"

    url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=#{corpid}&redirect_uri=#{redirect_uri}&response_type=code&scope=#{scope}&state=#{state}#wechat_redirect"

    return redirect_to url if params['state'].blank?

    code = params['code']
    @corp = Corp.first
    url = "https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=#{@corp.get_access_token}&code=#{code}"

    resp = JSON(RestClient.get(url).body)

    Rails.logger.info "=========resp: #{resp}-----=========="

    if resp['errcode'].to_i == 0
      return render text: '未在微信企业通讯录，请先联系管理员录入' if resp['UserId'].blank?

      @user = @corp.users.where(userid: resp['UserId']).first || @corp.users.create(userid: resp['UserId'], name: resp['DeviceId'], no: resp['DeviceId'], role_id: 0)

      if @user.persisted?
        @user.sync_info!
        @user.reload
        session['userid'] ||= @user.userid
      end

      Rails.logger.info "UserId:\t\t#{resp['UserId']}"
      Rails.logger.info "UserName:\t\t#{@user.try(:name)}"
    end

  rescue => e
    Rails.logger.info e
  end

  def wx_browser?
    request.user_agent =~ /micromessenger/i
  end

  def judge_andriod_version
    version = request.user_agent =~ /Android 2./
    version.present? ? true : false
  end

end
