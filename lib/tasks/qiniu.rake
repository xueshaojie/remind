#encoding: utf-8

require "img_upload_qiniu"

namespace :website_qiniu do

  desc 'upload qrcode to qiniu'

  task :upload_website_qrcode_to_qiniu => :environment do

    puts 'Starting upload_website_qrcode_to_qiniu ******'
    arr = []
    Website.where("qrcode_qiniu_key is null").each_slice(5000).each do |webs|
      puts 'add websites to arr'
      arr << Thread.new do
        ImgUploadQiniu.new.up_website_qrcode(webs)
      end
    end
    arr.map(&:join)
    # Website.find(2).upload_qrcode_to_qiniu
    puts 'Done!'
  end
end

namespace :website_settings do

  desc 'upload bg_music to qiniu'

  task :upload_bg_music_to_qiniu => :environment do

    puts 'upload bg_music to qiniu ******'
    WebsiteSetting.where('bg_music is not null and bg_music_qiniu_url is null').find_each do |ws,i|
      ws.upload_bg_music_to_qiniu
      puts "website_setting id: #{ws.id}"
    end
    puts 'Done!'
  end
end

#图片迁移七牛
#中奖图片迁移到七牛
namespace :activity_property do
  
  desc 'upload prize_pic to qiniu'
  task :upload_prize_pic_to_qiniu => :environment do
    puts 'Starting upload qiniu ******'
    ActivityProperty.find_each do |property|
      if FileTest.exist?(property.prize_pic.path.to_s)
        puts "**********id=#{property.id}******"
        puts "**********prize_pic=#{property.prize_pic}******"
        property.update_column(:pic_key, ImgUploadQiniu.prize_pic_to_qiniu(property.prize_pic.path))
        puts "**********pic_key=#{property.pic_key}******"
      end
    end
    puts 'Done!'
  end

end

namespace :qrcode_channel do
  
  desc 'upload qrcode_img to qiniu'
  task :upload_qrcode_img_to_qiniu => :environment do
    puts 'Starting upload qiniu ******'
    QrcodeChannel.find_each do |qrcode|
      puts "**********qrcode_channel_id=#{qrcode.id}******"
      qrcode.update_column(:pic_key, ImgUploadQiniu.upload_qiniu(qrcode.qrcode_img))
      puts "**********qrcode_channel_id=#{qrcode.pic_key}******"
    end
    puts 'Done!'
  end

end

namespace :materials do

  desc 'upload audio to qiniu'

  task :upload_audio_to_qiniu => :environment do

    puts 'upload audio to qiniu ******'
    Material.where('audio is not null and qiniu_audio_url is null').find_each do |m,i|
      m.upload_audio_to_qiniu
      puts "materials id: #{m.id}"
    end
    puts 'Done!'
  end

  desc 'update audio qiniu mime_type'

  task :update_audio_qiniu_mime_type => :environment do
    puts 'update audio qiniu mime_type ******'
    Material.where('qiniu_audio_url is not null').find_each do |m,i|
      m.update_audio_qiniu_mime_type
      puts "materials id: #{m.id}"
    end
    puts 'Done!'
  end

end

