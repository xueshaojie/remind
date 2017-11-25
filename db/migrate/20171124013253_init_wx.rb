class InitWx < ActiveRecord::Migration
  def change
  	create_table "wx_mp_users", :force => true do |t|
	  t.integer  "status",                :limit => 1,   :default => 0,     :null => false
	  t.string   "nickname",                                                :null => false
	  t.string   "openid"
	  t.string   "app_id"
	  t.string   "app_secret"
	  t.string   "token"
	  t.string   "url"
	  t.string   "code"
	  t.string   "head_img"
	  t.string   "alias"
	  t.string   "qrcode_key"
	  t.string   "qrcode_url"
	  t.integer  "user_type",             :limit => 1,   :default => 1,     :null => false
	  t.integer  "bind_type",                            :default => 1
	  t.boolean  "is_sync",                              :default => false, :null => false
	  t.boolean  "is_oauth",                             :default => false, :null => false
	  t.datetime "expires_in"
	  t.string   "access_token",          :limit => 512
	  t.string   "wx_jsapi_ticket"
	  t.datetime "wx_jsapi_expires_in"
	  t.string   "auth_code"
	  t.string   "refresh_token"
	  t.integer  "encrypt_mode",          :limit => 1,   :default => 0
	  t.string   "encoding_aes_key",                     :default => ""
	  t.string   "last_encoding_aes_key",                :default => ""
	  t.string   "username"
	  t.string   "password"
	  t.text     "func_info"
	  t.text     "metatada"
	  t.datetime "created_at",                                              :null => false
	  t.datetime "updated_at",                                              :null => false
	end

	create_table "wx_users", :force => true do |t|
      t.integer  "wx_mp_user_id"
      t.string   "mobile"
      t.integer  "status",                  :default => 1,     :null => false
      t.string   "openid",                                     :null => false
      t.string   "nickname"
      t.integer  "subscribe"
      t.integer  "sex",                     :default => 0
      t.string   "language"
      t.string   "city"
      t.string   "province"
      t.string   "country"
      t.string   "headimgurl"
      t.datetime "subscribe_time"
      t.string   "unionid"
      t.string   "remark"
      t.integer  "groupid",                 :default => 0,     :null => false
      t.string   "location_x"
      t.string   "location_y"
      t.string   "location_label"
      t.datetime "location_updated_at"
      t.boolean  "leave_message_forbidden", :default => false
      t.boolean  "is_show_product_pic",     :default => true
      t.integer  "match_type",              :default => 1,     :null => false
      t.datetime "match_at"
      t.datetime "created_at",                                 :null => false
      t.datetime "updated_at",                                 :null => false
    end

    add_index "wx_users", ["nickname"], :name => "index_wx_users_on_nickname"
    add_index "wx_users", ["openid"], :name => "index_wx_users_on_openid"
    add_index "wx_users", ["wx_mp_user_id"], :name => "index_wx_users_on_wx_mp_user_id"
  end
end
