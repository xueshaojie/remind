class MaterialUsageRecord < ActiveRecord::Base
	validates :operate_type_id, :department_id, :qty, presence: true

	validates :qty, numericality: { only_integer: true, greater_than: 0 }

	belongs_to :material
	belongs_to :department
	belongs_to :material_batch

	acts_as_enum :operate_type_id, :in => [
		['enty', 1, '入库'],
		['receive', 2, '领用'],
		['scrap', 3, '报废'],
		['out', 4, '转出'],
		['add', 5, '盘点增加'],
		['decrease', 6, '盘点减少']
	]
end