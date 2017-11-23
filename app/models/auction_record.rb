class AuctionRecord < ActiveRecord::Base
  belongs_to :shop_user
  belongs_to :auction

  enum_attr :status, in:[
  	['refuse', -1, "已拒绝"],
  	['expiry',  0, "已失效"],
  	['wait',    1, "待确认"],
    ['pass',    2, "成交"]
  ]

end
