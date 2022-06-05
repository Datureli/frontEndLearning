<template>
  <v-container-fluid class="d-flex mx-auto justify-center">
    <v-list
      width="250px"
      height="330px"
      v-for="(question, index) in questions.slice(0, 3)"
      :key="index"
      class="rounded-lg mr-5"
      color="#008000"
    >
      <v-list-item-group>
        <v-list-item>
            <v-list-item-title
              :key="question.change"
              class="mt-15 mx-auto text-h5"
            >
              {{
                question.change ? question.answer : question.question
              }}</v-list-item-title
            >
        </v-list-item>
        <v-spacer></v-spacer>
        <v-btn
          color="#42c73b"
          height="45"
          @click="toggleQuestion(question)"
          class="mt-15"
        >
          {{ question.change ? "Back" : "Show answer" }}
        </v-btn>
      </v-list-item-group>
    </v-list>

    <v-card>
      <v-icon @click="randomizeQuestionCard()" large class="mx-auto">
        mdi-cube</v-icon
      >
    </v-card>
  </v-container-fluid>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "Co to jest git?",
          answer: "Git jest to rozproszony system kontroli wersji",
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
            ":before oraz :after umożliwiają dodanie kontentu przed i za elementem.",
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
    };
  },
  methods: {
    toggleQuestion(question) {
      question.change = !question.change;
    },

    randomizeQuestionCard() {
      this.questions.sort(() => ~~Math.random() - 0.5);
    },
  },
};
</script>

