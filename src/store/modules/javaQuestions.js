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
        question: "Co to są typy referencyjne?",
        answer:
          `
          Typy referencyjne to koncepcja w programowaniu, która odnosi się do sposobu, w jaki wartości są przechowywane i przekazywane w programie. W językach programowania można wyróżnić dwa podstawowe typy przechowywania wartości: typy wartościowe (value types) i typy referencyjne (reference types). Przykłady typów wartościowych to liczby całkowite (integers), liczby zmiennoprzecinkowe (floats), znaki (chars) czy struktury (structs). Natomiast typy referencyjne przechowują referencje (wskaźniki) do danych przechowywanych gdzie indziej w pamięci. Przykłady typów referencyjnych to obiektyW przykładzie powyżej zmienna liczba1 przechowuje typ wartościowy (liczbę całkowitą), więc po przypisaniu jej wartości do liczba2 zmiana wartości liczba2 nie wpływa na liczba1.

          Natomiast zmienne tekst1 i tekst2 przechowują typ referencyjny (obiekt typu String). Przypisanie referencji tekst1 do tekst2 oznacza, że obie zmienne wskazują na ten sam obiekt w pamięci. Dlatego modyfikując tekst2, zmienia się również tekst1.`,
      },
      {
        question: "Co się stanie jeśli przekroczymy dopuszczalny zakres typu int?",
        answer:
          `
          Jeśli przekroczysz dopuszczalny zakres typu int w Javie, zachowanie zależy od sposobu, w jaki przekraczasz ten zakres: Jeśli liczba przekracza maksymalną wartość dla typu int (2,147,483,647), nastąpi przepełnienie, a wartość zostanie "obcięta" do najniższej możliwej wartości dla tego typu, czyli -2,147,483,648. Na przykład: Przekroczenie dolnej granicy:
          Jeśli liczba przekracza minimalną wartość dla typu int (-2,147,483,648), a następnie odejmiesz od niej większą liczbę, również nastąpi przepełnienie, a wartość zostanie "obcięta" do najwyższej możliwej wartości dla tego typu, czyli 2,147,483,647. Na przykład:`,
      },
      {
        question: "Protected w javie?",
        answer:
          "ma on za zadanie udostępniać pola i metody klasom pochodnym, ale nie innym klasom. Pól prywatnych oraz pól z dostępem domyślnym (czyli takim, kiedy nie podajemy żadnego modyfikatora dostępu) nie dziedziczy się.",
      },
      {
        question: "Dziedziczenie w javie?",
        answer:
          "W języku Java klasa może dziedziczyć tylko po jednej klasie – nie ma możliwości rozszerzenia więcej niż jednej klasy. W rozdziale o klasach wspomniałem o klasie Object. Jest to specjalna klasa w języku Java – wszystkie klasy dziedziczą po klasie Object – pośrednio bądź bezpośrednio. Jeżeli klasa nie definiuje, że rozszerza jakąś klasę, to automatycznie rozszerza klasę Object. Powyższa klasa Osoba nie specyfikuje, jaką klasę rozszerza, więc domyślnie rozszerza właśnie klasę Object. Wkrótce opowiem Ci więcej o tej klasie",
      },
      {
        question: "Nadpisywanie metod vs przeciążanie metod?",
        answer:
          `
          Nadpisywanie metod (method overriding) polega na definiowaniu nowej implementacji metody w klasie podrzędnej, która jest już zdefiniowana w klasie nadrzędnej, umożliwiając zmianę zachowania tej metody w kontekście hierarchii dziedziczenia. Przeciążanie metod natomiast polega na tworzeniu wielu wersji tej samej metody o tej samej nazwie, ale różniących się sygnaturą (np. liczbą parametrów, ich typami lub kolejnością), co pozwala na obsługę różnych przypadków użycia tej metody.`,
      },
      {
        question: "Czym jest java?",
        answer:
          `\`\`\`java
          int intValue = 42;
          Integer integerValue = intValue; // automatycznie konwertuje int na Integer
          \`\`\``,
      },
      {
        question: "Czym jest autoboxing oraz unboxing?",
        answer:
          "Autoboxing i unboxing są mechanizmami wprowadzonymi w języku Java, które ułatwiają konwersję między typami prymitywnymi a ich opakowującymi klasami (wrappery). Autoboxing to automatyczna konwersja typów prymitywnych na odpowiadające im opakowujące klasy (wrappery) i odwrotnie, która jest wykonywana przez kompilator Java. Dzięki autoboxingowi, możesz przypisywać wartości typów prymitywnych do zmiennych typu opakowującego bez konieczności jawnego wywoływania konstruktora. Unboxing: Unboxing to automatyczna konwersja zmiennych typu opakowującego (wrappera) na odpowiadające im typy prymitywne. Dzięki unboxingowi, możesz przypisywać wartości zmiennych typu opakowującego do zmiennych typu prymitywnego bez konieczności jawnego wywoływania metody valueOf(). Na przykład: ",
      },
      {
        question:
          "W Javie typy prymitywne i ich opakowujące klasy (wrappery) przyjmują różne wartości domyślne.",
        answer: `Wartości domyślne dla typów prymitywnych w Javie:

          boolean: false
          byte: 0
          short: 0
          int: 0
          long: 0L
          float: 0.0f
          double: 0.0d
          char: '\u0000' (znak pusty)
          Wartości domyślne dla klas opakowujących (wrappery) typów prymitywnych w Javie:

          Boolean: null
          Byte: null
          Short: null
          Integer: null
          Long: null
          Float: null
          Double: null
          Character: null
          Wartości domyślne dla klas opakowujących są równoważne wartościom null, ponieważ są to obiekty i domyślnie nie są zainicjowane. W przeciwieństwie do typów prymitywnych, które mają określone wartości domyślne, opakowujące klasy typów prymitywnych są obiektami i muszą być jawnie zainicjowane przed użyciem, aby uniknąć błędów NullPointerException.`,
      },
      {
        question: "Czym jest Polimorfizm?",
        answer:
          "Polimorfizm jest jednym z podstawowych konceptów programowania obiektowego, który umożliwia wykonywanie różnych działań na różnych typach obiektów za pomocą tych samych interfejsów lub metod. Termin 'polimorfizm' pochodzi z greki i oznacza 'Polimorfizm podtypów (subtype polymorphism): Jest to rodzaj polimorfizmu, w którym obiekt klasy potomnej może być używany tam, gdzie oczekiwany jest obiekt klasy bazowej. Oznacza to, że obiekty klas potomnych mogą być traktowane jako obiekty klas bazowych. Mechanizm ten umożliwia tworzenie hierarchii klas, gdzie klasy potomne dziedziczą zachowanie i właściwości po klasach bazowych, ale mogą też definiować swoje własne specyficzne zachowania.Polimorfizm parametryczny (parametric polymorphism): Jest to rodzaj polimorfizmu, w którym kod może być parametryzowany przez typy danych. Oznacza to, że metody lub klasy mogą być zdefiniowane w sposób ogólny dla wielu typów danych. Na przykład, generyki w Javie umożliwiają tworzenie ogólnych klas lub metod, które mogą być używane z różnymi typami danych.iele form'Polimorfizm podtypów (subtype polymorphism): Jest to rodzaj polimorfizmu, w którym obiekt klasy potomnej może być używany tam, gdzie oczekiwany jest obiekt klasy bazowej. Oznacza to, że obiekty klas potomnych mogą być traktowane jako obiekty klas bazowych. Mechanizm ten umożliwia tworzenie hierarchii klas, gdzie klasy potomne dziedziczą zachowanie i właściwości po klasach bazowych, ale mogą też definiować swoje własne specyficzne zachowania.Polimorfizm parametryczny (parametric polymorphism): Jest to rodzaj polimorfizmu, w którym kod może być parametryzowany przez typy danych. Oznacza to, że metody lub klasy mogą być zdefiniowane w sposób ogólny dla wielu typów danych. Na przykład, generyki w Javie umożliwiają tworzenie ogólnych klas lub metod, które mogą być używane z różnymi typami danych. każdy obiekt klasy rozszerzanej może być traktowany jako obiekt klasy nadrzednej ze względu na to, że jedna z tych klas dziedziczy (rozszerza) drugą klasę.",
      },
      {
        question: "Co to znaczy, że Java jest językiem obiektowym?",
        answer:
          "Obiekty: W Javie wszystko jest traktowane jako obiekt. Obiekty są instancjami klas, które zawierają dane (zmienne instancyjne) i metody (funkcje).Kapsułkowanie: Mechanizm kapsułkowania umożliwia ukrywanie danych i implementacji szczegółów obiektów, co zapewnia lepszą kontrolę nad dostępem do nich i zmniejsza zależności między różnymi częściami programu.Dziedziczenie: Dziedziczenie pozwala na tworzenie nowych klas (dziedziczących) na podstawie istniejących klas (bazowych lub rodziców), co umożliwia ponowne wykorzystanie kodu i tworzenie hierarchii klas.Polimorfizm: Polimorfizm pozwala na przypisanie różnych zachowań do metody w zależności od obiektu, który ją wywołuje. Możliwe jest zatem wykonywanie tych samych operacji na różnych typach obiektów.",
      },
      {
        question: "Czym są aplety?",
        answer:
          "są to programy napisane w Javie, które działająwewnątrz okna przeglądarki.",
      },
      {
        question: "Czym jest przeciążenie metod?",
        answer:
          "Pozwala to najprościej mówiąc na tworzenie metod o takich samych nazwach, ale różnych parametrach. Analogicznie nieprawidłowe jest utworzenie w jednej klasie dwóch metod o identycznej nazwie i przyjmującej takie same parametry, a także metody o takiej samej nazwie i parametrach, ale różniące się tylko zwracanym typem.",
      },
      {
        question: "Co robi @override?",
        answer: `adnotacja @Override jest używana do oznaczenia metody klasy podrzędnej, która przesłania (nadpisuje) metodę z klasy nadrzędnej. Jest to rodzaj kontroli kompilatora, który pomaga zapobiec przypadkowemu błędnemu przesłonięciu metody, gdyby podczas tworzenia nowej metody klasy podrzędnej nazwa lub sygnatura metody z klasy nadrzędnej zostałyby niepoprawnie wprowadzone.

          Używając @Override, kompilator sprawdzi, czy metoda w rzeczywistości przesłania inną metodę z klasy nadrzędnej. Jeśli nie, to kompilator zgłosi błąd kompilacji, co pozwoli programiście zauważyć i naprawić potencjalny błąd w kodzie. Ta adnotacja jest dobrym nawykiem programistycznym i pomaga w utrzymaniu czytelności oraz poprawności kodu.`,
      },
      {
        question: "Co to jest enkapsulacja?",
        answer: `
            Encapsulation (enkapsulacja) jest jednym z podstawowych konceptów programowania obiektowego, który polega na ukrywaniu wewnętrznej implementacji obiektów i udostępnianiu interfejsu do interakcji z nimi. Innymi słowy, enkapsulacja zapewnia hermetyzację danych i zachowań obiektów poprzez ukrywanie ich wewnątrz klasy oraz kontrolowanie dostępu do nich za pomocą modyfikatorów dostępu`,
      },
      {
        question: "Co to jest dziedziczenie?",
        answer:
          "Dziedziczenie to jeden z podstawowych konceptów programowania obiektowego, który umożliwia tworzenie nowych klas (nazywanych klasami pochodnymi lub podrzędnymi) na podstawie istniejących klas (nazywanych klasami bazowymi lub nadrzędnymi). Klasy podrzędne dziedziczą zachowanie (metody i pola) oraz cechy (metody, pola, interfejsy) swoich klas nadrzędnych, co umożliwia ponowne wykorzystanie kodu i tworzenie hierarchii klas.",
      },
      {
        question: "Co to jest abstrakcja i jak możemy ją osiągnąć w Javie?",
        answer: `
            Abstrakcja jest jednym z podstawowych pojęć w programowaniu obiektowym i odnosi się do procesu ukrywania szczegółów implementacji i prezentowania tylko istotnych cech obiektu. W Javie abstrakcję osiąga się za pomocą klas abstrakcyjnych i interfejsów.Klasy abstrakcyjne: Klasy abstrakcyjne są klasami, które nie mogą być bezpośrednio instancjonowane, ale mogą zawierać metody abstrakcyjne (bez implementacji) oraz metody konkretnych implementacji. Aby zdefiniować klasę abstrakcyjną w Javie, używamy słowa kluczowego abstract`,
      },
      {
        question: "Czym jest Java Virtual Machine (JVM)?",
        answer:
          "JVM jest maszyną wirtualną, która umożliwia uruchamianie kodu Javy na różnych platformach. Główne zadania JVM to tłumaczenie kodu bajtowego na kod maszynowy, zarządzanie pamięcią i zarządzanie wątkami. Jest uruchamiany, gdy trzeba wykonać program z kodem bajtowym. JVM kompiluje kod bajtowy na kod maszynowy przed uruchomieniem programu. Takie podejście pozwala uruchomić program napisany w Javie na dowolnym urządzeniu: komputerze, smartfonie, bankomacie, tosterze, a nawet na kartach kredytowych!",
      },
      {
        question:
          "Co to jest Garbage Collector w kontekście Javy i jakie jest jego zadanie?",
        answer:
          "Garbage Collector (GC) to mechanizm w Javie odpowiedzialny za automatyczne usuwanie niepotrzebnych obiektów z pamięci, co pozwala na zwolnienie zasobów i uniknięcie wycieków pamięci.",
      },
      {
        question: "Jaka jest różnica między klasą a obiektem w Javie?",
        answer:
          "Klasa to szablon lub opis, który definiuje strukturę i zachowanie obiektów. Obiekt natomiast jest instancją konkretnej klasy.",
      },
      {
        question:
          "Jakie są dostępne modyfikatory dostępu w Javie i jakie są ich znaczenia (np. public, private, protected, default)?",
        answer:
          "Dostępne modyfikatory dostępu to: public (dostęp z dowolnego miejsca), private (dostęp tylko w obrębie klasy), protected (dostęp w obrębie pakietu i klas dziedziczących), oraz domyślny (brak modyfikatora, dostęp w obrębie pakietu).",
      },
      {
        question: "Czy języka Java wspiera wielodziedziczenie?",
        answer:
          "Nie, język Java nie wspiera wielodziedziczenia w kontekście dziedziczenia klas. W Javie, klasa może dziedziczyć tylko po jednej klasie nadrzędnej (klasa bazowa). Jest to związane z zastosowaniem hierarchii dziedziczenia typu drzewa w języku Java, w którym każda klasa ma tylko jedną klasę nadrzędną. Jednak można osiągnąć podobne efekty wielodziedziczenia poprzez użycie interfejsów. Klasa w Javie może implementować wiele interfejsów, co umożliwia jej dziedziczenie zachowań z wielu źródeł. To podejście jest znane jako wielodziedziczenie interfejsów.",
      },
      {
        question: "Jaka jest różnica między JDK, JRE oraz JVM?",
        answer:
          "JVM (Java Virtual Machine) jest maszyną wirtualną, która wykonuje kod Java na różnych platformach sprzętowych. JRE (Java Runtime Environment) zawiera JVM oraz narzędzia potrzebne do uruchamiania aplikacji Java, natomiast JDK (Java Development Kit) jest kompletnym zestawem narzędzi do tworzenia aplikacji Java, zawierającym JRE, kompilator, debugger i inne narzędzia deweloperskie. JVM tłumaczy kod bajtowy Javy na kod maszynowy, co zapewnia przenośność aplikacji między różnymi platformami.",
      },
      {
        question:
          "Jakie są różnice między interfejsem a klasą abstrakcyjną w Javie i kiedy warto użyć jednego z tych elementów?",
        answer:
          "Interfejs definiuje zestaw metod, które implementujące klasy muszą dostarczyć. Klasa abstrakcyjna może zawierać implementacje metod oraz konstruktorów. Interfejsy pozwalają na wielokrotne dziedziczenie, a klasy abstrakcyjne nie.",
      },
      {
        question: "Co to jest Garbage Collector?",
        answer: `Garbage Collector to mechanizm w języku Java odpowiedzialny za automatyczne zarządzanie pamięcią poprzez usuwanie obiektów, które nie są już używane i nie mają referencji do nich. Jest to część JVM, która monitoruje i usuwa nieużywane obiekty w celu zwolnienia pamięci i zapobieżenia wyciekom pamięci. Garbage Collector odciąża programistów od konieczności ręcznego zarządzania pamięcią i pomaga w zapewnieniu stabilności i wydajności aplikacji Java poprzez optymalne wykorzystanie zasobów pamięciowych.`,
      },
      {
        question: "Jak działa Garbage Collector?",
        answer: `Garbage Collector (GC) automatycznie śledzi i usuwa nieużywane obiekty poprzez monitorowanie referencji do obiektów w programie, identyfikację tych, które nie mają referencji, i usuwanie ich z pamięci, co przyczynia się do optymalnego zarządzania pamięcią i zapobieżenia wyciekom pamięci.`,
      },
      {
        question: "W jakich przypadkach typy proste są niedopuszczalne?",
        answer: `
          Typy proste są niedopuszczalne w miejscach, gdzie wymagane są obiekty, ponieważ typy proste nie są obiektami i nie posiadają metod ani innych właściwości związanych z obiektami. Niektóre z takich miejsc to:
          
          Generiki: W kolekcjach generycznych, takich jak ArrayList lub HashMap, musisz używać obiektów, więc typy proste są niedopuszczalne. Na przykład, jeśli chcesz utworzyć listę liczb całkowitych, musisz użyć ArrayList<Integer> zamiast ArrayList<int>.
          Refleksja: W niektórych operacjach związanych z refleksją, takich jak uzyskiwanie informacji o typie (np. Class), wymagane są obiekty. Typy proste nie są wystarczające w tych przypadkach.
          Frameworki: W niektórych frameworkach lub bibliotekach, które operują na obiektach, typy proste mogą być niedopuszczalne. Na przykład, jeśli używasz biblioteki do serializacji danych, może ona wymagać, aby dane były obiektami, a nie typami prostymi.
          Wielowątkowość: W wielu operacjach związanych z wielowątkowością, takich jak synchronizacja, można korzystać tylko z obiektów jako monitorów, więc typy proste nie mogą być używane w tych przypadkach.`,
      },
      {
        question: "Jak działa Garbage Collector?",
        answer: `
          Wrappery typów prostych, nazywane również klasami opakowującymi, są klasami w języku Java, które służą do opakowywania typów prostych w obiekty. Każdy typ prosty ma odpowiadającą mu klasę opakowującą, która umożliwia traktowanie typów prostych jak obiektów i dostarcza dodatkowych funkcji oraz możliwości, takich jak operacje arytmetyczne, przekształcenia typów, i dostęp do metod pomocniczych.Korzystanie z klas opakowujących pozwala na bardziej elastyczne operowanie typami prostymi, zwłaszcza gdy są wymagane obiekty w miejscach, gdzie typy proste są niedopuszczalne. Ponadto klas opakowujących można używać do wykonywania różnych operacji na typach prostych, takich jak porównania, sortowania, czy korzystanie z kolekcji generycznych, które wymagają obiektów.`,
      },
      {
        question: "Co to są typy proste? Co to są typy prymitywne?",
        answer: `Typy proste, nazywane również typami prymitywnymi, są fundamentalnymi typami danych w języku Java, które reprezentują podstawowe wartości i nie są obiektami. W Javie istnieje osiem typów prostych:.boolean: Reprezentuje wartość logiczną true lub false.
          byte: Reprezentuje 8-bitową liczbę całkowitą ze znakiem.
          short: Reprezentuje 16-bitową liczbę całkowitą ze znakiem.
          int: Reprezentuje 32-bitową liczbę całkowitą ze znakiem.
          long: Reprezentuje 64-bitową liczbę całkowitą ze znakiem.
          float: Reprezentuje 32-bitową liczbę zmiennoprzecinkową.
          double: Reprezentuje 64-bitową liczbę zmiennoprzecinkową.
          char: Reprezentuje pojedynczy znak Unicode.
          Typy proste są niskopoziomowe i efektywne w użyciu, ponieważ zajmują stałą ilość pamięci i są bezpośrednio wspierane przez sprzęt komputera. W odróżnieniu od typów obiektowych, typy proste nie mają metod ani innych właściwości związanych z obiektami. Jednak mogą być używane wraz z klasami opakowującymi (np. Integer, Double), które umożliwiają traktowanie typów prostych jak obiekty i dostarczają dodatkowych funkcji, takich jak operacje arytmetyczne i metody pomocnicze.`,
      },
      {
        question:
          "Wymień najważniejsze zmiany w języku Java, które weszły w wersjach 8 – 17.?",
        answer: `
          Java 8: Wyrażenia lambda, interfejsy domyślne, strumienie (Streams), API Data i Czas (java.time).
          Java 9: Moduły, ulepszenia w JVM i JLink, drobne usprawnienia w języku.
          Java 10: Typy lokalne, ulepszenia w API kolekcji, klasa Optional.
          Java 11: Zmiany w systemie modułów, nowe metody w klasie String, zmniejszona kompilacja JIT.
          Java 12-17: Drobne ulepszenia, optymalizacje i dodatki, takie jak nowe metody API, ulepszenia w obsłudze ciągów znaków i kompilacji JIT.`,
      },
      {
        question: "Co to jest JIT?",
        answer: `JIT (Just-In-Time) jest mechanizmem używanym w środowisku wykonawczym, takim jak Java Virtual Machine (JVM), do optymalizacji wydajności kodu. Jest to rodzaj kompilacji wykonywanej w trakcie działania programu, która przekształca kod pośredni (tak zwany kod bajtowy w przypadku Javy) na kod maszynowy natywny dla konkretnej platformy sprzętowej. Dynamiczna optymalizacja: JIT analizuje kod programu w czasie wykonania i podejmuje decyzje o optymalizacji na podstawie rzeczywistego wykorzystania kodu.
          Selektywne optymalizacje: JIT może wykonywać optymalizacje tylko dla często wykorzystywanych fragmentów kodu, co pozwala na skupienie się na najbardziej krytycznych obszarach i oszczędność zasobów.
          Adaptacyjne podejście: JIT może dostosowywać strategie optymalizacji w zależności od zmieniającego się zachowania programu, takiego jak zmiana obciążenia lub typów danych.
          Dzięki JIT, programy napisane w językach takich jak Java mogą osiągać lepszą wydajność poprzez dynamiczną optymalizację kodu w trakcie działania, co pozwala na szybsze wykonanie operacji i efektywne wykorzystanie zasobów sprzętowych.`,
      },
      {
        question: "Jak działa Garbage Collector?",
        answer: `
          Opcje -Xmx i -Xms są używane w Javie do konfigurowania rozmiaru pamięci dostępnej dla maszyny wirtualnej Java (JVM). Xmx: Jest to flaga używana do ustawienia maksymalnego rozmiaru pamięci dostępnej dla JVM. Litera 'X' oznacza, że jest to flaga niestandardowa. Po fladze -Xmx podajemy wartość, która określa maksymalny rozmiar pamięci, jaki JVM może używać. Na przykład -Xmx2G oznacza, że maksymalna ilość pamięci wynosi 2 gigabajty.
          -Xms: Jest to flaga używana do ustawienia początkowego rozmiaru pamięci dostępnej dla JVM. Podobnie jak w przypadku -Xmx, litera 'X' oznacza, że jest to flaga niestandardowa. Po fladze -Xms podajemy wartość, która określa początkowy rozmiar pamięci dla JVM. Na przykład -Xms512M oznacza, że początkowy rozmiar pamięci wynosi 512 megabajtów.`,
      },
      {
        question: "Po co nam konstruktory?",
        answer:
          "Aby zapewnić, że obiekty zawsze mają prawidłowy stan Kiedy używasz konstruktorów, wszystkie twoje zmienne zostaną poprawnie zainicjowane. Konstruktory są potrzebne do ustawienia prawidłowego stanu obiektu. Metody mamy do biznesowej logiki. Nie mieszaj jednego z drugim.",
      },
      {
        question:
          "Co to są wyjątki (exceptions) w Javie i jak obsługiwać wyjątki w programie?",
        answer:
          "Wyjątki są sytuacjami wyjątkowymi, które mogą wystąpić podczas wykonywania programu. W Javie wyjątki są obsługiwane za pomocą bloków try-catch lub przekazywane wyżej za pomocą throws. Obsługa wyjątków pozwala na kontynuowanie działania programu w przypadku błędu..",
      },
      {
        question:
          "Co oznacza słowo kluczowe 'final' w Javie i gdzie można je stosować?",
        answer:
          "Słowo kluczowe 'final' oznacza, że element (np. zmienna, metoda, klasa) jest niemutowalny lub nieprzesłanialny. Można je stosować do zmiennych, metod i klas.",
      },
      {
        question:
          "Jakie są różnice między interfejsem Serializable a Externalizable w Javie?",
        answer:
          "Interfejs Serializable jest używany do oznaczenia obiektów, które mogą być serializowane (zapisywane i odczytywane z formatu bajtowego). Interfejs Externalizable umożliwia bardziej zaawansowaną kontrolę nad procesem serializacji.",
      },
      {
        question:
          "Jak działa mechanizm dziedziczenia w Javie i jak unikać problemów związanym z nadmiernym dziedziczeniem (tzw. diamond problem)?",
        answer:
          "Dziedziczenie w Javie pozwala na tworzenie nowych klas na podstawie istniejących klas. Diamond problem dotyczy konfliktów, które mogą wystąpić, gdy klasa dziedziczy po dwóch klasach, które mają metodę o tej samej nazwie. Problem ten można rozwiązać za pomocą interfejsów lub używając słowa kluczowego default (od Java 8).",
      },
      {
        question:
          "Co to jest lambda wyrażenie (lambda expression) i do czego służy w Javie?",
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
