<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary p-1">
  <div class="container-fluid">
    <img src="https://i.postimg.cc/hvVH696S/Screenshot-2023-08-28-100442.png" class="logo" alt="">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link to="/" class="nav">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/showroom" class="nav">Showroom</router-link>
        </li>

         <li class="nav-item">
          <router-link to="/contact" class="nav">Contact</router-link>
        </li>

         <li class="nav-item">
         <router-link to="/admin" class="nav">Admin</router-link>
        </li>

         <li class="nav-item">
          <router-link to="/cart" class="nav">Cart</router-link>
        </li>

        <li class="nav-item">
        <router-link to="/login" class="nav">Login</router-link>
        </li>

        <li class="nav-item">
        <router-link to="/register" class="nav">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
}
</script>
<style scoped>
nav{
background-color:#FF4136 !important;
overflow: hidden;
}
.nav {
float: left;
text-align: center;
padding: 12px;
text-decoration: none;
font-size: 17px;
color:black;
}
.nav:hover{
   background-color: antiquewhite;
   border-radius: 10px;
}

.logo {
  height: 3rem;
}
</style>