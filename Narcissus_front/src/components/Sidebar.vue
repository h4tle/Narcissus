<template>
  <div
    class="
      bg-gray-500
      w-12
      min-h-screen
      max-h-screen
      fixed
      text-yellow-50
      gap-8
      flex flex-col
      items-center
      justify-center
    "
  >
    <router-link to="/"><Home class="w-10" /></router-link>
    <router-link to="/bets"><Bets class="w-10" /></router-link>
    <router-link to="/"><Bank class="w-10" /></router-link>
    <router-link to="/"><Calculator class="w-10" /></router-link>
    <router-link to="/"><Chart class="w-10" /></router-link>
  </div>
</template>

<script>
import Home from "../assets/svg/home.svg";
import Bets from "../assets/svg/bets.svg";
import Bank from "../assets/svg/bank.svg";
import Calculator from "../assets/svg/calculator.svg";
import Chart from "../assets/svg/chart.svg";
import Settings from "../assets/svg/settings.svg";

export default {
  components: {
    Home,
    Bets,
    Bank,
    Calculator,
    Chart,
    Settings,
  },
};
</script>

<style></style>
