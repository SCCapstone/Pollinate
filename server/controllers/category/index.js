const db = require('../../utils/database');


//gets all products
exports.getAll = function(req, res) {
    var category = req.params.category;
    db.query("SELECT * FROM products WHERE category=?", [category], function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};


