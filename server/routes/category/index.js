const express = require('express'),
    category = require('../../controllers/category');

const router = express.Router();

router.get('/', category.getAll);

router.get('/', category.getById);

router.get('/', category.highToLow);

router.get('/', category.lowToHigh);

module.exports = router;