App({
  onLaunch: function () {
    var that = this
    this.globalData.code = wx.getStorageSync('code');
    if (!this.globalData.app_id){
      wx.getExtConfig({
        success: function (res) {
          var ext_config = res.extConfig
          wx.setStorageSync('app_id', ext_config.appid)
          that.globalData.app_id = wx.getStorageSync('app_id')
        }
      })
    }

    if (!wx.getStorageSync("openid")) {
      this.getUserInfo(function () {
        that.getEncryptedData(function () {

        })
      })
    }

  },

  parseBoolean: function (str) {
    if (str == "true") {
      return true;
    } else {
      return false;
    }
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      wx.login({
        success: function (res) {
          if (res.code) {
            that.globalData.code = res.code
            wx.setStorageSync('code', res.code)
            wx.getUserInfo({
              success: function (res) {
                that.globalData.encrypted = { encryptedData: res.encryptedData, iv: res.iv }
                that.globalData.userInfo = res.userInfo
                wx.setStorageSync('name', res.userInfo.nickName);
                wx.setStorageSync('pic', res.userInfo.avatarUrl);
                typeof cb == "function" && cb(that.globalData.userInfo)
              },
              fail: function () {
                wx.showModal({
                  title: '警告',
                  content: '您点击了拒绝授权，将无法正常使用此应用。请10分钟后再次点击授权，或者删除小程序重新进入。',
                  success: function (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                    }
                  }
                })
              }

            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })
    }
  },

  getEncryptedData: function () {
    console.log(this.globalData.code);
    console.log(this.globalData.encrypted.encryptedData);
    console.log(this.globalData.encrypted.iv);
    wx.request({
      method: 'GET',
      url: this.globalData.API_URL +"/api/mp/wx_users/wx_login",
      data: {
        code: this.globalData.code,
        encryptedData: this.globalData.encrypted.encryptedData,
        iv: this.globalData.encrypted.iv
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //if (res.data.code == "1") {
        wx.hideToast()
        wx.setStorageSync('openid', res.data.openid)
        //}
      }
      // fail: function(res) {}
    })
  },

  globalData: {
    featureManager: {},
    userInfo: null,
    //API_URL: 'http://119.23.104.220'
    API_URL: 'http://127.0.0.1:3000'
    // API_URL: 'https://mp.dingyutech.com'
  }
})
