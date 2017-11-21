class ShopRole < ActiveRecord::Base
  validates :name, presence: true
  has_many :role_permission_maps
  has_many :permissions, through: :role_permission_maps
  has_many :shop_user_role_maps
end
