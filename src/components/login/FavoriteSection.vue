<template>
  <v-container class="d-flex">
    <v-card class="mt-5 ml-5 mx-auto" v-for="(favorite, index) in favorite" :key="index" width="400" height="100" elevation="10">
    <h1 class="mx-auto">{{ favorite.question }}</h1>  

    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["disable", "favorite"]),
  },
};
</script>
