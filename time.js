function timerefresh() {
var loadtime = new Date();
current = "<big>" + (("0"+loadtime.getDate()).slice(-2)) +"/"+ (("0"+(loadtime.getMonth()+1)).slice(-2)) +"/"+ (loadtime.getFullYear()) +" "+ (("0"+loadtime.getHours()).slice(-2)) +":"+ (("0"+loadtime.getMinutes()).slice(-2)) + "</big>";
document.getElementById("time").innerHTML = current
}
