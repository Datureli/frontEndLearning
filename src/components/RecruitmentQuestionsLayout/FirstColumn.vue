<template>
  <v-card :width="width" class="mt-10" color="transparent" elevation="0">
    <v-list color="transparent">
      <v-list-item-group active-class="green--text">
        <v-list-item
          v-for="firstColumn in firstColumn"
          :key="firstColumn"
          :to="firstColumn.link"
        >
          <v-icon large :color="firstColumn.color">{{
            firstColumn.icon
          }}</v-icon>

          <v-list-item-title class="ml-5 text-h7">{{
            firstColumn.title
          }}</v-list-item-title>
          <div class="text-center mr-10" v-if="firstColumn.title == null">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="green lighten-2" dark v-bind="attrs" v-on="on">
                  empty slot
                </v-btn>
              </template>

              <v-card>
                <div
                  class="d-flex justify-space-between text-h5 grey lighten-2"
                >
                  <v-card-title>
                    Wybierz kategorię
                  </v-card-title>
                  <v-btn class="mr-5 mt-3">
                    Upload
                  </v-btn>
                </div>
                <v-card-title>
                  Najczęściej uzywane
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
import SlotVue from "../materials/Slot.vue";
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
          return 250;
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
        SlotVue
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
