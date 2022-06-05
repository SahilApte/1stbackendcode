const mongoose = require("mongoose");

const Posts = mongoose.model('posts');

exports.baseRoute = async(req,res) => {
    res.send('Server Running');
}

exports.getPosts = async(req,res) => {
    const posts = await Posts.find();
    res.json(posts);
}