<template>
  <v-carousel hide-delimiters @change="page = 1">
    <v-carousel-item
      eager
      v-for="(cssQuestions, index) in cssQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="font-weight-black text-h4 text-wrap "
            v-text="cssQuestions.question"
          ></v-list-item-title>

          <v-list-item-subtitle
            class="white--text text-justify text-h6 text-wrap"
            v-show="disable"
            v-text="cssQuestions.answer"
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
      page: 0,
    };
  },
  computed: {
    ...mapState(["disable"]),
    ...mapState("cssQuestions", ["cssQuestions"]),
  },
};
</script>
