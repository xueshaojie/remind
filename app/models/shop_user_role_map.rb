class ShopUserRoleMap < ActiveRecord::Base
  validates :shop_user_id, :shop_role_id, presence: true
  belongs_to :shop_user
  belongs_to :shop_role
end