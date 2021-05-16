var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TeamSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  country: { type: String, required: true, maxLength: 100 },
});

module.exports = mongoose.model("Team", TeamSchema);
