<template>
  <div>
    <form @submit.prevent="addCar">

      <input v-model="newCar.CarID" style="visibility: hidden; display: none" type="text">

      <label for="Brands">Brand Name:</label>
      <input v-model="newCar.Brands" type="text" id="Brands" required>

      <label for="Model">Model:</label>
      <input v-model="newCar.Model" id="Model" required>
      
      <label for="MakeYear">MakeYear:</label>
      <input v-model.number="newCar.MakeYear" type="number" id="MakeYear" required>

      <label for="Price">Price:</label>
      <input v-model="newCar.Price" type="number" id="Price" required>

      <label for="Picture">Image Url:</label>
      <input v-model="newCar.Picture" type="text" id="Picture">

      <label for="SupplierID">SupplierID</label>
      <div>
      <select v-model="newCar.SupplierID" name="SupplierID" id="SupplierID">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      </div>

      <button type="submit">Add Car</button>
    </form>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      newCar: {
        CarID: null,
        Brands: '',
        Model: '',
        MakeYear: 0,
        Price: 0,
        Picture: '',
        SupplierID: null,
      },
    };
  },
  methods: {
    async addCar() {
      try {
        await this.$store.dispatch('addNewCar', this.newCar);
        this.newCar = {
        CarID: null,
        Brands: '',
        Model: '',
        MakeYear: 0,
        Price: 0,
        Picture: '',
        SupplierID: null,
      };
      } catch (error) {
        console.error('Failed to add car:', error);
        
      }
    },
  },
};
</script>
<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
   border: 2px solid black;
   padding: 1.875rem;
   max-width: 22.875rem;
    /* height: 20rem; */
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