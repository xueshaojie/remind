class BrandsController < ActionController::Base

  def brands
    @brands = ProductCategory.where(id: params[:product_category_id]).first.brands
    respond_to do |format|
      format.json { render json: @brands }
    end
  end

end
