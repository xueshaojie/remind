class Api::Mp::HomeController < Api::Mp::BaseController
  skip_before_filter :set_wx_user

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

end