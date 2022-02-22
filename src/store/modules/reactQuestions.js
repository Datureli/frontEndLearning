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
              question: "Czym jest defaultProps?",
              answer:
                "defaultProps pozwala nam na ustawienie propsów,ustawienie wartości domyślnej dla propsów",
              secondAnswer: "",
              thirdPartOfAnswer: ''
            },
          ],
    },
  
    mutations: {
      randomReactQuestion(state) {
        state.reactQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }
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
    }
  