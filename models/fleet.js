const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a fleet
 */

let fleetSchema = new Schema({
  make :{
    type: String
  },

  model: {
    type: String
  },

  modelYear:{
    value :{type: Number},
    unit: {type: String, default:"Year"}
  },

  MPG:{
    value :{type: Number},
    unit: {type: String, default:"Gallon"}
  },

  odometerMiles:{
    value :{type: Number},
    unit: {type: String, default:"Miles"}
  },

  engineType: {
    type: String
  },

  displayName: {
    type: String
  },

  VIN: {
    type: String
  }
});

let Fleet = mongoose.model("Fleet", fleetSchema);
module.exports = Fleet;
