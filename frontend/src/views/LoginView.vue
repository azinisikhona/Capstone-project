<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="user.emailAdd" type="text" placeholder="Email" required />
      <input v-model="user.userPass" type="password" placeholder="Password" required />
      <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

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

          // Show a success message using SweetAlert
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You have successfully logged in!',
          });
        } else {
          this.$router.push("/");

          // Show an error message using SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Failed to log in. Please check your credentials.',
          });
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

<style scoped>
 form {
  max-width: 400px;
  margin: 0 auto;
   border: 2px solid white;
   padding: 1.875rem;
   max-width: 22.875rem;
    margin-top: 40px;
    margin-bottom:130px;
 border-radius: 0.4rem;
}

label {
  font-weight: bold;
}

input {
  width: 90%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45A049;
} 
</style>
