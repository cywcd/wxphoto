//about.js
//获取应用实例
const app = getApp()

Page( {
  data: {
    mode: 'scaleToFill', //不保持纵横比缩放图片，使图片完全适应
    title: 'webzsky微信订阅号',
    thumUrl: 'http://www.webzsky.com/wp-content/uploads/2013/04/codes.jpg',
    desc: '扫描或长按二维码，关注webzsky大前端获取更多资料'
  },
  imageError: function(e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  }
})
