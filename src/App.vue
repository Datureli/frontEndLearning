<template>
  <v-app>
        <v-main>
          <header>
            <Navigation />
          </header>
        </v-main>
  </v-app>
</template>
<script>
import {VApp,VMain} from 'vuetify/lib'
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Georgia, Helvetica, Arial, sans-serif;
  text-align: center;
}

.darkGradient {
  background-image: linear-gradient(167deg, #000000 0%, #2c3e50 74%);
}
</style>
