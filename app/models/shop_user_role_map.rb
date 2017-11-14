class ShopUserRoleMap < ActiveRecord::Base

	belongs_to :shop_user
	belongs_to :shop_role

end