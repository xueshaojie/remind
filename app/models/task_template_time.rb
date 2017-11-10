class TaskTemplateTime < ActiveRecord::Base

	belongs_to :task_template

	acts_as_enum :time_type, :in => [
		['day', 3, '每天'],
		['week', 1, '每周'],
		['cycle', 2, '周期']
	]
end