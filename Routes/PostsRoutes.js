const mongoose=require("mongoose");

const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('Server Running');
});

router.get('/getPosts',async (req,res) =>{
    const posts = await Posts.find();
    res.json(posts);
});

module.exports = router;