<template>
  <v-app>
    <v-row>
      <v-col>
        <v-main>
          <header>
            <Navigation />
          </header>
        </v-main>
      </v-col>
    </v-row>
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
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Georgia, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
}

.darkGradient {
  background-image: linear-gradient(167deg, #000000 0%, #2c3e50 74%);
}
</style>
