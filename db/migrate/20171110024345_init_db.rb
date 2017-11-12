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
      t.datetime "created_at", :null => false
      t.datetime "updated_at", :null => false
    end

    create_table "users", :force => true, options: 'AUTO_INCREMENT = 10001' do |t|
      t.string   "login_name",                                  :null => false
      t.string   "name"
      t.string   "password_digest"
      t.integer  "status",          :limit => 1, :default => 1, :null => false
      t.datetime "created_at",                                  :null => false
      t.datetime "updated_at",                                  :null => false
    end

    create_table "user_role_maps", :force => true do |t|
      t.integer  "user_id",    :null => false
      t.integer  "role_id",    :null => false
      t.datetime "created_at", :null => false
    end

    add_index "user_role_maps", ["role_id"], :name => "index_user_role_maps_on_role_id"
    add_index "user_role_maps", ["user_id"], :name => "index_user_role_maps_on_user_id"

    create_table "permissions", :force => true do |t|
      t.integer  "parent_id",  :default => 0, :null => false
      t.string   "name",                      :null => false
      t.datetime "created_at", :null => false
      t.datetime "updated_at", :null => false
    end

    create_table "role_permission_maps", :force => true do |t|
      t.integer  "role_id",       :null => false
      t.integer  "permission_id", :null => false
      t.datetime "created_at", :null => false
    end

    add_index "role_permission_maps", ["permission_id"], :name => "index_role_permission_maps_on_permission_id"
    add_index "role_permission_maps", ["role_id"], :name => "index_role_permission_maps_on_role_id"

    create_table "product_categorie", force => true, options: 'AUTO_INCREMENT = 10001' do |t|
      t.string   "name", null: false
      t.integer  "position",      :default => 1, :null => false
      t.integer  "status",      :default => 1, :null => false
    end

    create_table "brand_categories", force => true, options: 'AUTO_INCREMENT = 10001' do |t|
      t.string   "name", null: false
      t.integer  "position",      :default => 1, :null => false
      t.integer  "status",      :default => 1, :null => false
    end

    create_table "brands", force => true, options: 'AUTO_INCREMENT = 10001' do |t|
      t.integer  "brand_category_id",  :null => false
      t.string   "name"
      t.string   "name_en"
      t.integer  "position",      :default => 1, :null => false
      t.integer  "status",      :default => 1, :null => false
      t.text     "description"
    end

    create_table "tags", force => true do |t|
      t.string   "name", null: false
      t.integer  "position",      :default => 1, :null => false
    end

    create_table "shops", force => true, options: 'AUTO_INCREMENT = 10001' do |t|
      t.string   "name"
      t.integer  "scale",      :default => 1, :null => false
      t.integer  "credit",      :default => 0, :null => false
      t.integer  "province_id"
      t.integer  "city_id"
      t.integer  "district_id"
      t.string   "address"
      t.integer  "status",      :default => 1, :null => false
      t.integer  "position",      :default => 1, :null => false
    end

    create_table "shop_users", :force => true, options: 'AUTO_INCREMENT = 10001' do |t|
      t.integer  "shop_id",  :null => false
      t.string   "login_name",                                  :null => false
      t.string   "name"
      t.string   "password_digest"
      t.integer  "status",          :limit => 1, :default => 1, :null => false
      t.datetime "created_at",                                  :null => false
      t.datetime "updated_at",                                  :null => false
    end

    create_table "shop_roles", :force => true do |t|
      t.string   "name",                                    :null => false
      t.integer  "position",    :limit => 1, :default => 1, :null => false
      t.text     "description"
      t.datetime "created_at", :null => false
      t.datetime "updated_at", :null => false
    end

    create_table "shop_user_role_maps", :force => true do |t|
      t.integer  "shop_user_id",    :null => false
      t.integer  "shop_role_id",    :null => false
      t.datetime "created_at", :null => false
    end

    create_table "shop_deposits", :force => true do |t|
      t.integer  "shop_id",       :null => false
      t.decimal  "total_amount",  :precision => 12, :scale => 2, :default => 0.0,            :null => false
      t.decimal  "usable_amount", :precision => 12, :scale => 2, :default => 0.0,            :null => false
      t.decimal  "froze_bond",    :precision => 12, :scale => 2, :default => 0.0,            :null => false
      t.datetime "created_at",                                  :null => false
      t.datetime "updated_at",                                  :null => false
    end

    create_table "shop_deposit_logs", :force => true do |t|
      t.integer  "shop_id",  :null => false
      t.integer  "shop_user_id",  :null => false
      t.decimal  "amount",  :precision => 12, :scale => 2, :default => 0.0,            :null => false
      t.integer  "direction",  :null => false, :default => 1
      t.decimal  "balance_amount",  :precision => 12, :scale => 2,       :null => false
      t.text     "description"
      t.datetime "created_at",                                  :null => false
      t.datetime "updated_at",                                  :null => false
    end

    create_table "warehouses", :force => true, options: 'AUTO_INCREMENT = 10001' do |t|
      t.string   "shop_id", null: false
      t.string   "name",                                    :null => false
      t.integer  "status",      :limit => 1, :default => 1, :null => false
      t.integer  "position",      :default => 1, :null => false
      t.text     "description"
      t.datetime "created_at", :null => false
      t.datetime "updated_at", :null => false
    end

    create_table "suppliers", :force => true do |t|
      t.integer  "shop_id", null: false
      t.string   "name"
      t.string   "mobile"
      t.string   "pay_info"
      t.integer  "status",      :default => 1, :null => false
      t.integer  "position",      :default => 1, :null => false
      t.text     "description"
      t.datetime "created_at",      :null => false
      t.datetime "updated_at",      :null => false
    end

    create_table "products", :force => true, options: 'AUTO_INCREMENT = 10001' do |t|
      t.integer  "shop_id", null: false
      t.integer  "product_category_id", null: false
      t.integer  "brand_id", null: false
      t.integer  "supplier_id", null: false
      t.integer  "warehouse_id", null: false
      t.integer  "no", null: false
      t.string   "name"
      t.string   "specification"
      t.string   "color"
      t.string   "size"
      t.string   "condition"
      t.integer  "source"
      t.integer  "quantity", default: 1, null: false
      t.decimal  "sell_price",  :precision => 12, :scale => 2
      t.decimal  "purchase_price",  :precision => 12, :scale => 2
      t.decimal  "peer_price",  :precision => 12, :scale => 2
      t.integer  "status",      :default => 1, :null => false
      t.integer  "position",      :default => 1, :null => false
      t.text     "description"
      t.datetime "created_at",      :null => false
      t.datetime "updated_at",      :null => false
    end

    create_table "product_tags", :force => true do |t|
      t.integer  "product_id", :null => false
      t.integer  "tag_id",     :null => false
      t.datetime "created_at", :null => false
    end

    create_table "shop_customers", :force => true, options: 'AUTO_INCREMENT = 10001' do |t|
      t.integer  "shop_id", null: false
      t.string   "name"
      t.string   "mobile", null: false
      t.integer  "gender"
      t.integer  "status",      :default => 1, :null => false
      t.integer  "position",      :default => 1, :null => false
      t.text     "description"
      t.datetime "created_at",      :null => false
      t.datetime "updated_at",      :null => false
    end

    create_table "orders", :force => true do |t|
      t.integer  "shop_id", null: false
      t.integer  "shop_customer_id", null: false
      t.integer  "dilivery_way", default: 1, null: false
      t.datetime "maintain_at"
      t.decimal  "amount",  :precision => 12, :scale => 2, :default => 0.0,            :null => false
      t.integer  "status",      :default => 1, :null => false
      t.integer  "position",      :default => 1, :null => false
      t.text     "description"
      t.datetime "created_at",      :null => false
      t.datetime "updated_at",      :null => false
    end

    create_table "order_items", :force => true do |t|
      t.integer  "order_id", null: false
      t.decimal  "price",  :precision => 12, :scale => 2,  :null => false
      t.integer  "quantity", default: 1, null: false
      t.decimal  "total_price",  :precision => 12, :scale => 2, null:false
      t.datetime "created_at",      :null => false
      t.datetime "updated_at",      :null => false
    end

  end
end
