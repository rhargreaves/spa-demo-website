var express = require('express');
var exphbs  = require('express-handlebars');
var request = require('request');

var app = express();

var counter = 10000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	res.render('home');
});

app.get('/slow/clouds.mp4', function (req, res) {
	setTimeout(function() {
		var options = {
			url: 'https://s3-eu-west-1.amazonaws.com/robh-tdd-cdn-demo-site-resources/clouds.mp4',
			headers: {
				range: req.headers.range
			}
		};
		request(options).pipe(res);
	}, 2000);
});

app.get('/counter', function(req, res) {
	res.send({ value: counter });
});

setInterval(function(){
	counter++;
}, 333);


app.listen(process.env.PORT || 3000);
