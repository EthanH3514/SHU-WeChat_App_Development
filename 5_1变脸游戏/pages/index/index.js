// index.js
function createRandomIndex(){
  return Math.floor(Math.random()*8);
}
Page({
  data: {
    index:0,
    imgArr:[
      '/images/image01.png',
      '/images/image02.png',
      '/images/image03.png',
      '/images/image04.png',
      '/images/image05.png',
      '/images/image06.png',
      '/images/image07.png',
      '/images/image08.png'
    ]
  },
  changeFace:function(){
    this.setData({
      index:createRandomIndex()
    })
  },
  onShow:function(){
    var that=this;
    wx.onAccelerometerChange(function(res){
      if(res.x>0.5||res.y>0.5||res.z>0.5){
        wx.showToast({
          title:"摇一摇成功",
          icon:'success',
          duration:2000
        })
        that.changeFace()
      }
    })
  }
})
