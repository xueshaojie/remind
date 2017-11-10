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

  end
end
