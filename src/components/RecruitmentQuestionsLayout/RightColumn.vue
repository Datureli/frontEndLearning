<template>
  <v-card class="mt-10 " outlined color="transparent" max-width="600">
    <h3 class="text-md-h6 mr-4">Test your knowledge</h3>
    <v-form class="pa-4" v-model="isFilled">
      <v-select
        v-model="category"
        :rules="categoryRules"
        :items="firstColumn"
        item-text="title"
        label="Category"
        persistent-hint
        return-object
        single-line
        class="mt-5"
      ></v-select>
      <v-select
        :rules="numberOfQuestionsRules"
        :items="numberOfQuestions"
        label="Number of questions"
        class="mt-5 pt-0"
      ></v-select>
      <v-select
        :rules="difficultyRules"
        :items="difficulty"
        item-text="name"
        label="Difficulty level"
        persistent-hint
        return-object
        single-line
        class="mt-5 pt-0"
      ></v-select>
      <v-select
        :rules="timeRules"
        :items="time"
        label="Time"
        persistent-hint
        return-object
        single-line
        class="mt-5 pt-0"
      ></v-select>
    </v-form>
    <v-responsive>
      <v-btn
        :disabled="!isFilled"
        :to="'/about/test-knowledge'"
        class="mx-auto"
        rounded
        color="primary"
      >
        Start
      </v-btn>
    </v-responsive>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isFilled: false,
    };
  },
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
    ...mapState("rightColumn", [
      "category",
      "categoryRules",
      "numberOfQuestionsRules",
      "difficultyRules",
      "timeRules",
      "numberOfQuestions",
      "difficulty",
      "time",
    ]),
  },
};
</script>

<style>
.v-card__title {
  justify-content: center;
}

.v-card__text {
  display: flex;
  flex-wrap: wrap;
}

.v-card__form {
  width: 100%;
}

.v-select__selections {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.v-select__selection {
  flex: 1 1 auto;
}

.v-input__control {
  width: 100%;
}
</style>
