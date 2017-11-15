class Product < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :shop
  belongs_to :supplier
end
