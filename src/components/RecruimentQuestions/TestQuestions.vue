<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(testQuestions, index) in testQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary font-weight-black text-h4 text-wrap"
            v-text="testQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-show="disable"
            v-text="testQuestions.answer"
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
    ...mapState("testQuestions", ["testQuestions"]),
  },
};
</script>
