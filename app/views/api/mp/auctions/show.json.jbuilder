json.code     1
json.auction  do 
  json.id 			@auction.id
  json.no			@auction.no
  json.name			@auction.name
  json.model		@auction.model || ""
  json.pic			@auction.product_picture.try(:pic_url)
  json.status       @auction.status_name
  json.auction_name @auction.auction_status_name
  json.status_num   @auction.auction_status  
end

json.pics           @auction.product_pictures do |pic|
  json.pic          pic.pic_url
end



records = @auction.auction_records.order("auction_records.created_at desc")
if records.size > 0
  json.record  do
    json.current_price   records.first.price.round(2)
    json.current_shop    records.pluck(:shop_user_id).uniq.size
    json.current_count   records.size
    json.current_avg     ((records.pluck(:price).sum)/(records.count)).round(2)
  end

  json.records  records.first(3) do |record|
	json.shop_name    record.shop_user.try(:name)
	json.mobile       ''
	json.price        record.price
  end
end
