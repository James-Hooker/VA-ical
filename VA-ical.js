(function() {
	var appointments = document.querySelectorAll("table#Appointments.mhv-data-listing");
	var rows = appointments[0].querySelectorAll("tr");
	var i = 0;
	var row;
	var datum;
	var apts = [];
	var head = "https://calendar.google.com/calendar/render?action=TEMPLATE";
	var icon = "images/ic_event_black_24px.svg";
	while (rows[i+=1].querySelectorAll("td")[1].innerText=="FUTURE"){
		var row = rows[i].querySelectorAll("td");
		var a = row[0].innerText;
		var c = row[2].innerText;
		var d = row[3].innerText;
		var aa = Date.parse(a);
		var ab = aa + (1 * 60 * 60 * 1000);
		var aas = new Date(aa).toISOString();
		var abs = new Date(ab).toISOString();
		var aaf = aas.replace(/\..{3}|\:|\-/g,"");
		var abf = abs.replace(/\..{3}|\:|\-/g,"");
		var l = encodeURI(
					head +
					"&text="+ "VA Appointment"+
					"&dates="+ aaf + "\/" + abf +
					"&details="+ c +
					"&location="+ d
				);
		var apt = [a,c,d];
		apts[i-1] = apt;
		var al = document.createElement("a");
		var ico = document.createElement("img");
		al.setAttribute("href",l);
		al.setAttribute("target","_blank");
		al.appendChild(ico);
		ico.setAttribute("src", chrome.extension.getURL(icon));
		ico.setAttribute("alt", "Add to Calendar");
		row[0].appendChild(al);

	};
})();
