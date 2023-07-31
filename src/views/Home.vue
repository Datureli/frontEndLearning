<template>
  <v-container fluid style="padding: 0;">
    <v-container
      fluid
      style="background: black; height: 100vh; overflow: hidden;"
    >
      <div style="height: 1200px">
        <v-parallax class="mx-auto" src="../assets/lightbulb.jpg">
          <h1 class="white--text mt-15">
            First polish front-end learning platform
          </h1>
        </v-parallax>
      </div>
    </v-container>

    <v-container
      class="d-flex"
      fluid
      style="
        background-color: grey;
        height: 700px;
        transform: translateY(-15%);
        position: relative;
      "
    >
      <p style="width:50%;">
        W tej poprawionej wersji kodu użyliśmy systemu siatek Vuetify, aby
        uczynić karty responsywne i dostosować ich układ w zależności od
        rozmiaru ekranu. Zastosowaliśmy pola cols na komponencie v-col do
        określenia liczby kolumn, które karta będzie zajmować na różnych
        rozmiarach ekranu. Na przykład cols="12" md="8" lg="6" oznacza, że karta
        zajmie pełną szerokość na małych ekranach, 8 kolumn na ekranach o
        średnim rozmiarze i 6 kolumn na dużych ekranach.
      </p>
      <div class="" style="width:50%;">
        <h1 class="white--text mt-15">Second Section</h1>
        <p>twój kod aktywacyjny</p>
      </div>
    </v-container>
  </v-container>
</template>

<style>
.v-container {
  padding: 0;
}
.v-parallax__image-container {
  height: auto !important;
  width: 100% !important;
  padding: 65% 0 0;
}
</style>
