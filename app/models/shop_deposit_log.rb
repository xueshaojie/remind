class ShopDepositLog < ActiveRecord::Base
  validates :shop_id, :user_id, :amount,presence: true
  enum_attr :direction, in: [
    ['plus', 1, '+'],
    ['reduce', 0, '-']
  ]

  belongs_to :shop
  belongs_to :user

  after_create :shop_syn

  def can_t_reduce?
    reduce? && shop.usable_amount < amount
  end

  def shop_syn
    if plus?
      shop.update_attributes(total_amount: shop.total_amount + amount, usable_amount: shop.usable_amount + amount)
      self.update_attributes(balance_amount: shop.usable_amount)
    else
      shop.update_attributes(total_amount: shop.total_amount - amount, usable_amount: shop.usable_amount - amount)
      self.update_attributes(balance_amount: shop.usable_amount)
    end
  end


end
