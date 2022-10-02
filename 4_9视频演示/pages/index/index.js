// index.js
function getRandomColor(){
  let rgb=[]
  for(let i=0;i<3;++i){
    let color=Math.floor(Math.random()*256).toString(16)
    color=color.length==1?'0'+color:color
    rgb.push(color)
  }
  return '#'+rgb.join('')
}
Page({
  data: {
    danmuList:[{
      text:'第1s出现的弹幕',
      color:'#ff0000',
      time:1
    },
  {
    text:'第3s出现的弹幕',
    color:'#ff00ff',
    time:3
  }]
  },
  onLoad:function(options){
    this.videoCtx=wx.createVideoContext('myVideo')
  },
  inputBlur:function(e){
    this.inputValue=e.detail.value
  },
  sendDanmu:function(){
    this.videoCtx.sendDanmu({
      text:this.inputValue,
      color:getRandomColor()
    })
  }
})
