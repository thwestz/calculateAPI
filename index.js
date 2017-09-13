var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(function(req, res, next) {
    next();
});

app.use(bodyParser.json());

app.post('/calculator/rest/minus', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var object = {
        "x": x,
        "y": y,
        "Minus Result is": x-y
    }
    res.json(object);
});

app.post('/calculator/rest/multiply', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var object = {
        "x": x,
        "y": y,
        "Multiply Result is": x*y
    }
    res.json(object);
});
app.post('/calculator/rest/divide', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var object = {
        "x": x,
        "y": y,
        "Divide Result is": x/y
    }
    res.json(object);
});



app.listen(3000, function() {
    console.log('Starting node on port 3000');
});