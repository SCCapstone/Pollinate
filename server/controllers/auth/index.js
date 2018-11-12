const db = require('../../utils/database'),
    users = require('../users');

exports.login = function (req, res) {
  // Use req.body to get POST body. Check if user is in database and match password. Use res.send() to send error if
  // user doesn't exist/pass doesn't match, or send the non-sensitive user info
  var email = req.body.email;
  var password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], function (err, result, fields) {
    if (err) throw err;

    if (result.length === 0)
      res.status(401).send("Incorrect username or password");
    else
      res.status(200).send(result);
  }); //selects by id
};

exports.signup = function (req, res) {
  users.create(req, res);
};
