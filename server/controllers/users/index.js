const db = require('../../utils/database');

/*
* The code that goes here is what actually connects to the database and runs queries
* */

//takes in name, email, password; could add more variables later if needed
exports.create = function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  if(name != null && email != null && password != null) {
    db.query("INSERT INTO users SET ?", {name, email, password}, function (err, result, fields) {
      if (err) throw err;

      res.status(201).end();
    }); //"create" query
  }
};

exports.getById = function (req, res) {
  var id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [id], function (err, result, fields) {
    if (err) throw err;

    res.status(200).send(result);
  }); //selects by id
};

exports.getAll = function(req, res) {
  db.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;

    res.status(200).send(result);
  }); //getAll
};


