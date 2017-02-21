var fs = require('fs');
var path;


function readConfig()
{
    path =__dirname + "\\" + "data" + "\\"+ test.conf";
    log();
    temp();
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

function temp()
{
    var config = fs.readFileSync(path, 'utf8');
    config = config.parseInt();
    alert(config);
}

function log()
{
    fs.appendFile('log', path,(err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
    });
}
