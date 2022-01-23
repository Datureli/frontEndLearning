<template>
  <v-card width="500" height="300" class="mx-auto mt-15">
    {{ carouselCounter }}
    <v-carousel hide-delimiters prev-icon @change="incrementCarouselCounter">
      <v-carousel-item
        class="mt-16"
        v-for="(itWords, index) in itWords.slice(0, 3)"
        :key="index"
      >
        <h1>{{ itWords.englishWord }} - {{ itWords.polishWord }}</h1>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  computed: {
    sliceWords() {
      this.itWords.slice(0, 3);
    },
  },
  methods: {
    incrementCarouselCounter() {
      this.carouselCounter += 1;
    },
  },
  data() {
    return {
      askAboutText: false,
      carouselCounter: 0,
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
        {
          englishWord: "feature",
          polishWord: "funkcja",
        },
        {
          englishWord: "cause",
          polishWord: "Przyczyna",
        },
      ],
    };
  },
};
</script>
