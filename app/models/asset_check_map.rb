class AssetCheckMap < ActiveRecord::Base
	belongs_to :plant_asset
	belongs_to :asset_check
	belongs_to :user
	belongs_to :department

	acts_as_enum :check_type_id, :in => [
    ['type0', 0 ,'应盘'],
    ['type1', 1 ,'已盘'],
    ['type2', 2 ,'盘盈'],
    ['type3', 3 ,'盘亏']
	]

	acts_as_enum :status, :in => [
    ['normbal', 1, '正常'],
    ['damage', -1, '损坏'],
	]

	scope :checked, -> { where(check_type_id: [1,2]) }

	before_create :init_data

	def init_data
		self.user_id = asset_check.user_id
		self.department_id = plant_asset.department_id
    # self.check_type_id = 2 if asset_check.department_id != plant_asset.department_id
	end
end