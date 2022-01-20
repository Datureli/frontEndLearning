<template>
  <v-card width="500" height="300" class="mx-auto mt-15">
    <div class="pa-3" v-for="(itWords, index) in itWords.slice(0,3)" :key="index">
      <h2>{{ itWords.englishWord }} - {{ itWords.polishWord }}</h2>
    </div>
  </v-card>
</template>

<script>
export default {
    computed: {
        sliceWords() {
            this.itWords.slice(0, 3)
        }
    },
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
        {
          englishWord: "Disadvantages",
          polishWord: "Niedogodności",
        },
           {
          englishWord: "Compatibility",
          polishWord: "Zgodność",
        },
              {
          englishWord: "match",
          polishWord: "rzecz dopasowana do innej",
        },
                    {
          englishWord: "Descendant",
          polishWord: "Potomek",
        },
                     {
          englishWord: "immediate",
          polishWord: "natychmiastowy",
        },

      ],
    };
  },
};
</script>
