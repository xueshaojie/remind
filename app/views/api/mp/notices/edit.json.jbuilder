json.notice do
  json.id @notice.id
  json.name @notice.currency.symbol
  json.range @notice.range
  json.currency_id @notice.currency.id
  json.price @notice.currency.price_cny
  json.status @notice.status_name
  json.created_at @notice.created_at.to_s
end
