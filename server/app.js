const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');
    //favicon = require('serve-favicon');

require('dotenv').config();

const app = express();

app.use(require("cors")());
//app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/static', express.static(path.join(__dirname, './public')));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/category', require('./routes/category'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Express server listening on port " + port);
});
