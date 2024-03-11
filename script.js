var date = document.createElement("input");
date.setAttribute("type","date");
date.innerHTML = "DateConversion";
date.id = "dob";

var button = document.createElement("button");
button.setAttribute("type","button")
button.classname = "btn btn-primary";
button.innerHTML = "clickme";
button.addEventListener("click",date_data)

document.body.append(date,button)
function date_data(){
var input = document.getElementById("dob").value;
var input_date = new Date(input);
var currentdate = new Date();
console.log(currentdate);


var millisecdiff = parseInt(currentdate.getTime()-input_date.getTime())
console.log(millisecdiff)

var seconddiff = Math.floor(millisecdiff/1000)
console.log(seconddiff)

var minutediff = Math.floor(seconddiff/60)
console.log(minutediff)

var hourdiff = Math.floor(minutediff/60)
console.log(hourdiff)

var daysdiff = Math.floor(hourdiff/24)
console.log(daysdiff)

var yeardiff = currentdate.getFullYear()-input_date.getFullYear();
console.log(yeardiff)

var monthdiff = (yeardiff*12)-(currentdate.getMonth()-input_date.getMonth())
console.log(monthdiff)

}




  