$(function(){
	//设置今日日期
        var  string,year,month,day,hours,minutes,seconds,week;
        function  setDate(){
                 date=new  Date();
                 year=date.getFullYear();
       	   month=date.getMonth();
       	   day=date.getDate();
       	   hours=date.getHours();
                 minutes=date.getMinutes();
                 seconds=date.getSeconds();
                 if(minutes<10){
                     minutes="0"+minutes;
                 }
                 if(seconds<10){
                     seconds="0"+seconds;
                 }
                 week=date.getDay();
                 switch(week){
                     case 0:week="日";break;
                     case 1:week="一";break;
                     case 2:week="二";break;
                     case 3:week="三";break;
                     case 4:week="四";break;
                     case 5:week="五";break;
                     case 6:week="六";break;
                 }
       	   if(hours>12){
       	        string=year+"年"+(month+1)+"月"+day+"日&nbsp;&nbsp;下午"+(hours-12)+":"+minutes+":"+seconds+"&nbsp;&nbsp;星期"+week;
       	        }
                 else{
                       if(hours<10){
                             hours="0"+hours;
                         }
                       string=year+"年"+(month+1)+"月"+day+"日&nbsp;&nbsp;上午"+hours+":"+minutes+":"+seconds+"&nbsp;&nbsp;星期"+week;
                     }
                 $("#date").html(string);
       	    }
       setInterval(setDate,1000);

});
