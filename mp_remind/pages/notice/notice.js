// pages/blog/blog.js

var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    currency_id: '',
    notice: '',
    name: '',
    price: '',
    popErrorMsg: ''
  },

  onLoad: function (options) {
    var that = this;
    var openid = wx.getStorageSync('openid');
    if (options.id) {
      wx.request({
        method: 'GET',
        url: app.globalData.API_URL + '/api/mp/notices/' + options.id + '/edit' + '?openid=' + openid,
        data: {
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          that.setData({
            notice: res.data.notice,
            name: res.data.notice.name,
            price: res.data.notice.price
          })
        }
      })

    }
    else {
      that.setData({
        name: options.name,
        currency_id: options.currency_id,
        price: options.price
      })
    }
  },

  ohShitfadeOut() {
    var fadeOutTimeout = setTimeout(() => {
      this.setData({ popErrorMsg: '' });
      clearTimeout(fadeOutTimeout);
    }, 1500);
  },

  formSubmit: function(e) {
    console.log('onLoad 生命周期函数--监听页面加载')
    var that = this;
    var openid = wx.getStorageSync('openid');

    var value = e.detail.value;
    var arr = [];
    for (var p in e.detail.value) {
      arr.push(e.detail.value[p]);
    }

    if (arr[2].length == 0){
      that.setData({
        popErrorMsg: "价格区间不能为空"
      });
      that.ohShitfadeOut();
      return;
    }

    var reg_range = /\d+-\d+/;
    if (!reg_range.test(arr[2])) {
      this.setData({
        popErrorMsg: "价格区间格式不正确"
      });
      this.ohShitfadeOut();
      return;
    }

    if (arr[2].split("-")[0] == "") {
      this.setData({
        popErrorMsg: "价格必须为正数"
      });
      this.ohShitfadeOut();
      return;
    }

    if (parseFloat(arr[2].split("-")[0]) > parseFloat(arr[2].split("-")[1])) {
      this.setData({
        popErrorMsg: "后面的价格必须要大于前面的价格"
      });
      this.ohShitfadeOut();
      return;
    }

    that.setData({
      submit_btn: true,
      params: util.json2Form(e.detail.value)
    })

    wx.request({
      url: app.globalData.API_URL + "/api/mp/notices.json?" + that.data.params,
      header: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        openid: openid,
        form_id: e.detail.formId
      },
      complete: function( res ) {
        if (res.data.errcode == 0) {
          var noticetype = "noticeAll"
          wx.navigateTo({
            url: `../notice_list/notice_list?noticeType=${noticetype}`
          })
          wx.showToast({
            title: '编辑成功',
            icon: 'success',
            duration: 10000
          })
        } else if  (res.data.errcode == 1) {
          var noticetype = "noticeAll"
          wx.navigateTo({
            url: `../notice_list/notice_list?noticeType=${noticetype}`
          })
          wx.showToast({
            title: '创建成功',
            icon: 'success',
            duration: 10000
          })
        } else if (res.data.errcode == 40000) {
          wx.showToast({
            title: '编辑失败',
            icon: 'loading',
            duration: 10000
          })
        } else if (res.data.errcode == 40001) {
          wx.showToast({
            title: '创建失败',
            icon: 'loading',
            duration: 10000
          })
        } else {
          wx.showToast({
            title: '网络请求失败，请稍后重试。',
            icon: 'loading',
            duration: 10000
          })
        }
        setTimeout(function () {
          wx.hideToast()
        }, 1000)
      }
    })
  },

  onShow: function () {
    this.setData({
      article: null,
      disabled: false
    })

  },

  onToastChanged: function() {
    that.setData( { toastHidden: true });
  }

})
