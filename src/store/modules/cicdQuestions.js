export default {
  namespaced: true,

  state: {
    cicdQuestions: [
      {
        question: "Czym jest ci/cd?",
        answer: `CI/CD to skrót od Continuous Integration oraz Continuous Deployment, a także czasem używane Continuous Delivery. Te praktyki są często implementowane w procesie rozwoju oprogramowania, aby zautomatyzować i usprawnić dostarczanie oprogramowania do użytkowników końcowych. Możesz zautomatyzować proces dostarczania oprogramowania za pomocą potoku CI/CD. W ramach potoku budowany jest kod, uruchamiane są testy (CI) i bezpiecznie wdrażana jest nowa wersja aplikacji (CD). Automatyzując potoki, eliminowane są błędy ręczne, programiści otrzymują standardowe pętle informacji zwrotnej, a iteracja produktów staje się bardziej wydajna. W DevOps ciągła integracja i ciągłe dostarczanie (CI/CD) to najlepsze praktyki, które zapewniają regularne i niezawodne dostarczanie zmian w kodzie.`,
      },
      {
        question: "Wyjaśnij cel CI?",
        answer: `CI to praktyka, w której programiści regularnie łączą swoje zmiany kodu w jedno wspólne repozytorium. Po każdym takim połączeniu system automatycznego CI przeprowadza zestaw testów, aby upewnić się, że wprowadzone zmiany nie wpływają negatywnie na istniejący kod.Zapewnia, że zmiany kodu są weryfikowane i testowane automatycznie po ich wprowadzeniu, co pomaga w wykrywaniu błędów i konfliktów.`,
      },
      {
        question: "Wyjaśnij cel CD?",
        answer: `Continuous Delivery jest czasem używane zamiennie z Continuous Deployment, ale czasem różni się w tym, że wdrażanie do środowiska produkcyjnego jest decyzją ręczną, a nie automatyczną.
          Cel: Zapewnienie gotowości do wdrożenia oprogramowania do produkcji w dowolnym momencie, choć sam proces wdrożenia może wymagać ręcznej akceptacji.`,
      },
      {
        question: "Jakie są korzyści z ci/cd?",
        answer: `Szybsze dostarczanie oprogramowania, Automatyzację procesów testowania.
            Zwiększenie jakości oprogramowania, Łatwiejsze zarządzanie zmianami kodu.
            Skrócenie cyklu życia dostarczania oprogramowania. CI/CD umożliwia szybką integrację małych zmian w kodzie i łatwe testowanie zmian.
            Dzięki konfiguracji CI/CD izolowanie usterek jest łatwiejsze i szybsze. Podczas izolowania uszkodzeń system jest monitorowany, określany jest czas wystąpienia usterki i określana jest jej lokalizacja.
            W przypadku CI/CD MTTR (średni czas do rozwiązania) ulega skróceniu, ponieważ zmiany są mniejsze i łatwiejsze do wdrożenia. Konfiguracja CI/CD zwiększa niezawodność testów jednostkowych i integracyjnych.
            Po skonfigurowaniu CI/CD małe zmiany w kodzie są łączone bardzo szybko i kod jest wkrótce gotowy do produkcji.
            CI poprawia przejrzystość, wykrywając awarie na wczesnym etapie, takie jak błędy kompilacji, problemy z łączeniem, błędy testów integracyjnych itp.
            Płyta CD ułatwia udostępnienie kodu użytkownikom końcowym.`,
      },
      {
        question: "Różnica pomiędzy ci a cd?",
        answer: `CI skupia się na regularnym łączeniu kodu i automatycznym testowaniu, natomiast CD rozszerza tę praktykę, obejmując również automatyzację procesu dostarczania oprogramowania do produkcji. Obydwie te praktyki mają na celu poprawę jakości oprogramowania, zwiększenie efektywności zespołu i skrócenie cyklu dostarczania oprogramowania. 
            `,
      },
      {
        question: "Opisz etap budowy.",
        answer: `Etap kompilacji jest pierwszą fazą potoku CI/CD i automatyzuje wiele kroków, przez które przechodzi typowy programista, takich jak instalowanie narzędzi, pobieranie zależności i kompilowanie projektu. Oprócz budowania kodu, automatyzacja kompilacji wiąże się z wykorzystaniem narzędzi sprawdzających, czy kod jest bezpieczny i zgodny z najlepszymi praktykami. Na tym etapie sprawdzana jest możliwość budowania i testowania aplikacji 
            `,
      },
      {
        question: "co oznacza termin konteneryzacja",
        answer: `Konteneryzacja jest procesem pakowania, uruchamiania i zarządzania aplikacjami oraz ich zależnościami wizualizowanymi w kontenerach. Konteneryzacja umożliwia izolację aplikacji od środowiska, w którym są uruchamiane, co pozwala na konsekwentne wdrażanie aplikacji na różnych platformach bez zmian w jej kodzie. Najpopularniejszą platformą do konteneryzacji jest Docker, który wykorzystuje technologię kontenerów do tworzenia, uruchamiania i zarządzania aplikacjami wizualizowanymi. Dzięki konteneryzacji aplikacje mogą być łatwo przenoszone między różnymi środowiskami, co przyspiesza proces wdrażania i zapewnia spójność działania aplikacji. 
            `,
      },
      {
        question: "czym jest trunk-based development.",
        answer: `Rozwój oparty na gałęzi głównej (trunk-based development) to strategia zarządzania kodem źródłowym, która skupia się na utrzymywaniu jednej głównej gałęzi (nazywanej również trunk, main, lub master) jako głównego nurtu rozwoju. Podejście to promuje ciągłe wdrażanie zmian do głównej gałęzi, zamiast tworzenia wielu długotrwałych gałęzi rozwoju. Utrzymywanie pojedynczej gałęzi głównej: Wszystkie zmiany kodu są wprowadzane bezpośrednio do głównej gałęzi. Nie ma potrzeby tworzenia gałęzi rozwojowych dla każdej funkcji lub zadania.
        Ciągłe wdrażanie: Dzięki regularnemu dodawaniu kodu do głównej gałęzi, aktualizacje są szybko wdrażane. Wdrażanie często i regularnie ogranicza ryzyko dużych konfliktów integracyjnych.
        Małe i częste zmiany: Deweloperzy wprowadzają mniejsze, lepiej przetestowane zmiany, co ułatwia debugowanie i utrzymanie kodu.
        Automatyzacja testowania: Silne testowanie automatyczne jest kluczowe, aby zapewnić, że każda zmiana nie wprowadza regresji i jest gotowa do wdrożenia.
        Krótkie cykle iteracji: Rozwój oparty na gałęzi głównej promuje krótkie cykle iteracji, co pozwala na szybką reakcję na zmiany i potrzeby klienta.
            `,
      },
      {
        question: "Różnice między obrazem Dockera a kontenerem",
        answer:
          "Obraz Dockera  Jest to szablon tylko do odczytu, który zawiera wszystkie wymagane do uruchomienia aplikacji zależności, biblioteki, kod źródłowy, skrypty, konfiguracje itp.Podsumowując, obraz Dockera jest szablonem do tworzenia kontenerów, podczas gdy kontener jest instancją uruchomionego obrazu, w którym aplikacja faktycznie działa. Obrazy Dockera są niezmiennymi i niemutowalnymi artefaktami, co oznacza, że nie można ich modyfikować po ich utworzeniu. Obraz można zbudować na podstawie pliku Dockerfile lub pobrać z Docker Huba lub innego rejestru obrazów Dockera. Kontener: Jest to instancja uruchomionego obrazu Dockera. Kontener jest środowiskiem wykonawczym, które działa w izolacji od innych kontenerów i hosta. Może być uruchomiony, zatrzymany, zniszczony i restartowany niezależnie od innych kontenerów. Kontenery wykorzystują funkcje kontroli grupy procesów (cgroups) i przestrzeni nazw (namespaces) jądra systemu Linux do zapewnienia izolacji.",
      },
      {
        question:
          "Jakie są główne korzyści płynące z wdrożenia Continuous Integration?",
        answer: `Główne korzyści to szybkie wykrywanie błędów, eliminacja konfliktów między kodem różnych programistów, skrócenie cyklu dostarczania oprogramowania oraz zwiększenie ogólnej jakości kodu.`,
      },
      {
        question:
          "Jaka jest różnica między platformą CI/CD hostowaną a platformą CI/CD opartą na chmurze?",
        answer: `Hosted CI/CD Platform:
        Hostowane platformy CI/CD są zazwyczaj uruchamiane na serwerach zlokalizowanych w jednym miejscu fizycznym.
        Dostawca platformy jest odpowiedzialny za zarządzanie infrastrukturą, zapewnienie dostępności i utrzymanie serwerów.
        Użytkownicy mogą korzystać z usług oferowanych przez tę platformę, ale nie mają kontroli nad infrastrukturą pod nią leżącą.
        Przykłady hostowanych platform CI/CD to CircleCI, Travis CI, Bitbucket Pipelines.
        Cloud-Based CI/CD Platform:
        Platformy CI/CD oparte na chmurze działają w infrastrukturze chmurowej, co oznacza, że korzystają z zasobów chmurowych dostarczanych przez usługodawcę chmurowego.
        Dostawca chmury zarządza infrastrukturą, skalowaniem, zabezpieczeniami i dostępnością platformy.
        Użytkownicy mogą korzystać z platformy za pomocą przeglądarki internetowej lub dedykowanych klientów, a nie potrzebują własnych serwerów ani infrastruktury.
        Przykłady platform CI/CD opartych na chmurze to AWS CodePipeline, Google Cloud Build, Azure DevOps.
        Podsumowując, choć hosted i cloud-based platformy CI/CD oferują podobne funkcjonalności, różnią się one w zakresie zarządzania infrastrukturą i lokalizacji serwerów. Cloud-based platformy zapewniają większą elastyczność, skalowalność i dostępność, ale mogą wiązać się z wyższymi kosztami w porównaniu do hostowanych platform.`,
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
    randomCiCdQuestion(state) {
      state.cicdQuestions.sort(() => Math.floor(Math.random() - 0.5));
    },
  },
  actions: {
    cicdQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomCiCdQuestion");
      }, 5000);
    },

    randomCiCdQuestion(context) {
      context.commit("randomCiCdQuestion");
    },
  },
};
