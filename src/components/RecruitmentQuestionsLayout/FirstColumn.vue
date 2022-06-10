<template>
  <v-card :width="width" class="mt-10" color="transparent" elevation="0">
    <v-list color="transparent">
      <v-list-item-group active-class="green--text">
        <v-list-item
          v-for="firstColumn in firstColumn"
          :key="firstColumn.id"
          :to="firstColumn.link"
          :on-delete="removeItemFromFirstColumn"
        >
          <v-icon>{{ firstColumn.icon }}</v-icon>
          <v-list-item-title class="ml-5">{{
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
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "md":
          return 215;
        case "lg":
          return 240;
        case "xl":
          return 400;
      }
    },
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
    ...mapActions("firstColumn", ["removeItemFromFirstColumn"]),
  },
};
</script>
