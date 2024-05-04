<template>
  <v-container fluid>
    <v-img
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      class="fill-width fill-height"
    >
      <div class="d-flex flex-column align-center justify-center fill-height">
        <h1 class="white--text mt-15 text-center">
          Pierwsza w Polsce platforma do nauki front-endu
        </h1>
        <div class="text-center mt-6">
          <router-link to="/recruitment-questions">
            <v-btn
              width="300"
              x-large
              color="blue"
              class="white--text font-weight-bold"
            >
              Ucz się pytań
            </v-btn>
          </router-link>
        </div>
      </div>
    </v-img>
  </v-container>
</template>

<style>
.fill-width {
  width: 100vw !important;
}

.fill-height {
  height: 100vh !important;
}
</style>
