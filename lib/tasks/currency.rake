namespace :currency do

  desc "update currencies"
  task :update_currencies => :environment do
    url = "https://api.coinmarketcap.com/v1/ticker/?convert=CNY&limit=100"
    response = HTTParty.get(url)
    json_body = JSON.parse(response.body)

    Rails.logger.info "**********************"

    json_body.size.times do |i|
      r = Currency.where(name: json_body[i]["name"]).first_or_initialize
	    r.symbol = json_body[i]["symbol"]
      r.rank = json_body[i]["rank"]
      r.price_usd = json_body[i]["price_usd"].to_f.round(2)
      r.price_btc = json_body[i]["price_btc"].to_f.round(6)
      r.volume_usd = json_body[i]["24h_volume_usd"]
      r.market_cap_usd = json_body[i]["market_cap_usd"]
      r.available_supply = json_body[i]["available_supply"]
      r.total_supply = json_body[i]["total_supply"]
      r.max_supply = json_body[i]["max_supply"]
      r.percent_change_1h = json_body[i]["percent_change_1h"]
      r.percent_change_24h = json_body[i]["percent_change_24h"]
      r.percent_change_7d = json_body[i]["percent_change_7d"]
      r.price_cny = json_body[i]["price_cny"].to_f.round(2)
      r.volume_cny = json_body[i]["24h_volume_cny"]
      r.market_cap_cny = json_body[i]["market_cap_cny"]
      r.save
  	end

    Rails.logger.info "------------"

    Notice.no_remind.each do |notice|
      if notice.currency.price_cny.to_i >= notice.range.split("-").first.to_i && notice.range.split("-").last.to_i >= notice.currency.price_cny.to_i
        notice.update_attributes(status: 0)
      end
    end

  end


end
