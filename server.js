const express = require("express");
const app = express();

const posts = [
  {
    username: "theo",
    title: "post 1",
  },
  {
    username: "kwek",
    title: "post 2",
  },
];

app.get("/posts", (req, res) => { res.json(posts)});

app.listen(3000)