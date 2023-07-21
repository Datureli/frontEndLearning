<template>
  <v-container fluid class="module full-height" style="height: 100vh">
    <v-row class="mt-12 ">
      <v-col    >
        <v-card class="module">
          <img
            width="600"
            height="300"
            src="../../assets/it.webp"
            alt="Course Image"
          />
          <h1 class="mt-3">Kurs podstaw html</h1>
        </v-card>
      </v-col>
      <v-col    >
        <p class="text-left white--text font-weight-bold">
          Kurs podstaw HTML to wprowadzenie do języka znaczników używanego do
          tworzenia stron internetowych. W tym kursie uczestnicy zdobędą wiedzę
          na temat różnych elementów HTML i nauczą się, jak budować strony
          internetowe od podstaw. Omówione zostaną podstawowe znaczniki, takie
          jak nagłówki, akapity, listy, linki i obrazy, a także wykorzystanie
          ich do organizowania treści na stronie. Kurs skupi się również na
          tworzeniu poprawnej struktury HTML oraz zasadach semantyki, które
          pomogą uczestnikom zrozumieć znaczenie i cel użytych elementów.
        </p>
        <v-dialog
          v-model="dialog"
          fullscreen
          @keydown.esc="dialog = false"
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn width="100%" class="custom-styled-button font-weight-bold" color="#ff5722" dark v-bind="attrs" v-on="on">
              Zacznij naukę
            </v-btn>
          </template>
          <v-card color="darkGradient">
            <v-btn
              x-large
              style="right: 1%"
              icon
              dark
              @click="closeModal"
              absolute
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.module {
  background: #222;
  height: 420px;
  color: white;
  padding: 2rem;
}
  .custom-styled-button {
    /* Dodaj dowolne style, które chcesz zastosować dla przycisku */
    /* Przykładowe style: */
    background-color: #ff5722; /* Kolor tła przycisku */
    color: #ffffff; /* Kolor tekstu na przycisku */
    border-radius: 8px; /* Zaokrąglenie rogów przycisku */
    padding: 10px 20px; /* Rozmiar wewnętrznego marginesu przycisku */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Cień przycisku */
  }
</style>
