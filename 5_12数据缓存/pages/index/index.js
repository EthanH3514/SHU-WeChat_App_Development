// index.js
Page({
  data: {
    msg:'',
    hidden:true
  },
  Student:function(id,name,Chinese,Math,English){
    this.id=id;
    this.name=name;
    this.Chinese=Chinese;
    this.Math=Math;
    this.English=English;
  },
  loadStudent:function(){
    var Students=new Array();
    var stu1=new this.Student('1','TOM',95,87,72);
    var stu2=new this.Student('2','Kevin',75,97,79);
    Students.push(stu1);
    Students.push(stu2);
    return Students
  },
  setStorage:function(){
    var that=this
    wx.setStorage({
      key:'高一',
      data:this.loadStudents(),
      success:function(){
        that.setData({
          hidden:false,
          msg:'异步储存数据成功！'
        })
      }
    })
  },
  setStorageSync:function(){
    var that=this;
    wx.setStorageSync('高二',this.loadStudents());
    that.setData({
      hidden:false,
      msg:'同步储存数据成功！'
    })
  },
  getStorage:function(){
    var that=this;
    wx.getStorage({
      key:'高一',
      success:function(res){
        var length=res.data,length;
        if(length>1){
          that.setData({
            hidden:false,
            msg:'异步获取缓存数据成功，学生1为：'+'\n学号：'+res.data[length-2].id+'\n姓名：'+res.data[length-2].name+'\n语文成绩：'+res.data[length-2].Chinese+'\n数学成绩：'+res.data[length-2].Math+'\n英语成绩：'+res.data[length-2].English
          })
          console.log(res.data)
        }
      },
      fail:function(){
        that.setData({
          hidden:false,
          msg:'异步获取缓存数据失败！'
        })
      }
    })
  },
  getStorageSync:function(){
    var that=this;
    try{
      var value=wx.getStorageSync('高二');
      var length=value.length;
      if(length>1){
        that.setData({
          hidden:false,
          msg:'同步获取缓存数据成功，学生2为：'+'\n学号：'+value[length-1].id+'\n姓名：'+value[length-1].name+'\n语文成绩：'+value[length-1].Chinese+'\n数学成绩：'+value[length-1].Math+'\n英语成绩：'+value[length-1].English
        })
        console.log(value);
      }
    } catch(e){
      that.setData({
        hidden:false,
        msg:'同步获取缓存数据失败！'
      })
      console.log(e);
    }
  },
  getStorageInfo:function(){
    var that=this;
    wx.getStorageInfo({
      success:function(res){
        that.setData({
          hidden:false,
          msg:'异步获取缓存信息成功！'+'\n已使用空间：'+res.currentSize+'\n最大空间为：'+res.limitSize
        })
        console.log(res)
      },
      fail:function(){
        that.setData({
          hidden:false,
          msg:'异步获取缓存信息失败！'
        })
      }
    })
  },
  getStorageInfoSync:function(){
    var that=this;
    try{
      var res=wx.getStorageInfoSync()
      that.setData({
        hidden:false,
        msg:'同步获取缓存信息成功！'+'\n已使用空间：'+res.currentSize+'\n最大空间为：'+res.limitSize
      })
      console.log(res)
    } catch(e){
      that.setData({
        hidden:false,
        msg:'同步获取缓存信息失败！'
      })
      console.log(e)
    }
  },
  removeStorage:function(){
    var that=this;
    wx.removeStorage({
      key: '高一',
      success:function(res){
        that.setData({
          hidden:false,
          msg:'异步删除缓存数据成功！'
        })
        console.log(res.data)
      },
      fail:function(){
        that.setData({
          hidden:false,
          msg:'异步删除缓存数据失败！'
        })
      }
    })
  },
  removeStorageSync:function(){
    var that=this;
    try{
      wx.removeStorageSync('高二');
      that.setData({
        hidden:false,
        msg:'同步删除缓存数据成功！'
      })
    } catch(e){
      that.setData({
        hidden:false,
        msg:'同步删除缓存数据失败！'
      })
      console.log(e)
    }
  }
})
