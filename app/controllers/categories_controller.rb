class CategoriesController < ApplicationController

	def index
		if params[:category_id].present?
			@categories = Category.where(parent_id: params[:category_id])
		else
			@categories = []
		end

		respond_to do |format|
			format.json {render json: @categories}
		end
	end
end