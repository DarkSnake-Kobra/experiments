var fs = require('fs');


function readConfig()
{
	configPath =__dirname + "\\" + "data" + "\\" + "config.conf";
    var config = fs.readFileSync(configPath, 'utf8');
    document.getElementById('number').value= config;
}
function about()
{
	alert("Copyright (c) 2017 Jordan Bottoms\n" +
	"Released under the BSD 3 Clause License\n" +
	"Website: jordanbottoms.com");
}

function closeWin()
{
	window.close();
}
