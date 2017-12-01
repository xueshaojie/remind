class SurveyItem < ActiveRecord::Base
  validates :answer, presence: true
  validates :point, numericality: {greater_than_or_equal_to: 1, only_integer: true}
  validates :position, numericality: {greater_than_or_equal_to: 1, only_integer: true}

  belongs_to :survey

  enum_attr :status, :in => [
	['normal',   1, '正常'],
	['deleted',  0, '已删除']
  ]

  default_scope { order("survey_items.position") } 

end
