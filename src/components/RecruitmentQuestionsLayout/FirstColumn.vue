<template>
  <v-container>
    <v-list-item>
      <v-list-item-title
        class="text-h5 font-weight-bold dialogButton"
        @click="openQuestionsModal"
        >Kategoria pytań</v-list-item-title
      >
    </v-list-item>

    <v-dialog v-model="isQuestionsModalOpen" max-width="900"  >
      <v-card>
        <div class="d-flex">
          <v-card-title class="font-weight-bold"
            >Wybierz kategorię pytań</v-card-title
          >
          <v-card-actions class="ml-auto pr-5">
            <v-icon @click="isQuestionsModalOpen = false"
              >mdi-close</v-icon
            >
          </v-card-actions>
        </div>

        <v-list class="mt-3 pb-5" style="overflow: hidden">
          <v-list-item-group active-class="green--text">
            <v-row>
              <v-col
                v-for="firstColumn in firstColumn"
                :key="firstColumn.title"
                cols="12"
                md="4"
                class="pl-5 pr-5"
              >
                <div @click="isQuestionsModalOpen = false">
                  <v-list-item :to="firstColumn.link">
                    <v-icon x-large :color="firstColumn.color">{{
                      firstColumn.icon
                    }}</v-icon>

                    <v-list-item-title class="ml-2 text-h7">
                      {{ firstColumn.title }}
                    </v-list-item-title>
                  </v-list-item>
                </div>
              </v-col>
            </v-row>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      isQuestionsModalOpen: false,
    };
  },
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
  },
  methods: {
    ...mapActions("questions", [
      "randomHtmlQuestion",
      "randomCssQuestion",
      "randomVueQuestion",
      "randomGitQuestion",
      "randomQuestion",
      "randomReactQuestion",
    ]),
    openQuestionsModal() {
      this.isQuestionsModalOpen = true;
    },
  },
};
</script>

<style>
.dialogButton {
  cursor: pointer;
}
</style>
