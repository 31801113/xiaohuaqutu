// pages/joke/joke.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokeList:[
      {content: '',updatetime:'2018-8-8',url:''},
      {content: '',updatetime:'2018-8-8',url:''},
      {content: '',updatetime:'2018-8-8',url:''}
    ],
    page:1,
    minscreenHeight: app.data.minscreenHeight,
    scrollTop: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh()
    var thatObj = this;
    wx.request({
      url: 'https://v.juhe.cn/joke/content/text.php?key=2ca3e19979fadf2279ac6a036669f5ad&page=' + this.data.page + '&pagesize=20', //仅为示例，并非真实的接口地址
      success (res) {
        //console.log(res.data.result.data)
        thatObj.setData({
          jokeList: res.data.result.data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  onPullDownRefresh: function () {
    var that = this;
    var a = this.data.page + 1;
    that.setData({
      page: a
    })
    this.onLoad();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll: function(e){
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  goTop:function(){
    app.goTop()
  }
  })