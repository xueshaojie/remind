class RolePermissionMap < ActiveRecord::Base
  validates :role_id, :permission_id, presence: true
  belongs_to :role
  belongs_to :permission
end