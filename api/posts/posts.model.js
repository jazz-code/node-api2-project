const knex = require("knex")
const config = require("../../knexfile")
const db = require("../../data/db")

// Get all Posts
const find = () => {
    try {
        return db("posts")
        .select(["title"])
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    find
};