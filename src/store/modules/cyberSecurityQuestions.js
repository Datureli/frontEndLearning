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
            question: "Czym jest wifi?",
            answer:
              "Wi-Fi, czyli Wireless Fidelity, to technologia komunikacji bezprzewodowej, która umożliwia urządzeniom komunikację i wymianę danych przez fale radiowe. Działa na zasadzie wykorzystania częstotliwości radiowych w celu przesyłania informacji między urządzeniami w sieci lokalnej. Oto ogólny opis działania technologii Wi-FiUrządzenie, które chce wysłać lub odbierać dane za pomocą Wi-Fi, generuje sygnał elektryczny, który jest przekształcany na fale radiowe o odpowiednich częstotliwościach. Te fale radiowe są wytwarzane w zakresie częstotliwości radiowych lub mikrofalowych, co pozwala na efektywną transmisję danych na krótkie odległości.",
          },
          {
            question: "Czym jest nfc?",
            answer:
              "NFC, czyli Near Field Communication (Komunikacja Bliskiego Zasięgu), to technologia bezprzewodowej komunikacji krótkiego zasięgu, która umożliwia wymianę danych między urządzeniami znajdującymi się w bliskiej odległości od siebie, zazwyczaj na odległość do kilku centymetrów. Technologia NFC bazuje na standardach radiowych RFID (Radio Frequency Identification) i pozwala na komunikację między dwoma urządzeniami, z których przynajmniej jedno jest aktywne (wysyła dane), a drugie może być aktywne lub pasywne (odbiera dane).",
          },
          {
            question: "Czym jest OS-Independent Troubleshooting",
            answer:
              "OS-Independent Troubleshooting oznacza proces diagnozowania i rozwiązywania problemów technicznych związanych z urządzeniem lub oprogramowaniem, niezależnie od systemu operacyjnego (OS), na którym działa to urządzenie lub oprogramowanie. Innymi słowy, jest to podejście do rozwiązywania problemów, które skupia się na ogólnych aspektach i cechach, niezależnie od konkretnej platformy lub systemu operacyjnego.",
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
  