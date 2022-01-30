<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
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
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="reactQuestions.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 2"
            v-show="disable"
            v-text="reactQuestions.secondAnswer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="reactQuestions.thirdPartOfAnswer"
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
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    ...mapState(["disable", "favorite"]),
    ...mapState("reactQuestions", ["reactQuestions"]),
  },

  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },

    addToFavorite(reactQuestions) {
      this.$store.state.favorite.push(reactQuestions);
    },
    randomReactQuestion() {
      this.$store.dispatch("reactQuestions/randomReactQuestion");
    },
    reactQuestionLoop() {
      this.$store.dispatch("reactQuestions/reactQuestionLoop");
    },
  },
};
</script>
