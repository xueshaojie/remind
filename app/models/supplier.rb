class Supplier < ActiveRecord::Base

	validates :username, :tel, :name,presence: true
  validates :name, uniqueness: true

	has_many :plant_assets
	has_many :material_batches

	acts_as_enum :status, :in => [
    ['normal', 1, '正常'],
    ['disabled', -1, '已删除']
  ]

end