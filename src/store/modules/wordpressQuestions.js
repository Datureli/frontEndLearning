export default {
    namespaced: true,
  
    state: {
      wordpressQuestions: [
        {
          question: "Czym są filtry w wordpressie?",
          answer:
            "filtr może być użyty do zmiany lub rozszerzenia funkcjonalności WordPressa. Robi to, pobierając niektóre dane dostarczone przez WordPress, zmieniając je na coś innego, a następnie zwracając je z powrotem.",
        },
        {
            question: "filtry vs akcje?",
            answer:
              "Filtr to funkcja, która modyfikuje otrzymane dane, natomiast akcja to funkcja, która jest wywoływana w odpowiednim momencie.Zatem filtrów będziemy używać wtedy, gdy na przykład chcemy zmodyfikować istniejący kod HTML, natomiast akcji użyjemy do dodania nieistniejącego jeszcze kodu HTML.",
          },
          {
            question: "filtry vs akcje?",
            answer:
              "Filtr to funkcja, która modyfikuje otrzymane dane, natomiast akcja to funkcja, która jest wywoływana w odpowiednim momencie.Zatem filtrów będziemy używać wtedy, gdy na przykład chcemy zmodyfikować istniejący kod HTML, natomiast akcji użyjemy do dodania nieistniejącego jeszcze kodu HTML.",
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
        state.wordpressQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
  