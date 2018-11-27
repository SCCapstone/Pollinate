const db = require('../../utils/database');

//gets individual product
exports.getById = function(req, res) {
    var id = req.params.id;
    db.query("SELECT * FROM product WHERE id = ?", [id], function(err, result, fields) {
        if (err) return res.status(500).end();
        res status(200).send(result);
    });
};

//possibly add a function where products are gotten by their "categories"

//gets all products
exports.getAll = function(req, res) {
    db.query("SELECT * FROM product", function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};
