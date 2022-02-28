<template>
  <v-card width="278" class="mt-10 ml-16" color="transparent" elevation="0">
    <v-list color="transparent">
      <v-list-item-group active-class="green--text">
        <v-list-item
          v-show="!showEmptySlot"
          v-for="(firstColumn, index) in firstColumn"
          :key="index"
          :to="firstColumn.link"
        >
        <h1 v-show="shoeEmptySlot">empty slot</h1>
          <v-icon>{{ firstColumn.icon }}</v-icon>
          <v-list-item-title class="text-h6 ml-6">{{
            firstColumn.title
          }}</v-list-item-title>
          <v-hover v-slot="{ hover }">
            <v-card
              class="mx-auto"
              color="transparent"
              outlined
              max-width="600"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal text-h2 white--text"
                >
                  <v-btn icon @click="removeItemFromFirstColumn">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </v-expand-transition>

              <v-card-text> </v-card-text>
            </v-card>
          </v-hover>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      showEmptySlot: false,
      showRmoveButton: false,
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
    ...mapActions("firstColumn",[ 'removeItemFromFirstColumn'])
  },

};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
