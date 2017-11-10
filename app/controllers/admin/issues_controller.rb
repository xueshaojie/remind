class Admin::IssuesController < Admin::BaseController
  def index
    params[:search] ||= {}
    if params[:search][:created_at_between]
      params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_between).split(' - ')
    end
    @search = Issue.search(params[:search])
    @issues = @search.order('created_at desc').page(params[:page])
  end

  def show
    @issue = Issue.find(params[:id])
  end

end
