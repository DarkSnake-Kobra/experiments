var fs = require('fs');


function readConfig()
{
	var config = fs.readFileSync('test.conf', 'utf8');
    config = config.parseInt();
    alert(config);
}
function about()
{
	alert("Copyright (c) 2017 Jordan Bottoms\n" +
	"Released under the BSD 3 Clause License\n" +
	"Website: jordanbottoms.com");

function closeWin()
{
	window.close();
}
