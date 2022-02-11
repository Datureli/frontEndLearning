<template>
  <v-container class="d-flex">
    <v-card color="orange" v-if="checkStatus" width="500" height="310" class="mx-auto ">
      <p>{{ carouselCounter + "/10" }}</p>
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
    <v-card v-else color="green" width="500" height="350" class="mx-auto mt-15">
      <v-carousel hide-delimiters prev-icon>
        <v-carousel-item
          v-for="(CheckKnowledgeQuestion, index) in CheckKnowledgeQuestions"
          :key="index"
        >
          <h1>{{ CheckKnowledgeQuestion.englishWord }}</h1>
          <h1>{{ CheckKnowledgeQuestion.polishWord }}</h1>
          <v-text-field v-model="selectedAnswer">dsadsa</v-text-field>
          {{ selectedAnswer }}
          <h1 v-if="validateAnswer">good</h1>
        </v-carousel-item>
      </v-carousel>
    </v-card>

    <v-card
      class="mx-auto mt-2"
      v-if="this.carouselCounter > 10 && this.testAgreement"
      color="green"
      width="500"
      height="130"
    >
      <h2>I think you've learned a lot of words</h2>
      <p>maybe you want to test your knowledge?</p>
      <v-btn @click="agreeToTest" class="mr-2" color="green">yes</v-btn>
      <v-btn @click="refuseTest" color="red">no</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    checkStatus() {
      return this.showQuestions;
    },
 
  },
  methods: {
    incrementCarouselCounter() {
      this.carouselCounter += 1;
      for (let i = 0; i < this.itWords.length; i++) {
        this.CheckKnowledgeQuestions.push(this.itWords[i]);
      }
    },
    agreeToTest() {
      this.testAgreement = false;
      this.showQuestions = false;
    },
    refuseTest() {
      this.testAgreement = false;
    },
  },
  data() {
    return {
      goodAnswer: false,
      selectedAnswer: "",
      showQuestions: true,
      testAgreement: true,
      carouselCounter: 0,
      answerOptions: [
        {
          value: "string",
        },
        {
          value: "string2",
        },
        {
          value: "string3",
        },
      ],
      CheckKnowledgeQuestions: [],
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
          englishWord: "Chart",
          polishWord: "wykres",
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
        {
          englishWord: "Request",
          polishWord: "Żądanie",
        },
        {
          englishWord: "Access",
          polishWord: "dostęp",
        },
        {
          englishWord: "available",
          polishWord: "dostępny",
        },
        {
          englishWord: "Consider",
          polishWord: "Rozważać",
        },
      ],
    };
  },
};
</script>
