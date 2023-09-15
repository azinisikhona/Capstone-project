<template>
<router-link to="/singleView">
  <div class="col-12 col-lg-4 col-sm-6 p-1">
    <div class="card">
      <img :src="car.Picture" class="mx-auto img-fluid"  alt="...">
      <div class="car-details">
        <h3 class="Car-Brand">{{ car.Brands }}</h3>
        <p class="Car-Model">{{ car.Model }}</p>
        <p class="Car-Price">R{{ car.Price }}</p>
        <button class="buy-button">Buy</button>
        <button class="add-to-wishlist-button" @click="addToWishlist">Add to Wishlist</button>
      </div>
    </div>
  </div>
</router-link>
  
</template>

<script>
export default {
  props: ["car"],
  methods: {
    addToWishlist() {
      this.$emit("add-to-wishlist", this.car);
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #c2dbf8;
  height: 25rem;
  padding: 3px;
}
img {
  height: 15rem;
}
</style>
