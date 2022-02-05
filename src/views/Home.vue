<template>
  <v-container-fluid>
    <v-img
      :height="height"
      lazy-src="../assets/lightbulb.jpg"
      src="../assets/lightbulb.jpg"
    >
    </v-img>
  </v-container-fluid>
</template>

<script>
import {VContainerFluid, VImg} from 'vuetify/lib'
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
  components: {
    VContainerFluid,
    VImg
  }
};
</script>
