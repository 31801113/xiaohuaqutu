// pages/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokeList:[
      {content: '笑话1',updatetime:'2018-8-8',url:''},
      {content: '笑话1',updatetime:'2018-8-8',url:''},
      {content: '笑话1',updatetime:'2018-8-8',url:''}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var thatObj = this;
    wx.request({
      url: 'https://v.juhe.cn/joke/img/list.php?key=2ca3e19979fadf2279ac6a036669f5ad&page=5&pagesize=100&sort=asc&time=1418745237', //仅为示例，并非真实的接口地址
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

  }
})