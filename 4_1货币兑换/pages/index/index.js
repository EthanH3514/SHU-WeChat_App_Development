// index.js
var C;
Page({
  calc:function(e){
    C=parseInt(e.detail.value.cels);
    this.setData({
      M:(C/6.8801).toFixed(4),
      Y:(C/8.7873).toFixed(4),
      G:(C/0.8805).toFixed(4),
      O:(C/7.8234).toFixed(4),
      H:(C/0.0061).toFixed(4),
      R:(C/0.0610).toFixed(4),
    })
  },
  reset:function(){
    this.setData({
      M:'',
      Y:'',
      G:'',
      O:'',
      R:'',
      H:'',
    })
  }
})
