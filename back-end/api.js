const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist")));

const file = "data/user.json";
app.get("/", (req, res) => {
  let jsonData = require(file);
  res.status(200).send(jsonData);
});
// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.post("/add", (req, res) => {
  let jsonData = require(file);
  jsonData.data.push(req.body);
  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send("JSON file has been updated.");
  });
});
app.get("/sort", (req, res) => {
  let jsonData = require(file);
  // sort json file by catergory

  jsonData.data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  res.status(200).send(jsonData);
});
app.put("/update", (req, res) => {
  // Read the JSON file
  let jsonData = require(file);
  //   get object by name
  let obj = jsonData.data.find((o) => o.name === req.body.name);
  console.log(obj);
  obj.rating = req.body.rating;
  obj.nationality = req.body.nationality;
  obj.role = req.body.role;
  obj.name = req.body.name;
  obj.rank = req.body.rank;
  obj.faceit = req.body.faceit;
  obj.quality = req.body.quality;
  obj.weakness = req.body.weakness;
  obj.img = req.body.img;
  obj.steam_url = req.body.steam_url;

  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.status(200).send("JSON file has been updated.");
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
