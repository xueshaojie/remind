class SpeciesAdjustment < ActiveRecord::Base

	validates :operate_type_id, :qty,  presence: true
  validates :qty, numericality: { only_integer: true, greater_than: 0 }

	belongs_to :species

	acts_as_enum :operate_type_id, :in => [
		['in', 1, '入库'],
		['died', 2, '死亡'],
		['out', 3, '放流'],
		['add', 4, '盘点增加'],
		['decrease', 5, '盘点减少']
	]
end