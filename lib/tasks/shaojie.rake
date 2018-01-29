namespace :shaojie do

  desc "update orders"
  task :update_orders => :environment do
    api_key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDg3NTAxNzUsImp0aSI6ImUwNDAwNzZjLTcwYWItNGRjYy1iOGIyLTUzZmY3ZGNjMGJhOCJ9.CZJPPJHTpgidIL3t-qL3v5Lujh2gLrT91SSnvgXJSzg:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDg3NTAxNzV9.RK_4Z--VuLg6chw8_R2cg4wSxyIxhKCwlKHMdu59knU"
    id = "e040076c-70ab-4dcc-b8b2-53ff7dcc0ba8"

    url = "https://api.big.one/orders?market=BIG-EOS" #获取订单列表
    headers = { 'Authorization' => api_key, 'Big-Device-Id' => id, 'Content-Type' => 'application/json'}
    response = HTTParty.get(url, headers: headers)
    result = JSON.parse(response.body)

    i = i || 0
    Rails.logger.info "******************总共执行的次数:#{i}"

    if result["data"].blank?

      url = "https://api.big.one/markets/BIG-EOS" #拉取当前价格
      response = HTTParty.get(url, headers: headers)
      result = JSON.parse(response.body)

      unless result["data"].blank?
        current_price = result["data"]["ticker"]["price"]
        url = "https://api.big.one/orders" #创建订单

        amount = 10 * (1+0.04)**i
        i = i + 1
        amount = amount.to_f.round(1).to_s
        #amount = "10"
        #买入
        bid_pirce = current_price.to_f * 0.98
        bid_pirce = bid_pirce.to_f.round(3).to_s
        bid_params = { order_market: "BIG-EOS", order_side: "BID", price: bid_pirce, amount: amount }.to_json
        response = HTTParty.post(url, headers: headers, body: bid_params)
        result = JSON.parse(response.body)
        unless result["data"].blank?
          #卖出
          ask_pirce = current_price.to_f * 1.02
          ask_pirce = ask_pirce.to_f.round(3)
          ask_params = { order_market: "BIG-EOS", order_side: "ASK", price: bid_pirce, amount: amount }.to_json
          response = HTTParty.post(url, headers: headers, body: ask_params)
        end
      end
    end

  end

end
