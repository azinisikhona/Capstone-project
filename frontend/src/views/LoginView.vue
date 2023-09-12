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
   async login() {
      try {
        const response = await this.$store.dispatch("login",{
          emailAdd: this.user.emailAdd,
          userPass: this.user.userPass,
        });
        if (
          response &&
          response.token &&
          response.status === 200 &&
          response.data
        ) {
          const token = response.token;
          // this.$cookies.set("userToken", token);
          const userData = response.data;
          localStorage.setItem("userData", JSON.stringify(userData));
          this.$router.push("/");
        } else {
          this.$router.push("/");
          console.log(response);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.loginError = "Log Err";
        } else {
          console.log(error);
        }
      }
    },
  },
};
</script>
