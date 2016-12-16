/**
 * Created by cywcd on 2016/10/12.
 */

const app = getApp()

Page( {
    data: {
        markers: [ {
            latitude: 39.9093337891,
            longitude: 116.4807853839,
            name: '华贸中心写字楼',
            desc: '我们的位置'
        }],
        covers: [ {
            latitude: 23.099794,
            longitude: 113.324520,
            iconPath: '../../resource/images/icon-about-active.png',
            rotate: 10
            }, {
                latitude: 23.099298,
                longitude: 113.324129,
                iconPath: '../../resource/images/icon-about-active.png',
                rotate: 90,
                scale: 1,
            }],
        mapbtn: '查看位置',
        hidden: false
    },
    //事件处理函数 
    bindFullmapTap: function() {
        var that = this;
        that.setData( {
            hidden: false
        })
        wx.getLocation( {
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function( res ) {
                var latitude = res.latitude;
                var longitude = res.longitude;
                wx.openLocation( {
                    latitude: latitude,
                    longitude: longitude,
                    scale: 1
                });
                wx.setNavigationBarTitle({
                    title: '定位信息'
                });
                that.setData( {
                    hidden: true
                })
            }
        });
    },
    onLoad: function() {
        var that = this
        setTimeout( function() {
            that.setData( {
              hidden: true
            })
          }, 5000 )
    }
})