var express = require('express');

//create app
var app = express();
app.use(express.static('public'));

app.listen(3000, function(){
	console.log("server runs in port 3000!");
});