import { createStore } from 'vuex';
import axios from 'axios';
const connection = 'https://celestial-autos.onrender.com/';
export default createStore({
  state: {
    isAuthenticated: false,
    loginUser: null,
    users: null,
    user: null,
    showroom: null,
    car: null,
  },
  
  mutations: {
    setAuthenticated: (state, isAuthenticated) => {
      state.isAuthenticated = isAuthenticated;
    },
    setLoginUser: (state, loginUser) => {
      state.loginUser = loginUser;
    },
    setUsers: (state, users) => {
      state.users =  users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setShowroom: (state, showroom) => {
      state.showroom = showroom;
    },
    setCar: (state, car) => {
      state.car = car;
    },
    addCar: (state, newCar) => {
      state.showroom.push(newCar);
    },
    addUser: (state, newUser) => {
      state.users.push(newUser);
    },
    deleteCar: (state, carId) => {
      state.showroom = state.showroom.filter(car => car.CarID !== carId);
    },
    deleteUser: (state, userId) => {
      state.users = state.users.filter(user => user.userID !== userId);
    },
  },

  actions: {
    async fetchShowroom(context) {
      try {
        const response = await fetch(`${connection}showroom`);
        if (!response.ok) {
          throw Error("Failed to fetch cars");
        } else {
          const data = await response.json();
          const prods = data.results;
          context.commit("setShowroom", prods);
          console.log(prods);
        }
      } catch (err) {
        context.commit("setShowroom", null);
        console.log("Failed to get cars", err.message);
      }
    },    

    async fetchUsers(context) {
      try {
        const response = await fetch(`${connection}users`);
        if (!response.ok) {
          throw Error("Failed to fetch users");
        } else {
          const data = await response.json();
          const users = data.results;
          context.commit("setUsers", users);
          console.log(users);
        }
      } catch (err) {
        context.commit("setUsers", null);
        console.log("Failed to get users", err.message);
      }
    }, 

    async login({ commit }, credentials) {
      try {
        const response = await axios.post(`${connection}login`, credentials);
        if (response.status === 200) {
          commit('setAuthenticated', true);
          commit('setLoginUser', response.data); 
          console.log(response.data)
          console.log('setAuthenticated', true);
        } else {
          commit('setAuthenticated', false);
          commit('setLoginUser', null);
        }
      } catch (error) {
        console.error('Error during login:', error);
        commit('setAuthenticated', false);
        commit('setLoginUser', null);
      }
    },

    async addNewCar(context, newCar) {
      try {
        const response = await axios.post(`${connection}addcar`, newCar);
        if (response.status === 201) {
          context.commit('addCar', newCar);
          
        }
      } catch (error) {
        console.error('Error adding new car:', error);
      }
    },

    async addNewUser(context, newUser) {
      try {
        const response = await axios.post(`${connection}register`, newUser);
        if (response.status === 201) {
          context.commit('addUser', newUser);
          return true;
        }
        return false;
      } catch (error) {
        console.error('Error adding new user:', error);
        return false;
      }
    },

    async deleteCar(context, carId) {
      try {
        const response = await fetch(`${connection}car/${carId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          context.commit('deleteCar', carId);
        } else {
          throw new Error('Failed to delete car');
        }
      } catch (error) {
        console.error('Error deleting car:', error);
      }
    },

    async deleteUser(context, userId) {
      try {
        const response = await fetch(`${connection}user/${userId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          context.commit('deleteUser',userId);
        } else {
          throw new Error('Failed to delete user');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
  },

})