// index.js
Page({
  data: {
    poster:'http://p1.music.126.net/XPPeIZu7wgcGXZ0666mfFg==/109951164640697307.jpg?param=130y130',
    name:'呓语',
    author:'毛不易',
    src:'https://m10.music.126.net/20220212184104/8e451e72cba368fb9176bc176d57f7e0/yyaac/035d/015c/000b/4755dfe5bd66f12517d97aab2e7f2d13.m4a',
  },
  audioPlay:function(){
    this.audioCtx.play()
  },
  audioPause:function(){
    this.audioCtx.pause()
  },
  audio14:function(){
    this.audioCtx.seek(14)
  },
  audioStart:function(){
    this.audioCtx.seek(0)
  },
  onLoad:function(options){
    this.audioCtx=wx.createAudioContext('myAudio')
  }
})
