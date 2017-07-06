
Page({
  huaQiuQiu:function(context,x,y){

    console.log("画球球");

    //产生随机数
    //math.random()产生[0,1)之间的数，parseint转化成整数，舍弃小数部分
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);

    context.setFillStyle("rgb(" + r+ "," + g + "," + b +")");

    context.beginPath();
    context.arc(x,y,10,0,2*Math.PI);
    context.fill();

  },

  onReady:function(){

    var context = wx.createCanvasContext("canvas1");
    for(var i=0;i<=100;i++){

      var a = parseInt(Math.random() * 350);
      var b = parseInt(Math.random() * 500);

      this.huaQiuQiu(context, a, b);

    }
    
    // this.huaQiuQiu(context,300, 100);
    // this.huaQiuQiu(context, 100, 300);
    // this.huaQiuQiu(context, 300, 300);
    // this.huaQiuQiu(context, 200, 200);

    context.draw();
  }
})
