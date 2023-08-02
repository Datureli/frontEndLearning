<template>
  <v-container fluid>
    <v-container class="custom-container-2" fluid>
      <div class="custom-div">
        <v-parallax class="mx-auto custom-parallax" src="../assets/lightbulb.jpg">
          <h1 class="white--text mt-15 custom-h1">
            First polish front-end learning platform
          </h1>
        </v-parallax>
      </div>
    </v-container>

    <v-container class="d-flex text-container custom-background" fluid>
      <v-col cols="6">
        <p class="custom-p ml-5 mt-5 text-left white--text">
          W tej poprawionej wersji kodu użyliśmy systemu siatek Vuetify, aby
          uczynić karty responsywne i dostosować ich układ w zależności od
          rozmiaru ekranu. Zastosowaliśmy pola cols na komponencie v-col do
          określenia liczby kolumn, które karta będzie zajmować na różnych
          rozmiarach ekranu. Na przykład cols="12" md="8" lg="6" oznacza, że karta
          zajmie pełną szerokość na małych ekranach, 8 kolumn na ekranach o
          średnim rozmiarze i 6 kolumn na dużych ekranach.
        </p>
      </v-col>
      <v-col cols="6">
        <div>
          <h1 class="white--text mt-15 custom-h1-2">Second Section</h1>
          <p>twój kod aktywacyjny</p>
        </div>
      </v-col>
    </v-container>
  </v-container>
</template>

<style lang="scss">
.container {
  padding: 0;
}
.custom-container {
  height: 100vh;
  overflow: hidden;
}
.text-container {
  background-color: rgb(50, 43, 43);
  height: 100vh;
  position: relative;
}
.v-parallax__image-container {
  height: auto !important;
  width: 100% !important;
  padding: 65% 0 0;
}
</style>
