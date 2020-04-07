const router = require("express").Router();
// const Posts = require("./posts.model");
const Posts = require('../../data/db')
// const router = express.Router()
 
// const express = require('express')
// const Posts = require('../../data/db')

// const router = express.Router()

//  Get posts => /api/posts
router.get("/", async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts);
    } catch (err) {
        console.log(err.message)
        res.status(400).json({
            errorMessage: 'The posts information could not be retrieved.'
        });
    }
})

// Get post by ID => /api/posts/:id
router.get("/:id", async (req, res) => {
    const id = req.params
    try {
        // const id = await Posts.findById();
        // res.status(200).json({
        //     url: `/${id}`,
        //     operation: `GET For post id ${id}`})
        res.status(200).json(id)
    }
    catch(err) {
        console.log(err.message)
        res.status(400).json({
            errorMessage: "Please provide title and contents for the post."
        });
    }
})

// module.exports = {
//     find
// };
module.exports = router