class Admin::SurveysController < Admin::BaseController
  
  def index
  	@serach = Survey.normal.search(params[:serach])
  	@surviries = @serach.page(params[:page])
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  private
    def find_survey
      @surviry = Survey.normal.find(params[:id].to_i)
    end

end
