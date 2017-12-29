//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currencies: '',
    currency_id: ''
  },
  //事件处理函数

  createNotice: function (e) {
    var data = e.currentTarget.dataset
    var currency_id = data.id
    var name = data.name
    var price = data.price
    var updated_at = data.updated_at
    wx.navigateTo({
      url: '../notice/notice?currency_id=' + currency_id + '&name=' + name + '&price=' + price + '&updated_at=' + updated_at
    })
  },
  toSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    });
  },
  onLoad: function () {
    var that = this

    wx.request({
      method: 'GET',
      url: app.globalData.API_URL + '/api/mp/currencies.json',
      data: {
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          currencies: res.data.currencies
        })
      }
    })
  }

})
