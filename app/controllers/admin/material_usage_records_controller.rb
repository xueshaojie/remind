class Admin::MaterialUsageRecordsController < Admin::BaseController

	def index
		params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_created_at_between).split(' - ') if params[:search][:created_at_created_at_between]
		@search = MaterialUsageRecord.order('created_at desc').search(params[:search])
		@material_usage_records = @search.page(params[:page])
	end

end