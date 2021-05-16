var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Bet_TypeSchema = new Schema(
  {
    sport_type: {type: String, required: true, maxLength: 100},
  }
);


module.exports = mongoose.model('Bet_Type', Bet_TypeSchema);