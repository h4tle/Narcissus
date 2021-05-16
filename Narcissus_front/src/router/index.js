import Home from "../views/Home.vue";
import Bets from "../views/Bets.vue";

import { createWebHistory, createRouter } from "vue-router";


export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/bets",
        name: "Bets",
        component: Bets,
      },
    ]
    });