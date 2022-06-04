<template>
  <v-container-fluid class="d-flex">
    <v-list
      v-for="(question, index) in questions.slice(0, 3)"
      :key="index"
      class="card mx-auto justify-center"
    >
      <v-list-item-group>
        <v-list-item>
          <transition name="flip" mode="out-in">
            <p :key="question.change">
              {{ question.change ? question.answer : question.question }}
            </p>
          </transition>
        </v-list-item>
        <button @click="toggleQuestion(question)" class="mt-8">
          {{ question.change ? "Back" : "Show answer" }}
        </button>
      </v-list-item-group>
    </v-list>

    <div>
      <v-icon @click="randomizeQuestionCard()" large class="mx-auto">
        mdi-cube</v-icon
      >
    </div>
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

<style scoped>
.card {
  width: 250px;
  height: 330px;
  border-radius: 9px;
  font-weight: 600;
  font-size: 20px;
  background-color: green;
}
.cardRotate {
  transform: rotate(180deg);
  animation: 3s rotate ease;
}

button {
  border-radius: 5px;
  border: 1px solid #22bb1a;
  background-color: #42c73b;
  padding: 10px 16px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #3fb63d;
}

.flip-enter-active {
  transition: all 0.7s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter-from,
.flip-leave-from {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>
