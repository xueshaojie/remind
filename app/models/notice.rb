class Notice < ActiveRecord::Base
  include MpTemplate

  belongs_to :wx_user
  belongs_to :currency

  enum_attr :status, :in => [
    ['no_remind', 1, '未提醒'],
    ['remind', 0, '已提醒'],
    ['cancle', 2, '取消提醒'],
    ['delete', 3, '删除提醒']
  ]

  scope :normal, -> { where(status: [NO_REMIND, REMIND]) }


  before_save do
    if self.changed.include?('status') && self.notice?
      send_wx_message(notice(self.wx_user.openid, form_id))
    end
  end

  def send_wx_message(options)
    Rails.logger.info "send_wx_message result: #{options}"
    if self.wx_user.expires_in.to_s > Time.now.to_s
      access_token = self.wx_user.access_token
    else
      access_token = fetch_access_token
    end
    return true unless access_token
    send_mp_message_temp(options: options, access_token: access_token)
  end

  def fetch_access_token
    app_id = "wxf3c6f40bea069985"
    app_secret = "454126a4ac934e556c5565f840dff609"
    url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=#{app_id}&secret=#{app_secret}"
    response = HTTParty.get(url)
    resp_info = JSON.parse(response.body)
    self.wx_user.update_attributes(access_token: resp_info["access_token"], expires_in: (Time.now + (resp_info["expires_in"].to_i.seconds - 5.minutes)).to_s)
    resp_info["access_token"]
  end

end
