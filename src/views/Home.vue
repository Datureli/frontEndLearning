<template>
  <v-container fluid>
    <v-parallax class="mx-auto" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <h1 class="white--text mt-15">
        First polish front-end learning platform
      </h1>
    </v-parallax>

    <v-container class="d-flex text-container" fluid>
      <v-col cols="6">
        <p class="ml-5 mt-5 text-left white--text">
          W tej poprawionej wersji kodu użyliśmy systemu siatek Vuetify, aby
          uczynić karty responsywne i dostosować ich układ w zależności od
          rozmiaru ekranu. Zastosowaliśmy pola cols na komponencie v-col do
          określenia liczby kolumn, które karta będzie zajmować na różnych
          rozmiarach ekranu. Na przykład cols="12" md="8" lg="6" oznacza, że
          karta zajmie pełną szerokość na małych ekranach, 8 kolumn na ekranach
          o średnim rozmiarze i 6 kolumn na dużych ekranach.
        </p>
      </v-col>
      <v-col cols="6">
        <div>
          <h1 class="white--text mt-15">Second Section</h1>
          <p>twój kod aktywacyjny</p>
        </div>
      </v-col>
    </v-container>
  </v-container>
</template>

<style>
.container {
  padding: 0;
}
.custom-container {
  height: 100vh;
}
.text-container {
  background-color: rgb(50, 43, 43);
  height: 100vh;
  position: relative;
}

</style>
