export default {
  namespaced: true,

  state: {
    testQuestions: [
      {
        question: "Po co testujemy aplikacje?",
        answer:
          "Testowanie oprogramowania ma na celu sprawdzenie jego poprawnego działania oraz zebranie informacji na jego temat.",
        secondAnswer: "",
      },
      {
        question: "Co to są testy jednostkowe?",
        answer:
          "Testy jednostkowe są to testy sprawdzające małe części kodu(funkcje,metody).Każdy test jest niezależny od poprzedniego oraz w jak najmniejszym stopniu opiera się na zewnętrznych zależnościach (wręcz nie powinno ich być!). Test może zakończyć się sukcesem lub porażką (ang. fail).",
        secondAnswer: "",
      },
      {
        question: "Opisz działanie funkcji expect",
        answer:
          "TZwraca ona obiekt z metodami, które umożliwiają wybranie wygodnego operatora logicznego oraz tego co dokładnie będziemy porównywać.",
        secondAnswer: "",
        thirdPartOfAnswer: "",
      },
      {
        question: "Wymień kategorie testów",
        answer:
          "Testy jednostkowe,testy komponentów,testy end-to-end",
      },
    ],
  },

  mutations: {
    randomTestQuestion(state) {
      state.testQuestions.sort(() => {
        return Math.round(Math.random()) - 0.5;
      });
    },
  },
  actions: {
    testQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomTestQuestion");
      }, 5000);
    },

    randomTestQuestion(context) {
      context.commit("randomTestQuestion");
    },
  },
};
