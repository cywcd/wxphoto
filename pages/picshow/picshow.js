/**
 * Created by cywcd on 2016/10/12.
 */

//获取全局应用是咧
const app = getApp()

Page({
    data:{
        articleTitle: '我的文章标题',
        articleFrom: '黑光网',
        articleAuthor: '大师兄',
        articleMain: '内容没有接口数据.....'
    },
    onLoad: function(){
        console.log('数据更新渲染可以写在这里....');
    }
})