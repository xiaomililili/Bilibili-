// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   //视频详情
   videoInfo:null,
   //其他视频
   othersList:[],
    commentList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId=options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },
  /**
   * 根据视频id获取视频详情
   */
  getCurrentVideo(videoId){
    let that=this;
   wx.request({
     url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videoDetail?id='+videoId,
     success(res){
       //console.log(res.data.videoInfo);
       if(res.data.code===0){
         that.setData({
           videoInfo: res.data.videoInfo.video,
           "videoInfo.url": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
         })
       }
     }
   })
   },
  /**
   * 获取推荐视频
   */
  getOthersList(videoId) {
    let that = this;
    wx.request({
     
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/othersList',
      success(res){
        if (res.data.code === 0) {
          //console.log(res.data.data.othersList);
          that.setData({
            othersList:res.data.data.othersList
          })
         
      }
    }
    })
  },
  /**
   * 获取评论列表
   */
  getCommentList(videoId){
    let that=this;
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/commentsList?id='+videoId,
      success(res){
        //console.log(res);
        if(res.data.code===0){
          that.setData({
            commentList: res.data.data.commentData
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