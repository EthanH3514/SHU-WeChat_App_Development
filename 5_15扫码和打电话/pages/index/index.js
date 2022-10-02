// index.js
Page({
  name:'',
  phone:'',
  scanCode:function(){
    var that=this;
    wx.scanCode({
      onlyFromCamera:false,
      scanType:[],
      success:function(res){
        that.setData({
          resCode:res
        })
      }
    })
  },
  inputName:function(e){
    this.name=e.detail.value
  },
  inputPhone:function(e){
    this.phone=e.detail.value;
  },
  makeCall:function(){
    let phone=this.phone;
    wx.makePhoneCall({
      phoneNumber: 'phone',
    })
  },
  addPerson:function(){
    let name=this.name;
    let phone=this.phone;
    if(name==''||phone==''){
      wx.showToast({
        title: '姓名和电话不能为空',
        icon:'none',
        duration:2000
      })
    }
    else{
      wx.addPhoneContact({
        firstName: 'name',
        mobilePhoneNumber:phone
      })
    }
  }
})
