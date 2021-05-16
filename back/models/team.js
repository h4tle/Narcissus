var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema(
  {
    team_name: {type: String, required: true, maxLength: 100},
    team_country: {type: String, required: true, maxLength: 100},
  }
);


module.exports = mongoose.model('Team', TeamSchema);