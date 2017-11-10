class Admin::PlantUsageRecordsController < Admin::BaseController
   
   def index
     @search = PlantUsageRecord.search(params[:search])
     @plant_usage_records = @search.order("created_at desc ").page(params[:page])
   end

   def show
     render 'application_pop'
end
end