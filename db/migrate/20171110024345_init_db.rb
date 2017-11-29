class InitDb < ActiveRecord::Migration

  def change
    create_table "logged_exceptions", :force => true do |t|
      t.string   "exception_class"
      t.string   "controller_name"
      t.string   "action_name"
      t.text     "message"
      t.text     "backtrace"
      t.text     "environment"
      t.text     "request"
      t.datetime "created_at"
    end

    create_table "accounts", options: 'AUTO_INCREMENT = 10001', :force => true do |t|
      t.string   "nickname"
      t.string   "password_digest"
      t.datetime "created_at",                                :null => false
      t.datetime "updated_at",                                :null => false
    end

    create_table "surveies" do |t|
      t.string   "name"
      t.integer  "position",                                 comment: "序号"
      t.integer  "status"
      t.integer  "option_type",                              comment: "选项形式"
      t.integer  "survey_type",                              comment: "题目类型"
      t.integer  "total_score",                              comment: "总分"
      t.datetime "created_at",                               :null => false
      t.datetime "updated_at",                               :null => false
    end

    create_table "survey_items" do |t|
      t.integer  "survey_id"
      t.string   "answer"
      t.integer  "point"
      t.integer  "position",                                 default: 1
      t.integer  "status"
      t.datetime "created_at",                               :null => false
      t.datetime "updated_at",                               :null => false
    end

    create_table "survey_results" do |t|
      t.integer  "wx_user_id"
      t.integer  "survey_type"
      t.integer  "score"
      t.integer  "status"
      t.text     "metatada"
      t.datetime "created_at",                               :null => false
      t.datetime "updated_at",                               :null => false
    end

    create_table "feedbacks" do |t|
      t.integer "wx_user_id"
      t.string  "name"
      t.string  "company_name"
      t.string  "mobile"
      t.string  "desctription"
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


  end
end
