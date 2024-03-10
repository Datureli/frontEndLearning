export default {
    namespaced: true,
  
    state: {
      playwrightQuestions: [
        {
          question: "czym jest playwright browser?",
          answer:
            `
            Playwright Browser to część Playwright, otwartoźródłowej biblioteki do automatyzacji przeglądarek internetowych. Playwright obsługuje wiele przeglądarek, takich jak Chromium, Firefox i WebKit, a Playwright Browser to warstwa abstrakcji nad konkretnymi przeglądarkami, umożliwiająca łatwe korzystanie z różnych silników renderujących.
            
            W skrócie, Playwright Browser dostarcza jednolite API, które pozwala na kontrolę różnych przeglądarek internetowych bez konieczności dostosowywania kodu dla każdej z nich. Umożliwia to łatwe pisanie testów automatycznych, skryptów do scrapingu danych, czy też automatyzacji interakcji z witrynami internetowymi.
            
            Dzięki Playwright Browser możesz pisać jednolity kod, który będzie działać zarówno dla Chromium, Firefox, jak i WebKit, co sprawia, że jest to narzędzie atrakcyjne dla deweloperów pracujących w różnych środowiskach.`,
        },
        {
          question: "Jak działa słowo kluczowe 'DISTINCT'",
          answer:
            "Słowo kluczowe 'DISTINCT' jest używane w zapytaniach do bazy danych w celu uzyskania tylko unikalnych wyników. Wymusza ono, aby baza danych zwróciła jedynie różniące się między sobą rekordy. Słowo kluczowe 'DISTINCT' należy umieścić na początku listy nazw kolumn w zapytaniu, aby uzyskać tylko unikalne wartości dla określonych kolumn.",
        },
        {
          question: "Jak ograniczyć liczbę zwracanych wyników?",
          answer:
            "Polecenie SELECT zwraca wszystkie pasujące wiersze, co w wielu sytuacjach oznacza wszystkie wiersze tabeli. Gdy chcemy ograniczyć wyniki do jednego wiersza lub określonego podzbioru, używamy słowa kluczowego LIMIT.",
        },
        {
          question: "Jak pobrać wiele kolumn>",
          answer:
            "Aby pobrać wiele kolumn z tabeli, stosuje się tę samą instrukcję SELECT. Jedyna różnica polega na tym, iż po słowie kluczowym SELECT wymienia się oddzielone przecinkami nazwy kolumn. W momencie pobierania kilku kolumn, należy umieścić przecinki między nazwami kolumn. Trzeba jednak pamiętać, że po nazwie ostatniej kolumny nie można umieścić przecinka — jeśli to się zdarzy, pojawi się komunikat o błędzie. Jeżeli chcemy pobrać wszystkie kolumny to możemy skorzystać z symbolu gwiazdki '*'",
        },
        {
          question: "Czym jest instrukcja select?",
          answer:
            "Aby użyć polecenia SELECT do pobrania danych, trzeba podać przynajmniej dwie informacje — co chce się pobrać i skąd. SELECT prod_nazwa FROM Produkty; Przedstawione zapytanie używa instrukcji SELECT do pobrania jednej kolumny o nazwie prod_nazwa z tabeli Produkty. Nazwa kolumny pojawia się zaraz za słowem kluczowym SELECT; natomiast po słowie kluczowym FROM pojawia się nazwa tabeli, z której należy pobrać dane.",
        },
        {
          question: "Opisz język sql",
          answer:
            "Język SQL został specjalnie zaprojektowany do komunikacji z bazami danych. W odróżnieniu od innych języków SQL składa się tylko z kilku słów. Nie  jest to jednak wadą. Język ten został zaprojektowany wyłącznie w jednym celu — jego zadaniem jest proste i wydajne odczytywanie i zapisywanie  danych w bazie.",
        },
        {
          question: "Czym jest klucz główny?",
          answer:
            "Klucz główny to kolumna (lub zbiór kolumn), która jednoznacznie identyfikuje każdy wiersz w tabeli. Jego celem jest umożliwienie jednoznacznego wyboru konkretnego wiersza. Klucz główny staje się istotny przy aktualizacji lub usuwaniu danych, ponieważ zapewnia gwarancję, że odnosimy się do konkretnego rekordu. Chociaż nie jest to wymagane przez wszystkie systemy zarządzania bazami danych, większość projektantów dodaje klucze główne do tabel, co ułatwia późniejszą modyfikację danych",
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
        {
          question: "Kolejność wyrażeń w sql?",
          answer:
            " Język SQL określa w jakiej kolejności powinny być one używane w zapytaniach. Kolejność ta zawsze wygląda następująco:",
          code: ` SELECT ...
            (    FROM ...)
            (   WHERE ...)
            (ORDER BY ...)
            (   LIMIT ...)`,
        },
        {
          question: "Jak ogranizcyć ilość wyników?",
          answer:
            "W takim przypadku z pomocą przychodzi wyrażenie LIMIT, które pozwala na ograniczenie liczby zwracanych wierszy.Do poprawnego stronicowania używa się także wyrażenia OFFSET, które pozwala na przeskoczenie odpowiedniej liczby wyników. Na przykład wyrażenie poniżej wyświetli pięć wierszy pomijając pierwsze dziesięć.",
        },
        {
          question: "Jak w sql zwrócić jedynie uniknalne wiersze?",
          answer:
            "W przypadku tego typu zapytań z pomocą przychodzi wyrażenie DISTINCT. Pozwala ono na odfiltrowanie powielonych wierszy.Klauzulę DISTINCT możesz stosować także w przypadku wielu kolumn. Załóżmy, że chcesz uzyskać listę wszystkich krajów i miejscowości, w których dokonano zakupu. Aby uzyskać taki wynik wystarczy nieznacznie zmodyfikować poprzednie zapytanie:",
        },
        {
          question: "co robi IN?",
          answer:
            "W przypadku tego typu zapytań z pomocą przychodzi wyrażenie DISTINCT. Pozwala ono na odfiltrowanie powielonych wierszy.Klauzulę DISTINCT możesz stosować także w przypadku wielu kolumn. Załóżmy, że chcesz uzyskać listę wszystkich krajów i miejscowości, w których dokonano zakupu. Aby uzyskać taki wynik wystarczy nieznacznie zmodyfikować poprzednie zapytanie:",
        },
        {
          question: "Jak działa orderBy?",
          answer:
            "W przypadku tego typu zapytań z pomocą przychodzi wyrażenie DISTINCT. Pozwala ono na odfiltrowanie powielonych wierszy.Klauzulę DISTINCT możesz stosować także w przypadku wielu kolumn. Załóżmy, że chcesz uzyskać listę wszystkich krajów i miejscowości, w których dokonano zakupu. Aby uzyskać taki wynik wystarczy nieznacznie zmodyfikować poprzednie zapytanie:",
        },
        {
          question: "Funkcje grupujace",
          answer:
            "W przypadku tego typu zapytań z pomocą przychodzi wyrażenie DISTINCT. Pozwala ono na odfiltrowanie powielonych wierszy.Klauzulę DISTINCT możesz stosować także w przypadku wielu kolumn. Załóżmy, że chcesz uzyskać listę wszystkich krajów i miejscowości, w których dokonano zakupu. Aby uzyskać taki wynik wystarczy nieznacznie zmodyfikować poprzednie zapytanie:",
        },
        {
          question: "Czym jest avg",
          answer:
            "W przypadku tego typu zapytań z pomocą przychodzi wyrażenie DISTINCT. Pozwala ono na odfiltrowanie powielonych wierszy.Klauzulę DISTINCT możesz stosować także w przypadku wielu kolumn. Załóżmy, że chcesz uzyskać listę wszystkich krajów i miejscowości, w których dokonano zakupu. Aby uzyskać taki wynik wystarczy nieznacznie zmodyfikować poprzednie zapytanie:",
        },
        {
          question: "Opisz właściwość concat",
          answer:
            "W przypadku tego typu zapytań z pomocą przychodzi wyrażenie DISTINCT. Pozwala ono na odfiltrowanie powielonych wierszy.Klauzulę DISTINCT możesz stosować także w przypadku wielu kolumn. Załóżmy, że chcesz uzyskać listę wszystkich krajów i miejscowości, w których dokonano zakupu. Aby uzyskać taki wynik wystarczy nieznacznie zmodyfikować poprzednie zapytanie:",
        },
        {
          question: "Jak działa groupBy?",
          answer:
            "W przypadku tego typu zapytań z pomocą przychodzi wyrażenie DISTINCT. Pozwala ono na odfiltrowanie powielonych wierszy.Klauzulę DISTINCT możesz stosować także w przypadku wielu kolumn. Załóżmy, że chcesz uzyskać listę wszystkich krajów i miejscowości, w których dokonano zakupu. Aby uzyskać taki wynik wystarczy nieznacznie zmodyfikować poprzednie zapytanie:",
        },
        {
          question: "Czym jest polecenie INSERT?",
          answer:
            "W języku SQL, polecenie INSERT służy do dodawania nowych rekordów do tabeli w bazie danych. Po słowie kluczowym INSERT musimy dodać INTO. Po Into dodajemy nazwe tabeli a następnie kolumny",
        },
        {
          question: "Do czego służy polecenie Update?",
          answer:
            "W języku SQL, polecenie UPDATE służy do aktualizowania istniejących rekordów w tabeli. Oto ogólna składnia polecenia UPDATE:. Po słówku Update używamy słowa set które wskazuje Wskazuje, które kolumny mają zostać zaktualizowane i jakie wartości mają przyjąć.",
        },
        {
          question: "Do czego służy polecenie DELETE?",
          answer: "Nie można usunąć jednej kolumny, usuwa się zawsze cały rekord",
        },
        {
          question: "Czym są podzapytania?",
          answer: "Nie można usunąć jednej kolumny, usuwa się zawsze cały rekord",
        },
        {
          question: "Opisz instrukcje warunkowe Case?",
          answer: "Nie można usunąć jednej kolumny, usuwa się zawsze cały rekord",
        },
        {
          question: "złączenie zewnatrzne?",
          answer: "Nie można usunąć jednej kolumny, usuwa się zawsze cały rekord",
        },
        {
          question: "różnica pomiedzy złączeniem zewnetrznym i wewnatrznym?",
          answer: "Nie można usunąć jednej kolumny, usuwa się zawsze cały rekord",
        },
        {
          question: "Jak tworzyć aliasy w mysql?",
          answer: `Aby utworzyć alias w MySQL, możesz użyć klauzuli AS w zapytaniu SELECT. Oto przykład, jak to zrobić: SELECT kolumna1 AS alias1, kolumna2 AS alias2
            FROM tabela;`,
        },
        {
          question: "Czym jest self join??",
          answer: `Aby utworzyć alias w MySQL, możesz użyć klauzuli AS w zapytaniu SELECT. Oto przykład, jak to zrobić: SELECT kolumna1 AS alias1, kolumna2 AS alias2
            FROM tabela;`,
        },
        {
          question: "Bazy relacyjne a nierelacyjne?",
          answer: `Aby utworzyć alias w MySQL, możesz użyć klauzuli AS w zapytaniu SELECT. Oto przykład, jak to zrobić: SELECT kolumna1 AS alias1, kolumna2 AS alias2
            FROM tabela;`,
        },
        {
          question: "indexy w sql?",
          answer: `Aby utworzyć alias w MySQL, możesz użyć klauzuli AS w zapytaniu SELECT. Oto przykład, jak to zrobić: SELECT kolumna1 AS alias1, kolumna2 AS alias2
            FROM tabela;`,
        },
        {
          question: "Jak połączyć tablice które nie są bezpośrednio połączone?",
          answer:
            "Musimy użyć tabeli łącznikowej. Jeżeli występuje sytuacja wiele do wielu  to ,żeby wyświetlić dane przy złączeniu powinniśmy wykorzystać tablice łącznikową",
        },
        {
          question: "Czym jest left,right i full join?",
          answer: `RIGHT JOIN (lub RIGHT OUTER JOIN):
            Zwraca wszystkie rekordy z drugiej (prawej) tabeli (tabeli po prawej stronie operatora RIGHT JOIN), a także wspólne rekordy z pierwszej (lewej) tabeli.
            W przypadku, gdy nie ma dopasowań, wartości z lewej tabeli będą miały wartości NULL w kolumnach związanych z prawą tabelą.FULL JOIN (lub FULL OUTER JOIN):
            Zwraca wszystkie rekordy z obu tabel, z dopasowanymi rekordami, jeśli takie istnieją.
            Jeśli nie ma dopasowań, wartości z brakujących stron będą miały wartości NULL.`,
        },
        {
          question: "Czym jest natural join?",
          answer: "Nie można usunąć jednej kolumny, usuwa się zawsze cały rekord",
        },
        {
          question: "Czym się różni join od inner join??",
          answer: `
            W kontekście języka zapytań SQL różnica między JOIN a INNER JOIN polega na tym, że INNER JOIN to forma bardziej precyzyjna. W praktyce są one często używane zamiennie, ponieważ większość baz danych traktuje obie frazy jako synonimy.Podstawowa różnica wynika z tego, że INNER JOIN jest bardziej explicite oznaczony, co pomaga zrozumieć, że chodzi o konkretne łączenie oparte na pasujących wartościach. Zapis JOIN sam w sobie może obejmować różne typy łączeń, takie jak INNER JOIN, LEFT JOIN, RIGHT JOIN, czy FULL JOIN.`,
        },
      ],
    },
  
    mutations: {
      randomSqlQuestion(state) {
        state.playwrightQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
  