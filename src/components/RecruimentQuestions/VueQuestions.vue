<template>
  <v-carousel hide-delimiters @change="page = 1"  class="mt-1">
    <v-carousel-item
      v-for="(vueQuestions, index) in vueQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary font-weight-black text-h4 text-wrap "
            v-text="vueQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
             style="word-break: break-all;"
            class="white--text text-justify text-h6 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="vueQuestions.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
             style="word-break: break-all;"
            class="white--text text-justify text-h6 text-wrap"
            v-if="page === 2"
            v-show="disable"
            v-text="vueQuestions.secondAnswer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h6 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="vueQuestions.thirdPartOfAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
    </v-carousel-item>
     <v-sheet class="d-flex" relative>
      <v-icon
        x-large
        @click="randomVueQuestion"
         class="hidden-sm-and-down"
        style="position: absolute; bottom: 26%; right:90%;"
        >mdi-dice-multiple</v-icon
      >

      <v-icon
        x-large
        @click="vueQuestionLoop"
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
        @click="addToFavorite(vueQuestions)"
        color="red"
         class="hidden-sm-and-down"
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
    ...mapState("vueQuestions", ["vueQuestions"]),
    
  },

  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },

    addToFavorite(vueQuestions) {
      this.$store.state.favorite.push(vueQuestions);
    },
    randomVueQuestion() {
      this.$store.dispatch("vueQuestions/randomVueQuestion");
      this.page = 1
    },
    vueQuestionLoop() {
      this.$store.dispatch("vueQuestions/vueQuestionLoop");
    },
  },
};
</script>
