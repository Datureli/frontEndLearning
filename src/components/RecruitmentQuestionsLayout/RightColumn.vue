<template>
  <v-card
    class="mt-12 mx-auto justify-center d-grid"
    outlined
    width="300"
    height="420"
    color="transparent"
  >
    <h3 class="mx-auto mr-16">Test your knowledge</h3>
    <v-form ref="form" v-model="isFilled">
      <v-select
        v-model="category"
        :rules="categoryRules"
        class="pa-5 mt-0 mr-16 mx-auto"
        :items="firstColumn"
        item-text="title"
        label="Category"
        persistent-hint
        return-object
        single-line
      ></v-select>
      <v-select
        class="pa-5 mt-0 pt-0 mr-16 mx-auto"
        :rules="numberOfQuestionsRules"
        :items="numberOfQuestions"
        label="Number of questions"
      ></v-select>
      <v-select
        v-model="select"
        :rules="difficultyRules"
        class="pa-5 mt-0 pt-0 mr-16 mx-auto"
        :items="difficulty"
        item-text="name"
        label="difficulty level"
        persistent-hint
        return-object
        single-line
      ></v-select>
      <v-select
        :rules="timeRules"
        class="pa-5 mt-0 pt-0 mr-16 mx-auto"
        :items="time"
        label="Time"
        persistent-hint
        return-object
        single-line
      ></v-select>
    </v-form>
    <v-btn :disabled="!isFilled" :to="'/about/test-knowledge'" class="mr-16"
      >start</v-btn
    >
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      category: "",
      isFilled: false,
      categoryRules: [(value) => !!value || "Category is required"],
      numberOfQuestionsRules: [(value) => !!value || "this field is required"],
      difficultyRules: [(value) => !!value || "difficulty is required"],
      timeRules: [(value) => !!value || "time is required"],
      numberOfQuestions: [10, 15, 20, 25],
      difficulty: [{ name: "easy" }, { name: "medium" }, { name: "hard" }],
      time: [10, 20, 30, 40],
    };
  },
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
       switch() {
      switch (this.$route.name) {
        case "Home":
          return "black";
        case "About":
        case "CssQuestions":
        case "HtmlQuestions":
        case "VueQuestions":
        case "GitQuestions":
        case "ReactQuestions":
        case "TypeScriptQuestions":
        case "JavascriptQuestions":
        case "GeneralQuestions":
        case "TestQuestions":
        case "TestYourKnowledge":
          return "darkGradient";
        case "Materials":
        case "Book":
        case "Wideo":
        case "Website":
        case "Html":
        case "Css":
        case "Javascript":
        case "Vue":
        case "React":
        case "Typescript":
        case "Git":
        case "General":
        case "Tests":
          return "black";
        case "Games":
          return "darkGradient";
        case "English":
          return "orange";
      }
    },
  },
};
</script>
