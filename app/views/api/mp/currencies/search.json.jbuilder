json.currencies @currencies do |currency|
  json.id currency.id
  json.symbol currency.symbol
  json.percent currency.percent_change_24h
  json.market_cap_usd currency.market_cap_usd
  json.price_cny currency.price_cny
end
