class AssetCheck < ActiveRecord::Base

	has_many :asset_check_maps
  has_many :plant_assets, :through => :asset_check_maps
	belongs_to :department
	belongs_to :user

  acts_as_enum :status, :in => [
    ['pending', 0, '未开始'],
    ['doing', 1, '进行中'],
    ['done', 2, '已完成']
  ]

  before_create :init_data

  def start
    update_attributes(start_time: Time.now, status: DOING)
  end

  def done!
    loss_asset_maps = asset_check_maps - asset_check_maps.checked

    loss_asset_maps.each{|loss_asset_map| loss_asset_map.type3! }

    update_attributes(end_time: Time.now, status: DONE, loss_asset: loss_asset_maps.count)
  end

  def init_data
    if user
      self.department_id = user.department_id
      if user.department
        self.original_asset = user.department.plant_assets.count
        self.plant_asset_ids = user.department.plant_assets.normal.pluck(:id)
      end
    end
  end

end