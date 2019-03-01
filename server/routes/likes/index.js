const express = require('express'),
    likes = require('../../controllers/likes');

const router = express.Router();

router.get('/:id',likes.getLikes);

router.post('/:id', likes.create);

module.exports = router;
