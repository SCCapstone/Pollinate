/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon');

var app = express();

app.set('port', process.env.PORT || 8080);
//app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
