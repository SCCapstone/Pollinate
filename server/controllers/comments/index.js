const db = require('../../utils/database');

exports.create = function (req, res) {
    if (!req.session.user)
        return res.status(403).end();
    if (req.body.text.length > 1000)
    {
        return res.status(422).send("Comment is too long; Must be <= 1000 characters");
    }
    let values = {userId: req.session.user.id, postId: req.body.postId, text:req.body.text};
    if (req.body.quotedCommentId)
    {
        values.quotedCommentId = req.body.quotedCommentId;
    }
    db.query("INSERT INTO comments SET ?", values, function (err, result, fields) {
        if (err) return res.status(500).end();

        if (result.length === 0)
            res.status(500).send("Incorrect entry");
        else
            res.status(201).end();
    });
};

exports.getComments = function (req, res) {
    const postId = req.params.id;
    db.query("SELECT * FROM comments_for_post WHERE postId = ?", [postId], function (err, result, fields) {
        if (err) return res.status(500).end();

        return res.status(200).send(result);
    });
};
