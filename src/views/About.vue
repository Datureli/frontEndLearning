<template>
  <v-row justify="center">
    <v-dialog
      eager
      v-model="dialog"
      fullscreen
      @keydown.esc="dialog = false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-if="dialog === false"
          color="transparent"
          dark
          v-bind="attrs"
          v-on="on"
        >
          About
        </v-btn>
      </template>
      <v-sheet
        height="100%"
        style="
		border: tan solid 12px;
		border-top: #bda27e solid 12px;
		border-left: #b19876 solid 12px;
		border-bottom: #c9ad86 solid 12px;
		box-shadow: 0px 0px 6px 5px rgba(58, 18, 13, 0), 0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5);
		background-image: radial-gradient( circle at left 30%, rgba(34, 34, 34, 0.3), rgba(34, 34, 34, 0.3) 80px, rgba(34, 34, 34, 0.5) 100px, rgba(51, 51, 51, 0.5) 160px, rgba(51, 51, 51, 0.5)), linear-gradient( 215deg, transparent, transparent 100px, #222 260px, #222 320px, transparent), radial-gradient( circle at right, #111, rgba(51, 51, 51, 1));"
      >
        <v-toolbar class="mb-0" dark color="transparent" elevation="0">
          <v-toolbar-title>Ucz się frontu</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="closeModal">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="d-flex">
          <first-column />
          <middle-column />
          <right-column />
        </div>
      </v-sheet>
    </v-dialog>
  </v-row>
</template>

<script>
import firstColumn from "../components/RecruimentQuestions/FirstColumn.vue";
import MiddleColumn from "../components/RecruimentQuestions/MiddleColumn.vue";
import RightColumn from "../components/RecruimentQuestions/RightColumn.vue";
export default {
  components: {
    firstColumn,
    MiddleColumn,
    RightColumn,
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  methods: {
    closeModal() {
      this.dialog = false;
    },
  },
};
</script>
