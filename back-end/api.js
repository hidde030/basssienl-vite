const express = require("express")
const path = require("path")
const fs = require("fs")
const cors = require("cors")
const basicAuth = require("basic-auth")
const multer = require("multer")
const nocache = require("nocache")

const app = express()
const port = process.env.PORT || 3000
const file = "./data/user.json"

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, file.originalname),
})

const upload = multer({ storage })
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
}

const roleOrder = ["vip", "subscriber", "member"]

app.use(express.json())
app.use(nocache())
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, "dist")))
app.set("etag", false)
const auth = (req, res, next) => {
  const user = basicAuth(req)
  if (!user || user.name !== "bassienl" || user.pass !== "B@ssi3NL") {
    res.set("WWW-Authenticate", 'Basic realm="example"')
    res.sendStatus(401)
  } else {
    next()
  }
}
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store")
  next()
})

// Authentication route
app.post("/api/auth", auth, (req, res) => {
  res.status(200).send("AUTHENTICATED")
  // redirect to the main page
  res.redirect("/admin")
})

// Fetch all data
app.get("/api", (req, res) => {
  const jsonData = require(file)
  res.status(200).send(jsonData)
})

// Serve images
app.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName
  const readStream = fs.createReadStream(`images/${imageName}`)
  readStream.pipe(res)
})

// Upload images
app.post("/api/images", auth, upload.single("image"), (req, res) => {
  console.log(req.file)
  res.send("Image uploaded successfully.")
})

// Sort data
app.get("/api/sort", auth, (req, res) => {
  const jsonData = require(file)
  jsonData.data.sort((a, b) => {
    const roleA = roleOrder.indexOf(a.role)
    const roleB = roleOrder.indexOf(b.role)
    return roleA !== roleB ? roleA - roleB : a.name.localeCompare(b.name)
  })

  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(jsonData)
    }
  })
})

// Delete entry
app.delete("/api/delete/:name", auth, (req, res) => {
  const jsonData = require(file)
  const index = jsonData.data.findIndex((o) => o.name === req.params.name)

  if (index === -1) {
    return res.status(404).send("User not found")
  }

  jsonData.data.splice(index, 1)
  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(jsonData)
    }
  })
})

// Add new entry
app.post("/api/add", auth, (req, res) => {
  const jsonData = require(file)
  jsonData.data.push(req.body)
  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(jsonData)
    }
  })
})

// Update entry
app.put("/api/update", auth, (req, res) => {
  const jsonData = require(file)
  const obj = jsonData.data.find((o) => o.name === req.body.name)

  if (!obj) {
    return res.status(404).send("User not found")
  }

  Object.assign(obj, req.body)
  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(jsonData)
    }
  })
})

// Get giveaway users
app.get("/api/giveaway", (req, res) => {
  const jsonData = require(file)
  const giveawayUsers = jsonData.data.filter((user) => user.giveaway === true)
  res.status(200).send(giveawayUsers)
})

// Update active status
app.put("/api/active/:name", auth, (req, res) => {
  const jsonData = require(file)
  const obj = jsonData.data.find((o) => o.name === req.params.name)

  if (!obj) {
    return res.status(404).send("User not found")
  }

  obj.active = req.body.active

  fs.writeFile(file, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err)
      res.status(500).send(err)
    } else {
      res.status(200).send(jsonData)
    }
  })
})

// Update giveaway status
app.put("/api/giveaway/:name", auth, (req, res) => {
  const jsonData = require(file)
  const obj = jsonData.data.find((o) => o.name === req.params.name)

  if (!obj) {
    return res.status(404).send("User not found")
  }

  obj.giveaway = req.body.giveaway
  fs.writeFile(file, JSON.stringify(jsonData), (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(jsonData)
    }
  })
})

// Delete giveaway user
app.delete("/api/giveaway/:name", auth, (req, res) => {
  const jsonData = require(file)
  const index = jsonData.data.findIndex((o) => o.name === req.params.name)

  if (index === -1) {
    return res.status(404).send("User not found")
  }

  jsonData.data.splice(index, 1)
  res.status(200).send(jsonData)
})

// Fallback route for client-side routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
