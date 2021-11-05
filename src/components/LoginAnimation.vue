<template>
  <section>
    <div class="loader">
      <div class="dot" style="--i:0"></div>
      <div class="dot" style="--i:1"></div>
      <div class="dot" style="--i:2"></div>
      <div class="dot" style="--i:3"></div>
      <div class="dot" style="--i:4"></div>
      <div class="dot" style="--i:5"></div>
      <div class="dot" style="--i:6"></div>
      <div class="dot" style="--i:7"></div>
      <div class="dot" style="--i:8"></div>
      <div class="dot" style="--i:9"></div>
    </div>
  </section>
</template>

<style scoped>

section {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    align-items: center;
    animation: changeColor 5s linear infinite;

}
@keyframes changeColor {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
.loader {
    position: relative;
    display: flex;
    border-radius: 50%;
}

.dot {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    background: #fff;
    margin: 20px 10px;
    transform: scale(0.1);
    box-shadow: 0 0 10px #fff,
    0 0 20px #fff,
    0 0 30px #fff,
    0 0 40px #fff,
    0 0 50px #fff,
    0 0 60px #fff;
    border-radius: 50%;
    animation: animateDot 2s linear infinite;
    animation-delay: calc(0.1s * var(--i));
    

}
@keyframes animateDot {
  0% {
    transform: scale(0.1);
  }
  10% {
    transform: scale(1);
  }
  50%,100% {
    transform: scale(0.1);
  }
}


</style>
