export default {
    namespaced: true,
  
    state: {
      netQuestions: [
        {
          question: "Czym się różni pojedynczy cudzysłów od podwójnego",
          answer:
            "Zwróć uwagę, że litera b jest otoczona pojedynczym cudzysłowem 'b'. Apostrofy tworzą literał znaku. Pamiętaj, że użycie podwójnych cudzysłowów tworzy string typ danych.Zwróć uwagę na znaki pojedynczego cudzysłowu otaczającego Hello World!element . W przypadku używania pojedynczych cudzysłowów kompilator języka C# oczekuje pojedynczego znaku. Jednak w tym przypadku użyto składni literału znaku, ale zamiast tego podano 12 znaków.",
        },
        {
            question: "Liczby całkowite w c#?",
            answer:
              "Jeśli chcesz wyświetlić wartość liczbową całkowitą (bez ułamków) w konsoli wyjściowej, możesz użyć literału int. Termin int jest krótki dla liczby całkowitej, którą można rozpoznać na podstawie nauki matematyki. W języku C# ten typ danych jest oficjalnie nazywany 'int', ale często określany jako 'liczba całkowita'. Literał int nie wymaga żadnych innych operatorów, takich jak string lub char.",
          },
          {
            question: "Używanie literałów zmiennoprzecinkowych?",
            answer:
              "Liczba zmiennoprzecinkowa to liczba zawierająca liczbę dziesiętną, na przykład 3,14159. Język C# obsługuje trzy typy danych do reprezentowania liczb dziesiętnych: float, doublei decimal. Każdy typ obsługuje różne stopnie precyzji.float         ~6-9 digits double,~15-17 digits decimal,28-29 digits Zwróć uwagę, że float typ danych jest najmniej precyzyjny, dlatego najlepiej użyć tego typu danych dla stałych wartości ułamkowych, aby uniknąć nieoczekiwanych błędów obliczeniowych.",
          },
          {
            question: "co robi polecenie Console write text w .net",
            answer:
              "Polecenie 'Console.WriteLine(text)' w środowisku .NET służy do wyświetlania tekstu na konsoli lub w oknie konsoli. Jest to jedno z podstawowych poleceń używanych do wypisywania informacji na standardowe wyjście.Gdy wykonasz polecenie 'Console.WriteLine(text)', tekst zawarty w zmiennej 'text' zostanie wypisany w nowej linii na konsoli. Po wypisaniu tekstu w nowej linii, kursor przechodzi do początku następnej linii.",
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
            question: "Czym są razor pages",
            answer:
              "Razor Pages to model programowania w frameworku ASP.NET Core, który umożliwia tworzenie stron internetowych. Jest to wygodna i prostsza alternatywa dla modelu MVC (Model-View-Controller) w przypadku prostych aplikacji internetowych. Model strony: Każda strona Razor ma swój własny model, który jest klasą zawierającą dane i logikę związane z daną stroną. Widok strony: Każda strona Razor ma swój widok w postaci pliku .cshtml, który zawiera kod HTML oraz składnię Razor do generowania dynamicznej zawartości strony Kod-behind: Każda strona Razor może mieć plik .cshtml.cs, zwany kodem-behind, który zawiera kod C# obsługujący logikę związana z tą stroną. Jest to miejsce, w którym można obsługiwać żądania HTTP, przetwarzać dane i wykonywać inne operacje związane z daną stroną.",
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
            question: "Czym jest code behind w asp.net",
            answer:
              "est to plik klasy C#, który zawiera kod odpowiedzialny za logikę biznesową i obsługę zdarzeń związanych z tym konkretnym widokiem. Może zawierać metody obsługujące zdarzenia kliknięcia przycisków, logikę przetwarzania danych z formularzy, pobieranie danych z bazy danych i inne operacje związane z tym widokiem.Plik kod-behind (Index.cshtml.cs) i plik widoku (Index.cshtml) są ze sobą powiązane i współpracują w celu dostarczenia funkcjonalności i interfejsu użytkownika dla danej strony lub akcji. Plik kod-behind jest odpowiedzialny za obsługę logiki biznesowej, manipulację danymi i zdarzeniami, natomiast plik widoku definiuje strukturę i wygląd strony oraz wykorzystuje dane dostarczane przez plik kod-behind w celu dynamicznego wygenerowania zawartości widoku.",
          },
          {
            question: "Czym jest platforma .net?",
            answer:
              "Zmienne w C# są podzielone na następujące rodzaje: typy wartościowe (value types) typy referencyjne (reference types) typy wskaźnikowe (poiner types)",
          },
          {
            question: "Rodzaje zmiennych w c#?",
            answer:
              "Zmienne w C# są podzielone na następujące rodzaje:Typy wartościowe Zmienne typu wartościowego mogą mieć bezpośrednio przypisaną wartość. Dziedziczą one z klasy System.ValueType. Typy wartościowe zawierają dane. Niektóre z tych typów to: int, char, float, które pozwalają na składowanie numerów, liter czy liczb zmienno-przecinkowych. Kiedy deklarujemy wartościowy typ danych, system od razu przydziela pamięć potrzebną na przechowywanie tej zmiennej.Typy referencyjne nie przechowują rzeczywistych wartości w zmiennej, przechowują referencje do zmiennych.Innymi słowy, odnoszą się do konkretnej lokalizacji w pamięci. Przykładami wbudowanych typów referencyjnych są: obiekty (objects), typy dynamiczne (dynamics) oraz string (typ tekstowy).Typ obiektowy Object Type jest klasą bazową dla wszystkich typów danych w CTS (Common Type System) - jeden z bloków składowych platform .NET, który jest odpowiedzialny za opis wszystkich danych udostępnionych przez środowisko uruchomieniowe. Do typów obiektowych możemy przypisać dowolną wartość, tj. typ wartościowy, typ referencyjny oraz typ zdefiniowany przez użytkownika. Jednakże, przed przypisaniem wartości należy dokonać odpowiedniej konwersji.",
          },
          {
            question: "Jak w c# sprawdzić ile pamięci zajmuje zmienna?",
            answer:
              "Należy w tym wypadku użyć metody sizeof(type). Zwrócona zostanie nam wartość zajętej pamięci przez określony typ danych. Wartość ta będzie podana w bajtach.",
          },
          {
            question: "Konwersja danych w c#?",
            answer:
              "Konwersja typów to konwertowanie jednego typu danych na inny typ danych. Pojęcie to w języku angielskim to Type Casting.W języku C# istnieją dwa rodzaje konwersji: konwersja niejawna (Implicit type conversion) – ten rodzaj konwersji jest dokonywany w bezpieczny sposób. Oznacza to, że dokonujemy konwersji, np. mniejszego na większy typ danych czy konwersji klasy pochodnej na klasę bazową; konwersja jawna (Explicit type conversion) – konwersje takie wykonywane są bezpośrednio przez użytkowników za pomocą wcześniej zdefiniowanych metod. Jawne konwersje wymagają zastosowania operatora rzutowania.",
          },
          {
            question: "Czym jest boxing i unboxing?",
            answer:
              "W momencie gdy typ wartościowy jest konwertowany na typ obiektowy mamy doczynienia z operacją boxing. Jeżeli obiekt jest konwertowany na typ wartościowy mamy doczyniania z operacją unboxing.",
          },
          {
            question: "Czym jest asp-pages?",
            answer:
              "Asp-page jest częścią frameworku ASP.NET Core, który umożliwia tworzenie aplikacji internetowych. Jest to atrybut używany w Razor Pages, które są popularnym modelem programowania w ASP.NET Core.Atrybut asp-page jest używany do mapowania żądań HTTP na konkretne strony Razor. Może być stosowany jako atrybut na elementach HTML, takich jak przyciski lub odnośniki, aby przekierować użytkownika do określonej strony Razor.",
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
        state.netQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
  