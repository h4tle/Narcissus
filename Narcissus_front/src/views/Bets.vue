<template>
  <div class="">
    Akk
    <div class="bg-gray-100 p-4">
      <input v-model="akkumulator.date" type="date" name="date" id="" />

      <select v-model="akkumulator.tipper" name="tipper" id="">
        <option
          v-for="tipper in models.tippers"
          :value="tipper._id"
          :key="tipper._id"
        >
          {{ tipper.name }}
        </option>
      </select>

      <input type="number" v-model="akkumulator.stake" name="date" id="" />
      <hr />
      bets
      <table class="table-auto w-full">
        <thead>
          <th>fjern</th>
          <th>Sport</th>
          <th>league</th>
          <th>Selection</th>
          <th>Bettype</th>
          <th>Home</th>
          <th>Away</th>
          <th>Odds</th>
        </thead>
        <tbody>
          <tr class="border border-gray-700" v-for="bet in bets" :key="bet.id">
            <td><button @click="fjern(bet.id)">fjern</button> {{ bet.id }}</td>
            <td>
              <select v-model="bet.sport" name="sport" id="">
                <option
                  v-for="sport in models.sports"
                  :value="sport._id"
                  :key="sport._id"
                >
                  {{ sport.type }}
                </option>
              </select>
            </td>

            <td>
              <select v-model="bet.league" name="league" id="">
                <option
                  v-for="league in models.leagues"
                  :value="league._id"
                  :key="league._id"
                >
                  {{ league.country }} - {{ league.name }}
                </option>
              </select>
            </td>

            <td>
              <select v-model="bet.selection" name="selection" id="">
                <option
                  v-for="team in models.teams"
                  :value="team._id"
                  :key="team._id"
                >
                  {{ team.name }} - {{ team.country }}
                </option>
              </select>
            </td>

            <td>
              <select v-model="bet.bettype" name="bettype" id="">
                <option
                  v-for="bettype in models.bet_types"
                  :value="bettype._id"
                  :key="bettype._id"
                >
                  {{ bettype.type }}
                </option>
              </select>
            </td>

            <td>
              <select v-model="bet.hometeam" name="hometeam" id="">
                <option
                  v-for="team in models.teams"
                  :value="team._id"
                  :key="team._id"
                >
                  {{ team.name }} - {{ team.country }}
                </option>
              </select>
            </td>
            <td>
              <select v-model="bet.awayteam" name="awayteam" id="">
                <option
                  v-for="team in models.teams"
                  :value="team._id"
                  :key="team._id"
                >
                  {{ team.name }} - {{ team.country }}
                </option>
              </select>
            </td>

            <td>
              <input v-model="bet.odds" type="number" name="odds" id="" />
            </td>
          </tr>
        </tbody>
      </table>

      <button class="button" @click="addBet">Tilføj</button>
    </div>

    <div>
      <button class="button" @click="addAkku">Opret</button>
      <button class="button" @click="test">test</button>
      <button class="button" @click="clearForm">clear</button>
      <div>{{ calculatedOdds }}</div>
    </div>
  </div>
  <NewBet @bet="newBet" />
</template>

<script>
import NewBet from "../components/NewBet.vue";
export default {
  components: { NewBet },
  computed: {
    calculatedOdds() {
      let calculatedOdds = 1;
      this.bets.map((bet) => (calculatedOdds = calculatedOdds * bet.odds));
      return calculatedOdds.toFixed(2);
    },
  },
  methods: {
    newBet(value) {
      console.log("her", value);
      this.bets.push({
        id: this.bets.length + 1,
        sport: this.models.sports.find((sport) => sport.type == "Fodbold")._id,
        league: this.models.leagues.find((league) =>
          league.name.indexOf(value.league)
        )._id,
        selection: this.models.teams.find(
          (team) => team.name == value.selection.split(" ")[0]
        )._id,
        bettype: this.models.bet_types.find((type) => type.type == "Winner")
          ._id,
        hometeam: this.models.teams.find((team) => team.name == value.hometeam)
          ._id,
        awayteam: this.models.teams.find((team) => team.name == value.awayteam)
          ._id,
        odds: value.odds,
      });
    },
    addBet() {
      this.bets.push({
        id: this.bets.length + 1,
        sport: "",
        league: "",
        selection: "",
        bettype: "",
        hometeam: "",
        awayteam: "",
        odds: 1,
      });
    },
    fjern(id) {
      this.bets.splice(
        this.bets.indexOf(this.bets.find((bet) => bet.id == id)),
        1
      );
      this.bets.forEach((bet, index) => {
        bet.id = index + 1;
      });
    },
    addAkku() {
      console.log(this.akkumulator);
      console.log({});
      fetch("http://localhost:5000/here", {
        method: "POST",
        // headers: new Headers({'content-type': 'application/json'}),
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: this.akkumulator.date,
          tipper: this.akkumulator.tipper,
          stake: this.akkumulator.stake,
          bets: this.bets.map((bet) => {
            return {
              sport: bet.sport,
              league: bet.league,
              selection: bet.selection,
              bettype: bet.bettype,
              hometeam: bet.hometeam,
              awayteam: bet.awayteam,
              odds: Number(bet.odds),
            };
          }),
        }),
      });
    },
    test() {
      console.log(
        JSON.stringify({
          date: this.akkumulator.date,
          tipper: this.akkumulator.tipper,
          stake: this.akkumulator.stake,
          bets: this.bets.map((bet) => {
            return {
              sport: bet.sport,
              league: bet.league,
              selection: bet.selection,
              bettype: bet.bettype,
              hometeam: bet.hometeam,
              awayteam: bet.awayteam,
              odds: Number(bet.odds),
            };
          }),
        })
      );
    },
    clearForm() {
      this.akkumulator = {
        date: "",
        tipper: "",
        bets: null,
        stake: 0,
      };
      this.bets = [
        {
          id: 1,
          sport: "",
          league: "",
          selection: "",
          bettype: "",
          hometeam: "",
          awayteam: "",
          odds: 1,
        },
      ];
    },
  },
  data() {
    return {
      akkumulator: {
        date: "",
        tipper: "",
        bets: null,
        stake: 0,
      },

      bets: [
        {
          id: 1,
          sport: "",
          league: "",
          selection: "",
          bettype: "",
          hometeam: "",
          awayteam: "",
          odds: 1,
        },
      ],
      models: [],
    };
  },
  created() {
    fetch("http://localhost:5000/getAllModels")
      .then((response) => response.json())
      .then((result) => {
        this.models = result.data;
        console.log(result.data);
        // result = this.models;
        // console.log(JSON.stringify(result, null, 2));
      })
      .catch((error) => console.log("error", error));
  },
};
</script>

<style>
select {
  @apply w-full;
}
</style>
