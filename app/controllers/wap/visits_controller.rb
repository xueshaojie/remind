class Wap::VisitsController < Wap::BaseController

  def index
    @today_visits = Visit.created.where(visit_date: Date.today)
    @tomorrow_visits = Visit.created.where(visit_date: Date.today.tomorrow)
  end

  def show
    @visit = Visit.where(id: params[:id].to_i).first

    return render text: '记录不存在' unless @visit
  end


end