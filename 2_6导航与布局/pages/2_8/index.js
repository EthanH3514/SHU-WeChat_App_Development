// index.js
Page({
  calc:function(e){
    var C;
    C=e.detail.value;
    this.setData({
      F:C*9/5+32
    })
  }
})
