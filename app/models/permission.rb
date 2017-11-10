class Permission < ActiveRecord::Base
	has_many :role_permission_maps
	has_many :roles, through: :role_permission_maps
end
