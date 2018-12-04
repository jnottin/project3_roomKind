const express = require("express");
const parser = require("body-parser");
var PrettyError = require("pretty-error");
const cors = require("cors");
const Residential = require("./models/residential.js");
const Shelter = require("./models/shelter.js");
const Guest = require("./models/guest.js");

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

app.post("/project3roomKind/residences", (req, res) => {
  console.log(req.body);
  Residential.create({
    name: req.body.name,
    location: req.body.location,
    numberOfDays: req.body.numberOfDays,
    beds: req.body.beds
  }).then(residentials => {
    res.send(residentials);
  });
});

app.get("/api/roomKind", (req, res) => {
  Residential.find()
    .then(resident => {
      res.json(resident);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(3007, () => {});
