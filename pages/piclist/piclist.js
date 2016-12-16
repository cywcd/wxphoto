/**
 * Created by cywcd on 2016/10/10.
 */
const app = getApp()
Page( {
  data: {
    pictitle: '图库列表!',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    topswipe: [],
    picitem: [],
    hidden: false
  },
  loadingChange: function() {
    this.setData( {
      hidden: true
    })
  },
  onLoad: function() {
    wx.showNavigationBarLoading();
    var that = this
    // 访问黑光网数据的网络接口
    wx.request( {
      url: 'http://m.heiguang.com/api.php',
      data: {
        type: 'topswipe',
        op: 'news_jiekou',
        a: 'get_newpic',
        cat: '146'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function( res ) {
        if( res.data.code == 0 ) {
          that.setData( {
            topswipe: res.data.pics,
          })

        } else {
          console.log( '获取失败' );
        }
      }
    })
    // 访问黑光网数据的网络接口
    wx.request( {
      url: 'http://m.heiguang.com/api.php',
      data: {
        type: 'picitem',
        op: 'news_jiekou',
        a: 'get_newpic',
        cat: '146'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function( res ) {
        if( res.data.code == 0 ) {
          that.setData( {
            picitem: res.data.news,
          })
          setTimeout( function() {
            that.setData( {
              hidden: true
            })
          }, 1500 )
        } else {
          console.log( '获取失败' );
        }
      }
    })
    wx.hideNavigationBarLoading();
  },
  //事件处理函数
  bindViewTap: function(event ) {
      wx.navigateTo({
        url: '../picshow/picshow'
      })
  },
  //离开当前页触发函数
  onUnload: function() {
    console.log( '页面卸载....' );
  },
  //监听页面渲染完成
  onReady: function() {
    wx.hideNavigationBarLoading();
  },
})