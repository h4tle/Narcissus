<template>
  <textarea
    placeholder="Indsæt kampdata"
    name=""
    id=""
    v-model="kamp"
    cols="150"
    rows="10"
  ></textarea>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      kamp: "",
    };
  },
  emits: ["bet"],
  watch: {
    kamp(input) {
      if (input.length < 1) return;
      let split = input.split(".\n");
      let temp = new Object();
      split.map((val) => {
        temp[val.split(":")[0]] = val.split(":")[1].trim();
      });
      let bet = new Object();
      bet.Teams = {
        Home: temp["Kamp"].split(" vs ")[0],
        Away: temp["Kamp"].split(" vs ")[1],
      };
      bet.League = temp["Liga"];
      bet.Selection = temp["Tip"];
      bet.Odds = Number(temp["Odds"]);
      bet.Date = dayjs(temp["Kampstart"], "hh.mm, D/M-YYYY");

      this.$emit("bet", {
        sport: "Fodbold",
        league: bet.League,
        selection: bet.Selection,
        hometeam: bet.Teams.Home,
        awayteam: bet.Teams.Away,
        odds: bet.Odds,
      });
    },
  },
};
</script>

<style>
</style>