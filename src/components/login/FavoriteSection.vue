<template>
  <v-container class="d-grid mx-auto">
    <v-card class="mt-5 mx-auto" v-for="(favorite, index) in favorite" :key="index"  height="auto" elevation="10">
    <h1 class="mx-auto">{{ favorite.question }}</h1>  
    <p>{{favorite.answer}}</p>

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
