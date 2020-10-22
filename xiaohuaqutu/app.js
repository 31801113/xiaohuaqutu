//app.js
App({
  data:{
    minscreenHeight:0,
  },
  onLaunch: function () {
    this.getHeight(1)
  },
  getHeight: function (n) {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.data.minscreenHeight = res.windowHeight * n
      }
    })
  },
  goTop: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  globalData: {
    userInfo: null
  }
})