class Admin::FeedbacksController < Admin::BaseController

  before_filter :find_feedback, only: [:show]

  def index
    params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_between).split(' - ') if params[:search][:created_at_between]
    
  	@search = Feedback.search(params[:search])
  	@feedbacks = @search.page(params[:page])
  end

  def show
  end


  private
    def find_feedback
      @feedback = Feedback.normal.find(params[:id].to_i)
    end

end
