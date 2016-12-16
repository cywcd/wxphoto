//index.js
//获取应用实例
const app = getApp()

Page( {
  data: {
    welcome: '欢迎您来到摄影家园!',
    maptitle: '地图定位',
    userInfo: {},
    items: [
      {
        title: '查看位置信息',
        link: '../map/map'
      },
      {
        title: '查看艺术图展',
        link: '../piclib/piclib'
      },
      {
        title: '查看摄影图库',
        link: '../piclist/piclist'
      },
    ],
    imgsrc: 'data:image/png;base64,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'
  },
  //事件处理函数 
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../about/about'
    })
  },
  bindmapTap: function() {
    wx.navigateTo( {
      url: '../map/map'
    })
  },
  onLoad: function() {
    var that = this
    wx.showNavigationBarLoading();
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
      wx.hideNavigationBarLoading();
    })
  },
  onReady: function(){
    wx.hideNavigationBarLoading();
  },
})
