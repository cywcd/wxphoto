/**
 * Created by cywcd on 2016/10/11.
 */

// 获取全局应用实例
const app = getApp()

Page({
  data: {
    loading: true,
    photos: [  
       {  
          url:'http://sjbz.fd.zol-img.com.cn/t_s800x1280c/g5/M00/00/02/ChMkJ1fJUwWIFNg6ABmyDPBxG3sAAU9nwBnuQ0AGbIk369.jpg'
       },
       {  
          url:'http://sjbz.fd.zol-img.com.cn/t_s800x1280c/g5/M00/00/01/ChMkJ1fJUOeIJsVmAAL89NyciPIAAU9awOi9EkAAv0M881.jpg'
       },
       {  
          url:'http://sjbz.fd.zol-img.com.cn/t_s800x1280c/g5/M00/00/03/ChMkJ1fJV_yIIiWCAAdMxHOR9Z8AAU-HQOzoeAAB0zc59.jpeg'
       }   
    ],  
  },

  onLoad () {
      this.setData({ loading: false })
      console.log('数据已开始渲染...');
  },

  start () {
    // TODO: 访问历史的问题
    wx.navigateTo({ url: '../index/index' })
  }
})
