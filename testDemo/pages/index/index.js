Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航数据
    navList:[],
    //被点击的首页导航的菜单的索引
    currentIndexNav:0,
    //轮播图数据
    swiperList:[],
    //视频列表数据
    videosList:[]
  },
  //点击首页导航按钮
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index,
    })
  },
  /**
   * 获取导航的数据
   */
  getNavList(){
    let that=this;
    //利用小程序内置发送请求的方法
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/navList',
      success(res){
        //console.log(res);
        if(res.data.code===0){
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },
  /**
   * 获取轮播图的数据
   */
  getswiperList(){
    let that=this;
   wx.request({
     url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/swiperList',
     success(res){
       if(res.data.code===0){
        that.setData({
          swiperList:res.data.data.swiperList,
        })
       }
     }
   })
  },
 /**
   * 获取视频的数据
   */
  getVideosList(){
    let that=this;
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videosList',
      success(res){
        if(res.data.code===0){
          that.setData({
            videosList: res.data.data.videosList,
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据导航数据  
    this.getNavList();
    //获取轮播图数据
    this.getswiperList();
    //获取视频列表数据
    this.getVideosList();
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