const express = require('express'),
    users = require('../../controllers/users');

const router = express.Router();

/**
 Code goes here
 **/

//getAll
router.get('/', users.getAll);

//me
router.get('/me', users.me);

//getById
router.get('/:id', users.getById);

module.exports = router;
