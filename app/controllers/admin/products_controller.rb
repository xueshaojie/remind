class Admin::ProductsController < Admin::BaseController  

  def index
    params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_between).split(' - ') if params[:search][:created_at_between]
    @search =  Product.search(params[:search])
    @products = @search.order("created_at desc").order("purchase_price desc").order("quantity desc").page(params[:page])
  end

end
