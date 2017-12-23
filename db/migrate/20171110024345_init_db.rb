class InitDb < ActiveRecord::Migration

  def change
    create_table "accounts", options: 'AUTO_INCREMENT = 10001', :force => true do |t|
      t.string   "nickname"
      t.string   "password_digest"
      t.datetime "created_at",                                :null => false
      t.datetime "updated_at",                                :null => false
    end

    create_table "currencies" do |t|
      t.string   "name",                             comment: "数字货币名称"
      t.string   "symbol",                           comment: "数字货币简称"
      t.integer  "rank",                             comment: "数字货币排名"
      t.decimal  "price_usd",                        comment: "美元价格"
      t.decimal  "price_btc",                        comment: "比特币价格"
      t.float    "volume_usd",                       comment: "美元24小时交易量"
      t.float    "market_cap_usd",                   comment: "美元总市值"
      t.float    "available_supply",                 comment: "已经获得的代币数量"
      t.float    "total_supply",                     comment: "总代币数量"
      t.float    "max_supply",                       comment: "最大代币数量"
      t.float    "percent_change_1h",                comment: "1小时涨跌"
      t.float    "percent_change_24h",               comment: "24小时涨跌"
      t.float    "percent_change_7d",                comment: "7天涨跌"
      t.float    "last_updated",                     comment: "最后更新时间"
      t.decimal  "price_cny",                        comment: "人民币价格"
      t.float    "volume_cny",                       comment: "人民币24小时交易量"
      t.float    "market_cap_cny",                   comment: "人民币总市值"
      t.integer  "position", default: 1, null: false
      t.integer  "status", default: 1, null: false
      t.datetime "created_at",                               :null => false
      t.datetime "updated_at",                               :null => false
    end

    add_index "currencies", ["name"], :name => "index_currencies_on_name"

    create_table "notices" do |t|
      t.integer  "wx_user_id"
      t.integer  "currency_id"
      t.string   "range",                            comment: "范围"
      t.string   "form_id"
      t.integer  "position", default: 1, null: false
      t.integer  "status",   default: 1, null: false
      t.datetime "created_at",                               :null => false
      t.datetime "updated_at",                               :null => false
    end

    create_table "wx_users", :force => true do |t|
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
      t.string   "location_x"
      t.string   "location_y"
      t.string   "location_label"
      t.datetime "location_updated_at"
      t.datetime "expires_in"
      t.string   "access_token",          :limit => 512
      t.datetime "created_at",                                 :null => false
      t.datetime "updated_at",                                 :null => false
    end

    add_index "wx_users", ["nickname"], :name => "index_wx_users_on_nickname"
    add_index "wx_users", ["openid"], :name => "index_wx_users_on_openid"

  end
end
