<template>
  <v-card
    class="mt-10"
    width="200"
    outlined
    color="transparent"
  >
    <div class="d-grid">
      <div>
        <v-icon
 
      style="font-size: 155px;"
      
        >mdi-arrow-up-bold</v-icon>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-icon
         class="ml-15"
    style="font-size: 155px;"
        >mdi-arrow-down-bold</v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    methods: {
    nextQuestion() {

    },
    prevQuestion() {

    }
    }
  }),
};
</script>

