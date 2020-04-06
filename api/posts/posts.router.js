const router = require("express").Router();
const Posts = require("./posts.model");

//  Get to /api/posts
router.get("/", async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts);
    } catch (err) {
        console.log(err.message)
        res.status(400).json(err.message);
    }
})

module.exports = router