<template>
  <x-dialog v-model="showDialog">
    <form @submit.prevent="loginUser" class="x-login-form">
      <x-input type="text" placeholder="Username" v-model="username"/>
      <x-input type="password" placeholder="password" v-model="password"/>
      <x-button type="submit">
        Войти
      </x-button>
    </form>
  </x-dialog>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      username: '',
      password: '',
      showDialog: true
    }
  },
  methods: {
    ...mapActions(['student/login']),
    loginUser() {
      this['student/login']( {username: this.username, password: this.password, router: this.$router})
    }
  }
}
</script>


<style scoped>
.x-login-form {
  display: flex;
  flex-direction: column;
}
</style>