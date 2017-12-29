const app = getApp()

function cancelNotice(that,id){
  wx.request({
    url: app.globalData.API_URL + "/api/mp/notices/"+ id + "/cancel.json",
    method: "POST",
    data: {
      openid: wx.getStorageSync("openid"),
    },
    success: function(res){
      if(res.data.errcode == 0){
        wx.showToast({
          title: '取消成功',
          icon: 'success',
          duration: 10000
        })
      }else{
        wx.showToast({
          title: '取消失败',
          icon: 'loading',
          duration: 10000
        })
      }
      setTimeout(function () {
        wx.hideToast()
      }, 1000)
    }
  })
}

function deleteNotice(that, id) {
  wx.request({
    url: app.globalData.API_URL + "/api/mp/notices/"+ id + ".json",
    method: "DELETE",
    data: {
      openid: wx.getStorageSync("openid"),
    },
    success: function (res) {
      if (res.data.errcode == 0) {
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          duration: 10000
        })
      } else {
        wx.showToast({
          title: '删除失败',
          icon: 'loading',
          duration: 10000
        })
      }
      setTimeout(function () {
        wx.hideToast()
      }, 1000)
    }
  })
}


module.exports = {
  cancelNotice: cancelNotice,
  deleteNotice: deleteNotice
}
