class ShopDepositLog < ActiveRecord::Base

  enum_attr :direction, in: [
    ['plus', 1, '增加'],
    ['reduce', -1, '减少']
  ]

  belongs_to :shop

  # after_create :

  # def shop_syn
  #   self.shop.

  # end


end
