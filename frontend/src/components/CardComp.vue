<template>
  <div class="col-12 col-lg-4 col-sm-6 p-1">
    <div class="card">
      <img :src="car.Picture" class="mx-auto img-fluid" alt="...">
      <div class="car-details">
        <h3 class="Car-Brand">{{ car.Brands }}</h3>
        <p class="Car-Model">{{ car.Model }}</p>
        <p class="Car-Price">R{{ car.Price }}</p>
        <router-link to="/checkout">
        <button class="btn btn-slide">Buy</button></router-link>
        <router-link to="/singleview">
        <button class="btn btn-slide">See More</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["car"],
};
</script>

<style scoped lang="scss">
router-link {
  text-decoration: none;
}

.card {
  background-color: #212529;
  height: 30rem;
  padding: 3px;
  color: white;

  img {
    height: 15rem;
  }

  .btn {
    width: 100px;
    border-radius: 0;
    // font-weight: 700;
    margin: 15px;
    // padding: 10px 60px;
    border: 2px solid;
    transition: color .1s ease;

    &:hover,
    &:focus {
      // color: #333;
      border-color: black;
    }
  }

  .btn-slide {
    color: #FFF;
    background-color: transparent;
    overflow: hidden;
    position: relative;
    
    &:before,
    &:after {
      content: "";    
      background: #fff;
      content: "";
      height: 200px;
      opacity: 1;
      position: absolute;
      top: -85px;
      width: 0%;
      z-index: -1;
    }
    
    &:before {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      left: -25%;
      -webkit-transition: all 1s cubic-bezier(.19,1,.22,1);
      transition: all 1s cubic-bezier(.19,1,.22,1);
    }
    
    &:after {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      right: -15%;
      -webkit-transition: all 1s cubic-bezier(.19,1,.22,1);
      transition: all 1s cubic-bezier(.19,1,.22,1);
    }
    
    &:hover,
    &:focus {
      color: #333;
      border-color: #FFF;
      
      &:before,
      &:after  {
        background-color: #FFF;
      }
      
      &:before {
        width: 120%;
      }
      
      &:after  {
        background-color: green;
        width: 10%;
      }
    }
  }
}
</style>
