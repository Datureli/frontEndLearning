<template>
  <v-app>
      <v-content class="gradient">
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
}
header {
  width: 100%;
  height: 60px;
}

.gradient {
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}

</style>