class Species < ActiveRecord::Base
  validates :asset_category_id, :name, :scale, :warehouse_id, :status,presence: true
  #validates :qty, numericality: { only_integer: true, greater_than: 0 }
	validates :no, uniqueness: true

	belongs_to :asset_category
	belongs_to :warehouse
	has_many :species_adjustments, dependent: :destroy


	acts_as_enum :status, :in => [
	  ['normal', 1, '正常'],
		['disabled', -1, '已删除']
	]

	acts_as_enum :asset_source_id, :in => [
	  ['wild', 1, '野生'],
		['one', 2, '子一代'],
	  ['two', 3, '子二代'],
		['rescue', 4, '抢救']
	]

  before_create :generate_no

  private

    def generate_no
      now = Time.now
      count = Species.where('DATE(created_at) = ?', now.to_date).count
      no = ['wz', now.strftime('%Y%m%d'), count.next.to_s.rjust(4, '0')].join('-')
      self.no = no
    end
end