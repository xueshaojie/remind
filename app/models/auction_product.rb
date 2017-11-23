class AuctionProduct < ActiveRecord::Base
  
  belongs_to :user
  belongs_to :product_category
  belongs_to :brand
  
  has_one :auction_user
  has_one :product_picture, as: :pictureable
  has_many :auction_product_tag_maps, dependent: :destroy
  has_many :tags, through: :auction_product_tag_maps
  has_many :product_pictures, as: :pictureable
  has_many :auction_records

  accepts_nested_attributes_for :auction_user, allow_destroy: true
  validates_associated :auction_user

  accepts_nested_attributes_for :product_pictures, allow_destroy: true
  validates_associated :product_pictures

  enum_attr :status, in:[
  	['refuse', -1, '验证未通过'],
    ['wait',    0, '等待验证'],
    ['pass',    1, '验证通过']
  ]

  enum_attr :acution_status, in:[
  	['init',           -2, '初始化'],
  	['auction_refuse', -1, '我拒绝'],
  	['wait_auction',    0, '待拍卖'],
    ['auction_in',      1, '拍卖中'],
    ['wait_agree',      2, '待同意'],
    ['pending',      	3, '待付款'],
    ['auction_pass',    4, '已成交']
  ]

  default_scope { order("auction_products.created_at desc") } 
  scope :product, -> {where("auction_status not in (?)", [INIT])}
  
end
