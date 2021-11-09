<template>
  <v-card class="mt-10 d-grid" width="310" outlined color="transparent">
    <v-icon style="font-size: 130px;">mdi-heart</v-icon>
    <v-icon style="font-size: 130px;">mdi-heart</v-icon>

    <v-spacer></v-spacer>
    <v-icon class="mx-auto mt-5 mb-5" style="font-size: 130px;">mdi-autorenew</v-icon>
    <v-icon class="mx-auto mt-5 mb-5" style="font-size: 130px;">mdi-autorenew</v-icon>
    <v-spacer></v-spacer>
    <v-icon class="mx-auto" style="font-size: 130px;">mdi-dice-multiple</v-icon>
    <v-btn @click="$emit('clicker',event.target.value)" class="mx-auto" style="font-size: 10px;">dsada</v-btn>
  </v-card>
</template>


<script>
export default {
  data: () =>({
      computed: {
    disable: {
      get: function() {
        return this.$store.state.disable;
      },
    },
  },
  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
  },
  })
}
</script>