class Issue < ActiveRecord::Base
  validates :title, :user_id, :issue_type_id, :status, presence: true

  belongs_to :issue_type
  belongs_to :user
  belongs_to :solve_user, class_name: 'User', foreign_key: :solve_user_id
  belongs_to :task
  belongs_to :task_item
  has_many   :issue_pictures

  accepts_nested_attributes_for :issue_pictures, allow_destroy: true
  # validates_associated :issue_pictures

  acts_as_enum :status, :in => [
    ['pending', 0, '待认领'],
    ['claim', 1, '已认领未处理'],
    ['finished', 2, '已处理完成'],
    ['closed', 3, '关闭不处理']
  ]

  acts_as_enum :level, :in => [
    ['general', 1, '一般'],
    ['serious', 2, '严重']
  ]

  acts_as_enum :state, :in => [
    ['noclaim', 0, '待认领'],
    ['claim_old', 1, '已认领']
  ]

  # before_create :init_data

  scope :pending_solves, -> { where(status: [0, 1]) }

  def claim!
    update_attributes(status: 1, solve_date: Time.now, solve_user_id: issue_type.user_id)
  end

  def pic_url
    qiniu_image_url(pic_key)
  end

  # def init_data
  #   self.solve_user_id = issue_type.user_id if issue_type
  # end

  def category
    task_item_id.blank? ? '临时发现' : "检查发现（#{task.try(:name)}-#{task_item.try(:name)}）"
  end

end