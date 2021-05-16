const express = require("express");
const cors = require("cors");
// const akkumulator = require("./models/akkumulator");
const Bet = require("./models/bet");
const League = require("./models/league");
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
      const data = request.body;
      const bets = data.bets;

      bets.map(async (item) => {
        const currentbet = new Bet(item);
        await currentbet.save();
      });
      response.send();
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
