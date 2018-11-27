const express = require('express'),
    category = require('../../controllers/category');

const router = express.Router();

router.get('/', category.getAll);

router.get('/', category.getById);

module.exports = router;