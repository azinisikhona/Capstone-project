<template>
  <div class="about">

    <h2>About</h2>

   <div class="row p-4">
    <div class="col-lg-8 col-sm-12 p-2">
    <img src="https://i.postimg.cc/sxvLtVq6/Car-meet.webp" class="img-fluid" alt="us" stlye="width=200px">
    </div>
    <div class="col-lg-4 col-sm-12 p-2">
      <h3>About Celestial Autos</h3>
      <p>We find and ship the most exotic cars found in the world. We are organizers of one of the most popular and biggest car meets in the southern hemisphere. Cars are a culture we respect and love. There is nothing admire more than a person who appreciate the beauty of hypercars We sell the car we have in stock and we also order and ship the car for you. We even broker a deal for you and a seller.</p> 
    </div>
   </div>

   <div class="row p-4">
    <h2>Team</h2>
    <div class="col-lg-3 col-md-6 col-sm-12 p-1">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="https://i.postimg.cc/8Chh6r3p/IMG-20200928-WA0082-1-removebg-preview.png" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
           </div>
        </div>
      </div>       
    </div>

    <div class="col-lg-3 col-md-6 col-sm-12 p-1">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="https://i.postimg.cc/WbJvzRMW/C12-Liyabona-Mxhalis-1.jpg" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
           </div>
        </div>
      </div>       
    </div>

    <div class="col-lg-3 col-md-6 col-sm-12 p-1">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="https://i.postimg.cc/Y00DPNhM/C12-Samkelo-Mpokela-Class1-2.jpg" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
           </div>
        </div>
      </div>
    </div>
    
    <div class="col-lg-3 col-md-6 col-sm-12 p-1">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="https://i.postimg.cc/HkrnXbHn/IMG-20230428-WA0009.jpg" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
           </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
   
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

</style>