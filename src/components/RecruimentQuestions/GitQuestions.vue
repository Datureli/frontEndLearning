<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(gitQuestions, index) in gitQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary   font-weight-black  text-h4 text-wrap "
            v-text="gitQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h6 text-wrap"
            v-show="disable"
              v-text="
              page === 1
                ? gitQuestions.answer
                : page === 2
                ? gitQuestions.secondAnswer
                : gitQuestions.thirdPartOfAnswer
            "
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
     
    </v-carousel-item>
      <v-sheet class="d-flex" relative>
      <v-icon
        x-large
        @click="randomGitQuestion"
         class="hidden-sm-and-down"
        style="position: absolute; bottom: 26%; right:90%;"
        >mdi-dice-multiple</v-icon
      >

      <v-icon
        x-large
        @click="gitQuestionLoop"
        color="white"
         class="hidden-sm-and-down"
        style="position: absolute; bottom: 26%; right:85%;"
        >mdi-autorenew</v-icon
      >

      <v-pagination
        style="position: absolute; bottom: 18%; right:36%"
        v-model="page"
         class="hidden-sm-and-down"
        :length="3"
      ></v-pagination>
      <v-icon
        large
        @click="disableAnswers"
         class="hidden-sm-and-down"
        style="position: absolute; bottom: 26%; right:10%;"
        >mdi-comment-off-outline</v-icon
      >

      <v-icon
        x-large
        @click="addToFavorite(gitQuestions)"
         class="hidden-sm-and-down"
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
    ...mapState("gitQuestions", ["gitQuestions"]),
  },

  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
    addToFavorite(gitQuestions) {
      this.$store.state.favorite.push(gitQuestions);
    },
   gitQuestionLoop() {
      this.$store.dispatch("gitQuestions/gitQuestionLoop");
    },
    randomGitQuestion() {
      this.$store.dispatch("gitQuestions/randomGitQuestion");
    },
  },
};
</script>
