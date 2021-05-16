var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SportSchema = new Schema(
  {
    sport_type: {type: String, required: true, maxLength: 100},
  }
);


module.exports = mongoose.model('Sport', SportSchema);