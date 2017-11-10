class MaterialBatch < ActiveRecord::Base

	validates :material_id, :status, :supplier_id, :expiration_date, :warehouse_id, :time, :qty, presence: true
  #validates :qty, numericality: { only_integer: true, greater_than: 0 }
  validates :no, uniqueness: true

	belongs_to :material
	belongs_to :supplier
	belongs_to :warehouse
	belongs_to :user

	has_many :material_usage_records, dependent: :destroy

	acts_as_enum :status, :in => [
		['well', 1, '良好'],
		['scrap', -1, '报废'],
    ['disabled', -2, '删除']
	]

  default_scope { where('material_batches.status != -2') }

  before_create :generate_no

  private

    def generate_no
      now = Time.now
      count = MaterialBatch.where('DATE(created_at) = ?', now.to_date).count
      no = ['pc', now.strftime('%Y%m%d'), count.next.to_s.rjust(4, '0')].join('-')
      self.no = no
    end
end