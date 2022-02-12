<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(typescriptQuestions, index) in typescriptQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary   font-weight-black  text-h4 text-wrap "
            v-text="typescriptQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-show="disable"
            v-text="
              page === 1
                ? typescriptQuestions.answer
                : page === 2
                ? typescriptQuestions.secondAnswer
                : typescriptQuestions.thirdPartOfAnswer
            "
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
    <v-sheet class="d-flex" relative>
      <v-icon
        x-large
        @click="randomQuestion"
        color="brown"
        style="position: absolute; bottom: 26%; right:90%;"
        >mdi-dice-multiple</v-icon
      >

      <v-icon
        x-large
        @click="questionLoop"
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
        @click="addToFavorite(typescriptQuestions)"
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
    ...mapState("questions", ["typescriptQuestions"]),
  },

  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },

    addToFavorite(typescriptQuestions) {
      this.$store.state.favorite.push(typescriptQuestions);
    },
    randomQuestion() {
      this.$store.dispatch("questions/randomTypescriptQuestion");
    },
    questionLoop() {
      this.$store.dispatch("questions/typescriptQuestionLoop");
    },
  },
};
</script>
