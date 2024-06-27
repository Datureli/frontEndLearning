<template>
  <v-carousel ref="carousel" hide-delimiters v-if="questions">
    <v-carousel-item
      v-for="(question, index) in questions"
      :key="index"
      @shortkey="changeArrowDirection"
      v-shortkey="{ left: ['arrowleft'], right: ['arrowright'] }"
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
              class="white--text  mt-3 text-justify text-h6 text-wrap"
              v-show="disable"
              style="max-height: 260px; overflow-y: auto; padding-right: 22px; padding-left: 25px"
            >
              <p
                style="
                  word-spacing: -2px;
                  word-break: break-word;
                  hyphens: auto;
                  overflow-wrap: break-word;
                "
              >
                {{ question.answer }}
              </p>
            </v-list-item-subtitle>

            <button v-if="question.code" @click="openCodeDialog = true">
              Otwórz przykład
            </button>

            <v-dialog v-model="openCodeDialog" max-width="900">
              <code-highlight language="javascript">
                <pre><div>{{ question.code }}
                  </div></pre>
              </code-highlight>
            </v-dialog>
          </v-col>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/prism-okaidia.css";
import "vue-code-highlight/themes/window.css";
import { mapState } from "vuex";
export default {
  data() {
    return {
      openCodeDialog: false,
    };
  },
  components: {
    CodeHighlight,
  },
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
    ...mapState("cicdQuestions", ["cicdQuestions"]),
    ...mapState("backendQuestions", ["backendQuestions"]),
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
          cloud: this.cloudQuestions,
          cicd: this.cicdQuestions,
          backend: this.backendQuestions,
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

pre {
  background-color: black;
  color: white;
  padding: 10px;
  border: 1px solid #ccc;
  overflow-x: auto;
  text-align: left;
}

pre code {
  display: block;
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: white;
}
::-webkit-scrollbar {
  overflow: auto;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: #335682;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1f4a7f;
}

@media only screen and (max-width: 600px) {
  .v-window__prev,
  .v-window__next {
    top: 90%;
  }
}
</style>
