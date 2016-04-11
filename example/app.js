var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render('index');
});

app.listen(5000, function (err) {
    console.log('wokring!');
});