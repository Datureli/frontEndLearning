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
          question: "Jak ograniczyć liczbę zwracanych wyników?",
          answer:
            "Polecenie SELECT zwraca wszystkie pasujące wiersze, czyli w wielu sytuacjach wszystkie wiersze tabeli. Co zrobić, jeśli chcemy zwrócić tylko pierwszy wiersz lub  pewien podzbiór wierszy? Zadanie jest wykonalne, ale niestety to jedna z tych  sytuacji, gdy poszczególne implementacje SQL-a różniąsięstosowanąskładnią. W systemie Microsoft SQL Server możemy użyćsłowa kluczowego TOP, by ograniczyć liczbę pobieranych wierszy. Oto przykład",
        },
        {
          question: "Jak pobrać wiele kolumn>",
          answer:
            "Aby pobraćwiele kolumn z tabeli, stosuje siętęsamąinstrukcjęSELECT. Jedyna różnica polega na tym, iżpo słowie kluczowym SELECT wymienia się oddzielone przecinkami nazwy kolumn.W momencie pobierania kilku kolumn, należy umieścićprzecinki między nazwami kolumn. Trzeba jednak pamiętać, że po nazwie ostatniej kolumny nie można umieścićprzecinka — jeśli to sięzdarzy, pojawi siękomunikat o błędzie. Jeżeli chcemy pobrać wszystkie kolumny to możemy skorzystać z symbolu gwiazdki '*'",
        },
        {
          question: "Czym jest instrukcja select?",
          answer:
            "Aby użyć polecenia SELECT do pobrania danych, trzeba podać przynajmniej dwie informacje — co chce się pobrać i skąd. SELECT prod_nazwa FROM Produkty; Przedstawione zapytanie używa instrukcji SELECT do pobrania jednej kolumny o nazwie prod_nazwa z tabeli Produkty. Nazwa kolumny pojawia się zaraz za słowem kluczowym SELECT; natomiast po słowie kluczowym FROM pojawia się nazwa tabeli, z której należy pobrać dane.",
        },
        {
          question: "Opisz język sql",
          answer:
            "Język SQL (skrót od Structured Query Language) zostałspecjalnie zaprojekto- wany do komunikacji z bazami danych.  W odróżnieniu od innych języków (zarówno naturalnych jak i języków pro-  gramowania takich jak Java, C lub PHP) SQL składa siętylko z kilku słów. Nie  jest to jednak wadą. Język ten zostałzaprojektowany wyłącznie w jednym celu —jego zadaniem jest proste i wydajne odczytywanie i zapisywanie  danych w bazie.",
        },
        {
          question: "Czym jest klucz główny?",
          answer:
            "Kolumna (lub zbiór kolumn), która jednoznacznie identyfikuje każdy wiersz tabeli, nazywana jest kluczem głównym (ang. primary key). Służy on do wyboru jednego, konkretnego wiersza. Bez klucza głównego aktualizacja lub usuwanie konkretnej kolumny staje siębardzo trudne, ponieważwtedy nie mamy  gwarancji, iżodnosimy siętylko do interesującego nas wiersza. Choćich wskazanie nie jest wymuszane przez systemy zarządzania baz danych, większośćprojektantów tworzy takie klucze dla każdej tabeli, aby ułatwićprzyszłąmodyfikacjędanych.",
        },
        {
          question: "Czym jest klauzula where?",
          answer:
            "Aby filtrować dane zwracane przez zapytanie musisz użyć słowa kluczowego WHERE i warunków, które filtrują dane.Pobieranie całej tabeli nie zawsze jest przydatne.",
        },
        {
          question: "Co oznacza znak * po słowie select?",
          answer: "Znak * w tym kontekście oznacza “pobierz wszystkie",
        },
        {
          question: "AND I OR  w sql",
          answer:
            "Słowo kluczowe AND ma wyższy priorytet niż OR. Oznacza to, że warunki pomiędzy AND wykonywane są wcześniej niż OR. Dla przykładu w konstrukcji:",
        },
        {
          question: "wartość null w sql",
          answer:
            "Każdy wiersz w tabeli może mieć wartość, która pasuje do typu przechowywanego przez daną kolumnę. W SQL jest jeszcze specjalna wartość. Jest nią NULL. Możesz ją porównać do pustej wartości w językach programowania.Istotne jest rozróżnienie pomiędzy pustą wartością a NULL. Na przykład pusty łańcuch znaków to zupełnie coś innego niż NULL. Wartość ta jest traktowana w specyficzny sposób w przypadku porównań. Do sprawdzania czy kolumna w wierszu ma wartość NULL służy wyrażenie IS NULL. Aby sprawdzić, czy dana kolumna nie ma wartości NULL używa się wyrażenia IS NOT NULL.",
        },
        {
          question: "Jak wybrać konkretne kolumny?",
          answer:
            "Użycie klauzuli WHERE pozwala na odfiltrowanie części wierszy. W przypadku kolumn mechanizm jest podobny. Jeśli chcesz wybrać podzbiór kolumn, a nie wszystkie, to musisz wskazać te, które Cię interesują:",
          code: `SELECT invoicedate
                        ,billingcity
                        ,total
                    FROM invoice
                  WHERE billingcountry = 'Poland';`,
        },
      ],
    },
  
    mutations: {
      randomSqlQuestion(state) {
        state.postmanQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
  