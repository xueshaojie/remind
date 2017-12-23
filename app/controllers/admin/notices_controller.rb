class Admin::NoticesController < Admin::BaseController

  def index
  	@search = Notice.search(params[:search])
  	@notices = @search.page(params[:page])
  end

end
