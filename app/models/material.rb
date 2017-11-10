class Material < ActiveRecord::Base

	validates :asset_category_id, :name, :scale, :unit, :merchant, presence: true
	validates :no, uniqueness: true
	belongs_to :asset_category

	has_many :material_batches
	has_many :material_usage_records

  before_create :generate_no

  private

    def generate_no
      now = Time.now
      count = Material.where('DATE(created_at) = ?', now.to_date).count
      no = ['wu', now.strftime('%Y%m%d'), count.next.to_s.rjust(4, '0')].join('-')
      self.no = no
    end
end