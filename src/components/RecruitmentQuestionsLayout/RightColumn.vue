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

        <v-form class="mt-10 mr-2 pa-4">
          <v-select
            v-for="selectItem in selectItems"
            :key="selectItem.key"
            v-model="selectItem.model"
            :items="getItemsForSelect(selectItem)"
            :label="selectItem.label"
            class="mt-5"
            @change="validateForm"
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
      isDialogOpen: false,
      selectItems: [
        {
          key: "category",
          model: null,
          label: "Category",
        },
        {
          key: "numberOfQuestions",
          model: null,
          label: "Number of questions",
        },
        {
          key: "difficulty",
          model: null,
          label: "Difficulty level",
        },
        {
          key: "time",
          model: null,
          label: "Time",
        },
      ],
      isFilled: false,
    };
  },
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
  },
  methods: {
    openKnowledgeTestModal() {
      this.isDialogOpen = true;
    },
    getItemsForSelect(selectItem) {
      const keyToOptionsMap = {
        category: this.firstColumn.map((item) => item.title),
        numberOfQuestions: ["1", "2", "3"],
        difficulty: ["Easy", "Medium", "Hard"],
        time: ["15 min", "30 min", "1 hour"],
      };

      return keyToOptionsMap[selectItem.key] || [];
    },
    validateForm() {
      this.isFilled = this.selectItems.every((item) => !!item.model);
    },
  },
};
</script>

<style>
.dialogButton {
  cursor: pointer;
}
</style>
