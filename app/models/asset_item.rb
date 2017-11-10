class AssetItem < ActiveRecord::Base
	validates :name, :scale, :merchant, :price, :qty, presence: true
  validates :qty, numericality: { only_integer: true, greater_than: 0 }

	belongs_to :asset
end