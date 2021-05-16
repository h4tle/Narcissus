var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BetSchema = new Schema(
    {
        sport: {type: Schema.Types.ObjectId, ref: 'Sport', required: true},
        league: {type: Schema.Types.ObjectId, ref: 'League', required: true},
        selection: {type: String, required: true},
        bet_type: {type: Schema.Types.ObjectId, ref: 'Bet_Type', required: true},
        home_team: {type: Schema.Types.ObjectId, ref: 'Team', required: true},
        away_team: {type: Schema.Types.ObjectId, ref: 'Team', required: true},
        live: {type: Boolean, required: true},
        odds: {type: Number, required: true},
        bet_result: {type: String, required: true, enum: ['W', 'L', 'R', 'P'], default: 'P'},

}
);
BetsSchema
.virtual('fixture')
.get(function () {
  return (this.home_team + "vs" + this.away_team);
});

module.exports = mongoose.model('Bet', BetSchema);