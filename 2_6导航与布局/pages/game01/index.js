// index.js
var number,Input,step;
Page({
  data:{
    flag:true,
    flag01:true,
    flag02:true,
    flag03:true,
    size:' ',
    step:' '
  },
  start:function(){
    this.setData({
      num: number=Math.floor(Math.random()*100),
      flag:true,
      flag01:false,
      flag02:true,
      flag03:true
    })
    step=0;
  },
  stop:function(){
    this.setData({
      flag:false,
      flag01:true,
      flag03:false,
      step:step
    })
  },
  numberInput:function(e){
    Input=parseInt(e.detail.value);
    step++;
    if(Input<number){
      this.setData({
        size:"小了",
        flag02:false
      })
    }
    else if(Input>number){
      this.setData({
        size:"大了",
        flag02:false
      })
    }
    else if(Input==number){
      this.setData({
        size:"答对了！",
        flag02:false,
        flag:false,
        flag01:true,
        flag03:false,
        step:step
      })
      let audio=wx.createInnerAudioContext()
      audio.src="/audios/ohh.mp3"
      audio.play()
    }
  }
})
