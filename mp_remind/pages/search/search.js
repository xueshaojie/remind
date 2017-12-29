// pages/search/search.js
var app = getApp()
Page({
  data: {
    init: true,
    showable: false,
    searchValue: '',
    showLayer: false,
    showLayer: false,
    num: 1,
    currency: ''
  },
  valueDel: function (e) {
    if(e.detail.value.length > 0){
      this.setData({
        showable: true
      })
    }else{
      this.setData({
        showable: false
      })
    }
  },
  empty: function(e){
    this.setData({
      searchValue: '',
      showable: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  bindInputChange: function (e) {
    this.getData(e.detail.value)
  },

  getData: function(symbol){
    var that = this;
    wx.request({
      url: app.globalData.API_URL + '/api/mp/currencies/search.json',
      data: {
        symbol: symbol,
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          currencies: res.data.currencies,
          init: false
        })
      }
    })
  },
  cancle: function(){
    wx.navigateBack({})
  },

  //商品详情

  showAble: function () {
    product.showAble(this)
  },

  createNotice: function (e) {
    var data = e.currentTarget.dataset
    var currency_id = data.id
    var name = data.name
    wx.navigateTo({
      url: '../notice/notice?currency_id=' + currency_id + '&name=' + name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var title = '货币搜索'
    wx.setNavigationBarTitle({ title: title })
  },
  onPullDownRefresh: function () {
    this.onLoad()
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  }
})
