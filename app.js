var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

var counter = 10000;

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

app.get('/counter', function(req, res) {
  res.send({ value: counter });
});

setInterval(function(){
  counter++;
}, 71);


app.listen(process.env.PORT || 3000);
