<template>
  <v-card width="278" class="mt-10 ml-16" color="transparent" elevation="0">
    <v-list color="transparent">
      <v-list-item-group  active-class="green--text">
        <v-list-item
          v-for="(firstColumn, index) in firstColumn"
          :key="index"
          :to="firstColumn.link"
        >
          <v-icon>{{ firstColumn.icon }}</v-icon>
          <v-list-item-title class="text-h6">{{ firstColumn.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState('firstColumn',['firstColumn'])
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
