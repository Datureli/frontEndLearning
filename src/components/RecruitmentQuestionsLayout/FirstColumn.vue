<template>
  <v-card :width="width" class="mt-10" color="transparent" elevation="0">
    <v-list color="transparent">
      <v-list-item-group active-class="green--text">
        <v-list-item
          v-for="(firstColumn, index) in firstColumn"
          :key="index"
          :to="firstColumn.link"
        >
          <v-icon>{{ firstColumn.icon }}</v-icon>
          <v-list-item-title class="ml-5">{{
            firstColumn.title
          }}</v-list-item-title>
          <v-hover v-slot="{ hover }">
            <v-card color="transparent" outlined>
              <v-expand-transition>
                <div v-if="hover" class="transition-fast-in-fast-out">
                  <v-btn x-small absolute icon class="mt-1" @click="removeCategory(firstColumn)">
                    <v-icon >mdi-close</v-icon>
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
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
    // eslint-disable-next-line vue/return-in-computed-property
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "md":
          return 215;
        case "lg":
          return 260;
        case "xl":
          return 400;
      }
    },
  },
  methods: {
    removeCategory(firstColumn) {
      this.firstColumn.splice(this.firstColumn.indexOf(firstColumn), 1, "empty slot");
    },
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
