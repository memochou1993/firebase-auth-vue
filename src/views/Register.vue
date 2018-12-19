<template>
  <div
    class="register">
    <h3>Sign Up</h3>
    <form
      @submit.prevent="register()">
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
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
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
