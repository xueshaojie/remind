class PlantUsageRecord < ActiveRecord::Base

  validates :department_id, presence: true

	belongs_to :plant_asset
	belongs_to :department

  acts_as_enum :status, :in => [
    ['type1', 0, '正常'],
    ['type2', -1, '领用'],
    ['type3', 1, '归还']
  ]

end