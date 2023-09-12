<template>
  <div>
    <h2>Registration</h2>
    <form @submit.prevent="addUser">
      <input v-model="newUser.firstName" type="text" placeholder="firstName" required>
      <input v-model="newUser.lastName" type="taxt" placeholder="lastName" required>
      <input v-model="newUser.userAge" type="number" placeholder="userAge" required>
      <input v-model="newUser.gender" type="text" placeholder="Gender" required>
      <input v-model="newUser.userRole" type="text" placeholder="userRole" required>
      <input v-model="newUser.emailAdd" type="text" placeholder="Email" required />
      <input v-model="newUser.userPass" type="password" placeholder="Password" required />
      <input v-model="newUser.profileUrl" type="text" placeholder="ProfileUrl" required>
      <button type="submit">Register</button>
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
        userAge: 0,
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
            userAge: 0,
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
