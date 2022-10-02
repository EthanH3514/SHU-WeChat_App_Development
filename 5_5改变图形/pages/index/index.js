// index.js
Page({
  onReady:function(){
    this.ctx=wx.createCanvasContext('myCanvas', this)
  },
  drawRect:function(){
    var ctx=this.ctx;
    ctx.rect(0,0,50,50)
    ctx.stroke()
    ctx.draw(true)
  },
  scale:function(){
    this.ctx.scale(2,2)
    this.drawRect()
  },
  translate:function(){
    this.ctx.translate(20,20)
    this.drawRect()
  },
  rotate:function(){
    this.ctx.rotate(30*Math.PI/180)
    this.drawRect()
  }
})
