<template>
  <div class="home">
   <img src="https://i.postimg.cc/4xqCH9Ty/istockphoto-1215484495-612x612.jpg" alt="" class="logo">
    <div class="container">
    <ul class="cards">
     <li class="card" style="width: 18rem;">
        <img src="https://i.postimg.cc/j2y2xxH5/ferrari.png" alt="img" id="images" style="" >
     </li>
     <li class="card" style="width: 18rem;">
      <img src="https://i.postimg.cc/SNWYqrdr/lamborghini.png" alt="img" id="images">
   </li>
   <li class="card" style="width: 18rem;">
    <img src="https://i.postimg.cc/xCC1zGLW/Koenigsegg-logo-1994-2048x2048.png" alt="img" id="images">
 </li>
 <li class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/wvT7kYY4/bugatti.png" alt="img" id="images">
</li>
<li class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/L53QFPb8/Pagani.jpg" alt="img" id="images">
</li>
<li class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/pdSgsKwN/Aston-Martin.png" alt="img" id="images">
</li>
<li class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/bY4wZtrB/Porsche.png" alt="img" id="images">
</li>
<li class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/05KcYT5y/Mclaren.png" alt="img" id="images">
</li>
    </ul>
  </div>
  </div>

</template>

<script>

export default {
  
}
</script>


<style scoped>

.logo{
  width:100%;
  height:650px;
}
 
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  } .cards {
    display: flex;
    padding: 25px 0px;
    list-style: none;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  .container.justify-content-center.align-content-center.p-0 {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    background: var(--white);
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    margin-top: 30px;
  }
  .card {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    background: var(--white);
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
  }
  .card:not(:last-child) {
    margin-right: 10px;
  }
  #card-text {
    align-items: center;
    justify-content: center;
   
  }
  #card-text:hover{
    background:white;
    color: black;
  }
  .card:hover {
    color: var(--white);
    background: var(--red);
  }
 
  .card .card-link-wrapper {
    margin-top: auto;
  }
  .card .card-link {
    display: inline-block;
    text-decoration: none;
    color: white;
    background: var(--red);
    padding: 6px 12px;
    border-radius: 8px;
    transition: background 0.2s;
  }
  .card:hover .card-link {
    background: var(--darkred);
  }
  .cards::-webkit-scrollbar {
    height: 12px;
  }
  .cards::-webkit-scrollbar-thumb,
  .cards::-webkit-scrollbar-track {
    border-radius: 92px;
  }
  .cards::-webkit-scrollbar-thumb {
    background: var(--darkred);
  }
  .cards::-webkit-scrollbar-track {
    background: var(--thumb);
  }
  @media (min-width: 500px) {
    .card {
      flex-basis: calc(50% - 10px);
    }
    .card:not(:last-child) {
      margin-right: 20px;
    }
  }
  @media (min-width: 700px) {
    .card {
      flex-basis: calc(calc(100% / 3) - 20px);
    }
    .card:not(:last-child) {
      margin-right: 30px;
    }
  }
  @media (min-width: 1100px) {
    .card {
      flex-basis: calc(25% - 30px);
    }
    .card:not(:last-child) {
      margin-right: 40px;
    }
  }
</style>