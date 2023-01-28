export default {
    namespaced: true,
  
    state: {
      sqlQuestions: [
        {
          question: "Czym jest order by?",
          answer:
            "Klauzula order by pozwala nam na sortowanie kolumn.Możemy sortować wiele kolumn jednocześnie.Na początku wynik sortowany jest po pierwszym wyrażeniu. Jeśli występują w nim duplikaty są one sortowane po drugim wyrażeniu",
        },
        {
          question: "Opisz słowo kluczowe distinct?",
          answer:
            "słowo kluczowe DISTINCT, które wymusza na bazie danych zwrócenie jedynie różniących sięmiędzy sobą wyników. Słowo kluczowe DISTINCT należy umieścićna początku listy nazw kolumn.",
        },
        {
          question: "Jak ograniczyć liczbę zwracanych wyników?",
          answer:
            "Polecenie SELECT zwraca wszystkie pasujące wiersze, czyli w wielu sytuacjach wszystkie wiersze tabeli. Co zrobić, jeśli chcemy zwrócićtylko pierwszy wiersz lub  pewien podzbiór wierszy? Zadanie jest wykonalne, ale niestety to jedna z tych  sytuacji, gdy poszczególne implementacje SQL-a różniąsięstosowanąskładnią. W systemie Microsoft SQL Server możemy użyćsłowa kluczowego TOP, by ograniczyć liczbę pobieranych wierszy. Oto przykład",
        },
        {
          question: "Jak pobrać wiele kolumn>",
          answer:
            "Aby pobraćwiele kolumn z tabeli, stosuje siętęsamąinstrukcjęSELECT. Jedyna różnica polega na tym, iżpo słowie kluczowym SELECT wymienia się oddzielone przecinkami nazwy kolumn.W momencie pobierania kilku kolumn, należy umieścićprzecinki między nazwami kolumn. Trzeba jednak pamiętać, że po nazwie ostatniej kolumny nie można umieścićprzecinka — jeśli to sięzdarzy, pojawi siękomunikat o błędzie. Jeżeli chcemy pobrać wszystkie kolumny to możemy skorzystać z symbolu gwiazdki '*'",
        },
        {
          question: "Czym jest instrukcja select?",
          answer:
            "Aby użyć polecenia SELECT do pobrania danych, trzeba podać przynajmniej dwie informacje — co chce siępobrać i skąd. SELECT prod_nazwa FROM Produkty; Przedstawione zapytanie używa instrukcji SELECT do pobrania jednej kolumny o nazwie prod_nazwa z tabeli Produkty. Nazwa kolumny pojawia sięzaraz za słowem kluczowym SELECT; natomiast po słowie kluczowym FROM pojawia sięnazwa tabeli, z której należy pobraćdane. Uzyskany wynik zapytania jest następujący:",
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
      ],
    },
  
    mutations: {
      randomSqlQuestion(state) {
        state.sqlQuestions.sort(() => Math.floor( Math.random() - 0.5));
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
  