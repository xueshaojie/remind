class AuctionTag < ActiveRecord::Base
  
  belongs_to :auction
  belongs_to :tag
  
end
