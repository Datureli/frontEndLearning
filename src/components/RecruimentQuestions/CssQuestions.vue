<template>
  <v-carousel
    ref="carousel"
    :continuous="true"
    hide-delimiters
    @change="page = 1"
    class="mt-1"
  >
    <v-carousel-item
      v-for="(cssQuestions, index) in cssQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <div>
        <v-btn
          @keyup.g="$refs.carousel.next()"
          @click.stop="$refs.carousel.next()"
          icon
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary font-weight-black text-h4 text-wrap "
            v-text="cssQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="cssQuestions.answer.trim().replace(/\s{2,9999}|\t/g, ' ')"
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
        class="hidden-sm-and-down"
        color="white"
        style="position: absolute; bottom: 26%; right:85%;"
        >mdi-autorenew</v-icon
      >

      <v-pagination
      class="mx-auto"
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
    ...mapState("questions", ["cssQuestions"]),
    nextArrow() {
      cssQuestions;
    },
  },
  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
    addToFavorite(cssQuestions) {
      this.$store.state.favorite.push(cssQuestions);
    },
    cssQuestionLoop() {
      this.$store.dispatch("questions/cssQuestionLoop");
    },
    randomCssQuestion() {
      this.$store.dispatch("questions/randomCssQuestion");
    },
    nextIndex() {
      cssQuestions.map();
    },
  },
};
</script>
