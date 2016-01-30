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
	var realToday = new Date();
	(location.search == "") ? today = new Date() : today = new Date(location.search.split('?')[1]);
	var dayMonth = new Date(today.getFullYear(),today.getMonth()+1,0).getDate();
	var div = document.createElement("div");
	var week = document.createElement("div");
	var firstDay = new Date((((today.getMonth()+1)).toString() +"/01/"+ (today.getFullYear())).toString());
	(firstDay.getDay() > 0) ? offset = firstDay.getDay()-1 : offset = firstDay.getDay()+6;
	var counter = 0;
	var calendar = document.createElement("div");
	var br = document.createElement("br");
	var main = document.createElement("div")
	var day = document.createElement("div");
	var newDate = document.createElement("div");
	var newDay = document.createElement("input");
	var newMonth = document.createElement("input");
	var newYear = document.createElement("input");
	var submit = document.createElement("input");
	var form = document.createElement("form");
	var userDate = "";

	//--------------------------------------/VARIABLES------------------------------------------------------------

	document.body.appendChild(calendar).setAttribute("id", "calendar");


	//--------------------------------------INPUT-BLOCK------------------------------------------------------------

	document.getElementById("calendar").appendChild(newDate).setAttribute("id","newDate");
	document.getElementById("newDate").appendChild(form).setAttribute("id", "form");
	document.getElementById("form").setAttribute("action", "/");
	document.getElementById("form").setAttribute("method", "get");

	document.getElementById("form").appendChild(newDay).setAttribute("id", "newDay");
	document.getElementById("form").appendChild(newMonth).setAttribute("id", "newMonth");
	document.getElementById("form").appendChild(newYear).setAttribute("id", "newYear");
	document.getElementById("form").appendChild(submit).setAttribute("id", "submit");
	document.getElementById("submit").setAttribute("type", "button");
	document.getElementById("submit").setAttribute("value", "Получить");

	document.getElementById("newDay").setAttribute("placeholder","Число");	
	document.getElementById("newMonth").setAttribute("placeholder","Месяц");
	document.getElementById("newYear").setAttribute("placeholder","Год");

	document.getElementById("newDay").style.width = "5rem";	
	document.getElementById("newMonth").style.width = "5rem";
	document.getElementById("newYear").style.width = "5rem";

	document.getElementById("newDay").style.margin = "1rem 2rem";
	document.getElementById("newMonth").style.margin = "1rem 2rem";
	document.getElementById("newYear").style.margin = "1rem 2rem";

	document.getElementById("newDate").style.width = "100%"
	document.getElementById("newDate").style.textAlign = "center";

	for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
		document.getElementsByTagName("input")[i].style.textAlign = "center";
	};

	document.getElementById("submit").onclick = function() {		
		if (parseInt(document.getElementById("newDay").value)/1 == parseInt(document.getElementById("newDay").value) && parseInt(document.getElementById("newMonth").value)/1 == parseInt(document.getElementById("newMonth").value) &&	parseInt(document.getElementById("newYear").value)/1 == parseInt(document.getElementById("newYear").value)) {
			(document.getElementById("newMonth").value!='' && document.getElementById("newDay").value!='' && document.getElementById("newYear").value!='') ? location.href = "?" + document.getElementById("newMonth").value + "/" + document.getElementById("newDay").value + "/" + document.getElementById("newYear").value : location.href = '';
		} else {
			alert("Телепатия отключена за неуплату. Проверьте правильность ввода.");
		};

	}

	//--------------------------------------/INPUT-BLOCK------------------------------------------------------------

	document.getElementById("calendar").appendChild(week).setAttribute("id","week");
	document.getElementById("calendar").style.outline = "1px solid grey";

	//--------------------------------------DAYS-OF-WEEK-----------------------------------------------------------

	for (var i = 0; i < dayOfWeek.length; i++) {
		var day = document.createElement("div");
		document.getElementById("week").appendChild(day).setAttribute("id", "day" + i);
		document.getElementById("day" + i).innerHTML = dayOfWeek[i];
		document.getElementById("day" + i).className = "day-of-week";
		document.getElementById("day" + i).style.background = "rgba(150, 150, 255, 0.5)";
	};

	//--------------------------------------/DAYS-OF-WEEK----------------------------------------------------------

	document.getElementById("calendar").appendChild(br);
	document.getElementById("calendar").appendChild(main).setAttribute("id", "main");

	//--------------------------------------FIRST-WEEK--------------------------------------------------------------

	for (var i = counter; i < offset; i++) {
		var day = document.createElement("div");
		document.getElementById("main").appendChild(day);
		
	};

	for (var i = counter; i < 7 - offset; i++) {
		var day = document.createElement("div");
		document.getElementById("main").appendChild(day).innerHTML = counter+1;
		if (counter+1==today.getDate()) {
			day.style.background = "rgba(150, 255, 150, 0.5)"
		} else if(counter+1 == realToday.getDate() && today.getMonth() == realToday.getMonth() && today.getFullYear() == realToday.getFullYear()) {
			day.style.background = "rgba(156, 255, 2, 0.8)"
		} else {
			(i+offset>4) ? day.style.background = "rgba(255, 150, 150, 0.5)" : "";
			//(counter+1 == 1 || counter+1 == 7 || counter+1 == 14 || counter+1 == 21) ? day.style.background = "rgba(255, 150, 150, 0.5)" : "";
		}
		counter++;
	};

	//--------------------------------------/FIRST-WEEK--------------------------------------------------------------

	document.getElementById("main").appendChild(br);
	
	//--------------------------------------OTHER-WEEKS--------------------------------------------------------------

	for (var i = 0; i < ((dayMonth-dayMonth%7)/7)+1; i++) {
		for (var j = 0; j < 7; j++) {
			if (counter+1<=dayMonth) {
				var day = document.createElement("div");
				document.getElementById("main").appendChild(day).innerHTML = counter+1;
				if (counter+1==today.getDate()) {
					day.style.background = "rgba(150, 255, 150, 0.5)";
				} else if(counter+1 == realToday.getDate() && today.getMonth() == realToday.getMonth() && today.getFullYear() == realToday.getFullYear()) {
					day.style.background = "rgba(156, 255, 2, 0.8)"
				} else {
					(j > 4) ? day.style.background = "rgba(255, 150, 150, 0.5)" : "";
				}
				counter++;
			};
			//(counter == 1 || counter == 7 || counter == 14 || counter == 21) ? day.style.background = "rgba(255, 150, 150, 0.5)" : "";
		}
		document.getElementById("main").appendChild(br);
	};
	
	//--------------------------------------/OTHER-WEEKS--------------------------------------------------------------	
}

nCalendar();




