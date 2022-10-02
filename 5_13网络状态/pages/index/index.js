// index.js
Page({
  data: {
    status:'获取中……'
  },
  onLoad:function(options){
    var that=this
    wx.getNetworkType({
      success:function(res){
        that.setData({
          status:res.networkType
        })
      },
    })
    wx.onNetworkStatusChange(function(res){
      if(res.isConnected){
        that.setData({
          status:res.networkType
        })
      }
      else{
        that.setData({
          status:'未联网！'
        })
      }
    })
  },
  wifiStatus:function(){
    var that=this
    wx.getConnectedWifi({
      success:function(res){
        that.setData({
          res:res.wifi
        })
      }
    })
  }
})
