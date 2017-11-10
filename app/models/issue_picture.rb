class IssuePicture < ActiveRecord::Base

  belongs_to :issue

  

  def pic_url
    qiniu_image_url(pic_key)
  end


end