const express = require("express");
const app = express();
const axios = require("axios");
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hey");
});

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
