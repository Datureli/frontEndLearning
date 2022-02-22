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
            class="text--primary font-weight-black text-h4 text-wrap "
            v-text="cssQuestions.question"
          ></v-list-item-title>

          <v-list-item-subtitle
            class="white--text text-justify text-h6 text-wrap"
            v-show="disable"
            v-text="
              page === 1
                ? cssQuestions.answer
                : page === 2
                ? cssQuestions.secondAnswer
                : cssQuestions.thirdPartOfAnswer
            "
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
    <v-sheet class="d-flex" relative>
      <v-row justify="spacer-around" class="hidden-sm-and-down">
        <v-icon
          x-large
          @click="randomCssQuestion"
          style="position: absolute; bottom: 26%; right:90%;"
          >mdi-dice-multiple</v-icon
        >

        <v-icon
          x-large
          @click="cssQuestionLoop"
          :disabled="disableLoop"
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
          @click="disableAnswers"
          style="position: absolute; bottom: 26%; right:10%;"
          >mdi-comment-off-outline</v-icon
        >

        <v-icon
          x-large
          @click="addToFavorite(cssQuestions)"
          style="position: absolute; bottom: 26%; right:4%;"
          >mdi-heart</v-icon
        >
      </v-row>
    </v-sheet>
  </v-carousel>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
    ...mapActions("cssQuestions", ["cssQuestionLoop", "randomCssQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
  },
};
</script>

<style>
.wrap-text {
  white-space: normal;
  word-wrap: break-word;
}
</style>
