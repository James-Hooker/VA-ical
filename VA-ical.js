console.log("run");
var sp= "\t-\t";
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
var apts = [];
while (rows[i+=1].querySelectorAll("td")[1].innerText=="FUTURE"){
	var apt = [];
	apt[0] = rows[i].querySelectorAll("td")[0].innerText;
	apt[1] = rows[i].querySelectorAll("td")[2].innerText;
	apt[2] = rows[i].querySelectorAll("td")[3].innerText;
	apts[i-1] = apt;
	console.log("found data: ",apt[0],sp,apt[1],sp,apt[2]);
	console.log(
		apt[0],
		Date.parse(apt[0]),
		new Date(Date.parse(apt[0])).toISOString()
	);
	//	06/13/2016 10:00
	console.log(apts);
};