const express = require('express'),
    product = require('../../controllers/product');

const router = express.Router();

router.delete('/',product.deletePost);

router.put('/',product.updatePost);

router.get('/id',prodcut.getPost);

router.get('/',product.getAllPosts);

router.post('/', product.create);

module.exports = router;
