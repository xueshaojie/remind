class Admin::PicturesController < Admin::BaseController
	# include PictureableTypeHelper
	def index
	    @search = Picture.search(params[:search])
	    @pictures = @search.order("created_at desc").page(params[:page])
	end
end
