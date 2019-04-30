const db = require('../../utils/database'),
    helper = require('../../utils/helper');

// Takes in title, price, imageUrl, link, description, category, and expires_at
// Generates created_at and gets author from the currently logged in user
// Sanitizes these values and creates a post with them
exports.create = function (req, res) {
    let values = {title: req.body.title, price: helper.round(req.body.price, 2),
      imageUrl: req.body.imageUrl, link: req.body.link, description: req.body.description,
      category: req.body.category, "created_at": new Date(), author: req.session.user.id,
      expires_at: req.body.expires_at};
    values = helper.prepareValuesForDatabase(values);
    db.query("INSERT INTO posts SET ?", values, function (err,result, fields) {
        if (err) res.status(500).end();

        if (result.length === 0)
            res.status(401).send("Incorrect entry");
        else
            res.status(201).end();
    });
};

// Deletes a post by its id, ensuring the correct user is logged in
exports.deletePost = function (req, res) {
    var productID = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", [productID], function (err, result, fields) {
    if(result[0] && result[0].author === req.session.user.id){
        db.query("DELETE FROM posts WHERE id = ?", [productID], function (err, result, fields) {
            if (err) return res.status(500).end();

            return res.status(204).end();
        }); //selects by productID
    }
    else{
        return res.status(403).end();
    }

    })

};

// Update post by its id
exports.updatePost = function (req, res){
  let productId = req.params.id;
  let values = {title: req.body.title, price: helper.round(req.body.price, 2),
    imageUrl: req.body.imageUrl, link: req.body.link, description: req.body.description,
    category: req.body.category, expires_at: req.body.expires_at};
  values = helper.prepareValuesForDatabase(values);
    db.query("UPDATE posts SET ? WHERE id = ?", [values, productId], function (err,result, fields) {
        if (err) res.status(500).end();

        if (result.length === 0)
            res.status(401).send("Incorrect entry");
        else
            res.status(200).send(result);
    });
};

// Returns post by its id
exports.getPost = function (req, res) {
    var productID = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", [productID], function (err, result, fields) {
        if (err) return res.status(500).end();
        if (result.length > 0)
          result = result[0];

        res.status(200).send(result);
    });
};

// Retrieves all posts from the all_posts db view
exports.getAllPosts = function (req, res) {
    db.query("SELECT * FROM all_posts", function (err, result, fields) {
        if (err) return res.status(500).end();
        res.status(200).send(result);
    }); //getAllPosts
};
