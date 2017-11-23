class Auction < ActiveRecord::Base
  
  belongs_to :user
  belongs_to :product_category
  belongs_to :brand
  
  has_one :product_picture, as: :pictureable
  has_many :auction_tags, dependent: :destroy
  has_many :tags, through: :auction_tags
  has_many :product_pictures, as: :pictureable
  has_many :auction_records

  accepts_nested_attributes_for :product_pictures, allow_destroy: true
  validates_associated :product_pictures

  enum_attr :status, in:[
  	['refuse', -1, '验证未通过'],
    ['wait',    0, '等待验证'],
    ['pass',    1, '验证通过']
  ]

  enum_attr :auction_status, in:[
  	['init',           -2, '初始化'],
  	['auction_refuse', -1, '拒绝'],
  	['wait_auction',    0, '待拍卖'],
    ['auction_in',      1, '拍卖中'],
    ['wait_agree',      2, '待同意'],
    ['pending',      	3, '待付款'],
    ['auction_pass',    4, '已成交']
  ]

  STATUS = { -1 => "卖家拒绝", 0 => "待拍卖", 1 => "拍卖中", 2 => "待卖家同意", 3 => "待买家付款", 4 => "双方已成交"}

  default_scope { order("auctions.created_at desc") } 
  scope :product, -> {where("auction_status not in (?)", [INIT])}
  
end