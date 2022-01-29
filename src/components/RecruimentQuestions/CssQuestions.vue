<template>
  <v-carousel eager hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(cssQuestions, index) in cssQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="text--primary wrap-text font-weight-black text-h4 text-wrap "
            v-text="cssQuestions.question"
          ></v-list-item-title>

          <v-list-item-subtitle
            style="word-break: break-all;  text-align: justify;
  text-justify: auto;"
            class="white--text text-h5 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="cssQuestions.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            style="  word-break: break-all;"
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 2"
            v-show="disable"
            v-text="cssQuestions.secondAnswer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            style="  word-break: break-all;"
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="cssQuestions.thirdPartOfAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
    <v-sheet class="d-flex" relative>
      <v-icon
        x-large
        @click="randomCssQuestion"
        class="hidden-sm-and-down"
        color="brown"
        style="position: absolute; bottom: 26%; right:90%;"
        >mdi-dice-multiple</v-icon
      >

      <v-icon
        x-large
        @click="cssQuestionLoop"
        :disabled="disableLoop"
        class="hidden-sm-and-down"
        color="white"
        style="position: absolute; bottom: 26%; right:85%;"
        >mdi-autorenew</v-icon
      >

      <v-pagination
        class="mx-auto hidden-sm-and-down"
        style="position: absolute; bottom: 18%; right:36%"
        v-model="page"
        :length="3"
      ></v-pagination>
      <v-icon
        large
        class="hidden-sm-and-down"
        @click="disableAnswers"
        style="position: absolute; bottom: 26%; right:10%;"
        >mdi-comment-off-outline</v-icon
      >

      <v-icon
        x-large
        class="hidden-sm-and-down"
        @click="addToFavorite(cssQuestions)"
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
  data() {
    return {
      disableLoop: false,
    };
  },
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    ...mapState(["disable", "favorite"]),
    ...mapState("cssQuestions", ["cssQuestions"]),
  },
  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
    addToFavorite(cssQuestions) {
      this.$store.state.favorite.push(cssQuestions);
    },
    cssQuestionLoop() {
      this.$store.dispatch("cssQuestions/cssQuestionLoop");
      this.disableLoop = true;
    },
    randomCssQuestion() {
      this.$store.dispatch("cssQuestions/randomCssQuestion");
      this.page = 1;
    },
  },
};
</script>

<style>
.wrap-text {
  white-space: normal;
  word-wrap: break-word;
}
</style>
