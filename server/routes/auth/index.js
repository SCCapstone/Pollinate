const express = require('express'),
    auth = require('../../controllers/auth');

const router = express.Router();

router.post('/login', auth.login);

router.post('/logout', auth.logout);

router.post('/signup', auth.signup);

module.exports = router;
