require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/:username", (req, res) => {
  const username = req.params.username;
  const { danceType } = req.query;

  res.send(`Hello World, ${username}! ${danceType}`);
});

app.post("/hello", (req, res) => {
  const name = req.body.name;
  res.send(`Hello World, ${name}!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
