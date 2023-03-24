<template>
  <v-card width="50%" height="200" elevation="5" color="transparent" class="align-end pa-5 mt-auto">
    <v-dialog
      v-model="dialog"
      fullscreen
      @keydown.esc="dialog = false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
          <h2 v-bind="attrs" v-on="on">
            {{ "Question Categories" }}
          </h2>
      </template>

      <v-card color="darkGradient">
        <v-btn x-large style="right: 1%" icon dark @click="closeModal" absolute>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    elementVisible: true,
    dialog: false,
    showPassword: false,
    loggedIn: false,
  }),
};
</script>

<style>
.card {
  position: relative;
}
</style>
