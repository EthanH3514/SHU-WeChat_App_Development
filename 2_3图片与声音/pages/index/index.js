// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgSrc:'/images/Jiarana.jpg'
  },
  tapRan:function(){
    let audio=wx.createInnerAudioContext()
    audio.src='/audios/audio.mp3'
    audio.play()
  }
})
