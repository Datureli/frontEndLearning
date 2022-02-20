<template>
  <v-row class="hidden-sm-and-down">
    {{ this.$route.path }}
    <v-icon
      large
      @change="path"
      style="position: absolute; bottom: 26%; right:60%;"
      >mdi-dice-multiple</v-icon
    >

    <v-icon
      x-large
      @click="htmlQuestionLoop"
      style="position: absolute; bottom: 26%; right:65%;"
      >mdi-autorenew</v-icon
    >
    <v-icon
      large
      @click="disableAnswers"
      style="position: absolute; bottom: 26%; right:50%;"
      >mdi-comment-off-outline</v-icon
    >
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="position: absolute; bottom: 26%; right:52%;"
          color="transparent"
          outlined
          v-bind="attrs"
          v-on="on"
        >
          <v-icon
            :disabled="!isHeartActive"
            x-large
            @click="addToFavorite(htmlQuestions)"
            >mdi-heart</v-icon
          >
        </v-btn>
      </template>
      <span>You need to be logged in</span>
    </v-tooltip>
  </v-row>
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
    ...mapState("questions", ["javascriptQuestions"]),
    ...mapState("vueQuestions", ["vueQuestions"]),
  },
  methods: {
    clickhandler() {
      if (this.$route.path === "/about/javascript") {
        this.randomQuestion();
      } else {
        this.randomVueQuestion();
      }
    },
    randomQuestion() {
      this.$store.dispatch("questions/randomQuestion");
    },
    randomVueQuestion() {
      this.$store.dispatch("vueQuestions/randomVueQuestion");
      this.page = 1;
    },
    path() {
      switch (this.$route.path) {
        case "/about/javascript":
          return randomQuestion();
        case "/about/vue":
          return randomVueQuestion();
      }
    },
  },
};
</script>
