const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts.js');

router.get('/', postsCtrl.getAllPosts);         // Get all the posts
router.get('/posts', postsCtrl.getAllPosts);    // Get all the posts
router.get('/post/:postId', postsCtrl.getById); // Get a specific Post


module.exports = router;