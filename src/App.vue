<template>
  <v-app>
      <v-content>
    <v-container-fluid >
    <header>
      <Navigation />
    </header>
    <transition name="slide" mode="out-in">

    </transition>
     
    </v-container-fluid>
  
     </v-content>
      
  </v-app>
  
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  width: 100%;
  height: 60px;
}
</style>