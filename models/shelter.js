const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ShelterSchema = new mongoose.Schema({
  name: String,
  location: String,
  beds: Number,
  img: String
});

module.exports = mongoose.model("Shelter", ShelterSchema);
