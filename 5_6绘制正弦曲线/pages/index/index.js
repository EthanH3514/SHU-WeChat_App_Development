// index.js
var ctx=wx.createCanvasContext('myCanvas')
Page({
  drawDot:function(x,y){
    ctx.arc(x,y,5,0,2*Math.PI)
    ctx.setFillStyle('black')
    ctx.fill()
    ctx.draw(true)
  },
  drawSinX:function(){
    for(var x=0;x<2*Math.PI;x+=Math.PI/180){
      var y=Math.sin(x);
      this.drawDot(10+50*x,60+50*y)
    }
  },
  onLoad:function(options){
    this.drawSinX();
  }
})
