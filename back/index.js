const express = require("express");
const cors = require("cors");
const akkumulator = require("./models/akkumulator");
const Bet = require("./models/bet");
const League = require("./models/league");
const Bet_Type = require("./models/bet_type");
const Tipper = require("./models/tipper");
const Team = require("./models/team");
const Sport = require("./models/sport");





const mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://mongo:changeme@cluster0.sgyvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb ready");
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.post("/", async (request, response) => {
      let akkumulator_data = request.body;
      const bets = akkumulator_data.bets;
      
      let newBets = [];
      // let akkumulatorOdds;
    //let aodds

// læs om promise -> then
      Promise.all(
        bets.map(async (item) => {
          return new Promise((resolve, reject) => {
            const currentbet = new Bet(item);
            //aodds = aodds * items.odds
            // akkumulatorOdds = akkumulatorOdds * item.bets.odds;
            // console.log(akkumulatorOdds)
            currentbet.save().then((res) => {
              newBets.push(res._id);
              resolve();
            }).catch(err => reject(err));
          })
        })
      ).then(() => {
        akkumulator_data.bets = newBets;
        // akkumulator_data.odds = akkumulatorOdds;
        // akkumulator_data.odds = aodds
        console.log(akkumulator_data)
        console.log(akkumulator_data.odds)
        response.send();
      }).catch(err => console.log("fejl: " + err))
    });

    app.get("/leagues", async (request, response) => {
      const leagues = await League.find();
      response.send(leagues);
    });
    app.get("/getAllModels", async (request, response) => {
      const leagues = await League.find();
      //const bets = await Bet.find();
      response.send({ leagues });
    });

    app.listen(5000, () => console.log(`Server started`));
  });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//   bets
//     .map((bet) => bet.odds)
//     .reduce((accumulator, currentValue) => accumulator * currentValue) *
//     akkumulator.stake
