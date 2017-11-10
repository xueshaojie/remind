class TaskRecord < ActiveRecord::Base

  belongs_to :task
  belongs_to :task_item
  belongs_to :user
  has_many :task_pictures
end
