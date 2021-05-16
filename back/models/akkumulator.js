var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AkkumulatorSchema = new Schema(
    {
        date: {type: Date, default: Date.now},
        bets: {type: Schema.Types.ObjectId, ref: 'Bet', required: true},
        tipper: {type: Schema.Types.ObjectId, ref: 'Tipper', required: true},
        stake: {type: Number, min: 1},
        odds: {type: Number, min: 1, default: 1},
        akkumulator_result: {type: Boolean, default: false}
    }
);


AkkumulatorSchema
.virtual('a_result')
.get(function () {
    if(BetsSchema.bet_result == "W")
    {
        return this.odds * this.bets.odds; 
    }
})

module.exports = mongoose.model('Akkumulator', AkkumulatorSchema);