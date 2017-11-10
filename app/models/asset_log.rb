class AssetLog < ActiveRecord::Base

	belongs_to :asset
	belongs_to :user

	acts_as_enum :status, :in => [
		['wait', 0, '待审核'],
		['pass', 1, '通过'],
		['deny', -1, '不通过']
	]
end