class Wap::ItemRecordsController < Wap::BaseController
  def index
    @rec_records_count = @user.shop.products.recycle.count
    @con_records_count = @user.shop.products.consign.count
    @sel_records_count = OrderItem.where(order_id: @user.shop.orders.pluck(:id)).count

    @records = case params[:type]
      when 'rec'
        @user.shop.products.recycle
      when 'con'
        @user.shop.products.consign
      when 'sel'
        OrderItem.where(order_id: @user.shop.orders.pluck(:id))
      else
        @user.shop.products.recycle
      end
  end
end
