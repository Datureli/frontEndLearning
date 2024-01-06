<template>
  <v-list class="mt-3 pb-5" style="overflow: hidden;">
    <v-list-item-group active-class="green--text">
      <v-row>
        <v-col
          v-for="firstColumn in firstColumn"
          :key="firstColumn.title"
          cols="12"
          md="4"
          class="pl-5 pr-5"
        >
          <v-list-item :to="firstColumn.link">
            <v-icon large :color="firstColumn.color">{{
              firstColumn.icon
            }}</v-icon>

            <v-list-item-title class="ml-2 text-h7">
              {{ firstColumn.title }}
            </v-list-item-title>
          </v-list-item>
        </v-col>
      </v-row>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
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
  },
};
</script>
