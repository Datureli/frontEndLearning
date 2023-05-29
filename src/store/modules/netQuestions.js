export default {
    namespaced: true,
  
    state: {
      netQuestions: [
        {
          question: "Czym się różni pojedynczy cudzysłów od podwójnego",
          answer:
            "Zwróć uwagę, że litera b jest otoczona pojedynczym cudzysłowem 'b'. Apostrofy tworzą literał znaku. Pamiętaj, że użycie podwójnych cudzysłowów tworzy string typ danych.Zwróć uwagę na znaki pojedynczego cudzysłowu otaczającego Hello World!element . W przypadku używania pojedynczych cudzysłowów kompilator języka C# oczekuje pojedynczego znaku. Jednak w tym przypadku użyto składni literału znaku, ale zamiast tego podano 12 znaków.",
        },
        {
            question: "Liczby całkowite w c#?",
            answer:
              "Jeśli chcesz wyświetlić wartość liczbową całkowitą (bez ułamków) w konsoli wyjściowej, możesz użyć literału int. Termin int jest krótki dla liczby całkowitej, którą można rozpoznać na podstawie nauki matematyki. W języku C# ten typ danych jest oficjalnie nazywany 'int', ale często określany jako 'liczba całkowita'. Literał int nie wymaga żadnych innych operatorów, takich jak string lub char.",
          },
          {
            question: "Używanie literałów zmiennoprzecinkowych?",
            answer:
              "Liczba zmiennoprzecinkowa to liczba zawierająca liczbę dziesiętną, na przykład 3,14159. Język C# obsługuje trzy typy danych do reprezentowania liczb dziesiętnych: float, doublei decimal. Każdy typ obsługuje różne stopnie precyzji.float         ~6-9 digits double,~15-17 digits decimal,28-29 digits Zwróć uwagę, że float typ danych jest najmniej precyzyjny, dlatego najlepiej użyć tego typu danych dla stałych wartości ułamkowych, aby uniknąć nieoczekiwanych błędów obliczeniowych.",
          },
          {
            question: "Opisz funkcję have_posts",
            answer:
              "Określa, czy w bieżącym zapytaniu WordPress są posty w pętli",
          },
          {
            question: "Opisz funkcję is_single",
            answer:
              "Określa, czy zapytanie dotyczy istniejącego pojedynczego psotu",
          },
          {
            question: "Opisz funkcję the_post",
            answer:
              "Iteruje po indeksie posta w pętli",
          },
      ],
    },
    mutations: {
      randomVueQuestion(state) {
        state.netQuestions.sort(() => Math.floor(Math.random() - 0.5));
      },
    },
    actions: {
      vueQuestionLoop(context) {
        setInterval(() => {
          context.commit("randomVueQuestion");
        }, 5000);
      },
      randomVueQuestion(context) {
        context.commit("randomVueQuestion");
      },
    },
  };
  