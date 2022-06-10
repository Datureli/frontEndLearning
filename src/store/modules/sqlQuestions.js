export default {
    namespaced: true,
  
    state: {
      sqlQuestions: [
        {
          question: "Czym jest order by?",
          answer:
            "Klauzula order by pozwala nam na sortowanie kolumn.Możemy sortować wiele kolumn jednocześnie.Na początku wynik sortowany jest po pierwszym wyrażeniu. Jeśli występują w nim duplikaty są one sortowane po drugim wyrażeniu",
        },
      ],
    },
  
    mutations: {
      randomSqlQuestion(state) {
        state.sqlQuestions.sort(() => Math.floor( Math.random() - 0.5));
      },
    },
    actions: {
      sqlQuestionLoop(context) {
        setInterval(() => {
          context.commit("randomSqlQuestion");
        }, 5000);
      },
  
      randomSqlQuestion(context) {
        context.commit("randomSqlQuestion");
      },
    },
  };
  