<template>
  <v-container class="d-grid mx-auto">
    <v-card class="mt-5 mx-auto" height="200" v-for="(favorite, index) in favorite" :key="index" color="transparent" elevation="10">
    <h1 class="mx-auto">{{ favorite.question }}</h1>  
    <p>{{favorite.answer}}</p>
    </v-card>
    <h1>dsadadsasdas</h1>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["disable", "favorite"]),
    ...mapState("questions",["cssQuestions"])
  },
};
</script>
