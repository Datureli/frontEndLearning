export default {
  namespaced: true,

  state: {
    cypressQuestions: [
      {
        question: "Jak uruchomić testy Cypress?",
        answer:
          "Aby uruchomić testy Cypress, użyj polecenia npx cypress open w terminalu. To otworzy interfejs Cypress, gdzie możesz wybrać i uruchomić testy.",
      },
      {
        question: "Jak zidentyfikować element na stronie za pomocą Cypress?",
        answer:
          " Cypress oferuje różne selektory, takie jak cy.get('selector'), cy.contains('tekst'), cy.findBy('selector'), aby zidentyfikować elementy na stronie.",
      },
      {
        question: "Jak wprowadzić tekst do pola input za pomocą Cypress?",
        answer: `Możesz użyć polecenia cy.get('input-selector').type('wprowadzany-tekst') do wprowadzania tekstu do pola input.`,
      },
      {
        question: "Czym jest zrównolegnanie testów?",
        answer: `Zrównoleglenie testów to proces uruchamiania wielu testów jednocześnie, co pozwala przyspieszyć proces testowania. W Cypress, możesz zrównoleglać testy, korzystając z narzędzi i platform do zarządzania testami. Oto ogólny sposób, w jaki możesz to zrobić:Cypress Dashboard: Cypress oferuje płatne rozwiązanie o nazwie Cypress Dashboard, które umożliwia zrównoleglanie testów na ich infrastrukturze. Możesz uzyskać dostęp do ich narzędzi do zrównoleglania i monitorowania wyników.
        Testowanie równoległe w CI/CD: Jeśli używasz systemu CI/CD, takiego jak Jenkins, GitLab CI, czy GitHub Actions, możesz skonfigurować równoległe uruchamianie testów na różnych maszynach.`,
      },
      {
        question: "Jak sprawdzić, czy element jest widoczny na stronie?",
        answer:
          "Cypress oferuje polecenie should('be.visible'), które można użyć, aby sprawdzić widoczność elementu.",
      },
      {
        question: "Na czym polegają problemy z iframe?",
        answer: `Ograniczenia Same-Origin Policy:

          Problem: Zasada jednego pochodzenia (Same-Origin Policy) może powodować problemy w dostępie do zawartości iframu, jeśli strony pochodzą z różnych domen.
          Rozwiązanie: Upewnij się, że strony w iframie są z tego samego źródła co strona nadrzędna. Jeśli nie jest to możliwe, możesz użyć odpowiednich komend Cypressa do pracy z zawartością iframu.
          Błąd Braku Wsparcia dla Niektórych Zdarzeń:
          
          Problem: Niektóre przeglądarki i Cypress mogą nie wspierać pewnych zdarzeń, takich jak mouseover czy mouseout, w przypadku elementów w iframie.
          Rozwiązanie: Wypróbuj różne zdarzenia, takie jak click czy invoke, a także sprawdź dokumentację Cypressa, aby dowiedzieć się, które zdarzenia są obsługiwane.
          Brak Wsparcia dla window.postMessage w iframie:
          
          Problem: Jeśli strona w iframie korzysta z window.postMessage do komunikacji, Cypress może nie obsługiwać tego mechanizmu w sposób bezpośredni.
          Rozwiązanie: Skonsultuj dokumentację Cypressa, aby sprawdzić, czy są dostępne specjalne komendy do obsługi postMessage. Możesz także rozważyć dostosowanie kodu strony w iframie do pracy z Cypressem.
          Problemy z Oczekiwaniem na Elementy w iframie:
          
          Problem: Standardowe komendy Cypressa do oczekiwania na elementy mogą nie działać poprawnie w iframie.
          Rozwiązanie: Spróbuj użyć komend specyficznych dla iframu, takich jak cy.frameLoaded(), cy.iframe().find(), aby lepiej zarządzać oczekiwaniem na elementy w iframie.
          Brak Obsługi Niektórych Zdarzeń JavaScript:
          
          Problem: Niektóre zdarzenia JavaScript, takie jak zmiana historii przeglądarki (window.history), mogą być problematyczne w iframie.
          Rozwiązanie: W przypadku takich zdarzeń, możesz rozważyć modyfikację kodu strony w iframie w celu przetestowania jego działania w środowisku Cypress.`,
      },
      {
        question: "Jak obsłużyć oczekiwanie w teście Cypress?",
        answer: `Cypress automatycznie obsługuje oczekiwanie, więc nie ma potrzeby dodatkowych poleceń do oczekiwania na elementy. 
            `,
      },
      {
        question: "Czym jest iframe?",
        answer: `
        Iframe (Inline Frame) to element HTML używany do osadzania jednej strony internetowej wewnątrz innej. Element ten pozwala na wyświetlanie jednej strony internetowej wewnątrz innej, tworząc ramkę lub okno wewnątrz strony nadrzędnej.Iframe pozwala na osadzanie innej strony internetowej w bieżącej stronie. Może to być przydatne, gdy chcemy wyświetlić treści z innej domeny lub pochodzące z różnych źródeł. Iframe jest często używane do osadzania wewnętrznych stron, aplikacji lub widżetów w ramach strony głównej. Na przykład, można by użyć iframu, aby osadzić mapę Google, kalendarz lub formularz logowania.Ze względów bezpieczeństwa, polityka jednego pochodzenia (Same-Origin Policy) ogranicza dostęp do zawartości iframu. Strony w iframie muszą pochodzić z tego samego źródła, aby uniknąć problemów z dostępem do dokumentu iframu.JavaScript na stronie nadrzędnej może modyfikować zawartość iframu, a także odwrotnie. To umożliwia dynamiczną interakcję między zawartością strony nadrzędnej a osadzoną w iframie. 
            `,
      },
      {
        question: "Jak sprawdzić, czy element ma określoną klasę CSS?",
        answer: `Użyj polecenia should('have.class', 'nazwa-klasy'), aby sprawdzić, czy element ma określoną klasę.`,
      },
      {
        question: "co to są flaky tests?",
        answer: ` to termin odnoszący się do testów jednostkowych lub testów automatycznych, które wykazują niestabilne zachowanie. Flaky tests to te, które czasami przechodzą pomyślnie, a innym razem nie, nawet bez zmian w kodzie źródłowym aplikacji.`,
      },
      {
        question:
          "Jak emulować działania użytkownika, takie jak kliknięcia czy wprowadzanie tekstu?",
        answer:
          " Cypress oferuje komendy takie jak click(), type(), submit(), które emulują interakcje użytkownika.",
      },
      {
        question: "Jak debugować testy Cypress?",
        answer:
          "Możesz użyć polecenia cy.debug() w teście, a Cypress przejdzie w tryb debugowania, pozwalając na badanie stanu i interakcji.",
      },
      {
        question: "Jak obsłużyć testy asynchroniczne w Cypress?",
        answer:
          " Cypress automatycznie obsługuje testy asynchroniczne. Możesz użyć komend takich jak cy.wait(), aby kontrolować asynchroniczne operacje.",
      },
      {
        question:
          " Jak uruchomić testy w trybie headless (bez interfejsu graficznego)?",
        answer: `
        Odpowiedź: Aby uruchomić testy w trybie headless, użyj polecenia npx cypress run w terminalu. To uruchomi testy bez interfejsu graficznego.`,
      },
      {
        question: "Jak symulować wciśnięcie klawisza za pomocą Cypress?",
        answer:
          "Użyj polecenia type('{enter}') lub type('{esc}') w celu symulowania wciśnięcia klawisza Enter lub Escape.",
      },
      {
        question: "Jak przechodzić między różnymi stronami w teście Cypress?",
        answer:
          "Użyj polecenia cy.visit('adres-strony') lub cy.go('do-tyłu/do-przodu') do nawigacji między stronami.",
      },
      {
        question:
          " Jak sprawdzić, czy element zawiera określony tekst za pomocą Cypress?",
        answer:
          "Użyj polecenia should('contain', 'oczekiwany-tekst'), aby sprawdzić, czy element zawiera określony tekst.",
      },
      {
        question: "Jak testować responsywność strony za pomocą Cypress?",
        answer:
          "Użyj polecenia cy.viewport('szerokość', 'wysokość'), aby symulować różne rozmiary ekranu i przetestować responsywność.",
      },
      {
        question: "Jak skonfigurować testy Cypress do pracy z TypeScript?",
        answer:
          "Zainstaluj odpowiednie pakiety, takie jak @cypress/ts-preprocessor, i dodaj konfigurację do pliku cypress.json.",
      },
      {
        question: "jak sprawdzić zawartość atrybutu HTML za pomocą Cypress?",
        answer: `
        Użyj polecenia should('have.attr', 'nazwa-atrybutu', 'wartość'), aby sprawdzić zawartość atrybutu HTML.`,
      },
      {
        question: "Jak symulować błąd serwera w teście Cypress?",
        answer: `Użyj polecenia cy.route() do przechwytywania żądań i symulowania błędu serwera.`,
      },
      {
        question: "Jak ustawiać i sprawdzać ciasteczka w teście Cypress?",
        answer:
          "Użyj polecenia cy.setCookie() do ustawiania ciasteczek i cy.getCookie() do sprawdzania ich wartości.",
      },

      {
        question: "Co to są testy jednostkowe?",
        answer:
          "Testy jednostkowe są to testy sprawdzające małe części kodu(funkcje,metody).Każdy test jest niezależny od poprzedniego oraz w jak najmniejszym stopniu opiera się na zewnętrznych zależnościach.",
      },
      {
        question: "Jak wygenerować raporty z testów Cypress?",
        answer:
          "Możesz użyć narzędzi takich jak cypress-multi-reporters lub mochawesome do generowania rozbudowanych raportów z testów Cypress.",
      },
      {
        question: " Jak obsłużyć okna modalne (popup) w testach Cypress?",
        answer:
          "Użyj polecenia cy.get() z odpowiednim selektorem, aby zidentyfikować okno modalne, a następnie wykonaj na nim odpowiednie operacje.",
      },
      {
        question: "Jak przetestować formularze za pomocą Cypress?",
        answer:
          "Użyj polecenia cy.get() do znalezienia formularza, a następnie type() lub clear().type() do wprowadzenia danych do pól formularza.",
      },
      {
        question:
          "Jak ustawiać i sprawdzać wartości atrybutów CSS za pomocą Cypress?",
        answer: `
        Użyj polecenia should('have.css', 'nazwa-atrybutu', 'oczekiwana-wartość'), aby sprawdzić wartość atrybutu CSS.`,
      },
      {
        question: "Jak testować obsługę błędów w aplikacji za pomocą Cypress?",
        answer: `Użyj polecenia cy.server() do przechwytywania żądań i symulowania odpowiedzi błędów z serwera.`,
      },
      {
        question: "Jak testować aplikacje mobilne za pomocą Cypress?",
        answer: `Użyj polecenia cy.viewport() do ustawienia odpowiedniego rozmiaru ekranu, symulując tym samym urządzenie mobilne.`,
      },
      {
        question:
          "Jak przetestować sortowanie i filtrowanie listy za pomocą Cypress?",
        answer:
          "Użyj polecenia cy.get() do znalezienia elementów listy, a następnie sprawdź, czy są one posortowane lub przefiltruj wyniki i zweryfikuj poprawność.",
      },
      {
        question: "Jak obsługiwać ciągłe integracje (CI) z testami Cypress?",
        answer:
          ": Skonfiguruj skrypty w pliku package.json, aby uruchamiały testy Cypress, a następnie użyj ich w narzędziu CI, takim jak Travis CI czy Jenkins.",
      },
      {
        question:
          "Jak testować dynamiczne zawartości strony za pomocą Cypress?",
        answer:
          "Użyj polecenia cy.contains('tekst') do znalezienia elementu z dynamicznym tekstem i wykonaj na nim odpowiednie operacje.",
      },
      {
        question: " Jak przyspieszyć wykonanie testów Cypress?",
        answer:
          " Skorzystaj z funkcji takich jak cy.visit({ timeout: 10000 }) lub cy.request({ timeout: 10000 }), aby dostosować timeouty i przyspieszyć testy.",
      },
      {
        question:
          "jak testować interakcje z elementami strony, takimi jak przeciąganie i upuszczanie?",
        answer:
          "Użyj polecenia cy.get() do znalezienia elementów, a następnie zastosuj polecenia związane z przeciąganiem, takie jak drag() i drop().",
      },
      {
        question:
          "jak przetestować funkcje obsługi czasu, takie jak opóźnienia i czasowe animacje?",
        answer:
          "Użyj polecenia cy.wait() do oczekiwania na określony czas lub zastosuj cy.clock() do kontrolowania czasu w testach.",
      },
      {
        question:
          "Jak testować funkcje nawigacyjne, takie jak przejście między stronami?",
        answer:
          "Użyj polecenia cy.visit() do otwarcia nowej strony lub cy.location() do sprawdzenia bieżącego adresu URL.",
      },
      {
        question:
          "Jak symulować różne sytuacje, takie jak brak połączenia internetowego?",
        answer:
          "Użyj polecenia cy.route() do przechwytywania żądań sieciowych i symulowania różnych scenariuszy, takich jak brak połączenia.",
      },
      {
        question:
          "Jak testować aplikacje, które używają komponentów zewnętrznych, takich jak Google Maps?",
        answer:
          " Skorzystaj z pluginów Cypress, takich jak cypress-google-maps do integracji z zewnętrznymi komponentami.",
      },
      {
        question: "Jak przetestować zabezpieczenia CSRF w aplikacji?",
        answer:
          "Użyj polecenia cy.request() do ręcznego dodawania nagłówków CSRF do żądań.",
      },
      {
        question:
          "Jak przechowywać poufne dane, takie jak hasła, w testach Cypress?",
        answer: `W Unikaj przechowywania poufnych danych bezpośrednio w kodzie testów. Skorzystaj z narzędzi do zarządzania zmiennymi środowiskowymi.`,
      },
    ],
  },

  mutations: {
    randomCypressQuestion(state) {
      state.cypressQuestions.sort(() => Math.floor(Math.random() - 0.5));
    },
  },
  actions: {
    cypressQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomCypressQuestion");
      }, 5000);
    },

    randomCypressQuestion(context) {
      context.commit("randomCypressQuestion");
    },
  },
};
