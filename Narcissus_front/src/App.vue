<template>
  <Sidebar />
  <router-view> </router-view>

  <div class="bg-gray-400 ml-12"></div>
</template>

<script>
import Home from "./views/Home.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Home,
    Sidebar,
  },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style></style>
