<template>
  <v-app>
    <v-row>
      <v-col>
        <v-main class="gradient">
          <header>
            <Navigation />
          </header>
          <transition name="slide" mode="out-in"> </transition>
        </v-main>
      </v-col>
    </v-row>
        <bottom-navbar />
  </v-app>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import BottomNavbar from './components/BottomNavbar.vue'
export default {
  name: "App",
  components: {
    Navigation,
    BottomNavbar
  },
};
</script>

<style>
#app {
  font-family: Georgia, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
header {
  width: 100%;
  height: 60px;
}

.gradient {
background-color: #a55c1b;
background-image: linear-gradient(315deg, #a55c1b 0%, #000000 74%);
}
</style>
