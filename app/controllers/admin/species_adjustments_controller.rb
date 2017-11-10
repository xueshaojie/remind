class Admin::SpeciesAdjustmentsController < Admin::BaseController

	def index
		params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_created_at_between).split(' - ') if params[:search][:created_at_created_at_between]

		@search = SpeciesAdjustment.search(params[:search])
		@species_adjustments = @search.order("created_at desc").page(params[:page])
	end
end