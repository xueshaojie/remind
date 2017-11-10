class TaskTemplate < ActiveRecord::Base
  require 'rubygems'
  require 'RMagick'
  validates :name, :task_category_id, :task_level_id, :department_id, :user_id, :prev_interval, presence: true

  belongs_to :task_category
  belongs_to :department
  belongs_to :user
  belongs_to :parent, class_name: 'TaskTemplate', foreign_key: 'prev_task_template_id'

  has_many :task_template_items
  has_many :tasks

  # default_scope -> { order('created_at desc') }

  acts_as_enum :is_force_order, :in => [
    ['no', false, '无'],
    ['yes', true, '有']
  ]

  acts_as_enum :task_level_id, :in => [
    ['ordinary', 1, '一般'],
    ['important', 2, '重要']
  ]

  acts_as_enum :status, :in => [
    ['off', 0, '停用'],
    ['on', 1, '启用']
  ]

  acts_as_enum :task_type, :in => [
    ['task_type1', 1, '每天'],
    ['task_type2', 2, '每月'],
    ['task_type3', 3, '每季度'],
    ['task_type4', 4, '每半年'],
    ['task_type5', 5, '每年'],
  ]

  acts_as_enum :day_type, :in => [
    ['day_type1', 1, '单天1次'],
    ['day_type2', 2, '单天按时'],
  ]

  class << self
    def interval
      {
        '5分钟' => '5',
        '10分钟' => '10',
        '30分钟' => '30',
        '1小时' => '60',
        '2小时' => '120',
        '4小时' => '240',
        '6小时' => '360',
        '8小时' => '480',
        '12小时' => '720'
      }
    end

    def cycle
      {
        '每月' => '1',
        '每季' => '2',
        '每半年' => '3',
        '每年' => '4'
      }
    end

    def time
      {
        '1次' => '1',
        '2次' => '2',
        '3次' => '3',
        '4次' => '4',
        '5次' => '5',
        '6次' => '6',
        '7次' => '7',
        '8次' => '8',
        '9次' => '9',
        '10次' => '10'
      }
    end

  end

  def delete_current_cycle_tasks
    now = Time.now
    if task_type1?
      # week_items.to_s.split(',').each do |day|
      #   current_date = (now.beginning_of_week+(day.to_i-1).days).to_date

      #   next if now.to_date > current_date

      #   if day_type1?
      #     tasks.can_clean.where(time_info: "#{current_date}").update_all(status: -3)
      #   else
      #     hour_items.to_s.split(',').each do |hour|
      #       next if current_date == now.to_date && now.hour > hour.to_i

      #       tasks.can_clean.where(time_info: "#{current_date} #{hour}点").update_all(status: -3)
      #     end
      #   end
      # end

      tasks.where('DATE(tasks.task_start_at) > ?', now.to_date).delete_all
    elsif task_type2?
      tasks.can_clean.where(time_info: "#{now.year}年#{now.month}月").update_all(status: -3)
    elsif task_type3?
      month_quarters = {
        1 => 1,
        2 => 1,
        3 => 1,
        4 => 2,
        5 => 2,
        6 => 2,
        7 => 3,
        8 => 3,
        9 => 3,
        10 => 4,
        11 => 4,
        12 => 4,
      }
      month_quarters.each do |month, quarter|
        next if now.month > month

        tasks.can_clean.where(time_info: "#{now.year}年第#{quarter}季度").update_all(status: -3)
      end
    elsif task_type4?
      if now.month > 6
        tasks.can_clean.where(time_info: "#{now.year}下半年").update_all(status: -3)
      else
        tasks.can_clean.where(time_info: "#{now.year}上半年").update_all(status: -3)
        tasks.can_clean.where(time_info: "#{now.year}下半年").delete_all
      end
    elsif task_type5?
      tasks.can_clean.where(time_info: "#{now.year}年").update_all(status: -3)
    end
  end

  def delete_next_cycle_tasks
    now = Time.now
    if task_type1?
      tasks.where('tasks.task_start_at >= ?', now.next_week).delete_all
    elsif task_type2?
      tasks.where('tasks.task_start_at >= ?', now.next_month.beginning_of_month).delete_all
    elsif task_type3?
      tasks.where('tasks.task_start_at > ?', now.next_month.end_of_quarter).delete_all
    elsif task_type4?
      time = now.month > 6 ? "#{now.year.next}-01-01 00:00:00" : "#{now.year}-07-01 00:00:00"
      tasks.where('tasks.task_start_at >= ?', time).delete_all
    elsif task_type5?
      tasks.where('tasks.task_start_at >= ?', now.next_year.beginning_of_year).delete_all
    end
  end

  def week(week)
    case week
    when 1 then '一'
    when 2 then '二'
    when 3 then '三'
    when 4 then '四'
    when 5 then '五'
    when 6 then '六'
    when 7 then '日'
    end
   end

  def prev_interval_name
    prev_interval.to_i < 60 ? "#{prev_interval}分钟" : "#{prev_interval/60.0}小时"
  end

  def time_info
    if task_type1?
      "周"+[week_items.to_s.split(',').map{|w| week(w.to_i) }.join('、'), day_type1? ? day_type_name : hour_items.to_s.split(',').map{|h| "#{h}时" }.join('、')].join("<br/>每天")
    else
      [task_type_name, "#{task_times}次"].join
    end
  end

  def mobile_time_info
    if task_type1?
      "周"+[week_items.to_s.split(',').map{|w| week(w.to_i) }.join('、'), "<span class='sm ash'>#{day_type1? ? day_type_name : hour_items.to_s.split(',').map{|h| "#{h}时" }.join('、')}</span>"].join("<br/>")
    else
      [task_type_name, "#{task_times}次"].join
    end
  end

  # 资产编号二维码
  # <%= image_tag @task_template.try(:id_qrcode).try(:to_data_url), size: '160x160' %>
  def id_qrcode
    rqrcode = nil
    1.upto(12) do |size|
      break rqrcode = RQRCode::QRCode.new("task-#{id}", :size => size, :level => :h ).to_img.resize(258, 258) rescue next
    end
    # rqrcode = RQRCode::QRCode.new("task-#{id}", :size => 12, :level => :h ).to_img.resize(258, 258)
    # rqrcode

    pic_dir =  Rails.root.to_s + "/public/qrcode/task_templates"
    unless Dir.exists? pic_dir
      FileUtils.mkdir_p pic_dir
      Rails.logger.info "****************** mkdir #{pic_dir} ********************"
    end
    rqrcode.save("#{pic_dir}/#{id}.png")

    self.deal_qrcode
  end

  def download
    # id_qrcode.to_blob
    "/public/qrcode/task_templates/#{id}.png"
  end

  def preview
    # data_uri = Base64.encode64(self.id_qrcode.to_blob).gsub(/\n/, "")
    # image_tag = '<img alt="preview" src="data:image/jpeg;base64,%s">' % data_uri
    self.id_qrcode
    image_tag = "<img alt='preview' src='/qrcode/task_templates/#{self.id}.png'>"
  end

  def deal_qrcode
    img = Magick::Image.read("#{Rails.root}/public/qrcode/task_templates/#{self.id}.png").first
    copyright=Magick::Draw.new
    copyright.annotate(img, 0, 0, 0, 123, "#{self.name}")do
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

    img.write("#{Rails.root}/public/qrcode/task_templates/#{self.id}.png")
  end
end