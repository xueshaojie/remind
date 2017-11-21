class Permission < ActiveRecord::Base
  validates :name, presence: true
  has_many :role_permission_maps
  has_many :roles, through: :role_permission_maps
end
