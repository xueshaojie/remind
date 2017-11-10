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

    create_table "roles", :force => true do |t|
      t.string   "name",                                    :null => false
      t.integer  "position",    :limit => 1, :default => 1, :null => false
      t.text     "description"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    create_table "users", :force => true do |t|
      t.integer  "department_id",                               :null => false
      t.integer  "user_type",                    :default => 1, :null => false
      t.string   "login_name",                                  :null => false
      t.string   "no",                                          :null => false
      t.string   "name",                                        :null => false
      t.integer  "gender",                       :default => 0, :null => false
      t.string   "mobile"
      t.string   "email"
      t.string   "avatar_key"
      t.string   "password_digest"
      t.integer  "status",          :limit => 1, :default => 1, :null => false
      t.datetime "created_at",                                  :null => false
      t.datetime "updated_at",                                  :null => false
      t.text     "metadata"
    end

    create_table "user_role_maps", :force => true do |t|
      t.integer  "user_id",    :null => false
      t.integer  "role_id",    :null => false
      t.datetime "created_at"
    end

    add_index "user_role_maps", ["role_id"], :name => "index_user_role_maps_on_role_id"
    add_index "user_role_maps", ["user_id"], :name => "index_user_role_maps_on_user_id"

    create_table "permissions", :force => true do |t|
      t.integer  "parent_id",  :default => 0, :null => false
      t.string   "name",                      :null => false
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    create_table "role_permission_maps", :force => true do |t|
      t.integer  "role_id",       :null => false
      t.integer  "permission_id", :null => false
      t.datetime "created_at"
    end

    add_index "role_permission_maps", ["permission_id"], :name => "index_role_permission_maps_on_permission_id"
    add_index "role_permission_maps", ["role_id"], :name => "index_role_permission_maps_on_role_id"


    create_table "suppliers", :force => true do |t|
      t.string   "name"
      t.string   "username",                   :null => false
      t.string   "tel",                        :null => false
      t.string   "email"
      t.integer  "status",      :default => 1, :null => false
      t.text     "description"
      t.datetime "created_at",                 :null => false
      t.datetime "updated_at"
    end

    create_table "warehouses", :force => true do |t|
      t.string   "name",                                    :null => false
      t.string   "location"
      t.text     "description"
      t.integer  "user_id"
      t.integer  "status",      :limit => 1, :default => 1, :null => false
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    create_table "asset_categories", :force => true do |t|
      t.string   "name",                      :null => false
      t.integer  "position",   :default => 1, :null => false
      t.integer  "asset_type", :default => 1, :null => false
      t.integer  "status",     :default => 1, :null => false
      t.datetime "created_at",                :null => false
      t.datetime "updated_at"
    end

    create_table "asset_check_maps", :force => true do |t|
      t.integer  "asset_check_id",                :null => false
      t.integer  "plant_asset_id",                :null => false
      t.integer  "check_type_id",  :default => 3, :null => false
      t.integer  "status",         :default => 1, :null => false
      t.datetime "created_at",                    :null => false
      t.datetime "updated_at"
      t.integer  "department_id",                 :null => false
      t.integer  "user_id",                       :null => false
    end

    create_table "asset_checks", :force => true do |t|
      t.string   "name",                          :null => false
      t.integer  "department_id",                 :null => false
      t.integer  "user_id",                       :null => false
      t.date     "start_time"
      t.date     "end_time"
      t.integer  "original_asset", :default => 0, :null => false
      t.integer  "real_asset",     :default => 0, :null => false
      t.integer  "profit_asset",   :default => 0, :null => false
      t.integer  "loss_asset",     :default => 0, :null => false
      t.integer  "status",         :default => 0, :null => false
      t.datetime "created_at",                    :null => false
      t.datetime "updated_at"
    end

    create_table "asset_items", :force => true do |t|
      t.integer  "asset_id",                                   :null => false
      t.string   "name",                                       :null => false
      t.string   "scale",                                      :null => false
      t.string   "merchant",                                   :null => false
      t.decimal  "price",       :precision => 10, :scale => 0, :null => false
      t.integer  "qty",                                        :null => false
      t.decimal  "total_price", :precision => 10, :scale => 0
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    create_table "asset_logs", :force => true do |t|
      t.integer  "asset_id",                                :null => false
      t.integer  "user_id",                                 :null => false
      t.text     "description"
      t.integer  "status",      :limit => 1, :default => 0, :null => false
      t.datetime "created_at"
      t.datetime "updated_at"
      t.integer  "position",                 :default => 1, :null => false
    end

    create_table "assets", :force => true do |t|
      t.string   "no",                                        :null => false
      t.integer  "department_id",                             :null => false
      t.text     "description"
      t.integer  "user_id",                                   :null => false
      t.integer  "status",        :limit => 1, :default => 0, :null => false
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    create_table "plant_assets", :force => true do |t|
      t.string   "no",                                             :null => false
      t.integer  "asset_category_id",                              :null => false
      t.string   "name",                                           :null => false
      t.string   "scale"
      t.string   "unit"
      t.string   "merchant"
      t.string   "origin_no"
      t.integer  "supplier_id"
      t.integer  "origin_value"
      t.date     "start_time"
      t.integer  "discount_year"
      t.integer  "upkeep_cycle"
      t.integer  "authenticate_cycle"
      t.integer  "warehouse_id",                                   :null => false
      t.integer  "state",              :limit => 1, :default => 1, :null => false
      t.integer  "status",             :limit => 1, :default => 1, :null => false
      t.datetime "created_at"
      t.datetime "updated_at"
      t.integer  "condition",                       :default => 1, :null => false
      t.integer  "department_id"
      t.string   "financial_number"
      t.string   "storage_location"
    end

    create_table "plant_usage_records", :force => true do |t|
      t.integer  "plant_asset_id",                             :null => false
      t.integer  "department_id",                              :null => false
      t.text     "description"
      t.integer  "status",         :limit => 1, :default => 1, :null => false
      t.datetime "created_at"
      t.datetime "updated_at"
    end

  end
end
