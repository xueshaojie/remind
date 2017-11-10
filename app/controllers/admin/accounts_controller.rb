class Admin::AccountsController < Admin::BaseController

  before_filter do
    @partialLeftNav = "/layouts/partialLeftNav"
  end

  def new
    @account = current_account
  end

  def create
    if params[:account][:current_password]
      if !current_account.authenticate(params[:account][:current_password])
        return redirect_to :back, alert: '当前密码为空或不正确'
      elsif params[:account][:password].blank?
        return redirect_to :back, alert: '新密码不能为空'
      elsif params[:account][:password] != params[:account][:password_confirmation]
        return redirect_to :back, alert: '前后输入密码不一致'
      end
    end
    #@region_user = current_user
    if current_account.update_attributes(password: params[:account][:password])
      clear_account_sign_in_session
      flash[:notice] = "修改成功,请使用新密码登陆"
      redirect_to sign_in_path
    else
      flash[:alert] = "当前用户或密码不正确!"
      render 'edit'
    end
  end

end