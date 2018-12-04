const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ShelterSchema = new mongoose.Schema({
  name: String,
  location: String,
  beds: String
});

module.exports = mongoose.model("Shelter", ShelterSchema);
