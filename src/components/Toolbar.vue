<template>
  <div id="nav">
    <RouterLink :to="{ name:'Home' }">Home</RouterLink> |
    <RouterLink :to="{ name:'Login' }">Login</RouterLink> |
    <RouterLink :to="{ name:'Register' }">Register</RouterLink> |
    <a href="#" @click.prevent="logout()">Logout</a>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
  }
};
</script>
