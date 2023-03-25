<template>
  <v-card class="card align-end pa-5 mt-auto" width="50%" height="200" elevation="5" color="transparent">
    <v-dialog v-model="dialog" fullscreen @keydown.esc="dialog = false" transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <h2 v-bind="attrs" v-on="on">Question Categories</h2>
      </template>
      <v-card color="darkGradient">
        <v-btn icon dark x-large class="absolute top-0 right-0" @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    closeModal() {
      this.dialog = false;
    },
  },
};
</script>
<style>
.card {
  position: relative;
}
</style>