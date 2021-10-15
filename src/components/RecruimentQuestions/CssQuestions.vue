<template>
  <v-carousel class="mx-auto">
    <v-carousel-item v-for="(cssItem, index) in cssItems" :key="index">
      <v-sheet :cssItems="cssItem" height="100%" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle
              class="text--primary text-h4 text-wrap "
              v-text="cssItem.question"
            ></v-list-item-subtitle>

            <v-list-item-subtitle
              class="text-h5 text-wrap"
              v-text="cssItem.answer"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

</template>

<script>
export default {
  data() {
    return {
      cssItems: [
        {
          question: "Ddsadassdadasdae?",
          answer: `Jest to znacznik, który określa znaczenie elementu.
         Głównie do celów dostępności (ang. accessibility). Jest częścią specyfikacji ARIA. Został też dodany do HTML5.`,
          title: "Ali Connors",
        },
          {
          question: "Ddsadassdadasdae?",
          answer: `Jest to znacznik, który określa znaczenie elementu.
         Głównie do celów dostępności (ang. accessibility). Jest częścią specyfikacji ARIA. Został też dodany do HTML5.`,
          title: "Ali Connors",
        },
      ],
    };
  },
};
</script>
