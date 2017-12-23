json.notices @notices do |notice|
  json.id notice.id
  json.name notice.try(:currency).try(:symbol)
  json.range notice.range
  json.price notice.try(:currency).try(:price_cny)
  json.status notice.status_name
  json.created_at notice.created_at.to_s
end
