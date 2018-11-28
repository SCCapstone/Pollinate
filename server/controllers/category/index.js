const db = require('../../utils/database');

//gets individual product
exports.getById = function(req, res) {
    var id = req.params.id;
    db.query("SELECT * FROM product WHERE id = ?", [id], function(err, result, fields) {
        if (err) return res.status(500).end();
        res.status(200).send(result);
    });
};

//gets all products
exports.getAll = function(req, res) {
    db.query("SELECT * FROM product", function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};

//sorts price high to low
exports.highToLow = function  (req, res) {
    db.query("SELECT * FROM product ORDER BY price DESC", function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};

//sorts price low to high
exports.lowToHigh = function  (req, res) {
    db.query("SELECT * FROM product ORDER BY price ASC", function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};