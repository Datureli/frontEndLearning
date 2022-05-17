<template>
  <v-card class="mt-12 d-grid" outlined :width="width" color="transparent">
    <h3>Test your knowledge</h3>
    <v-form class="pa-5" ref="form" v-model="isFilled">
      <v-select
        v-model="category"
        :rules="categoryRules"
        class="mt-5"
        :items="firstColumn"
        item-text="title"
        label="Category"
        persistent-hint
        return-object
        single-line
      ></v-select>
      <v-select
        class="mt-5 pt-0"
        :rules="numberOfQuestionsRules"
        :items="numberOfQuestions"
        label="Number of questions"
      ></v-select>
      <v-select
        v-model="select"
        :rules="difficultyRules"
        class="mt-5 pt-0"
        :items="difficulty"
        item-text="name"
        label="difficulty level"
        persistent-hint
        return-object
        single-line
      ></v-select>
      <v-select
        :rules="timeRules"
        class="mt-5 pt-0"
        :items="time"
        label="Time"
        persistent-hint
        return-object
        single-line
      ></v-select>
    </v-form>
    <v-btn :disabled="!isFilled" :to="'/about/test-knowledge'">start</v-btn>
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

    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 280;
        case "sm":
          return 210;
        case "md":
          return 215;
        case "lg":
          return 240;
        case "xl":
          return 400;
      }
    },
  },
};
</script>
