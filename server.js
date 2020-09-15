var express = require('express');
var app= express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Authors',{ useUnifiedTopology: true, useNewUrlParser: true });

require('./server/config/mongoose.js');

var routes = require('./server/config/routes.js');
routes(app);

var Author = mongoose.model('Author');

app.listen('8000', function () {
    console.log('listening on port 8000');
})
