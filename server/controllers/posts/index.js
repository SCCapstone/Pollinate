const db = require('../../utils/database'),
    helper = require('../../utils/helper');

exports.create = function (req, res) {
    let values = {title: req.body.title, price: helper.round(req.body.price, 2),
      imageUrl: req.body.imageUrl, link: req.body.link, description: req.body.description,
      category: req.body.category, "created_at": new Date(), author: req.session.user.id};
    values = helper.prepareValuesForDatabase(values);
    db.query("INSERT INTO posts SET ?", values, function (err,result, fields) {
        if (err) res.status(500).end();

        if (result.length === 0)
            res.status(401).send("Incorrect entry");
        else
            res.status(201).end();
    });
};

exports.deletePost = function (req, res) {
    var productID = req.params.id;
    db.query("DELETE FROM posts WHERE id = ?", [productID], function (err, result, fields) {
        if (err) return res.status(500).end();

        res.status(204).end();
    }); //selects by productID
};
/*Need to add productID*/
exports.updatePost = function (req, res){
  let productId = req.params.id;
  let values = {title: req.body.title, price: helper.round(req.body.price, 2),
    imageUrl: req.body.imageUrl, link: req.body.link, description: req.body.description,
    category: req.body.category};
  values = helper.prepareValuesForDatabase(values);
    db.query("UPDATE posts SET ? WHERE id = ?", [values, productId], function (err,result, fields) {
        if (err) res.status(500).end();

        if (result.length === 0)
            res.status(401).send("Incorrect entry");
        else
            res.status(200).send(result);
    });
};

exports.getPost = function (req, res) {
    var productID = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", [productID], function (err, result, fields) {
        if (err) return res.status(500).end();
        if (result.length > 0)
          result = result[0];

        res.status(200).send(result);
    }); //selects by productID
};

exports.getAllPosts = function (req, res) {
    db.query("SELECT * FROM posts", function (err, result, fields) {
        if (err) return res.status(500).end();
        res.status(200).send(result);
    }); //getAllPosts
};
