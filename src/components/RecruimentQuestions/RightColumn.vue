<template>
  <v-card class="mt-10 d-grid" width="310" outlined color="transparent">
    <h1 class="mx-auto mr-9">Results...</h1>
  </v-card>
</template>

<script>
export default {
  computed: {
    favorite() {
      return this.$store.state.favorite;
    },
  },
  methods: {
    addToFavorite(javascriptQuestions) {
      this.$store.state.favorite.push(javascriptQuestions);
    },
  },
};
</script>
