<template>
  <div class="login">
    <h3>Sign In</h3>
    <form
      @submit.prevent="login()">
      <input
        v-model="email"
        type="text"
        name="email"><br>
      <input
        v-model="password"
        type="password"
        name="password"><br>
      <input
        type="submit"><br>
      {{ message }}
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace({ name: "Home" });
        })
        .catch(({ message }) => {
          this.message = message;
        });
    }
  }
};
</script>
