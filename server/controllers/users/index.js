const db = require('../../utils/database'),
    helper = require('../../utils/helper');

//takes in name, email, password; could add more variables later if needed
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
  }); //getAll
};

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


