const knex = require("knex")
const config = require("../../knexfile")
const db = require("../../data/db")

// // Get all Posts
// const find = () => {
//     try {
//         return db('posts')
//         .select(["posts"])
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// module.exports = {
//     find
// };