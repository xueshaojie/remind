# coding: utf-8
class User < ActiveRecord::Base
  has_secure_password

  store :metadata, accessors: [:show_asset_check_scan_tip]

  DEFAULT_PASSWORD = '123456'

  validates :no, :name, :department_id, :login_name, :mobile, presence: true
  validates :password, presence: true, on: :create
  validates :no, uniqueness: true

  belongs_to :department
  has_many :user_role_maps
  has_many :roles, through: :user_role_maps
  has_many :task_templates
  has_many :tasks
  has_many :task_records
  has_many :visits
  has_many :assets
  has_many :asset_logs
  has_many :warehouse
  has_many :material_batches
  has_many :asset_checks
  has_many :asset_check_maps
  has_many :issues
  has_many :slove_issues, class_name: 'Issue', foreign_key: :solve_user_id
  has_many :issue_types

  acts_as_enum :gender, :in => [
    ['male', 1, '男'],
    ['female', 2, '女'],
  ]

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

  def pending_solve_issues
    Issue.pending.where(issue_type_id: IssueType.where(user_id: id).pluck(:id))
  end

  def current_check_assets
    ids = []
    Asset.process.each do |asset|
      ids << asset.id if asset.asset_logs.wait.first.try(:user_id) == id
    end
    ids.count == 0 ? [] : Asset.where(id: ids)
  end

  def show_asset_check_scan_tip?
    show_asset_check_scan_tip.to_i == 1
  end

  # 系统管理员
  def admin?
    department.admin?
  end

  # 部门领导
  def leader?
    id == department.user_id
  end

  # 分级领导
  def sub_leader?
    id == Department.normal.pluck(:sub_leader_id).include?(id)
  end

  # 资产管理员
  def asset_manager?
    id == department.asset_user_id
  end

  def can_asset?
    asset_manager? || leader? || sub_leader?
  end

  def has_asset_role?
    admin? || can_asset?
  end

end
