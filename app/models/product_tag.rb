class ProductTag < ActiveRecord::Base
  validates :product_id, :tag_id, presence: true

  belongs_to :product
  belongs_to :tag
end