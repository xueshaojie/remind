class Admin::UsersController < Admin::BaseController
  before_filter :find_user, only: [:frost, :normal, :edit, :update, :destroy, :sync, :reset]

  def index
    @search = User.search(params[:search])
    @users = @search.order("created_at desc").page(params[:page])
  end

  def new
    @user = User.new(params[:user])
    render layout: 'application_pop'
  end

  def create
    @user = User.new(params[:user])
    if @user.save
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
    if @user.update_attributes(params[:user])
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back , alert: '保存失败'
    end
  end

  def destroy
    if @user.sync_delete
      @user.destroy

      flash[:notice] = "删除成功"
      redirect_to admin_users_path
    else
      redirect_to :back , alert: "删除失败"
    end
  end

  def normal
    if @user.normal!
      redirect_to :back, notice: '解冻成功'
    else
      redirect_to :back, notice: '解冻失败'
    end
  end

  def frost
    if @user.frost!
      redirect_to :back, notice: '冻结成功'
    else
      redirect_to :back, notice: '冻结失败'
    end
  end

  def reset
    if @user.update_attributes(password: '123456')
      redirect_to :back, notice: '重置成功'
    else
      redirect_to :back, notice: '重置失败'
    end
  end

  private

    def find_user
      @user = User.find(params[:id])
    end
end