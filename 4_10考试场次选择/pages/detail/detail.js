//detail.js
Page({
    data:{
        array:[
            '第一场15:00',
            '第二场16:20',
            '第三场17:40'
        ]
    },
    formSubmit:function(e){
        var name=e.detail.value.name;
        var id=e.detail.value.id;
        var time=e.detail.value.time;
        wx.showModal({
            title:'确认信息',
            content:e.detail.value.name+"同学，你的学号是："+id+"，你选择的场次是："+this.data.array[time]+"，请确认信息!",
            success:function(res){
                if(res.confirm){
                    wx.showModal({
                        title:'信息确认',
                        content:'你的考场信息已经确认!',
                    })
                    wx.navigateTo({
                        url:'../index/index',
                    })
                }
                else{
                    console.log('用户点击取消')
                }
            }
        })
    },
    chooseTime:function(e){
        var index=e.detail.value
        this.setData({
            index:index
        })
    }
})