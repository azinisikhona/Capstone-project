<template>
<div>
    <!-- Filter Showroom -->
    <div>
      <label for="carFilter">Filter Showroom:</label>
      <select v-model="carFilter" id="carFilter">
        <option value="">All Cars</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Koenigsegg">Koenigsegg</option>
        <option value="Aston Martin">Aston Martin</option>
        <option value="Bugatti">Bugatti</option>
        <option value="McLaren">McLaren</option>
        <option value="Pagani">Pagani</option>
        <option value="Porsche">Porsche</option>
      </select>
    </div>
    
    <!-- Filter Users -->
    <div>
      <label for="userFilter">Filter Users:</label>
      <select v-model="userFilter" id="userFilter">
        <option value="">All Users</option>
        <option value="admin">Admin</option>
        <option value="dealer">Dealer</option>
      </select>
    </div>
<div>
    <button class="add-btn">
        <router-link class="addCar" to="/addCar">Add new car</router-link>
    </button>
    <!-- <button class="add-btn">
        <router-link class="addUser" to="/addUser">Add new user</router-link>
    </button> -->
</div>
  <div v-if="showroom" class="p-5">
    <table class="col-12 w-100">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Email</th>
          <th>Profile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.userID">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>
            <div class="card bg-transparent">
                <img :src="user.profileUrl" class="mx-auto" alt="...">
            </div>
          </td>
          <td>
            <button>edit</button>
            <button @click="deleteUser(user.userID)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="col-12 w-100">
      <thead>
        <tr>
          <th>Brands</th>
          <th>Model</th>
          <th>Make Year</th>
          <th>Price</th>
          <th>Picture</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in filteredShowroom" :key="car.CarID">
          <td>{{ car.Brands }}</td>
          <td>{{ car.Model }}</td>
          <td>{{ car.MakeYear }}</td>
          <td>R{{ car.Price }}</td>
          <td>
            <div class="card bg-transparent">
                <img :src="car.Picture" class="mx-auto"  alt="...">
            </div>
          </td>
          <td>
            <button>edit</button>
            <button @click="deleteCar(car.CarID)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <SpinnerComp/>
  </div>
  </div>
</template>
<script>
import SpinnerComp from '../components/SpinnerComp.vue';
export default {
      data() {
    return {
      carFilter: '',
      userFilter: '',
    };
  },

    computed: {
        showroom() {
            return this.$store.state.showroom;
        },
        users() {
            return this.$store.state.users;
        },
         filteredShowroom() {
      if (!this.carFilter) {
        return this.showroom;
      }
      return this.showroom.filter(car => car.Brands === this.carFilter);
    },
    filteredUsers() {
      if (!this.userFilter) {
        return this.users;
      }
      return this.users.filter(user => user.userRole === this.userFilter);
    },
    },

    methods: {
        async deleteCar(carId) {
            if (confirm('Are you sure you want to delete this car?')) {
                try {
                    await this.$store.dispatch('deleteCar', carId);
                } catch (error) {
                    console.error('Failed to delete car:', error); 
                }
            }
        },

        async deleteUser(userId) {
            if (confirm('Are you sure you want to delete this user?')) {
                try {
                    await this.$store.dispatch('deleteUser', userId);
                } catch (error) {
                    console.error('Failed to delete user:', error); 
                }
            }
        },
    },


    mounted() {
        this.$store.dispatch("fetchShowroom");
        this.$store.dispatch("fetchUsers");
    },
    
    components: {
        SpinnerComp
    }
}
</script>
<style scoped>
.add-btn {
        width: 200px !important;
        background-color: #C2DBF8 !important;
        margin: 5px !important;
        border-radius: 15px !important;
        padding: 3px;
    }

    .addCar {
        text-decoration: none;
    }
    /* .addUser {
        text-decoration: none;
    } */

    .card {
        height: 8rem;
    }

    .card > img {
        height: 100%;
        width: 150px;
    }

    @media screen and (max-width:950px ) {
        .card > img {
        height: 100%;
        width: 100px;
    }
    }
    @media screen and (max-width:875px ) {
        .card > img {
        height: 100%;
        width: 80px;
    }
    }

    table {
  border-collapse: collapse;
  margin: 10px;
}
 th {
  background: #ccc;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
}

</style>