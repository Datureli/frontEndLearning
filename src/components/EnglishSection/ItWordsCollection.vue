<template>
  <v-card width="500" height="300" class="mx-auto mt-15">
    <div v-for="(itWords, index) in itWords" :key="index">
      <h2>{{ itWords.englishWord }} - {{itWords.polishWord}}</h2>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      itWords: [
        {
          englishWord: "collapsing",
          polishWord: "zapadanie się",
        },
        {
          englishWord: "limitations",
          polishWord: "ograniczenia",
        },
             {
          englishWord: "Disadvantages",
          polishWord: "Niedogodności",
        },
      ],
    };
  },
};
</script>
