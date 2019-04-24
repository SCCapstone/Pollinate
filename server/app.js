const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    store = new session.MemoryStore();

if (!process.env['DB_HOST'])
  require('dotenv').config();

const app = express();
app.use(session({
  store: store,
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(require("cors")());
//app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/static', express.static(path.join(__dirname, './public')));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/likes', require('./routes/likes'));
app.use('/api/category', require('./routes/category'));
app.use('/api/comments', require('./routes/comments'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const http = require("http");
setInterval(function() {
  http.get("http://pollinate-usc.herokuapp.com/");
}, 600000); // every 10 minutes (600000)

const port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Express server listening on port " + port);
});
