module WxReplyMessage
  def wshop_api_categories(options={})
    category_id = options[:category_id]
    wx_mp_user_open_id = options[:wx_mp_user_open_id]
    HTTParty.get "#{Settings.ec_host}/api/categories/selects.json?wx_mp_user_id=#{wx_mp_user_open_id}&category_id=#{category_id}"

    #[
    #    [22, [{id: 11,name: "x"},{id: 22,name: 'xx'}]],
    #    [222, [{id: 222,name: 'xxx'}]]
    #]
  rescue
    nil
  end

  def wshop_root_url(options={})
    wx_user_open_id, wx_mp_user_open_id = options[:wx_user_open_id], options[:wx_mp_user_open_id]
    "#{Settings.ec_host}/mobile/shops/s?wx_user_id=#{wx_user_open_id}&wx_mp_user_id=#{wx_mp_user_open_id}"
  end

  def wshop_cart_url(options={})
    wx_user_open_id, wx_mp_user_open_id = options[:wx_user_open_id], options[:wx_mp_user_open_id]
    "#{Settings.ec_host}/mobile/carts/current?wx_user_id=#{wx_user_open_id}&wx_mp_user_id=#{wx_mp_user_open_id}"
  end

  def wshop_wx_user_url(options={})
    wx_user_open_id, wx_mp_user_open_id = options[:wx_user_open_id], options[:wx_mp_user_open_id]
    "#{Settings.ec_host}/mobile/wx_users/s?wx_user_id=#{wx_user_open_id}&wx_mp_user_id=#{wx_mp_user_open_id}"
  end

  def wshop_product_url(options={})
    wx_user_open_id, wx_mp_user_open_id = options[:wx_user_open_id], options[:wx_mp_user_open_id]
    "#{Settings.ec_host}/mobile/shops/s?wx_user_id=#{wx_user_open_id}&wx_mp_user_id=#{wx_mp_user_open_id}"
  end

  def wshop_category_url(options={})
    wx_user_open_id, wx_mp_user_open_id = options[:wx_user_open_id], options[:wx_mp_user_open_id]
    category_id = options[:category_id]
    "#{Settings.ec_host}/mobile/products?category_id=#{category_id}&wx_user_id=#{wx_user_open_id}&wx_mp_user_id=#{wx_mp_user_open_id}"
  end

  def wshop_admin_root_url(auth_token=nil)
    # "#{Settings.ec_host}/admin/site/wx_settings?auth_token=#{auth_token}"
    "#{Settings.ec_host}/admin/site/wx_settings?encrypted_auth_token=#{auth_token}"
  end
end
