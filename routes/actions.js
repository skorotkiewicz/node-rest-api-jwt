const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts.js');

router.post('/create', postsCtrl.createPost);    // Create new Post
router.patch('/:postId', postsCtrl.updatePost);  // Update a Post
router.delete('/:postId', postsCtrl.deletePost); // Delete Post


module.exports = router;