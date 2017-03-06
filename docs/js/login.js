$(function(){

	//清空输入代码
	$("#main>form>p>i").click(function(){
           $(this).siblings("input").val("");
	});

	//错误提示
	var input=$("#main>form>p>input:lt(3)");
	//alert(input);
	//$(input[0]).blur(function(){
		//var len=$(this).val().length;
		//if(len<3){
		//	alert("用户名至少为3个字符");
		//}
		//else if(len>6){
			//alert("用户名最多6个字符");7ec0ee
		//}
	//});

    //获取焦点
       input.focus(function(){
       	  $(this).css("border","thin solid #7ec0ee");
       });

    //失去焦点
      input.blur(function(){
      	  $(this).css("border", "thin solid #dededc");
      });

    //鼠标悬浮
      input.mouseover(function(){
      	  $(this).css("border","thin solid #7ec0ee");
      });

    //鼠标移开
    input.mouseout(function(){
    	 $(this).css("border","thin solid #dededc");
    });
 
});
