<template>
  <v-container>
    <v-list-item>
      <v-list-item-title
        class="text-h5 font-weight-bold dialogButton"
        @click="openKnowledgeTestModal"
        >Test wiedzy</v-list-item-title
      >
    </v-list-item>

    <v-dialog v-model="isDialogOpen" max-width="900">
      <v-card>
        <div class="d-flex">
          <v-card-title class="font-weight-bold"
            >Przetestuj swoją wiedzę</v-card-title
          >
          <v-card-actions class="ml-auto pr-5">
            <v-icon @click="isDialogOpen = false">mdi-close</v-icon>
          </v-card-actions>
        </div>

        <v-form class="mt-10 mr-2 mx-auto pa-4" v-model="isFilled">
          <v-select
            v-for="selectItem in selectItems"
            :key="selectItem.key"
            v-model="selectItem.model"
            :rules="selectItem.rules"
            :items="getItemsForSelect(selectItem)"
            item-text="title"
            :label="selectItem.label"
            persistent-hint
            return-object
            single-line
            class="mt-5"
          ></v-select>
          <v-btn
            width="300"
            :disabled="!isFilled"
            :to="'/about/test-knowledge'"
            rounded
            color="primary"
            >Start</v-btn
          >
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isFilled: false,
      isDialogOpen: false,
      selectItems: [
        {
          key: "category",
          model: "category",
          rules: "categoryRules",
          label: "Category",
        },
        {
          key: "numberOfQuestions",
          model: "numberOfQuestions",
          rules: "numberOfQuestionsRules",
          label: "Number of questions",
        },
        {
          key: "difficulty",
          model: "difficulty",
          rules: "difficultyRules",
          label: "Difficulty level",
        },
        {
          key: "time",
          model: "time",
          rules: "timeRules",
          label: "Time",
        },
      ],
    };
  },
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
    ...mapState("rightColumn", [
      "categoryRules",
      "numberOfQuestionsRules",
      "difficultyRules",
      "timeRules",
    ]),
  },
  methods: {
    openKnowledgeTestModal() {
      this.isDialogOpen = true;
    },
    getItemsForSelect(selectItem) {
      // Dynamicznie zwracamy odpowiednie items dla danego selectItem
      if (selectItem.key === "category") {
        return this.firstColumn.map((item) => item.title);
      } else if (selectItem.key === "numberOfQuestions") {
        return ["1", "2", "3"]; // Przykładowe wartości, dostosuj do potrzeb
      } else if (selectItem.key === "difficulty") {
        return ["Easy", "Medium", "Hard"]; // Przykładowe wartości, dostosuj do potrzeb
      } else if (selectItem.key === "time") {
        return ["15 min", "30 min", "1 hour"]; // Przykładowe wartości, dostosuj do potrzeb
      }
      return [];
    },
  },
};
</script>

<style>
.dialogButton {
  cursor: pointer;
}
</style>
