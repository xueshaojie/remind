class CreateUser < ActiveRecord::Migration
  def change
    create_table "users", :force => true do |t|
      t.string   "name",                      :null => false
      t.integer  "count",                     :default => 0
      t.string   "uuid"
      t.string   "api_key",                   :limit => 512
      t.datetime "created_at",                :null => false
      t.datetime "updated_at",                :null => false
    end
  end
end
