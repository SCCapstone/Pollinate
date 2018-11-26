const db = require('../../utils/database'),
    product = require('../product');

exports.create = function (req, res) {
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var link = req.body.link;
    var description = req.body.description;
    db.query("INSERT * FROM product SET name = ? AND" +
        "price = ? AND image = ? AND link = ? AND" +
        "description = ?", [name,price,image,link,description], function (err,result, fields) {
        if (err) res.status(500).end();

        if (result.length === 0)
            res.status(401).send("Incorrect entry");
        else
            res.status(200).send(result);
    });
};

exports.deletePost = function (req, res) {
    var productID = req.body.productID;
    db.query("DELETE * FROM product WHERE productID = ?", [productID], function (err, result, fields) {
        if (err) return res.status(500).end();

        res.status(200).send(result);
    }); //selects by productID
};
/*Need to add productID*/
exports.updatePost = function (req, res){
    var productID = req.body.productID;
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var link = req.body.link;
    var description = req.body.description;
    db.query("UPDATE * FROM product SET name = ? AND" +
        "price = ? AND image = ? AND link = ? AND" +
        "description = ?", [name,price,image,link,description], function (err,result, fields) {
        if (err) res.status(500).end();

        if (result.length === 0)
            res.status(401).send("Incorrect entry");
        else
            res.status(200).send(result);
    });
};

exports.getPost = function (req, res) {
    var productID = req.params.productID;
    db.query("SELECT * FROM product WHERE productID = ?", [productID], function (err, result, fields) {
        if (err) return res.status(500).end();

        res.status(200).send(result);
    }); //selects by productID
};

exports.getAllPosts = function (req, res) {
    db.query("SELECT * FROM product", function (err, result, fields) {
        if (err) return res.status(500).end();

        res.status(200).send(result);
    }); //getAllPosts
};