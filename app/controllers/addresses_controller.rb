class AddressesController < ActionController::Base

  def cities
    @cities = City.where(province_id: params[:province_id].to_i)
    respond_to do |format|
      format.json { render json: @cities }
    end
  end

  def districts
    @districts = District.where(city_id: params[:city_id].to_i)
    respond_to do |format|
      format.json { render json: @districts }
    end
  end

end
