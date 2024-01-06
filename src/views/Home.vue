<template>
  <v-container fill-height fluid class="">
    <v-img src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <div class="mt-auto">
        <h1 class="white--text mt-15">
          Pierwsza w Polsce platforma do nauki front-endu
        </h1>
        <div class="text-center">
          <v-btn
            width="300"
            x-large
            :color="loading ? 'transparent' : 'blue'"
            class="my-styled-btn white--text mt-6 font-weight-bold"
            :loading="loading"
            @click="loading = !loading"
          >
            Ucz się pytań

            <template v-slot:loader>
              <v-progress-linear indeterminate></v-progress-linear>
            </template>
          </v-btn>
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

<style scoped>
.text-container {
  background-color: rgb(27, 100, 190);
  position: relative;
}

.my-styled-btn:hover {
  background-color: #1565c0; /* Ciemniejszy odcień niebieskiego koloru */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
