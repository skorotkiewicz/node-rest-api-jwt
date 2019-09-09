const Post = require('../models/Post');

module.exports = {

    // Get all the posts
    getAllPosts: async function(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json({ status: 'success', posts });
        } catch (err) {
            res.status(200).json({ status: 'error' });
        }
    },

    // Create new Post
    createPost: async function(req, res) {
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        });
        try {
            const savedPost = await post.save();
            res.status(200).json({ status: 'success', savedPost }); 
        } catch (err) {
            res.status(200).json({ status: 'error' });
        }
    },

    // Get a specific Post
    getById: async function(req, res) {
        try {
            const post = await Post.findById(req.params.postId);
            res.status(200).json({ status: 'success', post });
        } catch (err) {
            res.status(200).json({ status: 'error' });
        }
    },

    // Update a Post
    updatePost: async function(req, res) {
        try {
            const updatetPost = await Post.updateOne(
                { _id: req.params.postId }, // find by id
                { $set: { // set new value
                    title: req.body.title,
                    description: req.body.description 
                }} 
            );
            res.status(200).json({ status: 'success', updatetPost }); 
        } catch (err) {
            res.status(200).json({ status: 'error' });
        }
    },

    // Delete Post
    deletePost: async function(req, res) {
        try {
            const removedPost = await Post.deleteOne({ _id: req.params.postId });
            res.status(200).json({ status: 'success', removedPost }); 
        } catch (err) {
            res.status(200).json({ status: 'error' });
        }
    }

}