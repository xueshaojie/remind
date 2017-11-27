json.code       	1
json.auctions   	@auctions do |auction|
  json.id       	auction.id
  json.name     	auction.name
  json.pic      	auction.product_picture.try(:pic_url)
  json.no       	auction.no
  json.created  	auction.created_at.strftime("%Y-%M-%d %H:%m")
  json.model    	auction.model || " "
  json.status   	auction.status_name
  json.auction_name auction.auction_status_name
end