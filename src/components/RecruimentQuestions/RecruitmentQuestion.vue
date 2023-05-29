<template>
  <v-carousel
    ref="carousel"
    hide-delimiters
    v-if="questions"
    progress="primary"
  >
    <v-carousel-item
      v-for="(question, index) in questions"
      :key="index"
      max-width="700"
      @shortkey="changeArrowDirection"
      v-shortkey="{ left: ['arrowleft'], right: ['arrowright'] }"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="font-weight-black text-wrap"
            :class="
              disable
                ? 'text-h4'
                : ['text-h2', 'mt-15', 'questionTextWithoutAnswer']
            "
            style="transition: 2s;"
            >{{ question.question }}</v-list-item-title
          >

          <v-list-item-subtitle
            class="white--text text-justify text-h6 text-wrap"
            :style="question.answer.length > 700 ? 'overflow-y: scroll;' : ''"
            v-show="disable"
          >
            <p  style="height: 250px;">
              {{ question.answer }}
            </p>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    previousQuestion() {
      this.$refs.carousel.prev();
    },

    nextQuestion() {
      this.$refs.carousel.next();
    },

    changeArrowDirection(event) {
      switch (event.srcKey) {
        case "left":
          this.previousQuestion();
          return;
        case "right":
          this.nextQuestion();
          return;
      }
    },
  },

  computed: {
    ...mapState("htmlQuestions", ["htmlQuestions"]),
    ...mapState("cssQuestions", ["cssQuestions"]),
    ...mapState("javascriptQuestions", ["javascriptQuestions"]),
    ...mapState("vueQuestions", ["vueQuestions"]),
    ...mapState("reactQuestions", ["reactQuestions"]),
    ...mapState("typescriptQuestions", ["typescriptQuestions"]),
    ...mapState("gitQuestions", ["gitQuestions"]),
    ...mapState("generalQuestions", ["generalQuestions"]),
    ...mapState("testQuestions", ["testQuestions"]),
    ...mapState(["disable"]),

    questions() {
      const path = this.$route.path;
      switch (path) {
        case "/about/htmlquestions":
          return this.htmlQuestions;
        case "/about/cssquestions":
          return this.cssQuestions;
        case "/about/javascript":
          return this.javascriptQuestions;
        case "/about/vue":
          return this.vueQuestions;
        case "/about/react":
          return this.reactQuestions;
        case "/about/typescript":
          return this.typescriptQuestions;
        case "/about/gitquestions":
          return this.gitQuestions;
        case "/about/general":
          return this.generalQuestions;
        case "/about/test":
          return this.testQuestions;
        default:
          return null;
      }
    },
  },
};
</script>

<style>
.v-window__next,
.v-window__prev {
  top: calc(85% - 20px);
  margin-top: 0.7rem;
}
.v-window__next {
  margin-left: 5rem;
}

.v-window__prev {
  margin-right: 5rem;
}

.questionTextWithoutAnswer {
  width: 100vw;
}
::-webkit-scrollbar {
  width: 10px;
}
</style>
