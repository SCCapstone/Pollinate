const express = require('express'),
    product = require('../../controllers/posts');

const router = express.Router();

router.delete('/:id',product.deletePost);

router.put('/:id',product.updatePost);

router.get('/:id',product.getPost);

router.get('/',product.getAllPosts);

router.post('/', product.create);

module.exports = router;
