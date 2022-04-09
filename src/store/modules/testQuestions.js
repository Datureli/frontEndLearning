export default {
  namespaced: true,

  state: {
    testQuestions: [
      {
        question: "Po co testujemy aplikacje?",
        answer:
          "Testowanie oprogramowania ma na celu sprawdzenie jego poprawnego działania oraz zebranie informacji na jego temat.Gdy testy zakończą się niepowodzeniem, bardzo ważne jest, aby struktura testów jednostkowych zawierała przydatne błędy.",
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
      },
      {
        question: "Czym są testy jednostkowe w Vue",
        answer:
          "to zestaw funkcji użytkowych mających na celu uproszczenie testowania komponentów Vue.js. Zapewnia pewne metody montowania i interakcji z komponentami Vue w izolowany sposób.",
      },
      {
        question: "Czym jest framework Jest",
        answer:
          "Jest to framework testowy JavaScript, który koncentruje się na prostocie. Jedną z jego unikalnych cech jest możliwość robienia migawek testów w celu zapewnienia alternatywnego sposobu weryfikacji jednostek Twojej aplikacji.",
      },
      {
        question: "Jak działają testy jest",
        answer:
          "pierwszym argumentem jest opis testu, kolejnym funkcja w której wywołujemy expect sprawdzającą poprawność wartości.",
      },
      {
        question: "Jak połączyć jest z typescriptem?",
        answer:
          "są dwa sposoby na integrację JESTa z Typescriptem, jeden sprawdza typy, drugi korzysta z wygenerowanych plików js. My oczywiście chcemy sprawdzać typy, więc użyjemy ts-jest!",
      },
      {
        
        question: "Czym jest Mocha",
        answer:
          "Mocha to framework testowy JavaScript, który koncentruje się na elastyczności. Ze względu na tę elastyczność pozwala wybierać różne biblioteki, aby spełnić inne wspólne funkcje, takie jak szpiegowanie (np. Sinon) i asercje (np. Chai). Inną unikalną cechą Mocha jest to, że oprócz Node.js może również wykonywać testy w przeglądarce.",
      },
      {
        question: "Czym jest component testing?",
        answer:
          "Aby przetestować większość komponentów Vue, należy je zamontować na DOM aby w pełni potwierdzić, że działają.W rezultacie stworzono ramy testowania komponentów, aby dać użytkownikom możliwość wykonywania tego w sposób niezawodny, zapewniając jednocześnie udogodnienia specyficzne dla Vue, takie jak integracja z Vuex, routerem Vue i innymi wtyczkami Vue.",
      },
      {
        question: "Czym są testy end-to-end?",
        answer:
          "Podczas gdy testy jednostkowe zapewniają programistom pewien stopień pewności, testy jednostkowe i modułowe mają ograniczone możliwości zapewnienia całościowego pokrycia aplikacji po wdrożeniu w środowisku produkcyjnym.W rezultacie testy end-to-end (E2E) zapewniają pokrycie tego, co jest prawdopodobnie najważniejszym aspektem aplikacji: co się dzieje, gdy użytkownicy faktycznie korzystają z twoich aplikacji. Innymi słowy, testy E2E weryfikują wszystkie warstwy w Twojej aplikacji.",
          secondAnswer: 'obejmuje nie tylko kod frontendu, ale wszystkie powiązane usługi i infrastrukturę backendu, które są bardziej reprezentatywne dla środowiska, w którym będą znajdować się Twoi użytkownicy. Testując, jak działania użytkowników wpływają na Twoją aplikację, testy E2E są często kluczem do większej pewności, czy aplikacja działa poprawnie, czy nie.'
      },
      { 
        question: "Wymień kategorie testów",
        answer:
          "Testy jednostkowe - Testy jednostkowe umożliwiają testowanie poszczególnych jednostek kodu.Pisząc dokładne, znaczące testy, zyskujesz pewność, że w miarę tworzenia nowych funkcji lub refaktoryzacji kodu Twoja aplikacja pozostanie funkcjonalna i stabilna.  Celem testów jednostkowych jest zapewnienie programistom zaufania do ich kodu.,testy komponentów,testy end-to-end",
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
