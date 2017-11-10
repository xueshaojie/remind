class TaskItem < ActiveRecord::Base

  belongs_to :task
  belongs_to :department
  belongs_to :user
  has_many :task_records

  acts_as_enum :status, :in => [
    ['never', 0, '未执行'],
    ['normal', 1, '正常'],
    ['problem', 2, '问题']
  ]
  acts_as_enum :check_status, :in => [
    ['still',0,'未解决'],
    ['finished',1, '已解决']
  ]
end
