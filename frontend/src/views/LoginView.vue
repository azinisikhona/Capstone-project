<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="user.emailAdd" type="text" placeholder="Email" required />
      <input v-model="user.userPass" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        emailAdd: '',
        userPass: '',
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.user)
        .then(() => {
          this.$router.push("/"); 
        })
        .catch((error) => {
          console.error('Login failed:', error);
        });
    },
  },
};
</script>
