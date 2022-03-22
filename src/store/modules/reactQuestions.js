export default {
  namespaced: true,

  state: {
    reactQuestions: [
      {
        question: "Czym jest defaultProps?",
        answer:
          "defaultProps pozwala nam na ustawienie propsów,ustawienie wartości domyślnej dla propsów",
        secondAnswer: "",
      },
      {
        question: "Czym jest useEffect?",
        answer:
          "useEffect pozwala wykonać „efekty uboczne” w komponentach funkcyjnych.useEffect pełni podobną funkcję jak metody cyklu życia w komponentach klasowych componentDidMount, componentDidUpdate i componentWillUnMount.Masz także możliwość zdecydować, kiedy nastąpi kolejne renderowanie.By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.",
      },
      {
        question: "Czym jest useState?",
        answer:
          "useState jest hookiem, wywołujemy go wewnątrz komponentu funkcyjnego, gdy chcemy dodać stan lokalny. React zachowa ten stan podczas ponownego renderowania.useState zwraca dwie rzeczy: aktualną wartość stanu oraz funkcję, która pozwala zaktualizować komponent. Wywołanie funkcji będzie działać podobnie do this.setState, który zaktualizuje wartość stanu, z tym wyjątkiem, że nie scali nowego i starego stanu ze sobą.",
      },
    ],
  },

  mutations: {
    randomReactQuestion(state) {
      state.reactQuestions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    },
  },
  actions: {
    reactQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomReactQuestion");
      }, 5000);
    },
    randomReactQuestion(context) {
      context.commit("randomReactQuestion");
    },
  },
};
