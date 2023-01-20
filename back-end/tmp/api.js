const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const cors = require("cors");
const crypto = require("crypto");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "dist")));

const file = "./data/user.json";
const users = [
  // This user is added to the array to avoid creating a new user on each restart
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    password: "admin",
  },
];
const authTokens = {};
const generateAuthToken = () => {
  return crypto.randomBytes(30).toString("hex");
};
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = users.find((u) => {
    return u.email === email && u.password === password;
  });

  if (user) {
    const authToken = generateAuthToken();

    // Store authentication token
    authTokens[authToken] = user;

    // Setting the auth token in cookies
    res.cookie("AuthToken", authToken);
    // Redirect user to the protected page
    res.redirect("/admin");
  } else {
    res.render("login", {
      message: "Invalid username or password",
    });
  }
});
app.use((req, res, next) => {
  // Get auth token from the cookies
  const authToken = req.cookies["AuthToken"];

  // Inject the user to the request
  req.user = authTokens[authToken];

  next();
});
const requireAuth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.render("login", {
      message: "Please login to continue",
    });
  }
};

app.get("/protected", requireAuth, (req, res) => {
  res.render("protected");
});
app.get("/api", (req, res) => {
  let jsonData = require(file);
  res.status(200).send(jsonData);
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
    res.status(200).send("JSON file has been updated.");
  });
});
app.get("/api/sort", (req, res) => {
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
app.put("/api/update", (req, res) => {
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
