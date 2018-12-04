<<<<<<< HEAD
const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const Residential = require("./models/residential.js");
const Shelter = require("./models/shelter.js");
const Guest = require("./models/guest.js");
=======
const express = require('express')
const parser = require('body-parser')
var PrettyError = require('pretty-error')
const cors = require('cors')
const Residential = require('./models/residential.js')
const Shelter = require('./models/shelter.js')
const Guest = require('./models/guest.js')
>>>>>>> db5e3620a6605c07e3a5736611d1769e5933c0ee

const app = express();

app.set("port", process.env.PORT || 3007);
app.use(parser.json());
app.use(cors());

app.use(express.static("client/build"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

app.get("/api/roomKind", (req, res) => {
  Shelter.find()
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      console.log(err);
    });
});

//New Shelter
app.post("/project3roomKind", (req, res) => {
  console.log(req.body);
  Shelter.create({
    name: req.body.name,
    location: req.body.location,
    // image: req.body.image,
    beds: req.body.beds
  }).then(shelter => {
    res.send(shelter);
  });
});

app.listen(3007, () => {});
