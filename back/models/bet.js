const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BetSchema = new mongoose.Schema({
  sport: {
    type: String,
    required: true,
  },
  league: {
    type: Schema.Types.ObjectId, ref: "League",
    required: true,
  },
  selection: {
    type: Schema.Types.ObjectId, ref: "Team",
    required: true,
  },
  bettype: {
    type: Schema.Types.ObjectId, ref: "Bet_Type",
    required: true,
  },
  hometeam: {
    type: Schema.Types.ObjectId, ref: "Team",
    required: true,
  },
  awayteam: {
    type: Schema.Types.ObjectId, ref: "Team",
    required: true,
  },
  live: {
    type: Boolean,
    // required: true,
  },
  odds: {
    type: Number,
    required: true,
  },
  bet_result: {
    type: String,
    // required: true,
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
