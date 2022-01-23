<template>
<v-container>
    <v-card width="500" height="300" class="mx-auto mt-15">
    {{ carouselCounter }}
    <v-carousel hide-delimiters prev-icon @change="incrementCarouselCounter">
      <v-carousel-item
        class="mt-16"
        v-for="(itWords, index) in itWords"
        :key="index"
      >
        <h1>{{ itWords.englishWord }} - {{ itWords.polishWord }}</h1>
      </v-carousel-item>
      
    </v-carousel>

  </v-card>
      <v-card class="mx-auto mt-2" v-if="this.carouselCounter > 10 && this.testAgreement" color="green" width="500" height="130">
      <h2>I think you've learned a lot of words</h2>
      <p>maybe you want to test your knowledge?</p>
          <v-btn @click="agreeToTest" class="mr-2" color="green">yes</v-btn>
          <v-btn @click="refuseTest" color="red">no</v-btn>
    </v-card>
</v-container>

</template>

<script>
export default {
  methods: {
    incrementCarouselCounter() {
      this.carouselCounter += 1;
    },
    agreeToTest() {
        this.testAgreement = false
    },
    refuseTest() {
                this.testAgreement = false
    }
  },
  data() {
    return {
      testAgreement: true,
      askAboutTest: false,
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
