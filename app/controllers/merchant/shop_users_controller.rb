class Merchant::ShopUsersController < Merchant::BaseController
  # before_filter :require_corp_set
  before_filter :find_shop_user, only: [:frost, :normal, :edit, :update, :destroy, :sync, :reset]

  def index
    @search = ShopUser.search(params[:search])
    @shop_users = @search.order("created_at desc").page(params[:page])
  end

  def new
    @shop_user = ShopUser.new(params[:shop_user])
    # @shop_user = @corp.shop_users.build(openid: '')
    render layout: 'application_pop'
  end

  def create
    @shop_user = ShopUser.new(params[:shop_user])

    # @shop_user.shop_userid = Time.now.strftime("%Y%m%d") + rand(1000).to_s
    if @shop_user.save
      if params[:role].present?
      # if params[:role][:role_ids].present?
      #   params[:role][:role_ids].each do |t|
      #     ShopUserRoleMap.create!(
      #       shop_user_id: @shop_user.id,
      #       role_id: t.to_i
      #       )
      #   end
      # end
        ShopUserRoleMap.create(shop_user_id: @shop_user.id,role_id: params[:role][:role_id].to_i)
      end
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back , alert: '保存失败'
    end
  end

  def edit
    render layout: 'application_pop'
  end

  def update
    if @shop_user.update_attributes(params[:shop_user])
      # @shop_user.syncing! if @shop_user.synced?

      # if params[:role][:role_ids].present?
      #   @shop_user.shop_user_role_maps.each do |t|
      #     t.destroy
      #   end

      #   params[:role][:role_ids].each do |t|
      #     ShopUserRoleMap.create!(
      #       shop_user_id: @shop_user.id,
      #       role_id: t.to_i
      #       )
      #   end
      # end

      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back , alert: '保存失败'
    end
  end

  # def sync
  #   if @shop_user.sync
  #     flash[:notice] = "同步成功"
  #     redirect_to admin_shop_users_path
  #   else
  #     redirect_to :back , alert: "同步失败"
  #   end
  # end
  #
  # def sync_fetch
  #   if @corp.sync_fetch_shop_user!
  #     flash[:notice] = "获取成功"
  #     redirect_to admin_shop_users_path
  #   else
  #     redirect_to :back , alert: "获取失败"
  #   end
  # end

  def destroy
    if @shop_user.sync_delete
      @shop_user.destroy

      flash[:notice] = "删除成功"
      redirect_to admin_shop_users_path
    else
      redirect_to :back , alert: "删除失败"
    end
  end

  def normal
    if @shop_user.normal!
      redirect_to :back, notice: '解冻成功'
    else
      redirect_to :back, notice: '解冻失败'
    end
  end

  def frost
    if @shop_user.frost!
      redirect_to :back, notice: '冻结成功'
    else
      redirect_to :back, notice: '冻结失败'
    end
  end

  def reset
    if @shop_user.update_attributes(password: '123456')
      redirect_to :back, notice: '重置成功'
    else
      redirect_to :back, notice: '重置失败'
    end
  end

  def transfer
    if params[:shop_user].present?
      @shop_user_ids = params[:shop_user][:shop_user_ids]
    else
      redirect_to :back, notice: '请选择转移人员!'
    end
  end

  def deal_transfer
    if params[:shop_user_ids].present? && params[:department].present?
      params[:shop_user_ids].split(" ").each do |t|
        ShopUser.find(t.to_i).update_attributes!(
          department_id: params[:department][:department_id].to_i,
          )
      end
      redirect_to admin_shop_users_url, notice: '转移成功!'
    else
      redirect_to admin_shop_users_url, notice: '转移失败，请重新操作!'
    end
  end

  private

    def find_shop_user
      @shop_user = ShopUser.find(params[:id])
    end
end