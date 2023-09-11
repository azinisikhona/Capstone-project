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
      <select v-model="newCar.SupplierID" name="SupplierID" id="SupplierID">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

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