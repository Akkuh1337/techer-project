<template>
  <div>
    <div class="x-header">
      <strong>Хабаров Максим</strong> (анекдот)
      <x-button @click="onLogout">Выход</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    onLogout() {
      this.$store.commit('student/removeToken')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.x-header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}
</style>