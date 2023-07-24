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
            class="white--text mr-8 ml-8 text-justify text-h6 text-wrap"
            :style="question.answer.length > 700 ? 'overflow-y: scroll;' : ''"
            v-show="disable"
          >
            <div class="d-flex">
              <p style="height: 250px;">
                {{ question.answer }}
              </p>
              <v-icon
                x-large
                class="mr-5"
                v-if="question.answer.length > 700"
                style="margin-top: auto; position: absolute; right: 0; bottom: 0; z-index: 19;"
              >
                mdi-arrow-down-bold
              </v-icon>
            </div>
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
        case "/recruitment-questions/htmlquestions":
          return this.htmlQuestions;
        case "/recruitment-questions/cssquestions":
          return this.cssQuestions;
        case "/recruitment-questions/javascript":
          return this.javascriptQuestions;
        case "/recruitment-questions/vue":
          return this.vueQuestions;
        case "/recruitment-questions/react":
          return this.reactQuestions;
        case "/recruitment-questions/typescript":
          return this.typescriptQuestions;
        case "/recruitment-questions/gitquestions":
          return this.gitQuestions;
        case "/recruitment-questions/general":
          return this.generalQuestions;
        case "/recruitment-questions/test":
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
