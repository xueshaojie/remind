class Province < ActiveRecord::Base
  has_many :cities
  has_many :shops
end
