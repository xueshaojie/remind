class Wap::GuideInfosController < Wap::BaseController
  def index
    @guide_infos = GuideInfo.help
  end

  def show
    @guide_info = GuideInfo.help.where(id: params[:id]).first
  end

  def about
    @guide_info = GuideInfo.about.first
  end
end
