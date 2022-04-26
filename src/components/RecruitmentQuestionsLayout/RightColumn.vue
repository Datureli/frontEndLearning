<template>
  <v-card
    class="mt-12 mx-auto justify-center d-grid"
    outlined
    width="300"
    height="420"
    color="transparent"
  >
    <h3 class="mx-auto mr-16">Test your knowledge</h3>
    <v-select
      v-model="select"
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
      :items="numberOfQuestions"
      label="Number of questions"
    ></v-select>
    <v-select
      v-model="select"
      class="pa-5 mt-0 pt-0 mr-16 mx-auto"
      :items="items"
      item-text="state"
      item-value="abbr"
      label="difficulty level"
      persistent-hint
      return-object
      single-line
    ></v-select>
    <v-select
      v-model="select"
      class="pa-5 mt-0 pt-0 mr-16 mx-auto"
      :items="items"
      item-text="state"
      item-value="abbr"
      label="Time"
      persistent-hint
      return-object
      single-line
    ></v-select>
    <v-btn class="mr-16">start</v-btn>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      numberOfQuestions: [10, 15, 20, 25],
      difficulty: [{ name: 'easy' }, { name: 'medium' }, { name: 'hard' }],
      items: [
        { state: "Florida", abbr: "FL" },
        { state: "Georgia", abbr: "GA" },
        { state: "Nebraska", abbr: "NE" },
        { state: "California", abbr: "CA" },
        { state: "New York", abbr: "NY" },
      ],
    };
  },
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
  },
};
</script>
