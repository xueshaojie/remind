var app = getApp()
var notice = require('../../utils/notice.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    noticeAll: false,
    noticeFinish: false,
    noticeNo: false,
    init: true,
    showLayer: false,
    action: "",
    notice_id: '',
    noticeType: '',
    currency_id: '',
    status: '',
  },

  catchnotice: function(e){
    var id = e.currentTarget.id;
    var data = e.currentTarget.dataset;
    this.setData({
      init: true
    })
    this.onLoad({ noticeType: data.type, id: id })
  },

  onLoad: function (options) {
    var that = this;
    var noticeType = options.noticeType
    var id = options.id
    that.setData({
      noticeType: noticeType,
      status: id,
      noticeAll: noticeType == "noticeAll",
      noticeFinish: noticeType == "noticeFinish",
      noticeNo: noticeType == "noticeNo",
    })
    that.onloading()
  },

  onloading: function(){
    var that = this
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.API_URL + "/api/mp/notices.json?status="+ that.data.status +"&openid=" + openid,
      method: "GET",
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          notices: res.data.notices,
          init: false
        })
      }
    })
  },

  onReady: function () {
    wx.setNavigationBarTitle({ title: '我的提醒' })
  },

  cancleNotice: function(e){
    var data = e.currentTarget.dataset
    this.setData({
      showLayer: true,
      action: "取消",
      notice_id: data.id
    })
  },

  createNotice: function (e) {
    var data = e.currentTarget.dataset
    var currency_id = data.id
    wx.navigateTo({
      url: '../notice/notice?id=' + currency_id
    })
  },

  editNotice: function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../notice/notice?id=' + data.id
    })
  },

  deleteNotice: function(e){
    var data = e.currentTarget.dataset
    this.setData({
      showLayer: true,
      action: "删除",
      notice_id: data.id
    })
  },

  submitLayer: function(){
    var that = this
    if (that.data.action == "删除"){
      notice.deleteNotice(that, that.data.notice_id)
    } else if (that.data.action == "编辑"){
      notice.editNotice(that, that.data.notice_id)
    } else if (that.data.action == "取消"){
      notice.cancelNotice(that, that.data.notice_id)
    }
    this.onLoad({ noticeType: this.data.noticeType, id: this.data.status })
    that.setData({
      showLayer: false,
      action: "",
      notice_id: ''
    })
  },


  onShow: function () {
    //this.onloading()
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function (e) {
    this.onLoad({noticeType: this.data.noticeType,id: this.data.status})
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
})
