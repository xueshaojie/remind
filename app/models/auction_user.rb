class AuctionUser < ActiveRecord::Base
  
  belongs_to :user
  belongs_to :auction_product
  
end
