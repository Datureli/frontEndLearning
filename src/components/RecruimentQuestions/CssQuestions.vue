<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(cssQuestions, index) in cssQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
   
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary   font-weight-black  text-h4 text-wrap "
            v-text="cssQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="cssQuestions.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 2"
            v-show="disable"
            v-text="cssQuestions.secondAnswer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="cssQuestions.thirdPartOfAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="d-flex">
        <v-pagination
          style="position: absolute; bottom: 25%; right:35%"
          v-model="page"
          :length="3"
        ></v-pagination>
        <v-icon
          @click="disableAnswers"
          style="position: absolute; bottom: 26%; right:17%; font-size:45px;"
          >mdi-comment-off-outline</v-icon
        >
        <v-icon
          @click="randomHtmlQuestion"
          color="brown"
          style="position: absolute; bottom: 26%; right:7%; font-size:45px;"
          >mdi-dice-multiple</v-icon
        >
        <v-button @click="htmlQuestionLoop">
          <v-icon
            color="white"
            class="mx-auto"
            style="position: absolute; bottom: 26%; right:12%; font-size:45px;"
            >mdi-autorenew</v-icon
          >
        </v-button>

        <v-button @click="addToFavorite(cssQuestions)">
          <v-icon
            color="red"
            style="position: absolute; bottom: 26%; right:1%; font-size:45px;"
            >mdi-heart</v-icon
          >
        </v-button>
      </div>
    </v-carousel-item>
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
    ...mapState("questions", ["cssQuestions"]),
  },

  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
    addToFavorite(cssQuestions) {
      this.$store.state.favorite.push(cssQuestions);
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
