class Admin::AssetChecksController < Admin::BaseController

	def  index
		params[:search] ||={}
		params[:search][:start_time_gte], params[:search][:end_time_lte] = params[:search].delete(:start_time_end_time_between).split(' - ') if params[:search][:start_time_end_time_between]
		@search = AssetCheck.search(params[:search])
		@asset_checks = @search.order("start_time desc").page(params[:page])
	end

end