const db = require('../../utils/database');

exports.login = function (req, res) {
  // Use req.body to get POST body. Check if user is in database and match password. Use res.send() to send error if
  // user doesn't exist/pass doesn't match, or send the non-sensitive user info
};
