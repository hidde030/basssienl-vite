const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const file = "../src/data/user.json";
app.get("/", (req, res) => {
  let jsonData = require(file);
  res.status(200).send(jsonData);
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
