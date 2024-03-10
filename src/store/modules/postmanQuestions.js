export default {
    namespaced: true,
  
    state: {
      postmanQuestions: [
        {
          question: "Wymień podstawowe metody w postmanie?",
          answer:
            `Metody żądań HTTP umożliwiają komunikację pomiędzy klientem a serwerami. HTTP działa jako protokół żądanie-odpowiedź między klientem a serwerem. Najczęściej stosowane metody żądania HTTP są następujące: GET - Metoda GET pobiera informacje z danego serwera, korzystając z danych przesłanych w adresie URL. Metoda GET jest lepsza do użycia w przypadku danych, które nie zawierają obrazów lub zabezpieczeń, oraz gdy długość adresu URL nie stanowi ograniczenia.
            
            POST - Metoda POST tworzy niezbędne dane. Jest to metoda żądania, która przesyła niezbędne dane z klienta HTTP do serwera.
            
            PUT - Metoda PUT aktualizuje istniejące dane, a jeśli nie ma żadnych danych, utworzy nowe. Pozostaje niezmieniona, gdy te same dane są wysyłane wielokrotnie w celu aktualizacji.
            
            PATCH - Metoda PATCH aktualizuje tylko istniejące dane i pozwala tylko na częściowe aktualizacje.`,
        },
        {
          question: "Jakie są statusy odpowiedzi http?",
          answer:
            "Odpowiedzi HTTP (kody statusu) są generowane przez serwer w odpowiedzi na żądania klienta przesyłane do serwera. Kody odpowiedzi HTTP są podzielone na pięć klas. Pierwsza cyfra kodu odpowiedzi definiuje klasę odpowiedzi, podczas gdy dwie ostatnie cyfry nie mają roli kategoryzacyjnej. Pięć różnych klas kodów odpowiedzi obejmuje:",
            list:  `1xx - odpowiedź informacyjna - żądanie zostało odebrane i kontynuuje się w procesie.
            2xx - sukces - żądanie zostało pomyślnie odebrane, zrozumiane i zaakceptowane przez serwer.
            3xx - przekierowanie - żądanie jest niekompletne, i konieczne są pewne działania w celu jego ukończenia.
            4xx - błąd klienta - żądanie zawiera błędną składnię.
            5xx - błąd serwera - serwer nie był w stanie spełnić prawidłowego żądania.`
        },
        {
          question: "Jakie są główne funkcje Postmana?",
          answer:
            "Postman oferuje funkcje takie jak tworzenie i wysyłanie zapytań HTTP, automatyzacja testów API, monitorowanie wydajności API, generowanie dokumentacji API, udostępnianie kolekcji zespołowi, a także integracje z innymi narzędziami deweloperskimi.",
        },
        {
          question: "Jakie są różnice między zapytaniem GET a zapytaniem POST?",
          answer:
            "Zapytanie GET służy do pobierania danych z serwera, podczas gdy zapytanie POST jest używane do przesyłania danych do serwera w celu utworzenia nowego zasobu.",
        },
        {
          question: "Jakie są korzyści korzystania z funkcji testów w Postmanie?",
          answer:
            "Funkcje testów w Postmanie pozwalają automatyzować procesy testowania API, sprawdzając, czy odpowiedzi spełniają oczekiwania, co przyspiesza proces weryfikacji funkcjonalności.",
        },
        {
          question: "Jak można współpracować zespołowo w Postmanie?",
          answer:
            "Postman umożliwia współpracę zespołową poprzez udostępnianie kolekcji, zarządzanie dostępem do kolekcji, korzystanie z funkcji komentarzy i integracje z systemami kontroli wersji.",
        },
        {
          question: "Jakie są zalety korzystania z Postmana podczas tworzenia dokumentacji API?",
          answer:
            "Postman pozwala automatycznie generować dokumentację API na podstawie wykonanych zapytań. To ułatwia tworzenie zrozumiałej i aktualnej dokumentacji.",
        },
        {
          question: "Jak można użyć zmiennych w Postmanie?",
          answer:
            "Postman umożliwia korzystanie z zmiennych do dynamicznego dostosowywania zapytań. Mogą być one definiowane globalnie, lokalnie lub nawet na poziomie środowiska.",
        },
        {
          question: "Jak obsłużyć autentykację w Postmanie?",
          answer: "Postman obsługuje różne metody autentykacji, takie jak Basic Auth, OAuth czy tokeny. W ustawieniach zapytania można zdefiniować odpowiednie dane autentykacyjne.",
        },
        {
          question: "Jakie są różnice między kolekcją a środowiskiem w Postmanie?",
          answer:
            "Kolekcja to zbiór zapytań, a środowisko to zestaw zmiennych środowiskowych. Kolekcje pomagają w organizacji i grupowaniu zapytań, podczas gdy środowiska umożliwiają dostosowywanie zmiennych, takich jak adresy URL czy tokeny autoryzacyjne.",
        },
        {
          question: "Co to jest status HTTP 404?",
          answer:
            "Status HTTP 404 oznacza 'Not Found' i jest zwracany, gdy serwer nie może odnaleźć żądanego zasobu. Jest to sygnalizacja, że strona lub zasób nie istnieje na serwerze.",
        },
        {
          question: "Jakie są główne rodzaje autentykacji w HTTP?",
          answer:
            `Basic Authentication: Polega na przesyłaniu loginu i hasła w nagłówku żądania, zakodowanym w formie Base64.
            Token-based Authentication: Używa tokenów, które są generowane i przesyłane w celu uwierzytelnienia klienta.
            OAuth: Standardowy protokół autoryzacyjny, umożliwiający bezpieczne ograniczanie dostępu do zasobów.`,
        },
        {
          question: "Co to jest format JSON?",
          answer:
            `JSON, czyli JavaScript Object Notation, to lekki format danych. Jest to sposób przedstawiania struktur danych w formie tekstowej, oparty na składni obiektów w języku JavaScript.`,
        },
        {
          question: "Jakie są różnice między PUT a PATCH w HTTP?",
          answer:
            `PUT: Używane jest do aktualizacji pełnych zasobów. Wymaga przesłania całej reprezentacji zasobu.
            PATCH: Służy do aktualizacji częściowych zasobów. Pozwala przesyłać tylko te dane, które mają zostać zmienione.`,
        },
        {
          question: "Jakie są zalety stosowania nagłówków HTTP?",
          answer:
            `Nagłówki HTTP pozwalają na przesyłanie dodatkowych informacji między klientem a serwerem, takich jak dane autentykacyjne, formaty MIME czy informacje o cache. Pozwalają także na kontrolę przesyłanych danych.`,
        },
        {
          question: "Co to jest URI?",
          answer:
            `URI (Uniform Resource Identifier) to identyfikator zasobu, który zapewnia unikalną lokalizację zasobu w sieci. Składa się z URL (Uniform Resource Locator) oraz URN (Uniform Resource Name). URL identyfikuje zasób poprzez jego lokalizację, natomiast URN identyfikuje go poprzez nazwę.`,
        },
      ],
    },
  
    mutations: {
      randomPostmanQuestion(state) {
        state.postmanQuestions.sort(() => Math.floor(Math.random() - 0.5));
      },
    },
    actions: {
      postmanQuestionLoop(context) {
        setInterval(() => {
          context.commit("randomPostmanQuestion");
        }, 5000);
      },
  
      randomPostmanQuestion(context) {
        context.commit("randomPostmanQuestion");
      },
    },
  };
  