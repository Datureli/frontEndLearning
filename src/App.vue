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
  background: black;
}

.darkGradient {
  background-image: linear-gradient(107deg, #18a7ac 0%, #396692 0%);
}
</style>
