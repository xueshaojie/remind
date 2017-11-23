class AuctionProductTagMap < ActiveRecord::Base
  
  belongs_to :auction_product
  belongs_to :tag
  
end
