const db = require('../../utils/database');


//Grabbing all posts in database with the specified category from the parameter in the request
exports.getAll = function(req, res) {
    var category = req.params.category;
    db.query("SELECT * FROM all_posts WHERE category=?", [category], function(err, result, fields) {
        if(err) return res.status(500).end();
        res.status(200).send(result);
    });
};


