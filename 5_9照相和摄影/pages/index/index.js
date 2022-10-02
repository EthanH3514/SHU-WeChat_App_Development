// index.js
Page({
  chooseimage:function(){
    var that=this;
    wx.chooseImage({
      count: 1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:function(res){
        that.setData({
          imgPath:res.tempFilePaths
        })
      }
    })
  },
  chooseVideo:function(){
    var that=this;
    wx.chooseVideo({
      camera: ['front','back'],
      sourceType:['album','camera'],
      maxDuration:60,
      success:function(res){
        wx.showToast({
          title: 'res.tempFilePath',
          icon:'success',
          duration:2000
        })
        that.setData({
          videoPath:res.tempFilePath
        })
      }
    })
  }
})
