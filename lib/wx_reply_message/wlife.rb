module WxReplyMessage

  def wlife_admin_root_url(auth_token=nil)
    "#{Settings.life_host}/business?auth_token=#{auth_token}"
  end

  def wlife_website_root_url(auth_token=nil)
    "#{Settings.life_host}/pro/websites?auth_token=#{auth_token}"
  end

end

