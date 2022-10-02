// index.js
const app = getApp()
var util=require('../utils/util');
var indexMsg='我是来自index.js的变量';
function indexFunc(){
  return '我是来自index.js的局部函数';
}
Page({
  data: {
    msg1:app.globalMsg,
    msg2:app.globalFunc(),
    msg3:indexMsg,
    msg4:indexFunc(),
    msg5:util.utilMsg,
    msg6:util.utilFunc()
  },
})
