const express = require('express'),
    comments = require('../../controllers/comments');

const router = express.Router();

router.get('/:id',comments.getComments);

router.post('/', comments.create);

module.exports = router;