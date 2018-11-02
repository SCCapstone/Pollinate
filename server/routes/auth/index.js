const express = require('express'),
    auth = require('../../controllers/auth');

const router = express.Router();

router.post('/login', auth.login);

module.exports = router;
