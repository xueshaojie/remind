class AssetCategory < ActiveRecord::Base

  validates :name, :asset_type, presence: true
  validates :name, uniqueness: true

  has_many :plant_asset
  has_many :species

  acts_as_enum :asset_type, :in => [
    ['type1',1, '设备资产'],
    ['type2',2, '物资资产'],
    ['type3',3 ,'物种资产']
  ]

  acts_as_enum :status, :in => [
    ['normal', 1, '正常'],
    ['disabled', -1, '已删除']
  ]
end
