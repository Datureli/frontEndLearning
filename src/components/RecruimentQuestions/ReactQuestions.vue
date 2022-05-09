<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(reactQuestions, index) in reactQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary font-weight-black  text-h4 text-wrap "
            v-text="reactQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h6 text-wrap"
            v-show="disable"
            v-text="reactQuestions.answer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["disable"]),
    ...mapState("reactQuestions", ["reactQuestions"]),
  },
};
</script>
