export default {
  namespaced: true,

  state: {
    cicdQuestions: [
      {
        question: "Czym jest ci/cd?",
        answer: `CI/CD to skrót od Continuous Integration oraz Continuous Deployment, a także czasem używane Continuous Delivery. Te praktyki są często implementowane w procesie rozwoju oprogramowania, aby zautomatyzować i usprawnić dostarczanie oprogramowania do użytkowników końcowych.`,
      },
      {
        question: "Wyjaśnij cel CI?",
        answer: `CI to praktyka, w której programiści regularnie łączą swoje zmiany kodu w jedno wspólne repozytorium. Po każdym takim połączeniu system automatycznego CI przeprowadza zestaw testów, aby upewnić się, że wprowadzone zmiany nie wpływają negatywnie na istniejący kod.
            Zapewnia, że zmiany kodu są weryfikowane i testowane automatycznie po ich wprowadzeniu, co pomaga w wykrywaniu błędów i konfliktów wcześnie.`,
      },
      {
        question: "Wyjaśnij cel CD?",
        answer: `Continuous Delivery jest czasem używane zamiennie z Continuous Deployment, ale czasem różni się w tym, że wdrażanie do środowiska produkcyjnego jest decyzją ręczną, a nie automatyczną.
          Cel: Zapewnienie gotowości do wdrożenia oprogramowania do produkcji w dowolnym momencie, choć sam proces wdrożenia może wymagać ręcznej akceptacji.`,
      },
      {
        question: "Jakie są korzyści z ci/cd?",
        answer: `TSzybsze dostarczanie oprogramowania.
            Automatyzację procesów testowania.
            Zwiększenie jakości oprogramowania.
            Łatwiejsze zarządzanie zmianami kodu.
            Skrócenie cyklu życia dostarczania oprogramowania.`,
      },
      {
        question: "Różnica pomiędzy ci a cd?",
        answer: `CI skupia się na regularnym łączeniu kodu i automatycznym testowaniu, natomiast CD rozszerza tę praktykę, obejmując również automatyzację procesu dostarczania oprogramowania do produkcji. Obydwie te praktyki mają na celu poprawę jakości oprogramowania, zwiększenie efektywności zespołu i skrócenie cyklu dostarczania oprogramowania. 
            `,
      },
      {
        question:
          "Jakie są główne korzyści płynące z wdrożenia Continuous Integration?",
        answer: `Główne korzyści to szybkie wykrywanie błędów, eliminacja konfliktów między kodem różnych programistów, skrócenie cyklu dostarczania oprogramowania oraz zwiększenie ogólnej jakości kodu.`,
      },
      {
        question: "Co to oznacza, że testy są częścią procesu CI?",
        answer:
          "W CI, każde łączenie kodu automatycznie wywołuje zestaw testów, które sprawdzają, czy nowy kod działa poprawnie i czy nie wprowadza błędów. Wyniki testów są raportowane zespołowi.",
      },
      {
        question:
          "Jakie narzędzia są często stosowane w praktyce Continuous Integration?",
        answer:
          "Narzędzia takie jak Jenkins, Travis CI, GitLab CI, CircleCI czy GitHub Actions są popularne wśród zespołów praktykujących CI.",
      },
      {
        question:
          "W jaki sposób Continuous Integration wpływa na skrócenie cyklu dostarczania oprogramowania?",
        answer: `
          CI skraca cykl dostarczania poprzez natychmiastowe wykrywanie błędów, co pozwala na szybką naprawę, oraz eliminację opóźnień związanych z manualnym łączeniem kodu.`,
      },
      {
        question:
          "Czym jest Blue-Green Deployment w kontekście Continuous Delivery?",
        answer:
          "Blue-Green Deployment to strategia wdrażania, która polega na równoczesnym utrzymaniu dwóch środowisk produkcyjnych - jedno obsługujące ruch produkcyjny (Green), a drugie przygotowujące się do wdrożenia (Blue).",
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
