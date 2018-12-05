const db = require('../../utils/database');

//takes in name, email, password; could add more variables later if needed
exports.create = function(req, res) {
  var values = {email: req.body.email, hash: req.body.hash, salt: req.body.salt};
  if (req.body.name)
    values.name = req.body.name;

  if(values.email && values.hash && values.salt) {
    db.query("INSERT INTO users SET ?", values, function (err, result, fields) {
      if (err) return res.status(500).end();

      res.status(201).end();
    }); //"create" query
  }
};

exports.getById = function (req, res) {
  var id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [id], function (err, result, fields) {
    if (err) return res.status(500).end();
    if (result.length === 0) return res.status(404).end();

    res.status(200).send(result[0]);
  }); //selects by id
};

exports.getAll = function(req, res) {
  db.query("SELECT * FROM users", function (err, result, fields) {
    if (err) return res.status(500).end();

    res.status(200).send(result);
  }); //getAll
};


