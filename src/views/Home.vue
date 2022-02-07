<template>
  <v-container-fluid>
    <v-img
    contain
      :height="height"
      max-width="500"
      class="mx-auto"
      lazy-src="../assets/lightbulb.jpg"
      src="../assets/lightbulb.jpg"
    >
    </v-img>
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
          return 550;
        case "xl":
          return 400;
      }
    },
  },
};
</script>
