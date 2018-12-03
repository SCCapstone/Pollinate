const crypto = require('crypto'),
    db = require('../../utils/database'),
    users = require('../users');

exports.login = function (req, res) {
  // Use req.body to get POST body. Check if user is in database and match password. Use res.send() to send error if
  // user doesn't exist/pass doesn't match, or send the non-sensitive user info
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?", [email], function (err, result, fields) {
    if (err)
      return res.status(500).end();
    if (!result)
      return res.status(401).send("Incorrect username or password");

    const user = result[0];
    // Hash inputted password using user's salt
    const hash = hashPassword(user.salt, password);

    // If user's hash equals generated hash, the password is correct
    if (user.hash === hash)
      return res.status(200).end();
    else
      return res.status(401).send("Incorrect username or password");
  });
};

exports.signup = function (req, res) {
  // Generate random string to use as a salt, then hash the user inputted password w/ the salt
  req.body.salt = crypto.randomBytes(16).toString('hex');
  req.body.hash = hashPassword(req.body.salt, req.body.password);
  users.create(req, res);
};

function hashPassword(salt, pass) {
  return crypto.pbkdf2Sync(pass, salt,
      1000, 64, `sha512`).toString(`hex`);
}
