<template>
  <div>
    <h2>Registration</h2>
    <form @submit.prevent="addUser">
      <input v-model="newUser.firstName" type="text" placeholder="First name" required>
      <input v-model="newUser.lastName" type="taxt" placeholder="Last name" required>
      <input v-model="newUser.userDOB" type="text" placeholder="DOB" required>
      <input v-model="newUser.gender" type="text" placeholder="Gender" required>
      <input v-model="newUser.userRole" type="text" placeholder="Role" required>
      <input v-model="newUser.emailAdd" type="text" placeholder="Email" required />
      <input v-model="newUser.userPass" type="password" placeholder="Password" required />
      <input v-model="newUser.profileUrl" type="text" placeholder="ProfileUrl" required>
      <button class="btn" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        firstName: '',
        lastName: '',
        userDOB: '',
        gender: '',
        userRole: '',
        emailAdd: '',
        userPass: '',
        profileUrl: '',
      },
    };
  },
  methods: {
    async addUser() {
      try {
        await this.$store.dispatch('addNewUser', this.newUser);
        this.newUser = {
            firstName: '',
            lastName: '',
            userDOB: '',
            gender: '',
            userRole: '',
            emailAdd: '',
            userPass: '',
            profileUrl: '',
        };
      } catch (error) {
        console.error('Failed to register user:', error);
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
    /* height: 15rem; */
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