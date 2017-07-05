Page({

  data: {
    a: 18,
    b: "哈哈哈，嘻嘻嘻",
    lo: 113.324520,
    la: 23.099994
  },


  onReady: function() {
     var self = this;

     wx.getLocation({
          success: function(res) {
             self.setData({
               lo: res.longitude,
               la: res.latitude
             });
          }
     });
  }
});

