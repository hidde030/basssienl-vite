const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const roleOrder = ["vip", "subscriber", "member"];
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "dist")));

const file = "./data/user.json";
app.get("/api", (req, res) => {
  let jsonData = require(file);
  res.status(200).send(jsonData);
});
app.get("/api/sort", (req, res) => {
  let jsonData = require(file);
  jsonData.data.sort((a, b) => {
    let roleA = roleOrder.indexOf(a.role);
    let roleB = roleOrder.indexOf(b.role);
    if (roleA !== roleB) {
      return roleA - roleB;
    }
    return a.name.localeCompare(b.name);
  });

  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send("JSON SORTED.");
  });
});
// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.post("/api/add", (req, res) => {
  let jsonData = require(file);
  jsonData.data.push(req.body);
  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send("JSON ADDED.");
  });
});

app.put("/api/update", (req, res) => {
  // Read the JSON file
  let jsonData = require(file);
  //   get object by name
  let obj = jsonData.data?.find((o) => o.name === req.body.name);
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
