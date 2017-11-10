class Wap::AssetsController < Wap::BaseController

  def index
    return render text: '您没有权限访问' unless @user.has_asset_role?

    @plant_assets = @user.department.plant_assets
  end

  def my
    session[:asset_url_type] = 'my'
    params[:ajaxdata] ||= {}
    @assets = @user.assets.not_wait.order('assets.created_at desc').page(params[:ajaxdata][:page]).per(params[:ajaxdata][:pagesize])

    data = []
    @assets.each do |asset|
      data << {id:asset.id, description: asset.description, fd:asset.department.name,
        fname: asset.user.name, ld: asset.current_asset_log.try(:user).try(:department).try(:name)|| '',
        lname: asset.current_asset_log.try(:user).try(:name)||'',time: asset.created_at.strftime("%Y.%m.%d %H:%M"),
        status:asset.status_name}
    end
    respond_to do |format|
      format.html
      format.json { render json: {data: data, code: 1} }
    end
  end

  def approves
    session[:asset_url_type] = 'approve'

    respond_to do |format|
      format.html
      format.json {
        params[:ajaxdata] ||= {}

        @asset_logs = @user.asset_logs.joins(:asset).where(assets: {status: [1,2]}).order('asset_logs.created_at desc').page(params[:ajaxdata][:page]).per(params[:ajaxdata][:pagesize])

        data = []
        @asset_logs.each do |asset_log|
          asset = asset_log.asset
          data << {id:asset.id,description: asset.description, fd:asset.department.name,
            fname: asset.user.name, ld: asset.wait_asset_log.try(:user).try(:department).try(:name)|| '',
            lname: asset.wait_asset_log.try(:user).try(:name)||'',time:asset.created_at.strftime("%Y.%m.%d %H:%M"),
            status: asset_log.pass? ? '我已审核' : (asset_log.wait? && asset.current_asset_log == asset_log ? '待我审核' : '')}
        end
        render json: {data: data, code: 1}
      }
    end
  end

  def approve
    @asset = Asset.find(params[:id])
  end

  def approve_result
    @asset_log = @user.asset_logs.where(asset_id: params[:id]).first
    if @asset_log
      @asset_log.update_attributes(status: params[:ajaxdata][:state], description: params[:ajaxdata][:msg])
      if params[:ajaxdata][:state].to_i == -1
        @asset_log.asset.wait!
        # @asset_log.asset.asset_logs.update_all(status: 0, description: '')
      elsif @asset_log.asset.asset_logs.pass.count == @asset_log.asset.asset_logs.count
        @asset_log.asset.pass!
      end
      render json: {code: 1}
    else
      render json: {code: 0}
    end
  end

  def show
    @asset = Asset.find(params[:id])
  end

  def logs
    @asset = Asset.find(params[:id])
    @asset_logs = @asset.asset_logs
  end

end