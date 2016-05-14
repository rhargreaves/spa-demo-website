var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/slow/clouds.mp4', function (req, res) {
	setTimeout(function() {
		res.sendFile(__dirname + '/assets/clouds.mp4');
	}, 2000);
});

app.listen(3000);
