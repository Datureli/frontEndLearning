<template>
  <v-container-fluid>

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
          return 450;
        case "xl":
          return 400;
      }
    },
  },
};
</script>
