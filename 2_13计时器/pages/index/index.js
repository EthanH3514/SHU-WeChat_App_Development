// index.js
var num=60;
var timerID;
Page({
  data: {
    hidden:true,
    num:num
  },
  onLoad:function(options){
    var that=this;
    setTimeout(()=>{
      that.show()
    },2000)
  },
  show:function(){
    var that=this;
    that.setData({
      hidden:false
    })
  },
  start:function(){
    var that=this;
    timerID=setInterval(()=>{
      that.timer()
    },1000)
  },
  stop:function(){
    clearInterval(timerID)
  },
  timer:function(){
    var that=this;
    console.log(num)
    if(num>0){
      that.setData({
        num:num--
      })
    }
    else{
      that.setData({
        num:0
      })
    }
    console.log(num)
  }
})
