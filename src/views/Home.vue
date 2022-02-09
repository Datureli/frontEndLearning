<template>
  <v-container-fluid>
    <v-img
      contain
      :height="height"
      max-width="500"
      class="mx-auto"
      src="../assets/lightbulb.jpg"
    >
    </v-img>
    <ImageEngineProvider deliveryAddress="https://pkevxyr2.cdn.imgeng.in/">
      <ImageComponent
        src="image.src"
       
      />
    </ImageEngineProvider>
  </v-container-fluid>
</template>

<script>
import { Image, Source, ImageEngineProvider } from "@imageengine/vue";
export default {
  components: {
    ImageComponent: Image,
    SourceComponent: Source,
    ImageEngineProvider,
  },
    data() {
    return {
      images: [
        {
          src: `images/pic_2.jpg`,
          alt: `Picture 2`,
        },
        {
          src: `images/pic_3.jpg`,
          alt: `Picture 3`,
          directives: {
            crop: [2200, 2000, 2200, 1000],
          },
        },
      ],
    };
  },
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


