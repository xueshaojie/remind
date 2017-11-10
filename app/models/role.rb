class Role < ActiveRecord::Base

	validates :name, presence: true
	has_many :role_permission_maps
	has_many :permissions, through: :role_permission_maps
	has_many :user_role_maps

	# acts_as_enum :status, :in => [
	# 	['normal', 1, '正常'],
	# 	['disabled', -1, '禁用']
	# ]
end
