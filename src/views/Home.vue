<template>
  <v-container-fluid>
    <v-lazy>
      <v-img
        contain
        :height="height"
        max-width="500"
        class="mx-auto"
        src="../assets/lightbulb.jpg"
      >
      </v-img>
    </v-lazy>

    <h1 class="white--text">First polish front-end learning platform</h1>
  </v-container-fluid>
</template>

<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 520;
        case "sm":
          return 350;
        case "md":
          return 400;
        case "lg":
          return 380;
        case "xl":
          return 400;
      }
    },
  },
};
</script>
