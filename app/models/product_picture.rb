class ProductPicture < ActiveRecord::Base
  
  belongs_to :user
  belongs_to :auction_product
  belongs_to :pictureable, polymorphic: true

  def pic_url
    qiniu_image_url(pic_key)
  end
  
end
