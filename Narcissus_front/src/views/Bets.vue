<template>
  <div class="ml-32">
    Hello
    <input type="date" name="date" id="" />

    <select v-model="akkumulator.tippers" name="league" id="">
      <option
        v-for="tipper in models.tippers"
        :value="tipper._id"
        :key="tipper._id"
      >
        {{ tipper.name }}
      </option>
    </select>

    <input type="number" name="stake" id="" />

    <br />

    <div v-for="bet in bets" :key="bet.id">
      <select v-model="bet.sport" name="sport" id="">
        <option
          v-for="sport in models.sports"
          :value="sport._id"
          :key="sport._id"
        >
          {{ sport.type }}
        </option>
      </select>

      <select v-model="bet.league" name="league" id="">
        <option
          v-for="league in models.leagues"
          :value="league._id"
          :key="league._id"
        >
          {{ league.country }} - {{ league.name }}
        </option>
      </select>

      <select v-model="bet.selection" name="selection" id="">
        <option v-for="team in models.teams" :value="team._id" :key="team._id">
          {{ team.name }} - {{ team.country }}
        </option>
      </select>

      <select v-model="bet.bettype" name="bettype" id="">
        <option
          v-for="bettype in models.bet_types"
          :value="bettype._id"
          :key="bettype._id"
        >
          {{ bettype.type }}
        </option>
      </select>

      <select v-model="bet.hometeam" name="hometeam" id="">
        <option v-for="team in models.teams" :value="team._id" :key="team._id">
          {{ team.name }} - {{ team.country }}
        </option>
      </select>

      <select v-model="bet.awayteam" name="awayteam" id="">
        <option v-for="team in models.teams" :value="team._id" :key="team._id">
          {{ team.name }} - {{ team.country }}
        </option>
      </select>

      <input v-model="bet.odds" type="number" name="odds" id="" />
    </div>
    <button class="button" @click="addBet">fisse</button>
  </div>

  //wrappe det hele i form med typen submit

  <!-- date
sport
league
selection
bettype
hometeam
awayteam
live
odds -->

  <!-- <select name="sport" id=""></select>
      <select name="league" id=""></select>
      <select name="selection" id=""></select>
      <select name="bettype" id=""></select>
      <select name="hometeam" id=""></select>
      <select name="awayteam" id=""></select> -->
</template>

<script>
export default {
  methods: {
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
  },
  data() {
    return {
      akkumulator: {
        tipper: "",
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

<style></style>
