<template>
  <v-carousel ref="carousel" hide-delimiters v-if="questions">
    <v-carousel-item
      v-for="(question, index) in questions"
      :key="index"
      @shortkey="changeArrowDirection"
      v-shortkey="{ left: ['arrowleft'], right: ['arrowright'] }"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-col
            :class="$vuetify.breakpoint.mdAndUp ? 'elevation-3' : ''"
            class="mx-auto"
            cols="12"
            md="10"
            style="height: 370px"
          >
            <v-list-item-title
              class="font-weight-black text-wrap"
              :class="disable ? 'text-h4' : ['text-h3', 'mt-15']"
              style="transition: 2s"
              >{{ question.question }}</v-list-item-title
            >

            <v-list-item-subtitle
              class="white--text mr-md-6 ml-md-6 mt-3 text-justify text-h6 text-wrap"
              v-show="disable"
            >
              <p style="height: 250px">
                {{ question.answer }}
              </p>
            </v-list-item-subtitle>
          </v-col>
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
    ...mapState("cypressQuestions", ["cypressQuestions"]),
    ...mapState("postmanQuestions", ["postmanQuestions"]),
    ...mapState("sqlQuestions", ["sqlQuestions"]),
    ...mapState("wordpressQuestions", ["wordpressQuestions"]),
    ...mapState("cybersecurityQuestions", ["cybersecurityQuestions"]),
    ...mapState("cloudQuestions", ["cloudQuestions"]),
    ...mapState(["disable"]),

    questions() {
      const path = this.$route.path;
      const categoryPrefix = "/recruitment-questions/";

      if (path.startsWith(categoryPrefix)) {
        const category = path.slice(categoryPrefix.length);
        const questionCategories = {
          htmlquestions: this.htmlQuestions,
          cssquestions: this.cssQuestions,
          javascript: this.javascriptQuestions,
          vue: this.vueQuestions,
          react: this.reactQuestions,
          typescript: this.typescriptQuestions,
          gitquestions: this.gitQuestions,
          general: this.generalQuestions,
          test: this.testQuestions,
          postman: this.postmanQuestions,
          cypress: this.cypressQuestions,
          sql: this.sqlQuestions,
          wordpress: this.wordpressQuestions,
          cybersecurity: this.cybersecurityQuestions,
          cloud: this.cloudQuestions
        };

        return questionCategories[category] || null;
      }

      return null;
    },
  },
};
</script>

<style>
.v-window__prev,
.v-window__next {
  top: 35%;
}
@media only screen and (max-width: 600px) {
  .v-window__prev,
  .v-window__next {
    top: 90%;
  }
}
</style>
