<template>
  <v-container-fluid>
    <v-img :height="height" src="../assets/lightbulb.jpg"> </v-img>
    <v-card class="mx-auto white--text" color="transparent" width="500">
      <h1 class="mx-auto" style="color: white">
        Welcome to new front-end learning platform
      </h1>
    </v-card>
  </v-container-fluid>
</template>

<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 500;
        case "sm":
          return 350;
        case "md":
          return 400;
        case "lg":
          return 550;
        case "xl":
          return 400;
      }
    },
  },
};
</script>
