<template>
  <div class="main-block">
    <app-header></app-header>
    <app-content></app-content>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppContent from "@/components/AppContent.vue";

export default {
  name: "StudentPage",
  components: {AppContent, AppHeader}
}
</script>

<style scoped>

</style>