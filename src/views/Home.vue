<template>
  <v-container fluid class="fill-height">
    <v-img
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      class="fill-height"
      style="transition: 5s;"
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
              :color="loading ? 'transparent' : 'blue'"
              class="my-styled-btn white--text font-weight-bold"
              :loading="loading"
              @click="loading = !loading"
            >
              Ucz się pytań

              <template v-slot:loader>
                <v-progress-linear indeterminate></v-progress-linear>
              </template>
            </v-btn>
          </router-link>
        </div>
      </div>
    </v-img>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),

  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
<style>
.v-img {
  height:100vh !important;
}
</style>