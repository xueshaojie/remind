class Task < ActiveRecord::Base

  belongs_to :task_template
  belongs_to :task_category
  belongs_to :department
  belongs_to :user
  belongs_to :prev_task, class_name: 'Task'
  has_many :task_items, dependent: :destroy
  has_many :task_records, dependent: :destroy
  has_many :task_pictures, dependent: :destroy
  has_many :issues, dependent: :destroy

  acts_as_enum :task_level_id, :in => [
    ['common', 1, '一般'],
    ['important', 2, '重要']
  ]

  acts_as_enum :status, :in => [
    ['deleted', -3, '已删除'],
    ['created', -2, '已创建'],
    ['unfinished', -1, '未完成'],
    ['pending', 0, '待执行'],
    ['in', 1, '执行中'],
    ['finished', 2, '已完成'],
  ]

  acts_as_enum :is_force_order, :in => [
    ['true', true, '是'],
    ['false', false, '否']
  ]

  acts_as_enum :task_type, :in => [
    ['task_type1', 1, '每天'],
    ['task_type2', 2, '每月'],
    ['task_type3', 3, '每季度'],
    ['task_type4', 4, '每半年'],
    ['task_type5', 5, '每年'],
  ]

  scope :not_deleted, -> { where('tasks.status > ?', -3) }
  scope :can_clean, -> { where(status: [-2, 0]) }

  def has_problem
    task_items.problem.count > 0 ? '有' : '无'
  end

  def finish_time
    return '' unless finished?
    return '' if end_at.blank? || start_at.blank?

    seconds = end_at - start_at

    if seconds < 60
      '1分钟'
    elsif seconds > 3600
      "#{(seconds/3660.0).round}小时"
    else
      "#{(seconds/60.0).round}分钟"
    end
  end
end
