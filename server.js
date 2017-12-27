var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store', function(req, res, next)
        {
            console.log('Jestem pośrednikiem przy żądaniu do /store');
            next();
        }
       );

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

var server = app.listen(8000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:8000');
});

app.get('/log-google', function(req, res){
    res.render('log-google',
    {
        login: "Wpisz login",
        password: "Wpisz hasło"
    }
);
});

app.get('/welcome', function(req, res){
    res.render('welcome');
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});