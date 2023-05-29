export default {
    namespaced: true,
  
    state: {
      cyberSecurityQuestions: [
        {
          question: "Czym jest Hackthebox?",
          answer:
            "Hack The Box (HTB) to platforma treningowa i społeczność skupiająca się na testowaniu penetracyjnym (penetration testing) oraz bezpieczeństwie informatycznym. Jest to platforma online, która umożliwia użytkownikom doskonalenie swoich umiejętności związanych z hackingiem etycznym poprzez praktyczne wyzwania i zadania.Wyzwania i maszyny: Hack The Box oferuje różnorodne wyzwania i maszyny, które można próbować włamać. Te maszyny są wirtualnymi środowiskami, które symulują realistyczne scenariusze ataków i pozwalają użytkownikom testować swoje umiejętności w bezpiecznym środowisku.",
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
        state.cyberSecurityQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
  