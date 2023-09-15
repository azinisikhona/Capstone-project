<template>
  <div class="single-car">
    <h2>{{ car.Brands }} - {{ car.Model }}</h2>
    <div class="car-details">
      <img :src="car.Picture" class="mx-auto img-fluid" alt="Car Image">
      <p class="Car-Price">Price: R{{ car.Price }}</p>
      <p class="Car-Description">{{ car.Description }}</p>
      <router-link to="/checkout">
        <button class="btn btn-slide">Buy</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["car"],
};
</script>

<style scoped>
.single-car {
  padding: 20px;
  color: white;
}

.car-details {
  margin-top: 20px;
}

.btn {
  margin: 10px;
}
</style>
