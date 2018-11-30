const db = require('../../utils/database');

//gets individual product
exports.getById = function(req, res) {
    var id = req.params.id;
    db.query("SELECT * FROM products WHERE id = ?", [id], function(err, result, fields) {
        if (err) return res.status(500).end();
        res.status(200).send(result);
    });
};

//gets all products
exports.getAll = function(req, res) {
    db.query("SELECT * FROM products", function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};

//sorts price high to low
exports.highToLow = function  (req, res) {
    db.query("SELECT * FROM products ORDER BY price DESC", function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};

//sorts price low to high
exports.lowToHigh = function  (req, res) {
    db.query("SELECT * FROM products ORDER BY price ASC", function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};

//sorts date posted from newest to oldest.
exports.newestToOldest = function  (req, res) {
    db.query("SELECT * FROM products ORDER BY datePosted DESC", function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};

//sorts date posted from oldest to newest
exports.oldestToNewest = function  (req, res) {
    db.query("SELECT * FROM products ORDER BY datePosted ASC", function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};

