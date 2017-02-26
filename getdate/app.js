function retrieveDate()
{
	var date;
	date = new Date();
	document.getElementById("showDate").value = date;
}

function about()
{
	alert("Copyright (c) 2017 Jordan Bottoms\n" +
	"Released under the BSD 3 Clause License\n");
}

function closeWin()
{
	window.close();
}
