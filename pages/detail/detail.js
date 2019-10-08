// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo: null,
    othersList:[],
    commentData:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    console.log(videoId);
    this.getCurrentVideo(videoId);
    this.getOtherList();
    this.getCommentList();

  },
  // 根据视频的ID获取视频详情
  getCurrentVideo(videoId) {
    let that=this;
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=" + videoId,
      success(res) {
        console.log(res.data.data)
        if(res.data.code===0){
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
      }
    })
  },
// 获取推荐视频
getOtherList(){
  let that=this;
  wx.request({
    url:"https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/othersList",
    success(res){
      //console.log()
      if(res.data.code===0){
        that.setData({
          othersList:res.data.data.othersList,
        })
      }
    }
  })
},
// 获取评论列表
getCommentList(){
let that = this;
wx.request({
  url:"https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/commentsList",
  success(res){
    //console.log(res.data.data.commentData)
    if(res.data.code===0){
      that.setData({
        commentData:res.data.data.commentData
      })
    }
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