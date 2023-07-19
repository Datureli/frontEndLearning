<template>
  <v-container fluid class="darkGradient full-height" style="height: 100vh">
    <v-row class="mt-15">
      <v-col cols="3">
     <img width="600" height="300" src="../../assets/it.webp" alt="Course Image" />
      </v-col>
      <v-col cols="9">
        <h1>Kurs podstaw html</h1>
        <p class="text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </v-col>
    </v-row>

    <v-dialog
      v-model="dialog"
      fullscreen
      @keydown.esc="dialog = false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="login" color="transparent" dark v-bind="attrs" v-on="on">
          Zacznij naukę
        </v-btn>
      </template>
      <v-card color="darkGradient">
        <v-btn x-large style="right: 1%" icon dark @click="closeModal" absolute>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: ["Opcja 1", "Opcja 2", "Opcja 3", "opcja 4", "opcja5"],
    };
  },
  methods: {
    selectItem(item) {
      // Obsługa wyboru elementu z listy
      console.log("Wybrano element:", item);
    },
  },
};
</script>
