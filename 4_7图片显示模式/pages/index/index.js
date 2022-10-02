// index.js
Page({
  data: {
    src:'../../image/testImage.jpg',
    imgArray:[{
      mode:'aspectFit',
      text:'aspectFit:保持纵横比缩放图片，使图片完整地显示出来'
    },{
      mode:'scaleToFill',
      text:'scaleToFill:不保持纵横比缩放图片，使图片拉伸适应'
    },{
      mode:'aspectFill',
      text:'aspectFill:保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    },{
      mode:'top',
      text:'top:不缩放图片，只显示图片的顶部区域'
    },{
      mode:'bottom',
      text:'bottom:不缩放图片，只显示图片的底部区域'
    },{
      mode:'center',
      text:'center:不缩放图片，只显示图片的中间区域'
    },{
      mode:'left',
      text:'left:不缩放图片，只显示图片的左边区域'
    },{
      mode:'right',
      text:'right:不缩放图片，只显示图片的右边区域'
    },{
      mode:'top left',
      text:'top left:不缩放图片，只显示图片的左上边区域'
    },{
      mode:'top right',
      text:'top right:不缩放图片，只显示图片的右上边区域'
    },{
      mode:'bottom left',
      text:'bottom left:不缩放图片，只显示图片的左下边区域'
    },{
      mode:'bottom right',
      text:'bottom right:不缩放图片，只显示图片的右下边区域'
    }
  ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
