<template>
  <v-container-fluid class="d-flex mx-auto justify-center">
    <v-card
      width="250px"
      height="330px"
      v-for="(flashCard, index) in flashCards.slice(0, 3)"
      :key="index"
      class="rounded-lg mr-5"
      color="orange"
      @click="toggleQuestion(flashCard)"
    >
      <p
        :key="flashCard.change"
        class="mt-10 mx-auto text-h5 white--text text-wrap"
      >
        {{ flashCard.change ? flashCard.answer : flashCard.question }}
      </p>
    </v-card>

    <v-card color="transparent" outlined>
      <v-icon @click="randomizeQuestionCard()" large class="mx-auto">
        mdi-cube</v-icon
      >
    </v-card>
  </v-container-fluid>
</template>

<script>
export default {
  data: () => ({
      flashCards: [
        {
          question: "What is git?",
          answer: "Git is a distributed version control system",
          change: false,
        },
        {
          question: "Co to jest github??",
          answer:
            "Github to serwis internetowy,hostujący repozytoria git w chmurze",
          change: false,
        },
        {
          question: "Czym się różni '==' od '==='?",
          answer: "'==' porównuje wartości zmiennych,'===' zmienne i typ.",
          change: false,
        },
        {
          question: "Czym jest :before i :after?",
          answer:
            ":before oraz :after umożliwiają dodanie kontentu przed i za elementem.",
          change: false,
        },
        {
          question: "Co to jest Html?",
          answer:
            "Jest to język znaczników służący do tworzenia stron internetowych",
          change: false,
        },
        {
          question: "Co to jest W3C?",
          answer:
            "Organizacja zajmująca się ustalaniem standardu pisania stron www",
          change: false,
        },
        {
          question: "Czym jest branch?",
          answer: "Jest to oddzielna gałąź, na której znajduje się nasz kod.",
          change: false,
        },
        {
          question: "Co to jest API?",
          answer: "API to skrót oznaczający interfejs programowania aplikacji",
          change: false,
        },
        {
          question: "Co to jest npm?",
          answer: "Npm jest menedżerem pakietów dla języka JavaScript.",
          change: false,
        },
        {
          question: "Co to jest JSON?",
          answer: "JSON to otwarty format zapisu struktur danych.",
          change: false,
        },
      ],
    }),
  methods: {
    toggleQuestion(flashCards) {
      flashCards.change = !flashCards.change;
    },

    randomizeQuestionCard() {
      this.flashCards.sort(() => ~~Math.random() - 0.5);
    },
  },
}
</script>
