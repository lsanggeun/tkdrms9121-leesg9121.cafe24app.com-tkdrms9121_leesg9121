var express = require('express');

var path = process.cwd();

var api = require(path + '/base');
var jsonResult = require(path + '/result');

var app = express();

app.get('/Login', function(req, res) {
	var user_id = req.query.id;
	var user_password = req.query.password;

	if (user_id != null && user_password != null) {
		api.Login(res, user_id, user_password);
	} else {
		 res.send(jsonResult.null_params());
	}
});

app.post('/Register', function(req, res) {
	var chunk = '';
	req.on('data', function(data) {
		chunk = JSON.parse(data);
		
	});
	req.on('end', function() {
		console.log(chunk);
	});

});

app.get('/Posting', function(req, res) {

});

app.listen(8001);
console.log('Listening on port 3000...');