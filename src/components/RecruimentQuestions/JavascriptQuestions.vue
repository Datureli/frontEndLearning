<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(javascriptQuestions, index) in javascriptQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary font-weight-black text-h4 text-wrap "
            v-text="javascriptQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            style=" word-spacing: 1em 1em 1em;"
            class="white--text text-justify text-h6 text-wrap"
            v-show="disable"
            v-text="
              page === 1
                ? javascriptQuestions.answer
                : page === 2
                ? javascriptQuestions.secondAnswer
                : javascriptQuestions.thirdPartOfAnswer
            "
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
   <v-pagination
      circle 
      style="position: absolute; bottom: 18%; right:36%"
      v-model="page"
      :length="3"
    ></v-pagination>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";
import CssQuestionsVue from './CssQuestions.vue';
export default {
  data() {
    return {
      page: null
    }
  },
  computed: {
    ...mapState(["disable", "favorite"]),
    ...mapState("javascriptQuestions", ["javascriptQuestions"]),
    ...mapState("cssQuestions", ["cssQuestions"]),
  },
};
</script>
