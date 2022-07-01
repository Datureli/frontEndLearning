export default {
  namespaced: true,

  state: {
    javascriptQuestions: [
      {
        question: "Jak zadeklarować zmienną w javascript?",
        answer:
          "Aby zadeklarować zmienną, powinniśmy posłużyć się jednym ze słów kluczowych var,let lub const.Pod zmienne możemy podstawić dowolne wartości jakie będziemy chcieli.Zaleca się używanie let oraz const zamiast var.Dzięki nim nasze skrypty stają się bardziej optymalne pod względem zarządzania pamięcią, ale i potencjalnie unikamy niektórych problematycznych sytuacji.Zmienne o takiej samej nazwie,ale utworzone przy pomocy różnej wielkości liter to dwie różne zmienne.Nazwa zmiennej nie może zaczynać się od cyfry,nie może zawierać spacji,kropki, przecinka ani myślnika (można natomiast używać podkreślenia),nazwą zmiennej nie może być słowo kluczowe zarezerwowane przez JavaScript",
      },
      {
        question: "Czym jest grid?",
        answer:
          "Grid to struktura, która pozwala na umieszczanie zawartości zarówno pionowo, jak i poziomo, w spójny i łatwy w zarządzaniu sposób. Grid obejmują dwa kluczowe elementy: wiersze i kolumny.Pozwala nam na układanie treści tak, by była ona czytelna dla użytkownika. Dzięki takim zabiegom, strona posiada bardziej estetyczny wygląd, jest przejrzysta i bardziej przyjazna dla użytkownika.",
      },
      {
        question: "Czym jest debugowanie?",
        answer:
          "Termin debugowanie może oznaczać wiele różnych rzeczy, ale najbardziej dosłownie oznacza usuwanie usterek z kodu. Teraz istnieje wiele sposobów, aby to zrobić. Na przykład możesz debugować, skanując kod w celu szukania literówek lub używając analizatora kodu. Kod można debugować przy użyciu profilera wydajności. Możesz też debugować za pomocą debugera. Debuger to bardzo wyspecjalizowane narzędzie dewelopera, które jest dołączane do uruchomionej aplikacji i umożliwia sprawdzanie kodu.",
      },
      {
        question: "Jak działa słowo kluczowe new?",
        answer:
          "Operator new tworzy nową instancję typu obiektu zdenifiowanego przez użytkownika lub instancję wbudowanego typu obiektu, który posiada konstruktor.",
      },
      {
        question: "Czym jest konstruktor?",
        answer:
          "Konstruktor jest szczególną metodą, która służy tworzeniu i inicjalizowaniu obiektu zdefiniowanego słowem kluczowym class.Dozwolony jest tylko jeden konstruktor w danej klasie.Jeśli klasa posiada więcej niż jedno wystąpienie metody constructor, wygenerowany zostanie błąd SyntaxError.Aby wywołać konstruktor klasy bazowej, należy użyć słowa kluczowego super",
      },
      {
        question: "Czym jest metoda GET?",
        answer:
          "Metoda GET służy do pobierania danych z interfejsu API. Chcemy, aby to żądanie API działało asynchronicznie, dlatego używamy funkcji opartej na obietnicy ze słowami kluczowymi async/await.",
      },
      {
        question: "Różnica między deklaracją funkcji a deklaracją klasy?",
        answer:
          "Ważną różnicą pomiędzy deklaracją funkcji a deklaracją klasy jest to, że deklaracje funkcji są przenoszone na początek (Hoisting) a klas nie. Najpierw musisz zadeklarować swoją klasę, by mieć do niej dostęp.",
      },
      {
        question: "Czym jest super w javascript?",
        answer:
          "Słowo kluczowe super jest wykorzystywane do udostępniania i korzystania z funkcji klasy po której nasz obiekt dziedziczy.",
      },
      {
        question: "Czym jest instrukcja try w api call?",
        answer:
          "instrukcja try pozwala zdefiniować blok kodu, który ma być testowany pod kątem błędów podczas wykonywania.Instrukcja catch umożliwia zdefiniowanie bloku kodu, który ma zostać wykonany, jeśli w bloku try wystąpi błąd.try służy do sprawdzania błędów, podczas gdy catch służy do obsługi błędu, jeśli taki wystąpi.",
      },
      {
        question: "Czym jest funkcja some()?",
        answer:
          "Metoda some() zwróci prawdę, jeżeli chociaż dla jednego elementu użyta funkcja zwróci prawdę.",
      },
      {
        question: "Czym jest funkcja reduce?",
        answer:
          "Dzięki reduce możemy wykonywać operacje na tablicy redukując ją, w wyniku uzyskując jakiś wynik.Funkcja robi iterację po tablicy.W pierwszej iteracji pod pierwszy parametr wstawiany jest pierwszy element tablicy, a pod drugi kolejny.Funkcja zwraca jakiś wynik. W kolejnej iteracji podstawiany jest on pod pierwszy parametr, a do drugiego parametru trafia kolejny element w tablicy.",
      },
      {
        question: "Czym jest funkcja map()?",
        answer:
          "Metoda map() robi pętlę po tablicy i każdorazowo zwraca nowy element tablicy.W wyniku po zakończeniu całej pętli zwracana jest nowa tablica z taką samą liczbą elementów:.",
      },
      {
        question: "Czym są getery i setery",
        answer:
          "Get używasz do pobierania wartości, a set do przypisania wartości. ",
      },
      {
        question: "Czym są domknięcia?",
        answer:
          "domknięcia są to funkcje, które mają dostęp do środowiska, w którym zostały zdefiniowane.",
      },
      {
        question: "Czym są metody?",
        answer:
          "Metody JavaScript to akcje, które można wykonywać na obiektach. Metodą obiektu nazywamy właściwość zawierającą definicję funkcji (inaczej: metoda to funkcja przechowywana jako właściwość obiektu).",
      },
      {
        question: "Czym jest obiekt w javascript?",
        answer:
          "Obiekty JavaScript to kontenery dla nazwanych wartości, zwanych właściwościami i metodami. W JS prawie wszystko jest obiektem:Obiekty są zmiennymi, ale mogą zawierać wiele wartości. Wartości są zapisywane jako pary nazwa: wartość (nazwa i wartość oddzielone dwukropkiem). Pary te oddziela przecinek.",
      },
      {
        question: "Jak możemy tworzyć obiekty w javascript?",
        answer:
          "W JavaScript obiekty można tworzyć na 3 różne sposoby: poprzez inicjalizator obiektu (literał obiektywy, fabrykę (ang. factory function) oraz funkcje konstruujące (ang. constructor functions).",
      },
      {
        question:
          "Czy JavaScript wspiera dziedziczenie? Jeżeli tak, to w jaki sposób?",
        answer:
          "JavaScript w przeciwieństwie do wielu innych języków, np. Javy nie ma dedykowanego mechanizmu dla klas.W JS wszystko jest obiektem, nawet funkcje.W efekcie czego można zaimplementować mechanizm dziedziczenia, opierając się na prototypach.",
      },
      {
        question: "Czym jest endpoint?",
        answer:
          "to unikalny adres URL, który wywołujesz w celu interakcji z innym systemem.",
      },
      {
        question: "Co w javascript nie jest obiektem?",
        answer:
          "Wszystkie wartości JavaScript, z wyjątkiem prymitywów, są obiektami.Prymitywna wartość jest to wartość, która ma właściwości lub metody. Prymitywny typ danych to dane, które posiadają pierwotną wartość.  JavaScript definiuje 5 typów prymitywnych typów danych:",
      },
      {
        question: "Jaka jest różnica między var,let a const?",
        answer:
          "Pierwsza i najważniejsza różnica między let/const a var to zasięg zmiennych.W przypadku let/const zmienne mają zasięg blokowy, co w skrócie oznacza od klamry do klamry.Zmienne deklarowane za pomocą var mają natomiast zasięg funkcyjny, czyli ich zasięg określa ciało funkcji.Ostatnią różnicą jest to, że deklarując zmienną globalną var (poza ciałem funkcji),dodawana jest ona jako właściwość obiektu window.W przypadku let nic takiego się nie dzieje",
      },
      {
        question: "Czym jest temporal dead zone?",
        answer:
          "Miejsce przed deklaracją zmiennej let/const zwie się temporal dead zone, bo nie możemy odwoływać się do zmiennej, której jeszcze nie zadeklarowaliśmy.Dzięki takiemu zabiegowi nasz kod staje się bardziej logiczny",
      },
      {
        question: "Czym jest prototyp?",
        answer:
          "Gdy tworzysz pojedynczy obiekt jakiegoś typu, dostaje on właściwość [[Prototype]], która wskazuje na jego obiekt prototyp. Na ten sam obiekt wskazuje też właściwość prototype w konstruktorze danego typu. Zasada ta tyczy się każdego typu danych:",
      },
      {
        question: "Czym jest Hoisting??",
        answer:
          "To wbudowany w JavaScript mechanizm wynoszący deklarację zmiennych bez ich inicjowania na początek funkcji.JavaScript lubi pomagać programiście. I tak na początek kodu wynoszone są deklaracje takie jak var / let/ const / function / class. Różnica jest w sposobie takiego wynoszenia.",
      },
      {
        question: "opisz inkrementacje i dekrementacje",
        answer:
          "Operatory inkrementacji i dekrementacji, mogą występować przed zmienną lub po zmiennej.Gdy występuje przed zmienną, zwiększenie jej wartości nastąpi w danej instrukcji. Jeżeli występuje po zmiennej, zwiększona wartość wystąpi dopiero w kolejnej instrukcji",
      },
      {
        question: "Opisz operatory porównania",
        answer:
          "Operatory logiczne stosuje się w instrukcjach warunkowych. Służą one do porównywania lewej strony równania do prawej, w wyniku której zawsze zwracana jest true/false.",
      },
      {
        question: "Opisz warunki if,else-if or else",
        answer:
          "instrukcja if wykonuje dany kod tylko w przypadku, gdy w nawiasach wynikiem będzie prawda.Przy każdej instrukcji if (w tym else if) musimy podać warunek, natomiast else zawsze jest bez warunku.",
      },
      {
        question: "Czym jest ternary operator?",
        answer:
          "Operator warunkowy (tak zwany ternary operator), to tak naprawdę skrócona wersja warunku if:",
      },
      {
        question: "Jaka jest różnica między map a forEach?",
        answer:
          "W teori efekt działania jest taki sam.Map zwraca nam nową tablice natomiast forEach zwraca undefined.Map jest o wiele szybszy niż forEach(60%)",
      },
      {
        question: "Jak wyczyścić tablice?",
        answer:
          "Można to zrobić na wiele sposobów, zerując jej długość: arrayList.length = 0;. Możliwe jest także użycie arrayList = [], co sprawi, że wartością zmiennej arrayList będzie nowy obiekt Array. Należy tu jednak pamiętać, że drugą metodę można stosować tylko wtedy, gdy do pierwszego obiektu Array nie ma w kodzie żadnych referencji.",
      },
      {
        question: "Czym jest instrukcja switch?",
        answer: `Instrukcja switch jest kolejnym sposobem tworzenia warunków - tym razem na zasadzie przyrównania wyniku do konkretnych wartości.Każdy przypadek kończy się słowem break, które kończy wykonywanie instrukcji switch.Jeżeli pominiemy to słowo, wtedy nawet przy pomyślnym przyrównaniu zostaną wykonane kolejne sprawdzenia, co często może powodować błędy.Dodatkowo instrukcja switch ma specjalny przypadek default który będzie wybierany, gdy wszystkie inne przypadki będą błędne (odpowiednik else w instrukcji if).Warto zaznaczyć, że instrukcja switch nie służy do testowania warunków, a do przyrównywania zmiennej do wartości:`,
      },
      {
        question: "Omów pętle for",
        answer: `pętla for jest typowo "manualna". Trzeba ustawić licznik, kiedy ma się zakończyć i jak ma być zwiększany. Dodatkowo ręcznie trzeba się odwoływać do danego elementu w tablicy.`,
      },
      {
        question: "Czym jest dependency injection?",
        answer: `to wzorzec projektowy polegający na tym, że obiekt nie inicjalizuje swoich zależności sam, tylko przyjmuje je z zewnątrz poprzez tzw. „wstrzykiwanie”. Główną zaletą takiego podejścia jest między innymi łatwiejsze pisanie testów jednostkowych. Użycie DI może również sprawić, że nasze obiekty będą ze sobą luźniej powiązane (ang. loose coupling).`,
      },
      {
        question: "Jak działa pętle while",
        answer:
          "W pętli tego typu nie definiujemy ani początkowego licznika, ani nie definiujemy zmiany licznika.Musimy te rzeczy zrobić ręcznie.Pętlę while zazwyczaj stosuje się w sytuacjach, kiedy nie wiemy dokładnie, ile iteracji ma się wykonać.Wyobraź sobie, że chcesz wygenerować unikalny numer ID albo jakąś liczbę.Generujesz więc daną rzecz, następnie sprawdzasz czy wynik pasuje do założeń. Jak nie pasuje, generujesz dalej. I tak do skutku aż trafisz.",
      },
      {
        question: "Opisz typy danych w javascript",
        answer:
          "Dane możemy podzielić na typy proste(prymitywne) oraz złożone.Do typów prymitywnych zaliczamy:Number,string,bigInt,boolean,undefined,null,symbol a do złożonych:Object (w tym Array, Map i Set).Kolejną charakterystyczną cechą rozróżniającą typy prymitywne od obiektów jest to, że te pierwsze w przeciwieństwie do obiektów są niemutowalne.Mutowalnymi określamy takie dane, którym w czasie ich istnienia możemy zmieniać części składowe:",
      },

      {
        question: "Wyjaśnij funkcję parseInt",
        answer:
          "Możesz zamienić String na liczbę całkowitą używając wbudowanej funkcji parseInt(). Funkcja ta przyjmuje podstawę do konwersji jako opcjonalny drugi argument, który zawsze należy podawać:",
      },
      {
        question: "Jak działa fetch api?",
        answer:
          "Najpierw określamy ścieżkę (Fetch), po drugie żądamy danych z serwera (Request), po trzecie określamy typ treści (Body) i wreszcie uzyskujemy dostęp do danych (Response).",
      },

      {
        question: "Czym jest tag time?",
        answer:
          "Time określa czytelną dla człowieka datę oraz godzinę. Można go również używać do kodowania daty i godziny w sposób możliwy do odczytu maszynowego, dzięki czemu przeglądarki mogą oferować dodawanie przypomnień do kalendarza.time pozwala również wyszukiwarkom na generowanie inteligentniejszych wyników wyszukiwania.",
      },
      {
        question: "Jak dodać element do tablicy?",
        answer:
          "by dodać do tablicy element na jej końcu, możemy użyć metody push(element1, element2, ...).Drugą metodą jest po prostu ustawianie elementu na danym indeksie:",
      },
      {
        question: "Czym jest debouncing?",
        answer:
          "Debouncing to metoda, w której funkcja nie może zostać uruchomiona, dopóki nie upłynie określony czas bez wywołania tej funkcji. ",
      },
      {
        question: "Jakie są różnice pomiędzy keypress,keydown i keyup",
        answer:
          "by dodać do tablicy element na jej końcu, możemy użyć metody push(element1, element2, ...).Drugą metodą jest po prostu ustawianie elementu na danym indeksie:",
      },
      {
        question: "Jak sprawdzić czy zmienna jest tablicą?",
        answer: `Żeby sprawdzić czy dana zmienna jest tablicą, powinniśmy skorzystać z metody Array.isArray(). Wynika to z faktu, że tablice w Javascript także są obiektami i typeof zwraca nam "object"`,
      },
      {
        question: "Opisz działanie setTimeout",
        answer: `Wywołuje funkcję po określonym czasie opóźnienia.setTimeout oczekuje dwóch argumentów, jednej referencji do funkcji wywołania zwrotnego oraz opóźnienia w milisekundach. setTimeout może również akceptować argumenty po opóźnieniu, a dodatkowe wartości zostaną przekazane do funkcji wywołania zwrotnego. Timer można wyłączyć przy użyciu metody clearTimeout.`,
      },
      {
        question: "Do czego służy setInterval?",
        answer:
          "Ustawia opóźnienie do cyklicznego wywoływania określonej funkcji.Możliwe jest anulowanie wykonania fukcji poprzez wywołanie window.clearInterval().Jeżeli funkcja ma zostać wykonana tylko raz a nie być wykonywana cyklicznie to należy skorzystać z  window.setTimeout().",
      },
      {
        question: "Opisz pętle forEach",
        answer:
          "Wykonuje dostarczoną funkcję jeden raz na każdy element tablicy.Funkcja callback wywoływana jest jedynie dla indeksów tablicy, którym została przypisana wartość; nie jest wywoływana dla indeksów, które zostały usunięte i tych, którym nigdy nie została przypisana żadna wartość.Funkcja callback jest wywoływana z trzema argumentami: wartością elementu, jego indeksem i obiektem tablicy, w którym się ten element zawiera.",
      },
      {
        question: "Do czego służy array.indexOf?",
        answer:
          "Zwraca pierwszy,najmniejszy indeks elementu w tablicy równego podanej wartości lub -1, gdy nie znaleziono takiego elementu.",
      },
      {
        question: "Jaka jest różnica między null a undefined?",
        answer:
          "undefined – coś nie zostało zainicjalizowane, null – coś jest aktualnie niedostępne.W JavaScript undefined oznacza, że zmienna została zadeklarowana ale jeszcze nie ma żadnej przypisanej wartości.Null może być reprezentowane jako wartość, bezwartości, inaczej mówiąc możemy przypisać do zmiennej temp pudełko z cyferką 5, albo samo pudełko, samo pudełko jest nullem.Pomimo tego, że operator typeof zwraca nam typ object, zmienna z wartością null nic nie reprezentuje.to że null zwraca typ object jest błędem z czasów powstawania języka.Gdy trafimy na błąd związany z undefined w konsoli przeglądarki będziemy wiedzieć, że o czymś zapomnieliśmy, odwołujemy się do czegoś co nie istnieje.Wartość null i undefined reprezentują puste, nieokreślone wartości. Jeżeli porównamy oba typy przez potrójny znak równości i wypiszemy do konsoli, zobaczymy wartość false",
      },
      {
        question: "Co to są funkcje?",
        answer:
          "Funkcja anonimowa to taka funkcja, która nie ma swojej nazwy. Funkcje takie wykorzystywane są jako funkcje zwrotne, które przekazujemy do innych funkcji.",
      },
      {
        question:
          "Czym jest podwójny wykrzyknik w javascript?(double exclamation mark)",
        answer:
          "Jest to skrócona wersja sprawdzenia czy zmienna to Boolean(true albo false)",
      },
      {
        question: "Czym jest IIFE?",
        answer:
          "Immediately Invoked Function Expression — Funkcja natychmiastowa jest wywoływana automatycznie bezpośrednio po jej odczytaniu.Uzyskujemy ją przez deklarację funkcji anonimowej (bez nazwy) w nawiasach okrągłych, przez co taka konstrukcja jest traktowana jako wyrażenie. Po wyrażeniu dodajemy kolejne dwa nawiasy, przez co jest ono automatycznie wywoływane.Dzięki wykorzystaniu funkcji natychmiastowych ograniczamy zakres (scope) zmiennych tylko do tej metody.Zmniejsza to tym samym potencjalne konflikty z innymi bibliotekami.",
      },
      {
        question: "Co to jest “callback hell” i jak można się go pozbyć?",
        answer:
          "Piekło wywołań objawia się wtedy, gdy mamy do czynienia z kaskadowym wywołaniem funkcji zwrotnych. Prowadzi ono do kodu trudnego w zrozumieniu i debugowaniu. Jest kilka technik, które pomagają w opanowaniu piekła wywołań. Samo wyłączenie callbacków jako osobne funkcji może być pomocne, jednak chyba najciekawsze są rozwiązania później dodane do JS - obietnice i async/await.",
      },
      {
        question: "Czym jest operator …?          ",
        answer:
          "Operator … to tzw. operator rozwinięcia. Dzięki niemu możliwe jest rozwinięcie ciągu znaków w przypadkach, kiedy wiadomo, że będzie tam zero lub więcej argumentów dla funkcji, lub elementów dla literałów tablicowych. Można w ten sposób łatwo kopiować istniejącą już tablicę lub obiekt w inne tablice lub obiekty. Odwrotnością spread operatora jest operator rest, dzięki któremu jedna funkcja może przyjąć wiele argumentów, a tablice lub obiekty zostać scalone w jeden.",
      },
      {
        question: "Czym są async/await?",
        answer:
          "Obydwa słowa kluczowe wiążą się z obietnicami. Pierwsze z nich - async - wstawione przed deklaracją funkcji sprawi, że taka funkcja zwróci obietnicę. Drugie z nich - await - może wystąpić tylko wewnątrz funkcji poprzedzonej przez async i powinno się znaleźć przed wykonaniem funkcji asynchronicznej. Sprawi, że wykonanie nie przejdzie dalej, dopóki obietnica nie zostanie wykonana. Dzięki temu asynchroniczny kod przypomina swoim zachowaniem kod synchroniczny.",
      },
      {
        question: "Czym są async/await?",
        answer:
          "Obydwa słowa kluczowe wiążą się z obietnicami.Async - wstawione przed deklaracją funkcji sprawi, że taka funkcja zwróci obietnicę.Await może wystąpić tylko wewnątrz funkcji poprzedzonej przez async i powinno się znaleźć przed wykonaniem funkcji asynchronicznej. Sprawi, że wykonanie nie przejdzie dalej, dopóki obietnica nie zostanie wykonana. Dzięki temu asynchroniczny kod przypomina swoim zachowaniem kod synchroniczny.",
      },
      {
        question: "Czym jest currying i w jakich sytuacjach się go stosuje?",
        answer:
          "Currying to technika pracy z funkcjami, polegająca na ich transformacji w następujący sposób: f(a, b, c) do f(a)(b)(c). Dzięki temu de facto rozbija funkcję mającą wiele parametrów do wielu funkcji mającej po jednym parametrze.",
      },
      {
        question: "Czym jest Rest api?",
        answer:
          "Interfejs API, czyli aplikacyjny interfejs programistyczny, jest zestawem reguł definiujących sposób, w jaki aplikacje lub urządzenia mogą się ze sobą łączyć i komunikować. Interfejs API REST to interfejs API zgodny z zasadami projektowania REST, czyli stylem architektury representational state transfer.",
      },
      {
        question: "czym jest funkcja wyższego rzędu?",
        answer:
          "Funkcja wyższego rzędu to funkcja, która przyjmuje inne funkcje jako parametry lub też taka, której wynik również jest funkcją. Przykładowa funkcja wyższego rzędu to map służąca do zwracania listy z wynikami funkcji dla wszystkich elementów z danej listy.",
      },
      {
        question: "Jakie są zasady korzystania z rest api?",
        answer:
          "Wszystkie żądania wysyłane do interfejsu API dotyczące tego samego zasobu powinny wyglądać tak samo.Interfejs API REST powinien zapewniać przypisanie jednego elementu danych, takiego jak nazwa lub adres e-mail użytkownika, do jednego identyfikatora URl.Rozdzielenie klienta i serwera - Podczas projektowania interfejsu API REST aplikacje klienta i serwera muszą być całkowicie niezależne od siebie. Aplikacja kliencka powinna dysponować wyłącznie informacją o identyfikatorze URI żądanego zasobu. Nie może ona wchodzić w interakcje z aplikacją serwera w żaden inny sposób. Podobnie aplikacja serwera nie powinna modyfikować aplikacji klienckiej, a jedynie przekazywać jej żądane dane za pośrednictwem protokołu HTTP.",
        secondAnswer:
          "Bezstanowość. Interfejsy API REST są bezstanowe. To oznacza, że każde żądanie musi zawierać wszystkie informacje niezbędne do jego przetworzenia. Innymi słowy, interfejsy API REST nie wymagają żadnych sesji po stronie serwera. Aplikacje serwera nie mogą przechowywać żadnych danych związanych z żądaniem klienta.Możliwość buforowania. Gdy to możliwe, powinna być dostępna opcja buforowania zasobów po stronie klienta lub serwera. Odpowiedzi serwera muszą również zawierać informację o tym, czy buforowanie dostarczonego zasobu jest dozwolone. Celem jest zwiększenie wydajności po stronie klienta przy jednoczesnym zwiększeniu skalowalności po stronie serwera.",
        thirdPartOfAnswer:
          "Warstwowa architektura systemu. W interfejsach API REST wywołania i odpowiedzi przechodzą przez różne warstwy. Z reguły nie należy zakładać, że aplikacje klienta i serwera łączą się ze sobą bezpośrednio. Pętla komunikacyjna może obejmować pewną liczbę elementów pośredniczących. Interfejsy API REST muszą być zaprojektowane w taki sposób, aby ani klient, ani serwer nie miał informacji o tym, czy komunikuje się z aplikacją końcową, czy elementem pośredniczącym.Kod na żądanie (opcjonalnie). Interfejsy API REST zwykle wysyłają zasoby statyczne, ale w niektórych przypadkach odpowiedzi mogą również zawierać kod wykonywalny (np. aplety Java). W takich przypadkach kod powinien być uruchamiany tylko na żądanie.",
      },
      {
        question:
          "Jakie są zalety i wady rozszerzania wbudowanych obiektów JavaScript?",
        answer:
          "Rozszerzanie wbudowanych obiektów uważane jest złą praktykę. W ten sposób zmieniamy zachowanie obiektów. I o ile mowa o obiekcie, z którego będzie działał tylko konkretny kod, to problem nie jest duży, ale w przypadku zewnętrznego kodu, który wykorzysta rozszerzony obiekt, nic nie będzie działać. Dobrą praktyką jest korzystanie ze wbudowanych metod. Dodawanie własnych metod do obiektów może być problematyczne także ze względu na interferencje z bibliotekami, które same mogą rozszerzać obiekty o te same metody. Wówczas dojdzie do konfliktu, nadpisania, i kod po prostu nie będzie działał. Zaletą rozszerzania wbudowanych typów może być natomiast to, że można zbudować w ten sposób polyfill, przez co kod będzie działał również na starszym oprogramowaniu, przeglądarkach nieobsługujących nowszych wersji JavaScript.",
      },
      {
        question: "Czym jest obietnica(promise)?",
        answer:
          "Obiekty Promise zostały wprowadzone od ECMAScript 6 jako natywne wsparcie dla operacji asynchronicznych Są tak nazwane, bo wykonywana funkcja asynchroniczna musi złożyć obietnicę dostarczenia w przyszłości wartości. Przetwarzanie metody asynchronicznej może zakończyć się powodzeniem – wtedy wywołujemy metodę resolve() lub porażką – wtedy metodę reject();Na obiekcie Promise zwróconym przez metodę możemy wywołać dwie metody:then  odpowiedzialną za przetwarzanie udanego wywołania;  catch odpowiedzialną za obsługę błędów.",
      },
      {
        question: "Czym jest pętla zdarzeń",
        answer:
          "Pętla zdarzeń to mechanizm, który umożliwia asynchroniczne wykonanie, mimo, że JavaScript jest jednowątkowy. Właściwa praca wykonuje się w stosie wywołań, tam funkcje JS są wykonywane. Wiadomość o tym co powinno zostać przetworzone nie ląduje jednak samoczynnie na stosie wywołań. Najpierw te wiadomości trafiają do kolejki, gdzie umieszcza je środowisko uruchomieniowe. Pętla zdarzeń natomiast ciągle nasłuchuje nowych wiadomości w kolejce i wysyła je do stosu wywołań, jeżeli tylko stos jest wolny. Taka implementacja mogłaby sprawiać spore problemy, jeżeli stos wywołań zostałby zablokowany przez czekanie na zasoby, jednak praktycznie wszystkie operacje I/O w JS są nieblokujące (z wyjątkiem kilku wywołań).",
      },
      {
        question: "Czym jest funkcja anonimowa?",
        answer:
          "Funkcja anonimowa to po prostu funkcja bez nazwy,używając wyrażenia funkcyjnego nie musimy nadawać nazwy po słowie function.",
      },
      {
        question: "Do czego służy dyrektywa „use strict”?",
        answer:
          "Dyrektywa use strict pozwala przełączyć silnik JavaScript w strict mode. W efekcie czego parser JS jest dużo bardziej rygorystyczny i zgłosi błędy, które bez tej dyrektywy są ignorowane.Dyrektywę można dodać na początku funkcji lub całego pliku *.js",
      },
      {
        question: "Jak działa Math.floor?",
        answer:
          "zwraca największą liczbę całkowitą mniejszą lub równą podanej liczbie.",
      },
      {
        question: "Jak działa JSON.parse",
        answer:
          "Przekształca tekst w formacie JSON na wartości proste i obiekty obsługiwane przez JavaScript. JSON jest specjalnym formatem zapisu różnych danych o typach występujących w języku JavaScript, ale z dodatkowymi ograniczeniami. Polegają one m.in. na tym, że wszystkie wartości tekstowe - w tym klucze obiektów - muszą być ujęte w znaki cudzysłowu, a nie apostrofy. Dane muszą być zapisane wprost przy pomocy literałów, a nie z użyciem operatora new oraz tworzone w całości za jednym razem bez używania zmiennych pomocniczych. Ponadto w formacie JSON można zapisać tylko następujące typy danych: Object, Array, String, Boolean, Number, Null.",
      },
      {
        question: "Jak działa Math.random?",
        answer: "zwraca wartość pseudolosową z przedziału 0 - 1",
      },
      {
        question: "W jakich przypadkach nie powinno używać się map?",
        answer:
          "Map zwraca nam nową tablice,jeżeli nie potrzebujemy nowej tablicy to lepiej użyć forEach.Nieużywana tablica będzie zajmować miejsce w naszej pamięci.",
      },
      {
        question: "operator ...(trzech kropek)?",
        answer:
          " Zbiera on do tablicy o podanej nazwie wszystkie pozostałe przekazane do funkcji argumenty, które nie zostały wymienione przed nim możemy zapomnieć o obiekcie arguments i jego ograniczeniach.Spread również zapisywany jest w postaci trzech kropek ..., lecz nie jako przedrostek do ostatniego argumentu w deklaracji funkcji, a jako przedrostek do jakiejkolwiek tablicy. Jego zadaniem jest 'rozbić' tablicę na listę jej elementów. Brzmi to banalnie ale ma to olbrzymią liczbę zastosowań, z których kilka przedstawiam poniżej.",
      },
      {
        question: "normalizacja danych w javascript",
        answer:
          "Proces normalizacji jest intensywnie wykorzystywany w każdym projekcie oprogramowania, ponieważ normalizacja danych ma duży wpływ na zmniejszenie redundancji danych.Dzięki niej zamiast zapętlać tablice,możemy uzyskać dostęp do obiektu poprzez wybrane id",
      },
      {
        question: "czym jest redundancja danych?",
        answer:
          "Redundancja (łac. redundantia „powódź, nadmiar, zbytek”) – nadmiarowość w stosunku do tego, co konieczne lub zwykłe. Określenie może odnosić się zarówno do nadmiaru zbędnego lub szkodliwego, niecelowo zużywającego zasoby, jak i do pożądanego zabezpieczenia na wypadek uszkodzenia części systemu.",
      },
      {
        question: "Czym jest transpilacja?",
        answer:
          "Transpilacja to proces konwersji kodu ES6 do wariantu ES5. Jest to technika, która z jednej strony umożliwia nam pisanie nowoczesnego kodu ES6 a z drugiej sprawia, że nasze aplikacje mogą być uruchamiane np. w starszych przeglądarkach, które tego najnowszego standardu JavaScript nie obsługują.",
      },
      {
        question: "Czym jest typ bigINt?",
        answer:
          "Typ ten powstał po to aby operować na bardzo dużych liczbach, z którymi nie radzi sobie typ number. Mowa tu o liczbach większych niż 2^53. Wtedy typ number traci swoją precyzję i dlatego powstał typ bigint.deklaruje się go używając litery n na końcu liczby:",
      },
      {
        question: "Co nowego pojawiło się es6?",
        answer:
          "Klasy definiowane za pomocą Class,Zmienne let oraz const oraz nowe podejście do zakresu (scope) zmiennych.Łańcuchy szablonowe plus możliwość tworzenia np. wieloliniowych String,Przypisywanie wartości z użyciem Destructuring,Mechanizm Promises zapewniający nowe podejście do programowanie asynchronicznego,Arrow functions – funkcje definiowanie z użyciem strzałki czyli =>,Natywne moduły,Nowe metody String, Math, Array czy Number",
      },
      {
        question: "różnice pomiędzy == a ===?",
        answer:
          "Podwójny operator sprawdza wartość,natomiast potrójny wartość i typ.Potrójny operator sprawdza czy wartości po obu stronach są identyczne.W praktyce wykorzystuje się to często przy funkcjach które zwracają raz wartość liczbową a raz wartość boolean.jeżeli mamy '2′ == 2 to JS zmieni typ pierwszego parametru na number. Jeśli pierwszy jest null a drugi undefined, zwróć true. ",
      },
      {
        question: "Jak działa async?",
        answer:
          "Aby JavaScript nie blokował drzewa renderowania można wykorzystać regułę async. Atrybut async powoduje, że kod JS jest wykonywany niezależnie od etapu ładowania się strony i nie wpływa na ścieżkę renderowania. Atrybut ten może być z powodzeniem zastosowany w przypadku skryptów do:analityki internetowej,dodatkowych widgetów do strony.",
      },
      {
        question: "opisz atrybut defer?",
        answer:
          "W przypadku kiedy JavaScript manipuluje drzewem DOM, można wykorzystać defer. Dzięki temu, skrypty w nagłówku będą potraktowane z takim priorytetem, jakby były na samym końcu strony. W przypadku kiedy chcemy pogodzić asynchroniczne ładowanie i możliwość manipulacją drzewem DOM, można wykorzystać bibliotekę require.js.",
      },
      {
        question: "czym jest class?",
        answer:
          "Wyrażenie class jest kolejnym sposobem definiowania klasy. Wyrażenia class mogą być nazwane lub nienazwane. Nazwa przypisana nazwanemu wyrażeniu class jest lokalna dla ciała klasy.",
      },
      {
        question: "Czym jest symbol w javascript?",
        answer:
          "Funkcja Symbol zwraca wartość typu symbol, Każdy symbol zwrócony przez Symbol jest unikalny.Symbol powinien być użyty jako identyfikator własności obiektu, został zaprojektowany jedynie w tym celu.typ Symbol jest typem prostym",
      },
      {
        question: "Opisz słowo kluczowe this",
        answer:
          "Można powiedzieć, że jest to referencja do obiektu, który wywołał daną funkcję.w zakresie globalnym “this” jest po prostu referencją do obiektu ‘window’ i mogą być w zasadzie stosowane zamiennie.",
      },
      {
        question: "Czym jest funkcja strzałkowa?",
        answer:
          "Funkcja anonimowa to taka funkcja, która nie ma swojej nazwy. Funkcje takie wykorzystywane są jako funkcje zwrotne, które przekazujemy do innych funkcji.Przy skracaniu zapisu obowiązuje nas kilka dość prostych zasad. Jeżeli funkcja wymaga tylko jednego parametru, wtedy mogę (ale nie muszę!) pominąć nawiasy:Jeżeli parametrów jest więcej, lub nie ma żadnego, wtedy nawiasy muszą zostać:Jeżeli funkcja ma tylko jedną instrukcję, mogę pominąć też klamry:A dodatkowo jeżeli jedyną instrukcją jest instrukcja return, także i jej możemy się pozbyć:Natomiast jeżeli funkcja ma więcej instrukcji - klamry muszą pozostać:Korzystając z funkcji strzałkowych należy pamiętać, że nie tworzą one własnego kontekstu this. W związku z tym nie mogą być wykorzystywane jako konstruktor nowego obiektu.",
        secondAnswer:
          "Dodatkowymi cechami, które odróżniają je od klasycznych funkcji są:Funkcje strzałkowe nie mają wiązania this i super. Dlatego nie powinniśmy ich używać do definiowania metod w obiektach i klasachNie posiadają właściwości arguments i new.targetUżycie dla nich call, apply i bind nie da oczekiwanych rezultatów. Wynika to właśnie z faktu, że nie ma tutaj wiązania thisNie można ich używać jako konstruktoryNie wolno używać w nich yield",
      },
      {
        question: "Czym jest wyrażenie funkcyjne?",
        answer:
          "Zmienne w JavaScripcie mogą przechowywać funkcję.wyrażeniem funkcyjnym  jest podstawieniem funkcji pod zmienną.Wyrażenie i definicja różnią się od siebie nie tylko sposobem zapisu, ale także tym, jak taki kod jest interpretowany przez przeglądarkę.Funkcja stworzona za pomocą deklaracji jest od razu dostępna dla całego skryptu. Wynika to z działania mechanizmu hoistingu,który przenosi taką deklarację na początek danego zakresu kodu (skryptu lub funkcji)W przypadku wyrażeń funkcyjnych takie odwołanie skończy się błędem.",
        secondAnswer:
          "Istnieje jeszcze jedna różnica między obydwoma zapisami. Przy stosowaniu deklaracji, dana funkcja zapisywana jest jako klucz obiektu Window (to samo ma miejsce, gdy tworzymy globalną zmienną za pomocą zmiennej var). W przypadku wyrażenia poprzedzonego słowem const/let nie ma to miejsca.",
      },
      {
        question: "Opisz działanie return",
        answer:
          "Każda funkcja zwraca jakąś wartość. Domyślnie jest nią undefined.Instrukcja return zwraca wartość i przerywa dalsze działanie danej funkcji.W wielu edytorach kod leżący za return będzie miał przytłumione kolory, co symbolizuje, że taki kod nigdy sie nie wykona. Instrukcji return może być wiele dla jednej funkcji. Zawsze jednak wykonana zostanie tylko jedna. Instrukcja return może zwracać dowolną wartość.",
      },
      {
        question: "Opisz pracę z plikiem psd",
        answer:
          "PSD, to projekt graficzny bazujacy na programie Adobe Photoshop.Plik ten dostarcza wszystkich niezbędnych grafik, z jakich składa się strona, jak i informacji pozwalających na jej zakodowanie. Dzięki takiej wizualizacji Web Developer jest w stanie przenieść projekt na kod HTML. Profesjonalne przygotowanie takiego projektu zapobiega problemom, które uniemożliwiają pracę, bądź wydłużają jej czas. ",
        secondAnswer:
          "Każdy projekt powinien składać się z uporządkowanych warstw zawierających po jednym elemencie (ikonka, grafika, kształt, tekst). Osadzenie na oddzielnych warstwach (z dodatkowym opisem) znacząco przyśpiesza pracę podczas ustalania atrybutów, jak i wycinania potrzebnych grafik do zamieszczenia na stronie.Jeśli dany element posiada dodatkowy stan (np. rozwinięcie menu po najechaniu myszką albo kliknięcie przycisk) powinien być uwzględniony w projekcie. Developer musi wiedzieć, że coś będzie interaktywne, aby móc to zakodować.",
      },
      {
        question: "Na czym polega destrukturyzacja?",
        answer:
          "Umożliwia przypisanie własności tablicy lub obiektu do zmiennych z wykorzystaniem składni przypominającej składnię tablic czy literałów obiektowych. Może być ona niezwykle zwięzła, a jednocześnie znacznie czytelniejsza od tradycyjnego kodu służącego do uzyskania dostępu do własności.",
        secondAnswer:
          "Nie korzystając z przypisania destrukturyzującego, dostęp do pierwszych trzech elementów tablicy możemy uzyskać w następujący sposób:var first = jakaśTamTablica[0]  var second = jakaśTamTablica[1]; var third = jakaśTamTablica[2];Jeśli natomiast zastosujemy przypisanie destrukturyzujące, ten sam kod można wyrazić w bardziej zwięzły i czytelny sposób: var [first, second, third] = jakaśTamTablica;",
      },
      {
        question: "jakie są różnice między arrow function a regular function?",
        answer:
          "Funkcja strzałkowa ma krótszą składnię niż zwykłe wyrażenie funkcji oraz nie posiada własnego this, argumentów, super, tudzież właściwości new.target. Taki sposób wyrażenia funkcji najlepiej wykorzystać przy tworzeniu funkcji bez metod, ponadto nie mogą zostać one użyte jako konstruktory.Dwa czynniki, które wpłynęły na wprowadzenie funkcji strzałkowych: krótszy zapis funkcji i brak wiązania this.",
        secondAnswer:
          "Przed wprowadzeniem funkcji strzałkowych każda nowa funkcja deniniowała swoją własną wartość this (nowy obiekt w przypadku konstruktora, undefined w wywołaniach funkcji strict mode, obiekt bazowy jeśli funkcja jest wywoływana jako `metoda obiektowa`, itp.). Okazało się to niekorzystne przy obiektowym stylu programowania.Funkcja strzałkowa nie posiada własnego this; używana jest wartość this kontekstu wykonania. W związku z tym, w poniższym kodzie, this użyty w funkcji, który jest przekazywany do setInterval, ma taką samą wartość jak this w funkcji otaczającej:",
      },
    ],
  },

  mutations: {
    randomJavascriptQuestion(state) {
      state.javascriptQuestions.sort(() => Math.floor( Math.random() - 0.5));
    },
  },
  actions: {
    javascriptQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomJavascriptQuestion");
      }, 5000);
    },

    randomJavascriptQuestion(context) {
      context.commit("randomJavascriptQuestion");
    },
  },
};
