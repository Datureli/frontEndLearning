<template>
  <v-carousel>
    <v-carousel-item v-for="(item, index) in items" :key="index">
      <v-sheet height="350" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle
              class="text--primary text-h4 text-wrap "
              v-text="item.question"
            ></v-list-item-subtitle>

            <v-list-item-subtitle
              class="text-h5 text-wrap"
              v-text="item.answer"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        question: "Do czego służy atrybut role?",
        answer: `Jest to znacznik, który określa znaczenie elementu.
         Głównie do celów dostępności (ang. accessibility). Jest częścią specyfikacji ARIA. Został też dodany do HTML5.`,
        title: "Ali Connors",
      },
      {
        question: "Summer BBQ",
        answer: `Wish I could come, but I'm out of town this weekend.`,
        title: "me, Scrott, Jennifer",
      },
      {
        question: "Oui oui",
        answer: "Do you have Paris recommendations? Have you ever been?",
        title: "Sandra Adams",
      },
      {
        question: "Do czego służy znacznik Main?",
        answer: "Znacznik Main służy do umieszczania głównej części strony",
      },
    ],
  }),
};
</script>
