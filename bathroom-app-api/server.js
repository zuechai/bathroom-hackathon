const express = require("express");
const app = express();
const axios = require("axios");
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hey");
  axios
    .get(
      "https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=32307f34890140109ba99c2a2351665a"
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
