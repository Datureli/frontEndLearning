<template>
  <div>
    <button @click="randomizeQuestionCard()">randomize</button>
    <div class="displayCards">
      <ul>
        <li
          ref="card"
          v-for="(question, index) in questions.slice(0, 6)"
          :key="index"
          class="card"
        >
          {{ question.filterQuestions }}
          <transition name="flip" mode="out-in">
            <p :key="question.change" class="card__">
              {{ question.change ? question.answer : question.question }}
            </p>
          </transition>
          <button @click="toggleQuestion(question)">
            {{ question.change ? "Back" : "Show answer" }}
          </button>
        </li>
      </ul>
    </div>
  </div>
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
      this.questions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    },
  },
};
</script>

<style scoped>
.card {
  display: block;
  width: 150px;
  height: 190px;
  padding: 80px 50px;
  border-radius: 9px;
  line-height: 25px;
  cursor: pointer;
  position: relative;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  margin: 30px auto;
  text-decoration: none;
  background-color: green;
  -webkit-box-shadow: inset 21px -50px 32px -24px #3f3d42;
  box-shadow: inset 21px -50px 32px -24px #3f3d42;
}
.cardRotate {
  transform: rotate(180deg);
  animation: 3s rotate ease;
}
p {
  inline-size: 150px;
  overflow-wrap: break-word;
  left: 0;
  top: 0;
  z-index: 1;
  height: 70%;
  width: 100%;
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
  background-color: #2dcc2b;
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
@media only screen and (min-width: 1000px) {
  .displayCards {
    width: 70%;
    margin: auto;
  }
  ul {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .card {
    display: block;
    margin: 20px;
  }
}
</style>
