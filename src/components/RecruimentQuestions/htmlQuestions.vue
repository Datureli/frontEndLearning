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
            class="text--primary mb-5 font-weight-black  text-h4 text-wrap "
            v-text="htmlQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="htmlQuestions.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 2"
            v-show="disable"
            v-text="htmlQuestions.secondAnswer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="htmlQuestions.thirdPartOfAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
    <v-sheet class="d-flex" relative>
      <v-icon
        x-large
        @click="randomHtmlQuestion"
        color="brown"
        style="position: absolute; bottom: 26%; right:90%;"
        >mdi-dice-multiple</v-icon
      >

      <v-icon
        x-large
        @click="htmlQuestionLoop"
        color="white"
        style="position: absolute; bottom: 26%; right:85%;"
        >mdi-autorenew</v-icon
      >

      <v-pagination
        style="position: absolute; bottom: 18%; right:36%"
        v-model="page"
        :length="3"
      ></v-pagination>
      <v-icon
        large
        @click="disableAnswers"
        style="position: absolute; bottom: 26%; right:10%;"
        >mdi-comment-off-outline</v-icon
      >

      <v-icon
        x-large
        @click="addToFavorite(htmlQuestions)"
        color="red"
        style="position: absolute; bottom: 26%; right:4%;"
        >mdi-heart</v-icon
      >
    </v-sheet>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    ...mapState(["disable", "favorite"]),
    ...mapState("questions", ["htmlQuestions"]),
  },

  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
    addToFavorite(htmlQuestions) {
      this.$store.state.favorite.push(htmlQuestions);
    },
    htmlQuestionLoop() {
      this.$store.dispatch("questions/htmlQuestionLoop");
    },
    randomHtmlQuestion() {
      this.$store.dispatch("questions/randomHtmlQuestion");
    },
  },
};
</script>
