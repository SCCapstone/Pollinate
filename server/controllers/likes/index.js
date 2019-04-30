const db = require('../../utils/database');

exports.create = function (req, res) {
    if (!req.session.user)
      return res.status(403).end();

    //
    let values = {userId: req.session.user.id, postId: req.params.id};
    db.query("INSERT INTO likes SET ?", values, function (err, result, fields) {
        if (err) return res.status(500).end();

        if (result.length === 0)
            res.status(401).send("Incorrect entry");
        else
            res.status(201).end();
    });
};

exports.getLikes = function (req, res) {
    const postId = req.params.id;
    db.query("SELECT * FROM likes WHERE postId = ?", [postId], function (err, result, fields) {
        if (err) return res.status(500).end();

        return res.status(200).send(result);
    }); //selects by productID
};
