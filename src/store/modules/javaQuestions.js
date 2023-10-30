export default {
    namespaced: true,
  
    state: {
      javaQuestions: [
        {
          question: "Czym jest java?",
          answer:
            "Java to obiektowy, ogólnego przeznaczenia język programowania, który został stworzony przez firmę Sun Microsystems (obecnie należy do Oracle Corporation) i po raz pierwszy wydany w 1995 roku.",
        },
        {
          question: "Czym są aplety?",
          answer:
            "są to programy napisane w Javie, które działająwewnątrz okna przeglądarki.",
        },
        {
          question: "Czym jest Java Virtual Machine (JVM)?",
          answer:
            "JVM jest maszyną wirtualną, która umożliwia uruchamianie kodu Javy na różnych platformach. Główne zadania JVM to tłumaczenie kodu bajtowego na kod maszynowy, zarządzanie pamięcią i zarządzanie wątkami.",
        },
        {
          question: "Co to jest Garbage Collector w kontekście Javy i jakie jest jego zadanie?",
          answer:
            "Garbage Collector (GC) to mechanizm w Javie odpowiedzialny za automatyczne usuwanie niepotrzebnych obiektów z pamięci, co pozwala na zwolnienie zasobów i uniknięcie wycieków pamięci.",
        },
        {
          question: "Jaka jest różnica między klasą a obiektem w Javie?",
          answer:
            "Klasa to szablon lub opis, który definiuje strukturę i zachowanie obiektów. Obiekt natomiast jest instancją konkretnej klasy.",
        },
        {
          question: "Jakie są dostępne modyfikatory dostępu w Javie i jakie są ich znaczenia (np. public, private, protected, default)?",
          answer:
            "Dostępne modyfikatory dostępu to: public (dostęp z dowolnego miejsca), private (dostęp tylko w obrębie klasy), protected (dostęp w obrębie pakietu i klas dziedziczących), oraz domyślny (brak modyfikatora, dostęp w obrębie pakietu).",
        },
        {
          question: "Jakie są różnice między interfejsem a klasą abstrakcyjną w Javie i kiedy warto użyć jednego z tych elementów?",
          answer:
            "Interfejs definiuje zestaw metod, które implementujące klasy muszą dostarczyć. Klasa abstrakcyjna może zawierać implementacje metod oraz konstruktorów. Interfejsy pozwalają na wielokrotne dziedziczenie, a klasy abstrakcyjne nie.",
        },
        {
          question: "Co to są wyjątki (exceptions) w Javie i jak obsługiwać wyjątki w programie?",
          answer:
            "Wyjątki są sytuacjami wyjątkowymi, które mogą wystąpić podczas wykonywania programu. W Javie wyjątki są obsługiwane za pomocą bloków try-catch lub przekazywane wyżej za pomocą throws. Obsługa wyjątków pozwala na kontynuowanie działania programu w przypadku błędu..",
        },
        {
          question: "Co oznacza słowo kluczowe 'final' w Javie i gdzie można je stosować?",
          answer:
            "Słowo kluczowe 'final' oznacza, że element (np. zmienna, metoda, klasa) jest niemutowalny lub nieprzesłanialny. Można je stosować do zmiennych, metod i klas.",
        },
        {
          question: "Jakie są różnice między interfejsem Serializable a Externalizable w Javie?",
          answer:
            "Interfejs Serializable jest używany do oznaczenia obiektów, które mogą być serializowane (zapisywane i odczytywane z formatu bajtowego). Interfejs Externalizable umożliwia bardziej zaawansowaną kontrolę nad procesem serializacji.",
        },
        {
          question: "Jak działa mechanizm dziedziczenia w Javie i jak unikać problemów związanym z nadmiernym dziedziczeniem (tzw. diamond problem)?",
          answer:
            "Dziedziczenie w Javie pozwala na tworzenie nowych klas na podstawie istniejących klas. Diamond problem dotyczy konfliktów, które mogą wystąpić, gdy klasa dziedziczy po dwóch klasach, które mają metodę o tej samej nazwie. Problem ten można rozwiązać za pomocą interfejsów lub używając słowa kluczowego default (od Java 8).",
        },
        {
          question: "Co to jest lambda wyrażenie (lambda expression) i do czego służy w Javie?",
          answer:
            "Lambda wyrażenie to sposób definiowania funkcji anonimowych w Javie. Umożliwia skrócenie i uproszczenie kodu, zwłaszcza w przypadku interfejsów funkcyjnych i programowania funkcyjnego.",
        },
        {
          question: "Czym jest WPF (Windows Presentation Foundation)",
          answer:
            "to technologia opracowana przez Microsoft jako część platformy .NET Framework. Jest to framework do tworzenia aplikacji desktopowych dla systemu operacyjnego Windows. WPF umożliwia tworzenie interfejsów użytkownika (UI) za pomocą deklaratywnego języka XAML (Extensible Application Markup Language) oraz programowania w językach takich jak C# czy Visual Basic.",
        },
        {
          question: "Czym jest rzutowanie danych?",
          answer:
            " Rzutowanie to jeden z typów konwersji danych. Kompilator jest instruowany, aby tymczasowo traktować wartość tak, jakby była innym typem danych.Aby rzutować typ int na decimal, przed wartością dodaje się operator rzutowania. Używasz nazwy typu danych otoczonego nawiasami przed wartością, aby ją rzutować. W takim przypadku należy dodać (decimal) zmienne przed zmiennymi first i second. decimal quotient = (decimal)first / (decimal)second;",
        },
        {
          question: "Niejawna konwersja typów",
          answer:
            " W języku C# istnieje możliwość definiowania niejawnej konwersji typów za pomocą operatora niejawnej konwersji (implicit) lub metody konwertującej (implicit operator). Niejawna konwersja typów pozwala na automatyczną konwersję jednego typu danych na inny w określonych sytuacjach, bez konieczności jawnej deklaracji konwersji.",
        },
        {
          question: "Typy danych w c#",
          answer:
            "Zmienne w C# są podzielone na następujące rodzaje: typy wartościowe (value types) typy referencyjne (reference types) typy wskaźnikowe (poiner types)",
        },
        {
          question: "Czym jest platforma .net?",
          answer:
            "Zmienne w C# są podzielone na następujące rodzaje: typy wartościowe (value types) typy referencyjne (reference types) typy wskaźnikowe (poiner types)",
        },
        {
          question: "Czym jest cts(common type system)?",
          answer:
            "Zmienne w C# są podzielone na następujące rodzaje: typy wartościowe (value types) typy referencyjne (reference types) typy wskaźnikowe (poiner types)",
        },
        {
          question: "Czym jest c#?",
          answer:
            "C# jest nowoczesnym, w pełni obiektowym językiem programowania przygotowanym przez Microsoft a zatwierdzonym przez stowarzyszenie ECMA (European Association for Standardizing Information and Communication Systems)Język został opracowany przez Andersa Hejlsberg’a oraz jego zespół podczas prac na środowiskiem .NET.Najważniejsze cechy języka C#: warunki logiczne (boolean conditions);  Garbage Collector działający automatycznie;  dostęp do standardowych bibliotek;  właściwości i zdarzenia (Properties, Events);  delegaty oraz zarządzanie zdarzeniami (Delegates, Events Management);  łatwość używania typów generycznych (Generics);  kompilacja warunkowa;  wielowątkowość;  LINQ i wyrażenia lambda (lambda Expressions).",
        },
        {
          question: "Czym jest command language specification?",
          answer:
            "Niezależnie od tego w jakim jezyku napiszemy nasz kod to zostanie on przetłumaczony na cls.Jeżeli piszemy kod przykladowo w c# możemy wykorzystywać biblioteki z innych jezykow jak #f",
        },
        {
          question: "Czym jest przeciążenie operatowa",
          answer:
            "Przeciążenie operatora to możliwość zdefiniowania nowego zachowania dla operatora w językach programowania. Oznacza to, że można dostosować sposób działania operatorów do specyficznego typu danych lub obiektów. Przeciążenie operatora pozwala na bardziej naturalne i intuicyjne użycie operatorów w zależności od kontekstu. Na przykład, przeciążenie operatora + dla dwóch obiektów klasy Vector może oznaczać dodawanie wektorów, podczas gdy przeciążenie operatora + dla dwóch obiektów klasy String może oznaczać konkatenację (łączenie) ciągów znaków.Używanie jednego symbolu do wielu celów jest czasami nazywane „przeciążeniem operatora” i jest często spotykane w języku C#.",
        },
      ],
    },
    mutations: {
      randomVueQuestion(state) {
        state.javaQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
  