const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs")
const cors = require("cors")
const basicAuth = require("basic-auth")
const multer = require("multer")
const { json } = require("body-parser")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`)
  },
})

const upload = multer({ storage: storage })
const port = process.env.PORT || 3000
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
const roleOrder = ["vip", "subscriber", "member"]
app.use(express.json())
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, "dist")))
// const username = "bassienl";
// const password = "B@ssi3NL";

const auth = (req, res, next) => {
  const user = basicAuth(req)
  if (!user || user.name !== "bassienl" || user.pass !== "B@ssi3NL") {
    res.set("WWW-Authenticate", 'Basic realm="example"')
    res.sendStatus(401)
  } else {
    next()
  }
}
app.post("/api/auth", auth, (req, res) => {
  res.status(200).send("AUTHENTICATED")
  // redirect to the main page
  res.redirect("/admin")
})
const file = "./data/user.json"
app.get("/api", (req, res) => {
  let jsonData = require(file)
  res.status(200).send(jsonData)
})

// app.use('/images', express.static('images'))
app.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName
  const readStream = fs.createReadStream(`images/${imageName}`)
  readStream.pipe(res)
})

app.post("/api/images", auth, upload.single("image"), (req, res) => {
  console.log(req.file)

  res.send("Image uploaded successfully.")
})

app.get("/api/sort", auth, (req, res) => {
  let jsonData = require(file)
  jsonData.data.sort((a, b) => {
    let roleA = roleOrder.indexOf(a.role)
    let roleB = roleOrder.indexOf(b.role)
    if (roleA !== roleB) {
      return roleA - roleB
    }
    return a.name.localeCompare(b.name)
  })

  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    //send json file
    res.status(200).send(jsonData).sendmessage("JSON file has been sorted.")
  })
})
//delete route
app.delete("/api/delete/:name", auth, (req, res) => {
  let jsonData = require(file)
  let obj = jsonData.data?.find((o) => o.name === req.params.name)
  let index = jsonData.data.indexOf(obj)
  jsonData.data.splice(index, 1)
  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    res.status(200).send(jsonData).sendmessage("JSON file has been deleted.")
  })
})

app.post("/api/add", auth, (req, res) => {
  let jsonData = require(file)
  jsonData.data.push(req.body)
  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    res.status(200).send(jsonData).sendmessage("JSON file has been added.")
  })
})

app.put("/api/update", auth, (req, res) => {
  // Read the JSON file
  let jsonData = require(file)
  //   get object by name
  let obj = jsonData.data?.find((o) => o.name === req.body.name)
  obj.rating = req.body.rating
  obj.nationality = req.body.nationality
  obj.role = req.body.role
  obj.name = req.body.name
  obj.rank = req.body.rank
  obj.faceit = req.body.faceit
  obj.quality = req.body.quality
  obj.img = req.body.img
  obj.steam_url = req.body.steam_url
  obj.giveaway = req.body.giveaway

  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
      return
    }

    res.status(200).send(jsonData).sendmessage("JSON file has been updated.")
  })
})

app.get("/api/giveaway", (req, res) => {
  let jsonData = require(file)
  let giveawayUsers = jsonData.data.filter((user) => user.giveaway === true)
  res.status(200).send(giveawayUsers)
})

app.put("/api/giveaway/:name", auth, (req, res) => {
  let jsonData = require(file)
  let obj = jsonData.data?.find((o) => o.name === req.params.name)
  obj.giveaway = req.body.giveaway
  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    res.status(200).send(jsonData).sendmessage("JSON file has been updated.")
  })
})
app.delete("/api/giveaway/:name", auth, (req, res) => {
  let jsonData = require(file)
  let obj = jsonData.data?.find((o) => o.name === req.params.name)
  let index = jsonData.data.indexOf(obj)
  jsonData.data.splice(index, 1)
  res.status(200).send(jsonData).sendmessage("JSON file has been deleted.")
})

//what can express do?
app.listen(port, () => {
  console.log("Server is running on port 3000")
})
