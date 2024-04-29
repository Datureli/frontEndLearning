export default {
    namespaced: true,
  
    state: {
      testQuestions: [
        {
            question: "Czym jest testowanie?",
            answer: `
            Testowanie (w kontekście programowania) to proces sprawdzania i oceny oprogramowania pod kątem jego jakości, zgodności z wymaganiami oraz poprawności działania. Głównym celem testowania jest zapewnienie, że oprogramowanie działa zgodnie z oczekiwaniami i spełnia określone kryteria jakościowe.`,
          }, 
      ],
    },
  
    mutations: {
      randomTestQuestion(state) {
        state.testQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
  