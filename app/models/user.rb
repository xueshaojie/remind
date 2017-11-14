# coding: utf-8
class User < ActiveRecord::Base
  has_secure_password

  store :metadata, accessors: [:show_asset_check_scan_tip]

  DEFAULT_PASSWORD = '123456'

  validates :name, :login_name, presence: true
  validates :password, presence: true, on: :create
  validates :name, uniqueness: true

  # belongs_to :department
  has_many :user_role_maps
  has_many :roles, through: :user_role_maps
  has_many :warehouse
  has_many :shop_deposit_logs

  # acts_as_enum :gender, :in => [
  #   ['male', 1, '男'],
  #   ['female', 2, '女'],
  # ]

  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '冻结']
  ]

  # acts_as_enum :user_type, :in => [
  #   ['common', 1,'普通员工'],
  #   ['asset_manager', 2,'资产管理员'],
  #   ['leader', 3,'部门主管']
  # ]

  def self.authenticated(login, password)
    #where("lower(nickname) = ?", nickname.to_s.downcase).first.try(:authenticate, password)
    where("lower(login_name) LIKE ?", login.to_s.downcase).first.try(:authenticate, password)
  end

  def role_name
    role_id =  UserRoleMap.where(user_id: self.id).first.role_id
    Role.where(id: role_id).first.name
  end

end
