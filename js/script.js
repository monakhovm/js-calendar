function nCalendar() {
	//---------------------------------------VARIABLES------------------------------------------------------------
	
	var dayOfWeek = [
		"Пн",
		"Вт",
		"Ср",
		"Чт",
		"Пт",
		"Сб",
		"Вс"
	];
	var today = new Date("02/01/2016");
	var dayMonth = new Date(today.getFullYear(),today.getMonth()+1,0).getDate();
	var div = document.createElement("div");
	var week = document.createElement("div");
	var offset = (dayMonth%7-7)*-1;
	var counter = 0;
	var calendar = document.createElement("div");
	var br = document.createElement("br");
	var wrapper = document.createElement("div")
	var day = document.createElement("div");

	//--------------------------------------/VARIABLES------------------------------------------------------------


	document.body.appendChild(calendar).setAttribute("id", "calendar");
	document.getElementById("calendar").appendChild(week).setAttribute("id","week");
	

	for (var i = 0; i < dayOfWeek.length; i++) {
		var day = document.createElement("div");
		document.getElementById("week").appendChild(day).setAttribute("id", "day" + i);
		document.getElementById("day" + i).innerHTML = dayOfWeek[i];
		document.getElementById("day" + i).className = "day-of-week";
		document.getElementById("day" + i).style.background = "rgba(150, 150, 255, 0.5)";
	};

	

	document.getElementById("calendar").appendChild(br);
	

	
	document.getElementById("calendar").appendChild(wrapper).setAttribute("id", "wrp");

	for (var i = counter; i < offset; i++) {
		var day = document.createElement("div");
		document.getElementById("wrp").appendChild(day);
		
	};

	for (var i = counter; i < 7 - offset; i++) {
		var day = document.createElement("div");
		document.getElementById("wrp").appendChild(day).innerHTML = counter+1;
		if (counter+1==today.getDate()) {
			day.style.background = "rgba(150, 255, 150, 0.5)"
		} else {
			(i+offset>4) ? day.style.background = "rgba(255, 150, 150, 0.5)" : "";
			(counter+1 == 1 || counter+1 == 7 || counter+1 == 14 || counter+1 == 21) ? day.style.background = "rgba(255, 150, 150, 0.5)" : "";
		}
		counter++;
	};

	document.getElementById("wrp").appendChild(br);


	for (var i = 0; i < (dayMonth-dayMonth%7)/7; i++) {
		for (var j = 0; j < 7; j++) {
			if (counter+1<=dayMonth) {
				var day = document.createElement("div");
				document.getElementById("wrp").appendChild(day).innerHTML = counter+1;
				if (counter+1==today.getDate()) {
					day.style.background = "rgba(150, 255, 150, 0.5)";
				} else {
					(j > 4) ? day.style.background = "rgba(255, 150, 150, 0.5)" : "";
				}
				counter++;
			};
			(counter == 1 || counter == 7 || counter == 14 || counter == 21) ? day.style.background = "rgba(255, 150, 150, 0.5)" : "";
		}
		document.getElementById("wrp").appendChild(br);
	};	
}

nCalendar();




