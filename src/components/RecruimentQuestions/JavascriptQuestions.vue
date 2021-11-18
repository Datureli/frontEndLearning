<template>
  <v-carousel @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(javascriptQuestions, index) in javascriptQuestions"
      :key="index"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary   font-weight-black  text-h4 text-wrap "
            v-text="javascriptQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="javascriptQuestions.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 2"
            v-show="disable"
            v-text="javascriptQuestions.secondAnswer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="javascriptQuestions.thirdPartOfAnswer"
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
          @click="randomQuestion"
          color="brown"
          style="position: absolute; bottom: 26%; right:7%; font-size:45px;"
          >mdi-dice-multiple</v-icon
        >
        <v-icon
          @click="questionLoop"
          color="white"
          class="mx-auto"
          style="position: absolute; bottom: 26%; right:12%; font-size:45px;"
          >mdi-autorenew</v-icon
        >
        <v-icon
          @click="addToFavorite(javascriptQuestions)"
          color="red"
          style="position: absolute; bottom: 26%; right:1%; font-size:45px;"
          >mdi-heart</v-icon
        >
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    ...mapState([
      'disable',
      'favorite',
    ]),
    ...mapState(
      'questions', ['javascriptQuestions']
    ),
  },

  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
    questionLoop() {
      this.$store.dispatch("questions/questionLoop");
    },
    addToFavorite(javascriptQuestions) {
      this.$store.state.favorite.push(javascriptQuestions);
    },
    randomQuestion() {
      this.$store.dispatch("questions/randomQuestion");
    },
    questionLoop() {
      this.$store.dispatch("questions/questionLoop");
    },
  },
};
</script>
