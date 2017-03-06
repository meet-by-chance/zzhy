$(function(){

	//侧边栏选项卡效果
	var div=$("#main>div");
	var p=$("article>article>aside>p");
	var index=0;
	var comp;
	p.click(function(){
		index=$(this).index();
		switch(index){
			case 0:$("#main").css("height","470px");
			       $("article>article>aside").css("height","470px");
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">关于我们</a>');
			       break;
			case 1:$("#main").css("height","668px");
                   $("article>article>aside").css("height","668px");
			       $("#main>p>span").html('<a href="index.html">首页</a> &gt; <a href="login.html">联系站长</a>');
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
