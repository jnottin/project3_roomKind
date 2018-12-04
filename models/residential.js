const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ResidentialSchema = new mongoose.Schema({
  name: String,
  location: String,
  numberOfDays: String,
  beds: String
});

module.exports = mongoose.model("Residential", ResidentialSchema);
