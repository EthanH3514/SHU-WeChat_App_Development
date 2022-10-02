// index.js
Page({
  getInput:function(e){
    this.inputVal=e.detail.value
  },
  onShow:function(){
    var that=this;
    that.isShow=true;
    wx.onAccelerometerChange(function(e){
      if(!that.isShow){
        return
      }
      if(e.x>0.5||e.y>0.5||e.z>0.5){
        wx.showToast({
          title: '摇一摇成功',
          icon:'success',
          duration:2000
        })
        var result=1;
        for(var i=1;i<=that.inputVal;i++){
          result=result*i
        }
        that.setData({
          result:result
        })
      }
    })
  },
  onHide:function(){
    this.isShow=false;
  }
})
