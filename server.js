const express = require("express");
// const helmet = require("helmet");
// const cors = require("cors");
// const secrets = require("../config/secrets.js");
const request = require('request')
const server = express();

server.use(express.json());
// server.use(helmet());

//  Routes
const postsRouter = require("./api/posts/posts.router")

server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
    res.status(200).json(`Welcome to the Jungle`);
  });

module.exports = server;