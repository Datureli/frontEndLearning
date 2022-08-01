<template>
  <v-card :width="width" class="mt-10" color="transparent" elevation="0">
    <v-list color="transparent">
      <v-list-item-group active-class="green--text">
        <v-list-item
          v-for="firstColumn in firstColumn"
          :key="firstColumn"
          :to="firstColumn.link"
        >
          <v-icon>{{ firstColumn.icon }}</v-icon>

          <v-list-item-title class="ml-5">{{
            firstColumn.title
          }}</v-list-item-title>
          <div class="text-center" v-if="firstColumn.title == null">
            <v-dialog v-model="dialog" width="500" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="green lighten-2" dark v-bind="attrs" v-on="on">
                  empty slot
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Wybierz kategorię
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    I accept
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>

          <v-hover v-slot="{ hover }">
            <v-card
              color="transparent"
              v-if="firstColumn.title != null"
              outlined
            >
              <v-expand-transition>
                <div v-if="hover" class="transition-fast-in-fast-out">
                  <v-btn
                    x-small
                    absolute
                    icon
                    class="mt-1"
                    @click="removeCategory(firstColumn)"
                  >
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
      dialog: false,
    };
  },
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
      this.firstColumn.splice(
        this.firstColumn.indexOf(firstColumn),
        1,
        "empty slot"
      );
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
