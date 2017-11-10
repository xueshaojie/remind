class PlantAsset < ActiveRecord::Base
  require 'rubygems'
  require 'RMagick'
  validates :asset_category_id, :name, :department_id, :warehouse_id, :state, :status, presence: true
  validates :no, uniqueness: true, allow_blank: true

  belongs_to :asset_category
  belongs_to :supplier
  belongs_to :warehouse
  belongs_to :department
  has_many :plant_usage_records
  has_many :asset_check_maps
  has_many :asset_checks, :through => :asset_check_maps

  acts_as_enum :state, :in => [
    ['type1', 1, '正常'],
    ['type2', -1, '损坏']
  ]

  acts_as_enum :status, :in => [
    ['status1', 1, '在库'],
    ['status3', -1, '待报废'],
    ['status4', -2, '封存'],
    ['status5', -3, '报废'],
    ['status2', 2, '领用']
  ]

  acts_as_enum :condition, :in => [
    ['normal', 1, '正常'],
    ['disabled', -1, '已删除']
  ]

  # default_scope -> { where('plant_assets.condition <> ?', -1) }

  before_create :generate_no

  # 资产编号二维码
  # <%= image_tag @plant_asset.try(:no_qrcode).try(:to_data_url), size: '160x160' %>
  def no_qrcode
    rqrcode = nil
    1.upto(12) do |size|
      break rqrcode = RQRCode::QRCode.new(no, :size => size, :level => :h ).to_img.resize(258, 258) rescue next
    end
    # rqrcode

    pic_dir =  Rails.root.to_s + "/public/qrcode/plant_assets"
    unless Dir.exists? pic_dir
      FileUtils.mkdir_p pic_dir
      Rails.logger.info "****************** mkdir #{pic_dir} ********************"
    end
    rqrcode.save("#{pic_dir}/#{id}.png")
    self.deal_qrcode
  end

   def deal_qrcode
    img = Magick::Image.read("#{Rails.root}/public/qrcode/plant_assets/#{self.id}.png").first
    copyright=Magick::Draw.new
    copyright.annotate(img, 0, 0, 0, 123, "#{self.financial_number}-#{self.name}")do
      self.gravity=Magick::CenterGravity
      self.fill = 'black'
      self.stroke="transparent"
      self.font="#{Rails.root}/public/fonts/weiruanyahei.ttf"
      self.pointsize=14
      self.font_weight=Magick::BoldWeight
      self.gravity=Magick::CenterGravity
      # SouthWestGravity
    end

    # img=img.raise

    img.write("#{Rails.root}/public/qrcode/plant_assets/#{self.id}.png")
  end

  def download
    no_qrcode.to_blob
  end

  def preview
    # data_uri = Base64.encode64(self.no_qrcode.to_blob).gsub(/\n/, "")
    # image_tag = '<img alt="preview" src="data:image/jpeg;base64,%s">' % data_uri
    self.no_qrcode
    image_tag = "<img alt='preview' src='/qrcode/plant_assets/#{self.id}.png'>"
  end

  def self.import(file)
    file_path = "#{Rails.root}/public" + file.url
    sheet = Roo::Spreadsheet.open(file_path)

    plant_asset_status = {'在库'=>1, '待报废'=>-1, '封存'=>-2, '报废'=>-3, '领用'=>2}

    sheet.each_with_index do |hash, index|
      next if index == 0

      begin
        plant_asset = PlantAsset.where(no: hash[1])
        department = Department.where(name: hash[7]).first
        warehouse = Warehouse.where(name: hash[9]).first

        if plant_asset.blank? && department && warehouse
          asset_category = AssetCategory.where(asset_type: 1, name: hash[3]).first_or_create
          PlantAsset.create(
            status: plant_asset_status[hash[0]],
            no: hash[1],
            financial_number: hash[2],
            asset_category_id: asset_category.id,
            name: hash[4],
            scale: hash[5],
            origin_value: hash[6],
            department_id: department.id,
            unit: hash[8],
            warehouse_id: warehouse.id,
            storage_location: hash[10]
          )
        end
      rescue Exception => e
        # p e
      end
    end
  end

  private

    def generate_no
      return if self.no.present?

      now = Time.now
      count = PlantAsset.where('DATE(created_at) = ?', now.to_date).count
      no = ['sb', now.strftime('%Y%m%d'), count.next.to_s.rjust(4, '0')].join('-')
      self.no = no
    end

end