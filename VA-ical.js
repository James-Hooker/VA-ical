console.log("run");
NodeList.prototype.forEach = Array.prototype.forEach;
var appointments = document.querySelectorAll("table#Appointments.mhv-data-listing");
console.log("appointments: "+ appointments, appointments);
console.log("first appointment: "+ appointments[0], appointments[0]);
var rows = appointments[0].querySelectorAll("tr");
console.log("rows: "+ rows, rows);

var i = 0;
var row;
var datum;
console.log("first row: "+ rows[1], rows[1]);
console.log("row: "+ rows[1].querySelectorAll("td")[1].innerText, rows[1].querySelectorAll("td")[1].innerText);
while (rows[i+=1].querySelectorAll("td")[1].innerText=="FUTURE"){
	var time = rows[i].querySelectorAll("td")[0].innerText;
	var status = rows[i].querySelectorAll("td")[1].innerText;
	var clinic = rows[i].querySelectorAll("td")[2].innerText;
	var location = rows[i].querySelectorAll("td")[3].innerText;

	console.log("found data: ",time, status, clinic, locaiton);
};