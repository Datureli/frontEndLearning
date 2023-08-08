<template>
  <v-carousel
    ref="carousel"
    hide-delimiters
    progress="primary"
  >
    <v-carousel-item
      v-for="( htmlSlides, index) in  htmlSlides"
      :key="index"
      @shortkey="changeArrowDirection"
      v-shortkey="{ left: ['arrowleft'], right: ['arrowright'] }"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
          width="100%"
            class="font-weight-black text-wrap text-h3 text-left"
            >{{ htmlSlides.heading }}</v-list-item-title
          >

          <v-list-item-subtitle
            class="white--text text-justify text-h6 text-wrap"
           
            v-show="disable"
          >
            <div class="d-flex">
              <p style="height: 250px;">
                {{ htmlSlides.text }}
              </p>
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
    ...mapState("htmlCourse", ["htmlSlides"]),
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
        case "/podstawy-html":
          return this.htmlSlides;
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

::-webkit-scrollbar {
  width: 10px;
}
</style>