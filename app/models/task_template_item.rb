class TaskTemplateItem < ActiveRecord::Base

	validates :name, :task_template_id, :position, presence: true
	belongs_to :task_template

	acts_as_enum :status, :in => [
		['normal', 1, '正常'],
		['disabled', -1, '冻结']
	]
end