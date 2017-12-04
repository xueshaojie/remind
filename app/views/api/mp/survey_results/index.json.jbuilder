json.errcode      0
json.survey_results  @survey_results do |result|
  json.id            result.id
  json.score         result.score
  json.created		 result.created_at.strftim("%Y-%M-%d")
  json.event_name    result.event_name
  json.exposure      result.exposure
  json.interaction	 result.interaction
  json.sales         result.sales_volume
  json.fans          result.precipitate_fans
  json.costs         result.implementation_costs
  json.result        result.result
end
