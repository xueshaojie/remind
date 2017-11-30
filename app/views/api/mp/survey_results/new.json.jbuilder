json.code       1
json.surveys   	@surveys do |survey|
  json.id       			       survey.id
  json.name					         survey.name
  json.option_type  		     survey.option_type
  json.option_type_name  	   survey.option_type_name
  json.total_score  		     survey.total_score
  
  json.items     survey.survey_items do |item|
  	json.id					      item.id
  	json.answer       		item.answer
  	json.point        		item.point
  end
end