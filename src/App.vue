<template>
  <v-app>
    <v-main>
      <Navigation />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<style>
html,
body {
  overflow: hidden;
}

#app {
  font-family: Georgia, Helvetica, Arial, sans-serif;
  text-align: center;
}
.container {
  padding: 0;
}

.darkGradient {
  background-image: linear-gradient(107deg, #4d7e7f 0%, #2b81d7 0%);
}
</style>
