class ShopRole < ActiveRecord::Base
  validates :name, presence: true
  has_many :shop_user_role_maps
  has_many :shop_roles, through: :shop_user_role_maps
end
