export default {
  namespaced: true,

  state: {
    angularQuestions: [
      {
        question: "Czym są usługi w angularze?",
        answer:
          "W kontekście frameworka Angular, usługi są jednym z głównych elementów architektury aplikacji. Usługi w Angularze są klasami, które zawierają logikę biznesową, funkcje, metody i dane, które są współdzielone i dostępne dla różnych komponentów w aplikacji.",
      },
      {
        question: "Jaką funkcję pełnią usługi?",
        answer:
          "Reużywalność kodu: Usługi pozwalają na zdefiniowanie logiki biznesowej i funkcjonalności w jednym miejscu, które można wielokrotnie wykorzystywać w różnych komponentach. Dzięki temu, kod jest bardziej modułowy, łatwiejszy w utrzymaniu i bardziej elastyczny. Separacja zadań: Usługi pozwalają na oddzielenie logiki biznesowej od komponentów. Komponenty skupiają się na obsłudze interfejsu użytkownika, podczas gdy usługi wykonują bardziej ogólne i wspólne zadania, takie jak komunikacja z serwerem, zarządzanie danymi czy logika przetwarzania Wstrzykiwanie zależności: Usługi są wstrzykiwane (dependency injected) do komponentów, co oznacza, że Angular zarządza tworzeniem instancji usług i przekazuje je do komponentów, które ich potrzebują. To ułatwia zarządzanie zależnościami i umożliwia komponentom korzystanie z funkcjonalności dostarczanych przez usługi Dostęp do danych zewnętrznych: Usługi są odpowiednie do obsługi komunikacji z serwerem, pobierania danych z zewnętrznych źródeł, manipulowania nimi i przetwarzania. Na przykład, możesz stworzyć usługę, która wykonuje zapytania HTTP do API, pobiera dane i dostarcza je do komponentów w aplikacji.",
      },
      {
        question: "Co robi polecenie ng serve?",
        answer:
          "Polecenie ng serve kompiluje i tworzy paczki w pamięci bez generowania plików. Podczas pracy nad projektem uruchamiasz polecenie ng serve tylko raz, a nastkontynuujesz pracęz kodem. Za każdym razem, gdy modyfikujesz i zapisujesz CLI Angulara rekompiluje paczki w pamięci (zajmuje to kilka sekund) i możesz od zobaczyć rezultaty wprowadzonych zmian.",
      },
      {
        question: "Czym jest potok",
        answer:
          "Potok jest elementem szablonu, który pozwala przekształcić wartość na pożądany format wyjściowy. Potok określa się przez dodanie pionowej kreski (|) i nazwy potoku zaraz po wartości, która ma być przekształcona:",
      },
      {
        question: "Podwójny znak ukośnika wstecznego",
        answer:
          "Określa, czy zapytanie dotyczy istniejącego pojedynczego psotu",
      },
      {
        question: "Dlaczego nie warto używać konkatenacji w c#",
        answer:
          "Konkatencja jest procesem kosztownym dla zasobów operacyjnych czyli jest to niewydajna operacja która zużywa nasze zasoby operacyjne. Jest to operacja kosztowna ponieważ string jest to typ niemutowalny - oznacza to ,że raz przypisanej wartości nie da się zmienić. Co prawda w .net mamy mechanizm garbage collector który zbiera śmieci ale po co dopuszczać ,żeby nasz garbage collector miał pracę?",
      },
      {
        question: "Czym jest Console.ReadKey()",
        answer:
          "Console.ReadKey() przygotowane dla użytkowników platformy .NET. Program będzie oczekiwał wciśnięcia jakiegokolwiek przycisku przez użytkownika. Zapobiega to zbyt szybkiemu zamknięciu naszej konsoli po uruchomieniu programu i wyświetleniu wiadomości w konsoli. Warto spróbować wykonać nasz program bez oraz z powyższą linią.",
      },
      {
        question: "Czym jest blazor?",
        answer:
          "Jest to framework do budowy interfejsów użytkownika opartych na technologii WebAssembly lub SignalR. Pozwala programistom pisać aplikacje SPA (Single-Page Applications) w C# i wykorzystywać je w przeglądarce internetowej. Działa zarówno w ASP.NET, jak i w ASP.NET Core.",
      },
      {
        question: "Czym jest asp.net",
        answer:
          "Jest to framework do budowy aplikacji internetowych, który oferuje wiele funkcji i narzędzi do tworzenia stron internetowych, API i aplikacji webowych. ASP.NET obsługuje wiele modeli programowania, takich jak Web Forms, MVC (Model-View-Controller) i Razor Pages.",
      },
      {
        question: "Czym jest decimal?",
        answer:
          "W języku programowania C# typ danych decimal jest używany do reprezentowania liczb zmiennoprzecinkowych o dużej precyzji. Jest to użyteczne, gdy potrzebujemy wykonywać operacje matematyczne na liczbach wymagających dużej dokładności, takich jak finanse, obliczenia naukowe czy przeliczenia walutowe.Typ decimal jest reprezentowany jako liczba zmiennoprzecinkowa o precyzji 128 bitów, co oznacza, że może przechowywać większą liczbę cyfr po przecinku w porównaniu do innych typów zmiennoprzecinkowych, takich jak float czy double. Domyślna precyzja dla typu decimal wynosi 28 cyfr dziesiętnych.",
      },
      {
        question: "Czym jest ASP.NET Core",
        answer:
          "Jest to nowoczesna, wieloplatformowa wersja frameworka ASP.NET. ASP.NET Core jest bardziej lekki, wydajny i elastyczny niż poprzednie wersje ASP.NET. Obsługuje tworzenie aplikacji webowych, usług sieciowych i API. ASP.NET Core umożliwia także tworzenie aplikacji internetowych na platformie chmurowej.",
      },
      {
        question: "Czym jest windows forms",
        answer:
          "Windows Forms (skrótowo WF) jest biblioteką programistyczną dla języka C# w platformie .NET, która umożliwia tworzenie aplikacji okienkowych dla systemu operacyjnego Windows. Windows Forms jest jednym z najstarszych i najbardziej popularnych narzędzi do tworzenia interfejsów użytkownika (UI) w języku C#..",
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
      state.angularQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
