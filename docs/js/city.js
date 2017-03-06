$(function(){

    //侧边栏选项卡效果
	var div=$("#main>div");
	var p=$("article>article>aside>p");
	var index=0;
	var comp;
	p.click(function(){
		index=$(this).index();
		switch(index){
			case 0:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">中心城区</a>');
			       break;
			case 1:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">金水区</a>');
			       break;
			case 2:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">惠济区</a>');
			       break;
			case 3:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">中原区</a>');
			       break;
			case 4:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">二七区</a>');
			       break;
			case 5:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">管城区</a>');
			       break;
			case 6:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">高新技术开发区</a>');
			       break;
			case 7:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">经济技术开发区</a>');
			       break;
			case 8:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">郑东新区</a>');
			       break;
			case 9:
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">上街区</a>');
			       break;
		}
		$(div[index]).css("display","block").siblings(":not(p)").css("display","none");

		//侧边栏被点击时改变样式
		$(this).addClass("click").siblings().removeClass("click hover");
        $(this).siblings().children("i").removeClass("i");
	});

    //侧边栏被悬浮时改变样式
	p.mouseover(function(){
		comp=$(this).index();
		if(comp!==index){
		    $(this).addClass("hover");
		    $(this).children("i").addClass("i");
	   }
	}).mouseout(function(){
		if(comp!==index){
		    $(this).removeClass("hover");
		    $(this).children("i").removeClass("i");
		}
	});

});
