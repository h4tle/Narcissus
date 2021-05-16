var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LeagueSchema = new Schema(
    {
        league_name: {type: String, required: true},
        league_country: {type: String, required: true}
    }
  );

  LeagueSchema
  .virtual('full_league_name')
  .get(function () {
      return this.league_country + " - " + this.league_name;
  })

  module.exports = mongoose.model('League', LeagueSchema);
