

// 注释，在js中是这样注释的，计算机不看的

// Page() 代表当前页面，【格式】
//  {} 可以配置页面的一些信息（数据、处理方法），暂时可以当做一个格式
//  ; 可加可不加，一般都还是加上的

//  data: {} 说明 data 的值是 {}，是规定的，不能改名，代表整个页面的数据
//        a: 5 说明在 data 中添加了一个属性a，他的值是5。那么这个a是可以修改名字的


//  js有规定，数字以外的 都需要用 "" 包起来，说明是字符串
//  两个 键值对 直接需要用 , 分隔开


//  拿出 lo 和 la 的作用是 通过程序 来获取当前位置的 经纬度，然后设置 lo 和 la 的值， 从而影响到 地图 的位置


    Page({

      controltap(e){
        //在控制台输出
        console.log("hahaha");
      },








      // 数据
      data: {
        a: 18,
        b: "哈哈哈，嘻嘻嘻",
        lo: 113.324520,
        la: 23.099994, 

      },

      // 当前程序执行完的时候
      //   onReady 代表整个程序加载完成 的时候，不能修改，因为是系统规定
      //     function() 是一个格式

      onReady: function () {
        // 加载完成之后，执行这里
        var pages = this;
        //得到系统信息

        //插入十字架的markers(等会移到setData前面)
        var markers = [{
          iconPath: "/images/position_icon.png",
          id: 99999,
          latitude: 23.099994,
          longitude: 113.324520,
          width: 50,
          height: 55
        },{
            iconPath: "/images/1N.png",
            id: 99999,
            latitude: 23.099994+0.0006,
            longitude: 113.324520+0.0003,
            width: 50,
            height: 55
        },{
            iconPath: "/images/2N.png",
            id: 99999,
            latitude: 23.099994 - 0.0014,
            longitude: 113.324520 - 0.0005,
            width: 100,
            height: 55
        },{
            iconPath: "/images/3.jpg",
            id: 99999,
            latitude: 23.099994 + 0.0008,
            longitude: 113.324520 + 0.0018,
            width: 100,
            height: 110
        },{
            iconPath: "/images/4N.png",
            id: 99999,
            latitude: 23.099994 + 0.001,
            longitude: 113.324520 - 0.0018,
            width: 130,
            height: 144
        },{
            iconPath: "/images/5.jpg",
            id: 99999,
            latitude: 23.099994 + 0.0018,
            longitude: 113.324520 + 0.0003,
            width: 50,
            height: 55
        }

        ];
        //十字架正式开始
        var x = 0;
        var y = 0;
        for (var i = 0; i < 40; i++) {
          if(i%4 == 1){
            x = 0;
            y = parseInt(i/4) + 1;
          }
          else if(i%4 ==2){
            x = parseInt(i/4) + 1;
            y = 0;
          }
          else if (i%4 == 3){
            x = 0;
            y = (parseInt(i / 4) + 1) * (-1);
          }
          else if (i % 4 == 0) {
            x = (parseInt(i / 4) + 1) * (-1);
            y = 0;
          }

          markers.push({
            iconPath: "/images/position_icon.png",
            id: i,
            latitude: 23.099994 +  (y * 0.0002),
            longitude: 113.324520 + (x * 0.0002),
            width: 50,
            height: 55
          });

        }

        //十字架结束，准备开始大X

        //大X运算开始（与上面雷同，只是改了一点if规则）
        var temp = 0;
        console.log(i);
  
        for (var j  = 40; j < 80; j++) {
          
          temp = j-40;

          if (j % 4 == 1) {
            x = parseInt(temp / 4) + 1;
            y = parseInt(temp / 4) + 1;
          }
          else if (j % 4 == 2) {
            x = parseInt(temp / 4) + 1;
            y = (parseInt(temp / 4) + 1) * (-1);
          }
          else if (j % 4 == 3) {
            x = (parseInt(temp / 4) + 1) * (-1);
            y = (parseInt(temp / 4) + 1) * (-1);
          }
          else if (j % 4 == 0) {
            x = (parseInt(temp / 4) + 1) * (-1);
            y = parseInt(temp / 4) + 1;
          }

          markers.push({
            iconPath: "/images/position_icon.png",
            id: j,
            latitude: 23.099994 + (y * 0.0002),
            longitude: 113.324520 + (x * 0.0002),
            width: 50,
            height: 55
          });
          
          console.log(j);
        }
        //大X运算完毕，js bug真多OvO
        
        //开始圆的计算,10度一个圆
        var sin = 0;
        var cos = 0;
        for(var k = 1;k<37;k++){
          sin = Math.sin((Math.PI/18)*k);
          cos = Math.cos((Math.PI/18)*k);

          //console.log(sin);
          //console.log(cos);

          markers.push({
            iconPath: "/images/position_icon.png",
            id: k+90,
            latitude: 23.099994 + (sin * 0.001),
            longitude: 113.324520 + (cos * 0.001),
            width: 50,
            height: 55
          });

        }

        //总算做完了 法轮大法好~
        
        //嗯，还有一个随机数
        var heng = 0;
        var zong = 0;
        //复用参数总是出无限大的bug

        for(var m = 0; m < 30; m++){
          if(Math.random > 0.5){
          heng = Math.random()*0.005;
          }
          else{
            heng = ((Math.random() * 0.005) * -1);       
          }
          if(Math.random > 0.5){
            zong = Math.random()*0.005;
          }
          else{
            zong = ((Math.random() * 0.005)* -1);
          }

          //console.log(heng);
          //console.log(zong);

          markers.push({
            iconPath: "/images/position_icon.png",
            id: m + 200,
            latitude: 23.099994 + heng,
            longitude: 113.324520 + zong,
            width: 50,
            height: 55
          });
        }

        //完工，还差一个恶搞项目

        wx.getSystemInfo({
          success: function(res) {
            var selfs = res;
            var con =  [
              {
                id: 0,
                position: {
                  top: selfs.windowHeight / 2,
                  left: 0,
                  width: selfs.windowWidth
                },
                iconPath: "/images/panzi.png",
                clickable: true
              },
              {
                id: 1,
                position: {
                  top: selfs.windowHeight / 2 + 30,
                  left: selfs.windowWidth / 2 - 10,
                  width: 30,
                },
                iconPath: "/images/hide_icon.png",
                clickable: true
              },
              {
                id: 2,
                position: {
                  top: selfs.windowHeight - 250,
                  left: selfs.windowWidth / 2 - 100,
                  width: 200,
                  height: 200
                },
                iconPath: "/images/Ride_icon.png",
                clickable: true
              },
              {
                id: 3,
                position: {
                  top: selfs.windowHeight - 50,
                  left: 30,
                  width: 25,
                  height: 25
                },
                iconPath: "/images/personal_icon.png",
                clickable: true
              },
              {
                id: 4,
                position: {
                  top: selfs.windowHeight - 50,
                  left: selfs.windowWidth - 40,
                  width: 25,
                  height: 25
                },
                iconPath: "/images/activity_icon.png",
                clickable: true
              },
              {
                id: 5,
                position: {
                  top: selfs.windowHeight / 4 - 50,
                  left: selfs.windowWidth - 80,
                  width: 60,
                  height: 60
                },
                iconPath: "/images/service_icon.png",
                clickable: true
              },
              {
                id: 6,
                position: {
                  top: selfs.windowHeight / 2 - 100,
                  left: selfs.windowWidth - 80,
                  width: 60,
                  height: 60
                },

                iconPath: "/images/Positioning_icon02.png",
                clickable: true
              }

            ];
            
            pages.setData({
              control: con
            })


          }
        })
        // this 是当前页面
        // var self 代表定义一个空间，空间的名字是 self，可以改名 b,c, 都可以的
        //  = 代表 将 当前页面 放到 开辟的空间中
        //  所以 self 就是当前页面;

        var self = this;

        //   这里是输出
        // console.log("初始化完成！");


        // 获取当前的地理位置
        //  wx.  微信的
        //     getLocation 获取当前的地理位置，系统提供的功能
        wx.getLocation({
          success: function (res) {
            //  成功的时候，执行这里代码

            // 在当前页面中 设置他们的数据
            // {lo: 113.324520,
            //   la: 23.099994}
            self.setData({
              lo: res.longitude,
              la: res.latitude,
              markers : markers
             /* markers: [{
                iconPath: "/images/position_icon.png",
                id: 1,
                latitude: res.latitude,
                longitude: res.longitude,
                width: 50,
                height : 55
              }, /*/
              

              /*function(){for(i=1;i<=10;i++){
                markers : {
                  id : i+1,
                  latitude : res.longitude+1,
                  longitude : res.longitude+1 
                },
              }]
              }*/
            

            });

            //  res.longitude 经度
            //  res.latitude 纬度
            console.log(res.longitude);
            console.log(res.latitude);
          }
        })

      },
      
      
      controltap(e) {
        console.log(e.controlId)

        if(e.controlId == 0){
          
          //可以做0的事情

          wx.navigateTo({
            url: '/pages/warn/warn',
          })
        }
        else if(e.controlId ==1){
          //可以做1的事情
        }
      },

      1111(e){
        wx.navigateTo({
          url: '/pages/page1/page1',
        })
        
      }

    });   
