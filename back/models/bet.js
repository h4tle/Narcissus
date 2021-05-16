const mongoose = require("mongoose");

var BetSchema = new mongoose.Schema({
  sport_id: {
    type: String,
    required: true,
  },
  league_id: {
    type: String,
    required: true,
  },
  selection_team_id: {
    type: String,
    required: true,
  },
  bet_type_id: {
    type: String,
  },
  home_team_id: {
    type: String,
    required: true,
  },
  away_team_id: {
    type: String,
    required: true,
  },
  live: {
    type: Boolean,
    required: true,
  },
  odds: {
    type: Number,
    required: true,
  },
  bet_result: {
    type: String,
    required: true,
    enum: ["W", "L", "R", "P"],
    default: "P",
  },
});

// const bet_result = {
//   W: "WIN",
//   L: "Loss",
//   R: "R",
//   P: "P",
// };
// BetsSchema.virtual("fixture").get(function () {
//   return this.home_team + "vs" + this.away_team;
// });

module.exports = mongoose.model("Bet", BetSchema);
