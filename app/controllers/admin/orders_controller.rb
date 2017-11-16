class Admin::OrdersController < Admin::BaseController  

  def index
    params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_between).split(' - ') if params[:search][:created_at_between]
    @search =  Order.search(params[:search])
    @orders = @search.order("created_at desc").page(params[:page])
  end

end
