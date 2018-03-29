json.currencies @currencies do |currency|
  json.id currency.id
  json.symbol currency.symbol
  json.percent currency.percent_change_24h
  json.volume_cny currency.volume_cny
  json.price_cny currency.price_cny
end
