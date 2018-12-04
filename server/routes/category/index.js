const express = require('express'),
    category = require('../../controllers/category');

const router = express.Router();

router.get('/:category', category.getAll);

module.exports = router;