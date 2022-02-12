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
            class="white--text text-justify text-h6 text-wrap"
            v-show="disable"
            v-text="
              page === 1
                ? htmlQuestions.answer
                : page === 2
                ? htmlQuestions.secondAnswer
                : htmlQuestions.thirdPartOfAnswer
            "
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
    <v-sheet class="d-flex">
      <v-row justify="spacer-around" class="hidden-sm-and-down">
        <v-icon
          large
          @click="randomHtmlQuestion"
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
          :disabled="!isHeartActive"
          x-large
          @click="addToFavorite(htmlQuestions)"
          color="red"
          style="position: absolute; bottom: 26%; right:4%;"
          >mdi-heart</v-icon
        >
      </v-row>
    </v-sheet>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      icons: [
        {
          click: randomHtmlQuestion,
          icon: 'mdi-dice-multiple'
        },
             {
          click: htmlQuestionLoop,
          icon: 'mdi-autorenew'
        },
      ]
    }
  },
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    ...mapState(["disable", "favorite", "isHeartActive"]),
    ...mapState("htmlQuestions", ["htmlQuestions"]),
  },

  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
    addToFavorite(htmlQuestions) {
      this.$store.state.favorite.push(htmlQuestions);
    },
    htmlQuestionLoop() {
      this.$store.dispatch("htmlQuestions/htmlQuestionLoop");
    },
    randomHtmlQuestion() {
      this.$store.dispatch("htmlQuestions/randomHtmlQuestion");
    },
  },
};
</script>
