class Department < ActiveRecord::Base
  # extend ActsAsTree::TreeView

  validates :name, presence: true
  validates :no, presence: true, uniqueness: true
  validates :parent_id, presence: true, on: :create

  belongs_to :user
  belongs_to :asset_user, class_name: 'User'
  belongs_to :sub_leader, class_name: 'User'
  belongs_to :parent, class_name: 'Department'
  has_many :children, class_name: 'Department', foreign_key: 'parent_id'
  has_many :users
  has_many :tasks
  has_many :assets
  has_many :plant_assets
  has_many :material_usage_records
  has_many :asset_checks
  has_many :asset_check_maps

  acts_as_list scope: [:parent_id]
  acts_as_tree order: :position, foreign_key: :parent_id, counter_cache: false

  scope :root, where("parent_id IS NULL")
  scope :unroot, where("parent_id IS NOT NULL")

  acts_as_enum :status, :in => [
    ['normal', 1, '启用'],
    ['disabled', -1, '禁用']
  ]

  # def self.depts
  #   root.map{ |dept| dept.self_and_children }.flatten
  # end

  def depts
    self_and_descendants
  end

  def admin?
    parent_id.blank?
  end

  def to_s(join_by = " > ")
    self_and_ancestors.map(&:name).reverse.join(join_by)
  end

end
