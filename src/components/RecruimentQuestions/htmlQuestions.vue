<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(htmlQuestions, index) in htmlQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary font-weight-black text-h4 text-wrap "
            v-text="htmlQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
         style=" word-spacing: 1em 1em 1em;"
            class="white--text text-justify text-h6 text-wrap"
            v-show="disable"
            v-text="htmlQuestions.answer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      page: null,
    };
  },
  computed: {
    ...mapState(["disable"]),
    ...mapState("htmlQuestions", ["htmlQuestions"]),
  },
};
</script>
