const express = require('express'),
    users = require('../../controllers/users');

const router = express.Router();

/**
Code goes here
 **/

//create
router.post('/signup', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    if(name != null && email != null && password != null) {
        create(name, email, password);
        res.status(201);
    }
});

//getById
router.get('/login', function(req, res){
    var email = req.body.email; //could change to id in the future

    if(email != null) {
        getById(email);
        res.status(200);
    }
    else {
        res.status(401);
    }
});

//getAll
router.get(function(req, res){
    getAll();
    res.status(200);
});

module.exports = router;
