// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:'Hello world',
      img:'/images/pig.png',
      arr:["a","b","c","d"],
      list:[
        {
          name:"jack",
          age:"18"
        },
        {
          name:"lili",
          age:"17"
        },
        {
          name:"jerry",
          age:"20"
        }     
      ],
      isLogin:true,
      count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onTapHand:function (options) {
    this.setData({
      count:this.data.count+1
    })
  },
  onBoxTapHandle:function(event){
    console.log("box 点击");
    console.log(event);
    console.log(event.currentTarget.dataset.id);
  },
  onChildTapHandle:function(){
    console.log("child 点击");
  }
})