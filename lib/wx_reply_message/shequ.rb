module WxReplyMessage

  def shequ_admin_root_url(auth_token=nil)
    "#{Settings.shequ_host}?auth_token=#{auth_token}"
  end

end