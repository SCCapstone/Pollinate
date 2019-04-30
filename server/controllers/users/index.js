const db = require('../../utils/database'),
    helper = require('../../utils/helper');

// Takes in email, hash, salt, name, location, biography, and profileImgUrl from the request body
// Removes any empty values and ensures necessary values are defined
// Creates new user with said values or returns an error message if the email is already taken
exports.create = function(req, res) {
  let values = {email: req.body.email, hash: req.body.hash, salt: req.body.salt, name: req.body.name,
    location: req.body.location, biography: req.body.biography, profileImgUrl: req.body.profileImgUrl};
  values = helper.prepareValuesForDatabase(values);

  if(values.email && values.hash && values.salt) {
    db.query("INSERT INTO users SET ?", values, function (err, result, fields) {
      if (err && err.code === 'ER_DUP_ENTRY')
        return res.status(200).json({type: 'error', message: 'Email already taken'});
      else if (err)
        return res.status(500).end();

      res.status(201).end();
    }); //"create" query
  }
};

// Returns a user based on the parameter id, or a 404 if no user with that id exists
exports.getById = function (req, res) {
  var id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [id], function (err, result, fields) {
    if (err) return res.status(500).end();
    if (result.length === 0) return res.status(404).end();

    let user = result[0];
    db.query("SELECT COUNT(*) as dealsPosted from posts WHERE author=?", id, function (err, result, fields) {
      if (err || result.length === 0) return res.status(200).send(user);

      user.dealsPosted = result[0].dealsPosted;
      return res.status(200).send(user);
    });
  }); //selects by id
};

exports.getAll = function(req, res) {
  db.query("SELECT * FROM users", function (err, result, fields) {
    if (err) return res.status(500).end();

    res.status(200).send(result);
  });
};

// Returns all the non-sensitive data about the currently logged in user, or returns a 403 status if no one is logged in
exports.me = function(req, res) {
  const user = req.session.user;
  if (!user) {
    return res.status(403).end();
  }

  db.query("SELECT COUNT(*) as dealsPosted from posts WHERE author=?", user.id, function (err, result, fields) {
    if (err || result.length === 0) return res.status(200).send(user);

    user.dealsPosted = result[0].dealsPosted;
    return res.status(200).send(user);
  });
};

// Updates the currently logged in user, or returns a 403 status if no one is logged in
exports.updateMe = function (req, res) {
  const user = req.session.user;
  if (!user)
    return res.status(403).end();

  db.query("UPDATE users SET ? WHERE id = ?", [req.body, user.id], function (err, result, fields) {
    if (err) return res.status(500).end();

    req.session.user = {...req.session.user, ...req.body};
    return res.status(200).end();
  });
};


