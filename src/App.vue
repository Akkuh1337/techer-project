<template>
  <v-app class="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppContent from "@/components/AppContent.vue";

export default {
  components: {
    AppHeader, AppContent
  },
  name: "App",
  data() {
    return {}
  }
}
</script>

<style>
.v-application {
  background-color: #f6f6f6;
}

.main-block {
  width: 60%;
  margin: 0 auto;
}

.warning {
  background-color: orangered !important;
  border-color: orangered !important;
}

.success {
  background-color: green !important;
  border-color: green !important;
}
</style>