const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const chef = require("./data/chef.json");
const recipe = require("./data/recipe.json");

app.get("/", (req, res) => {
  res.send("hotel is ready");
});
app.use(cors());

app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get("/recipe", (req, res) => {
  res.send(recipe);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`hotel API is running on port:${port}`);
});
