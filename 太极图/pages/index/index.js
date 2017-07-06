
Page({

  taiji: function (context,x,y) {

    
    var r = 100;
    var y1 = y-(r/2);
    var y2 = y+(r/2);
    //太极图
    context.setFillStyle("#ffffff");
    context.arc(x, y, r, 0.5 * Math.PI, 1.5 * Math.PI, true);

    context.fill();

    context.beginPath();

    context.setFillStyle("#000000");
    context.arc(x, y, r, 0.5 * Math.PI, 1.5 * Math.PI);
    context.fill();

    context.beginPath();

    context.setFillStyle("#ffffff");
    context.arc(x,y1 , r/2, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();

    context.setFillStyle("#000000");
    context.arc(x, y2, r/2, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.setFillStyle("#000000");
    context.arc(x, y1, r/5, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();

    context.setFillStyle("#ffffff");
    context.arc(x, y2, r/5, 0, 2 * Math.PI);
    context.fill();
    context.beginPath();

  },

  onReady: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('canvas1')
    for(var i=0;i<=4;i++){

      var x = parseInt(Math.random() * 300);
      var y = parseInt(Math.random() * 500);
      this.taiji(context,x,y);

    }

        

    context.draw();


  }
})
