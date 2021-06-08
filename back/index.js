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


    app.post("/here", async (request, response) => {
      let akkumulator_data = request.body;
      const bets = akkumulator_data.bets;
      console.log(request.body)

      
      let newBets = [];
      let aodds = 1;

// læs om promise -> then
      Promise.all(
        bets.map(async (item) => {
          return new Promise((resolve, reject) => {
            const currentbet = new Bet(item);
            aodds = aodds * item.odds
            currentbet.save().then((res) => {
              newBets.push(res._id);
              resolve();
            }).catch(err => reject(err));
          })
        })
      ).then(() => {
        akkumulator_data.bets = newBets;
        akkumulator_data.odds = aodds
        const newAkkumulator = new akkumulator(akkumulator_data)
        console.log(akkumulator_data)
        newAkkumulator.save().then((res) => response.send(res._id))
      }).catch(err => console.log("fejl: " + err))
    });



    app.get("/leagues", async (request, response) => {
      const leagues = await League.find();
      response.send(leagues);
    });
    app.get("/getAllModels", async (request, response) => {
      const leagues = await League.find();
      const bet_types = await Bet_Type.find();
      const sports = await Sport.find();
      const teams = await Team.find();
      const tippers = await Tipper.find();


      response.send({"data": {"sports": sports, "leagues": leagues, "bet_types" : bet_types, "teams" : teams, "tippers" : tippers }})
    });

    app.listen(5000, () => console.log(`Server started`));
  });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));