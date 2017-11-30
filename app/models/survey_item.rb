class SurveyItem < ActiveRecord::Base
  belongs_to :survey

  enum_attr :status, :in => [
	['normal',   1, '正常'],
	['deleted',  0, '已删除']
  ]

  default_scope { order("survey_items.position") } 

end
