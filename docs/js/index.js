 $(function(){
       //切换bannerMain图片
       var liList=$("#bannerMain>ul>li");
       var spanList=$("#bannerMain>span");
       var index=1;
       var changeBg=function(){
          if(index>2){index=0;}
          $(liList[index]).animate({opacity:1},"slow").siblings().animate({opacity:0},"slow");
          $(spanList[index]).css({"background-color":"#fff","transition":"background-color 600ms ease 0s"}).siblings().css({"background-color":"#375c81","transition":"background-color 600ms ease 0s"});
          index++;
       };
        var bannerInterval=setInterval(changeBg,2000);

       //鼠标悬浮图片或图标时暂停切换，离开后继续切换
       spanList.mouseover(function(){
              clearInterval(bannerInterval);
              //鼠标悬浮时切换到相对应的图片
                index=$(this).index()-1;
                changeBg();
       });
       liList.mouseover(function(){
              clearInterval(bannerInterval);
       }).mouseout(function(){
              bannerInterval=setInterval(changeBg,2000);
       });

     /* $("#banner>form>input:first-child").autocomplete({
            autoFocus:true,
            minLength:1,
            source:["cx","yh"]
      });*/
});
