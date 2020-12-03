function timerefresh() {
	// Old 1 digit time/date code
	/*
	var currenttime = new Date();
var date = currenttime.getFullYear()+'-'+("0" + (currenttime.getMonth() + 1)).slice(-2)+'-'+(currenttime.getDate() + 1);
var time = currenttime.getHours() + ":" + currenttime.getMinutes() + ":" + currenttime.getSeconds();
var currentdatetime = date+' '+time;
document.getElementById('time').innerHTML = "<p>" + currentdatetime + "</p>";
}
*/	
/* code from my old index for 2 Digit date/times*/ 
var loadtime = new Date();
current = "<big>" + (("0"+loadtime.getDate()).slice(-2)) +"/"+ (("0"+(loadtime.getMonth()+1)).slice(-2)) +"/"+ (loadtime.getFullYear()) +" "+ (("0"+loadtime.getHours()).slice(-2)) +":"+ (("0"+loadtime.getMinutes()).slice(-2)) + "</big>";
document.getElementById("time").innerHTML = current
}