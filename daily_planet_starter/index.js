// The back end JavaScript code;

// express web framework;
// Requires:
var express = require('express');
var partials = require('express-partials'); // https://github.com/publicclass/express-partials
var bodyParser = require('body-parser');

var app = express();

// 
app.use(partials());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/static'));

var articles = [
    { title: 'Bernie! Bernie!', body: '#feelthebern' },
    { title: 'Trump for change!', body: 'Make America Great Again' },
    { title: 'Brian Hague founds the Daily Planet', body: 'Wow! Amazing! Such good news!' }
];

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/articles', function(req, res) {
    res.render('articles/index', { articles: articles });
});

app.get('/articles/new', function(req, res) {
    res.render('articles/new');
});

app.get('/articles/:index', function(req, res) {
    var index = parseInt(req.params.index);
    if (index < articles.length && index >= 0) {
        res.render('articles/show', { article: articles[req.params.index], index: req.params.index });
    } else {
        res.send('Error');
    }
});

app.post('/articles', function(req, res) {
    articles.push(req.body);
    res.redirect('/articles');
});

app.get('/about', function(req, res) {
    res.render('about');
});

// function for edit 
app.get('/articles/: index/edit', function(req, res){
    var index = parseInt(req.params.index);
    // Checks if the request exist;
    if (index<articles.length && index>=0) {  
        res.render('articles/edit', {articles: articles[index], index: index}); 
    } else {
        res.send('Error');
    }
});

// The delete function and works for the delete button;
app.delete('/articles/:index', function(req, res){
    var index = parseInt(req.params.index);
    if (index<articles.length && index>=0){
        articles.splice(index, 1);
        res.send('success');
    } else {
        res.send('Error!');
    }
});

// The put function for changing the body;
app.put("/articles/:index", function(req, res){
    var index = parseInt(req.params.index);
    console.log(req.body);
    if (index<articles.length && index>=0) {
        articles[req.params.index] = req.body;
        res.send("success!");
    } else {
        res.send("Error!");
    }
});

app.listen(3000, function() {
    console.log("You're listening to the smooth sounds of port 3000 in the morning");
});








