class Api::Mp::HomeController < Api::Mp::BaseController
  before_filter :set_wx_user, only: [:my]

  def category
  	@categories = ProductCategory.normal.pluck(:name, :id)
  	token = qiniu_pictures_upload_token
  	render json: {category: @categories, token: token}
  end

  def brand
    @category = ProductCategory.find(params[:category_id].to_i)
    @brands = @category.brands.pluck(:name, :id)
    render json: {brands: @brands }
  end

  def tag
  	@tags = Tag.normal.pluck(:name, :id)
  	render json: {tags: @tags}
  end

  def my
  	count = []
  	@wait_count = @current_wx_user.auctions.wait.try(:count)
  	@in = @current_wx_user.auctions.auction_in.try(:count)
  	@agree = @current_wx_user.auctions.wait_agree.try(:count)
  	count.push(0).push(@wait_count).push(@in).push(@agree)

  	render json: {code: 1, errormsg: "ok", count: count }
  end

end