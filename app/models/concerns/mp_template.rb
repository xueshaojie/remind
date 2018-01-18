module MpTemplate
  #支付成功通知-模板库编号：OPENTM400231951
  def notice(openid, form_id)
    options = {
      touser: openid,
      template_id: "qjXQJ5HPEBqBxU8kONO58LU9sq9cOKwiJx4wDLdZAGQ",
      # template_id:"#{user.wx_user.wx_mp_user.order_paid_wx_message_template_id}",
      form_id: form_id,
      url: "pages/index/index",
      color: "#FF0000",
      data:{
        keyword1:{
          value:"#{currency.symbol}",
          color:"#173177"
        },
        keyword2:{
          value:"#{currency.price_cny}元",
          color:"#173177"
        },
        keyword3:{
          value: range,
          color:"#173177"
        },
        keyword4:{
          value: updated_at.to_s,
          color:"#173177"
        },
      },
      emphasis_keyword: "keyword1.data"
    }
  end

  def send_mp_message_temp(origin_params)
    Rails.logger.info "send_wx_message_temp result: #{origin_params}"
    begin
      url = "https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=#{origin_params[:access_token]}"
      res_api = HTTParty.post url, body: origin_params[:options].to_json
      Rails.logger.info "send_wx_message_temp result: #{res_api}"
    rescue Exception => e
      Rails.logger.error "send_wx_message_temp result: #{res_api}"
    end
  end

end
