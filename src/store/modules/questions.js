export default {
  namespaced: true,

  state: {
    javascriptQuestions: [
      {
        question: "Jakie zadeklarować zmienną w javascript?",
        answer:
          "Aby zadeklarować zmienną, powinniśmy posłużyć się jednym ze słów kluczowych var,let oraz const.",
        secondAnswer:
          "wielu programistów zaleca stosować już const i let. Dzięki nim nasze skrypty stają się nie tylko bardziej optymalne pod względem zarządzania pamięcią, ale i potencjalnie unikamy niektórych problematycznych sytuacji.Pod zmienne możemy podstawić dowolne wartości jakie będziemy chcieli",
        thirdPartOfAnswer:
          "Nazwy zmiennych i stałych które deklarujemy nie mogą być byle jakie. Istnieją pewne zasady których musimy się trzymać. I tak:wielkość liter ma znaczenie. Zmienna myTXT to nie to samo co mytxt,nazwa zmiennej nie może zaczynać się od cyfry,,nazwa zmiennej nie może zawierać spacji, kropki, przecinka ani myślnika (można natomiast używać podkreślenia),nazwą zmiennej nie może być słowo kluczowe zarezerwowane przez JavaScript",
      },
      {
        question: "Czym jest grid?",
        answer:
          "Grid to struktura, która pozwala na umieszczanie zawartości zarówno pionowo, jak i poziomo, w spójny i łatwy w zarządzaniu sposób. Grid obejmują dwa kluczowe elementy: wiersze i kolumny",
        secondAnswer: "",
      },
      {
        question: "Czym jest debugowanie?",
        answer:
          "Pisząc kod co chwila będziemy natrafiać na różnego rodzaju błędy. Aby sobie z nimi radzić powinniśmy umieć debugować nasz kod.Kod JavaScript i TypeScript można debugować przy użyciu Visual Studio. Można ustawiać i trafiać punkty przerwania, dołączać debuger, sprawdzać zmienne, wyświetlać stos wywołań i używać innych funkcji debugowania.",
      },
      {
        question: "Czym jest konstruktor?",
        answer:
          "Constructor jest szczególną metodą, która służy tworzeniu i inicjalizowaniu obiektu zdefiniowanego słowem kluczowym class. Dozwolony jest tylko jeden konstruktor w danej klasie. Jeśli klasa posiada więcej niż jedno wystąpienie metody constructor, wygenerowany zostanie błąd SyntaxError.Aby wywołać konstruktor klasy bazowej, należy użyć słowa kluczowego super",
      },
      {
        question: "Czym jest metoda GET?",
        answer:
          "Metoda GET służy do pobierania danych z interfejsu API. Chcemy, aby to żądanie API działało asynchronicznie, dlatego używamy funkcji opartej na obietnicy ze słowami kluczowymi async/await.",
        secondAnswer: "",
      },
      {
        question: "Czym jest instrukcja try w api call?",
        answer:
          "instrukcja try pozwala zdefiniować blok kodu, który ma być testowany pod kątem błędów podczas wykonywania.Instrukcja catch umożliwia zdefiniowanie bloku kodu, który ma zostać wykonany, jeśli w bloku try wystąpi błąd.try służy do sprawdzania błędów, podczas gdy catch służy do obsługi błędu, jeśli taki wystąpi.",
        secondAnswer: "",
      },
      {
        question: "Czym jest funkcja some()?",
        answer:
          "Metoda some() zwróci prawdę, jeżeli chociaż dla jednego elementu użyta funkcja zwróci prawdę.",
        secondAnswer: "",
      },
      {
        question: "Czym jest funkcja reduce()?",
        answer:
          "Dzięki reduce() możemy wykonywać operacje na tablicy redukując ją, w wyniku uzyskując jakiś wynik.Funkcja robi iterację po tablicy. W pierwszej iteracji pod pierwszy parametr wstawiany jest pierwszy element tablicy, a pod drugi kolejny. Funkcja zwraca jakiś wynik. W kolejnej iteracji podstawiany jest on pod pierwszy parametr, a do drugiego parametru trafia kolejny element w tablicy.",
        secondAnswer: "",
      },
      {
        question: "Czym jest funkcja map()?",
        answer:
          "MMetoda map() robi pętlę po tablicy i każdorazowo zwraca nowy element tablicy. W wyniku po zakończeniu całej pętli zwracana jest nowa tablica z taką samą liczbą elementów:.",
        secondAnswer: "",
      },
      {
        question: "Czym są domknięcia?",
        answer:
          "domknięcia są to funkcje, które mają dostęp do środowiska, w którym zostały zdefiniowane. ",
        secondAnswer: "",
      },
      {
        question: "Czym są metody?",
        answer:
          "Metody JavaScript to akcje, które można wykonywać na obiektach. Metodą obiektu nazywamy właściwość zawierającą definicję funkcji (inaczej: metoda to funkcja przechowywana jako właściwość obiektu). ",
        secondAnswer: "",
      },
      {
        question: "Czym jest obiekt w javascript?",
        answer:
          "Obiekty JavaScript to kontenery dla nazwanych wartości, zwanych właściwościami i metodami. W JS prawie wszystko jest obiektem:Obiekty są zmiennymi, ale mogą zawierać wiele wartości. Wartości są zapisywane jako pary nazwa: wartość (nazwa i wartość oddzielone dwukropkiem). Pary te oddziela przecinek. Obiekt JavaScript to zbiór nazwanych wartości. Te nazwane wartości nazywamy właściwościami. ",
        secondAnswer:
          "Boolean (typ logiczny) może być obiektem (jeśli zdefiniowano za pomocą słowa new) Number (liczba) może być obiektem (jeśli zdefiniowano za pomocą słowa new) String (łańcuch) może być obiektem (jeśli zdefiniowano za pomocą słowa new) Date (data) jest zawsze obiektem Math (matematyka) jest zawsze obiektem Regular expression (wyrażenie regularne) jest zawsze obiektem Array (tablica) jest zawsze obiektem Function (funkcja) jest zawsze obiektem Object (obiekt) jest zawsze obiektem",
      },
      {
        question: "Jak możemy tworzyć obiekty w javascript?",
        answer:
          "W JavaScript obiekty można tworzyć na 3 różne sposoby: poprzez inicjalizator obiektu (literał obiektywy, ang. object literal syntax), fabrykę (ang. factory function) oraz funkcje konstruujące (ang. constructor functions).",
        secondAnswer: "",
      },
      {
        question:
          "Czy JavaScript wspiera dziedziczenie? Jeżeli tak, to w jaki sposób?",
        answer:
          "JavaScript w przeciwieństwie do wielu innych języków, np. Javy nie ma dedykowanego mechanizmu dla klas.W JS wszystko jest obiektem, nawet funkcje. W efekcie czego można zaimplementować mechanizm dziedziczenia, opierając się na prototypach.",
        secondAnswer: "",
      },
      {
        question: "Co w javascript nie jest obiektem?",
        answer:
          "Wszystkie wartości JavaScript, z wyjątkiem prymitywów (primitives), są obiektami.Prymitywna wartość jest to wartość, która ma właściwości lub metody.  Prymitywny typ danych to dane, które posiadają pierwotną wartość.  JavaScript definiuje 5 typów prymitywnych typów danych:",
        secondAnswer: "string number boolean null undefined",
      },
      {
        question: "Jaka jest różnica między var,let a const?",
        answer:
          "Pierwsza i najważniejsza różnica między let/const a var to zasięg zmiennych.W przypadku let/const zmienne mają zasięg blokowy, co w skrócie oznacza od klamry do klamry.Zmienne deklarowane za pomocą var mają natomiast zasięg funkcyjny, czyli ich zasięg określa ciało funkcji.Ostatnią różnicą jest to, że deklarując zmienną globalną var (poza ciałem funkcji),dodawana jest ona jako właściwość obiektu window. W przypadku let nic takiego się nie dzieje",
      },
      {
        question: "Czym jest temporal dead zone?",
        answer:
          "Miejsce przed deklaracją zmiennej let/const zwie się temporal dead zone, bo nie możemy odwoływać się do zmiennej, której jeszcze nie zadeklarowaliśmy. Dzięki takiemu zabiegowi nasz kod staje się bardziej logiczny - najpierw tworzymy wszystkie klocki a dopiero potem ich używamy.",
      },
      {
        question: "Czym jest Hoisting??",
        answer:
          "To wbudowany w JavaScript mechanizm wynoszący deklarację zmiennych bez ich inicjowania na początek funkcji.Kolejna różnica między starszą deklaracją var a jej młodszymi braćmi to tak zwany hoisting (windowanie).JavaScript lubi pomagać programiście. Jednym z takich przypadków pomocy jest niewidoczne dla programisty wynoszenie deklaracji na początek kodu. I tak na początek kodu wynoszone są deklaracje takie jak var / let/ const / function / class. Różnica jest w sposobie takiego wynoszenia.",
      },
      {
        question: "opisz inkrementacje i dekrementacje",
        answer:
          "Operatory inkrementacji i dekrementacji, które mogą występować przed zmienną lub po zmiennej.Gdy występuje przed zmienną, zwiększenie jej wartości nastąpi w danej instrukcji. Jeżeli występuje po zmiennej, zwiększona wartość wystąpi dopiero w kolejnej instrukcji",
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
        question: "Jak wyczyścić tablice?",
        answer:
          "Można to zrobić na wiele sposobów, zerując jej długość: arrayList.length = 0;. Możliwe jest także użycie arrayList = [];, co sprawi, że wartością zmiennej arrayList będzie nowy obiekt Array. Należy tu jednak pamiętać, że drugą metodę można stosować tylko wtedy, gdy do pierwszego obiektu Array nie ma w kodzie żadnych referencji.",
      },
      {
        question: "Czym jest IIFE?",
        answer:
          "IIFE (Immediately-invoked function expression) - czyli samo wywołujące się wyrażenie funkcyjne to wzorzec funkcji, która sama się wywołuje.",
      },
      {
        question: "Czym jest instrukcja switch?",
        answer: `Instrukcja switch jest kolejnym sposobem tworzenia warunków - tym razem na zasadzie przyrównania wyniku do konkretnych wartości.Każdy przypadek kończy się słowem break, które kończy wykonywanie instrukcji switch.Jeżeli pominiemy to słowo, wtedy nawet przy pomyślnym przyrównaniu zostaną wykonane kolejne sprawdzenia, co często może powodować błędy.`,
        secondAnswer:
          "Dodatkowo instrukcja switch ma specjalny przypadek default który będzie wybierany, gdy wszystkie inne przypadki będą błędne (odpowiednik else w instrukcji if).Warto zaznaczyć, że instrukcja switch nie służy do testowania warunków, a do przyrównywania zmiennej do wartości:",
      },
      {
        question: "Omów pętle for",
        answer: `pętla for jest typowo "manualna". Trzeba ustawić licznik, kiedy ma się zakończyć i jak ma być zwiększany. Dodatkowo ręcznie trzeba się odwoływać do danego elementu w tablicy.`,
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Czym jest dependency injection?",
        answer: `to wzorzec projektowy polegający na tym, że obiekt nie inicjalizuje swoich zależności sam, tylko przyjmuje je z zewnątrz poprzez tzw. „wstrzykiwanie”. Główną zaletą takiego podejścia jest między innymi łatwiejsze pisanie testów jednostkowych. Użycie DI może również sprawi, że nasze obiekty będą ze sobą luźniej powiązane (ang. loose coupling).`,
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Jak działa pętle while",
        answer:
          "W pętli tego typu nie definiujemy ani początkowego licznika, ani nie definiujemy zmiany licznika.Musimy te rzeczy zrobić ręcznie.Pętlę while zazwyczaj stosuje się w sytuacjach, kiedy nie wiemy dokładnie, ile iteracji (powtórzeń) ma się wykonać.Wyobraź sobie, że chcesz wygenerować unikalny numer ID albo jakąś liczbę. Generujesz więc daną rzecz, następnie sprawdzasz czy wynik pasuje do założeń. Jak nie pasuje, generujesz dalej. I tak do skutku aż trafisz.",
        secondAnswer:
          "while (wyrażenie_sprawdzające_zakończenie_pętli) {  ...fragment kodu który będzie powtarzany...}",
      },
      {
        question: "Opisz typy danych w javascript",
        answer:
          "W JavaScript dane możemy podzielić na dwie grupy: typy proste(prymitywne) oraz złożone.Do typów prymitywnych zaliczamy:Number,string,bigInt,boolean,undefined,null,symbol a do złożonych:Object (w tym Array, Map i Set).Kolejną charakterystyczną cechą rozróżniającą typy prymitywne od obiektów jest to, że te pierwsze w przeciwieństwie do obiektów są niemutowalne.Mutowalnymi określamy takie dane, którym w czasie ich istnienia możemy zmieniać części składowe:",
        secondAnswer:
          "JavaScript jest językiem dynamicznie typowanym. Oznacza to, że nie musimy deklarować typu zmiennej, ponieważ jest on automatycznie konwertowany do porządanych wartości w czasie wykonywania się skryptu.",
      },
      {
        question: "Czym jest html canvas?",
        answer:
          "element języka HTML wprowadzony w HTML 5 pozwalający na dynamiczne, skryptowe renderowanie kształtów i obrazów bitmapowych. Dzięki wprowadzeniu obiektu canvas możliwe stało się tworzenie dynamicznych dwu i trójwymiarowych animacji czy gier działających w przeglądarkach bez dodatkowych wtyczek.",
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Wyjaśnij funkcję parseInt()",
        answer:
          "Przetwarza argument w postaci łańcucha znaków i zwraca liczbę całkowitą typu integer , o zadanej podstawie.Pozwala przekształcić podany tekst na liczbę całkowitą.",
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Czym jest innerHtml?",
        answer:
          "Właściwość innerHTML umożliwia odczyt i ustawianie html, jaki jest we wnętrzu danego elementu:",
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Czym jest tag <time>?",
        answer:
          "<time> określa czytelną dla człowieka datę oraz godzinę. Można go również używać do kodowania daty i godziny w sposób możliwy do odczytu maszynowego, dzięki czemu przeglądarki mogą oferować dodawanie przypomnień do kalendarza. <time> pozwala również wyszukiwarkom na generowanie inteligentniejszych wyników wyszukiwania.",
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Jak dodać element do tablicy?",
        answer:
          "by dodać do tablicy element na jej końcu, możemy użyć metody push(element1, element2, ...).Drugą metodą jest po prostu ustawianie elementu na danym indeksie:",
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Jak sprawdzić czy zmienna jest tablicą?",
        answer: `Żeby sprawdzić czy dana zmienna jest tablicą, powinniśmy skorzystać z metody Array.isArray(). Wynika to z faktu, że tablice w Javascript także są obiektami i typeof zwraca nam "object"`,
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Opisz działanie setTimeout",
        answer: `setTimeout wywołuje funkcję po określonym czasie opóźnienia.setTimeout oczekuje dwóch argumentów, jednej referencji do funkcji wywołania zwrotnego oraz opóźnienia w milisekundach. setTimeout może również akceptować argumenty po opóźnieniu, a dodatkowe wartości zostaną przekazane do funkcji wywołania zwrotnego. Timer można wyłączyć przy użyciu metody clearTimeout.`,
        secondAnswer:
          "Powyższe może się przydać przy opóźnianiu zadań, które mogą spowalniać programowanie oraz blokować następne funkcje. Pamiętajmy, że setTimeout ustawia jedynie minimalny czas, który musi minąć przed wywołaniem. Jeśli silnik jest zajęty czymś innym, to kod może być uruchomiony znacznie później. Co więcej, wartość 0 nie musi być deklarowana - będzie ona domyślna nawet jeśli się ją pominie",
      },
      {
        question: "Do czego służy setInterval?",
        answer:
          "Ustawia opóźnienie do cyklicznego wywoływania określonej funkcji.Możliwe jest anulowanie wykonania fukcji poprzez wywołanie window.clearInterval().Jeżeli funkcja ma zostać wykonana tylko raz a nie być wykonywana cyklicznie to należy skorzystać z  window.setTimeout().",
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}Różnica między setTimeout i setInterval polega na tym, że metoda setTimeout() uruchamia wyrażenie tylko raz, a setInterval() robi to regularnie po określonym czasie.",
      },
      {
        question: "Opisz pętle forEach",
        answer:
          "Wykonuje dostarczoną funkcję jeden raz na każdy element tablicy.Funkcja callback wywoływana jest jedynie dla indeksów tablicy, którym została przypisana wartość; nie jest wywoływana dla indeksów, które zostały usunięte i tych, którym nigdy nie została przypisana żadna wartość.Funkcja callback jest wywoływana z trzema argumentami: wartością elementu, jego indeksem i obiektem tablicy, w którym się ten element zawiera.",
        secondAnswer:
          "Jeśli parametr thisArg został dostarczony do metody forEach, będzie on wskazywany przez this dla każdego wywołania funkcji callback. W przypadku, gdy nie został on przekazany lub jego wartość jest równa null, this będzie się odnosić do obiektu globalnego połączonego z funkcją callback.Metoda forEach nie modyfikuje tablicy na której jest wywołana.",
      },
      {
        question: "Do czego służy array.indexOf?",
        answer:
          "Zwraca pierwszy (najmniejszy) indeks elementu w tablicy równego podanej wartości lub -1, gdy nie znaleziono takiego elementu.",
      },
      {
        question: "Jaka jest różnica między null a undefined?",
        answer:
          "undefined – coś nie zostało zainicjalizowane, null – coś jest aktualnie niedostępne.W JavaScript undefined oznacza, że zmienna została zadeklarowana ale jeszcze nie ma żadnej przypisanej wartości.Null może być reprezentowane jako wartość, bezwartości, inaczej mówiąc możemy przypisać do zmiennej temp pudełko z cyferką 5, albo samo pudełko, samo pudełko jest nullem.",
        secondAnswer:
          "Gdy przypiszemy wartość null do zmiennej oznacza to, że zerujemy tą zmienną. Nie chcemy aby posiadała ona jakąkolwiek wartość lub referencję do czegokolwiek.Pomimo tego, że operator typeof zwraca nam typ object, zmienna z wartością null nic nie reprezentuje.to że null zwraca typ object jest błędem z czasów powstawania języka.Gdy trafimy na błąd związany z undefined w konsoli przeglądarki będziemy wiedzieć, że o czymś zapomnieliśmy, odwołujemy się do czegoś co nie istnieje.",
        thirdPartOfAnswer:
          "Wartość null i undefined reprezentują puste, nieokreślone wartości. Jeżeli porównamy oba typy przez potrójny znak równości i wypiszemy do konsoli, zobaczymy wartość false:",
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
          "Immediately Invoked Function Expression — to funkcja, którą da się wywołać zaraz po swojej definicji. IIFE  jest opakowywane w okrągłe nawiasy, po których następują kolejne okrągłe nawiasy - ma to na celu wywołanie zdefiniowanej funkcji.",
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
          "Obydwa słowa kluczowe wiążą się z obietnicami. Pierwsze z nich - async - wstawione przed deklaracją funkcji sprawi, że taka funkcja zwróci obietnicę. Drugie z nich - await - może wystąpić tylko wewnątrz funkcji poprzedzonej przez async i powinno się znaleźć przed wykonaniem funkcji asynchronicznej. Sprawi, że wykonanie nie przejdzie dalej, dopóki obietnica nie zostanie wykonana. Dzięki temu asynchroniczny kod przypomina swoim zachowaniem kod synchroniczny.",
      },
      {
        question: "Czym jest currying i w jakich sytuacjach się go stosuje?",
        answer:
          "Currying to technika pracy z funkcjami, polegająca na ich transformacji w następujący sposób: f(a, b, c) do f(a)(b)(c). Dzięki temu de facto rozbija funkcję mającą wiele parametrów do wielu funkcji mającej po jednym parametrze.",
      },
      {
        question: "Jaka jest definicja funkcji wyższego rzędu?",
        answer:
          "Funkcja wyższego rzędu to funkcja, która przyjmuje inne funkcje jako parametry lub też taka, której wynik również jest funkcją. Przykładowa funkcja wyższego rzędu to map służąca do zwracania listy z wynikami funkcji dla wszystkich elementów z danej listy.",
      },
      {
        question:
          "Jakie są zalety i wady rozszerzania wbudowanych obiektów JavaScript?",
        answer:
          "Rozszerzanie wbudowanych obiektów uważane jest złą praktykę. W ten sposób zmieniamy zachowanie obiektów. I o ile mowa o obiekcie, z którego będzie działał tylko konkretny kod, to problem nie jest duży, ale w przypadku zewnętrznego kodu, który wykorzysta rozszerzony obiekt, nic nie będzie działać. Dobrą praktyką jest korzystanie ze wbudowanych metod. Dodawanie własnych metod do obiektów może być problematyczne także ze względu na interferencje z bibliotekami, które same mogą rozszerzać obiekty o te same metody. Wówczas dojdzie do konfliktu, nadpisania, i kod po prostu nie będzie działał. Zaletą rozszerzania wbudowanych typów może być natomiast to, że można zbudować w ten sposób polyfill, przez co kod będzie działał również na starszym oprogramowaniu, przeglądarkach nieobsługujących nowszych wersji JavaScript.",
      },
      {
        question: "Czym jest obietnica (promise)?",
        answer:
          "Obietnice to obiekty, które reprezentują wykonanie (sukcesem lub porażką) operacji asynchronicznej. Są tak nazwane, bo wykonywana funkcja asynchroniczna musi złożyć obietnicę dostarczenia w przyszłości wartości. Po zakończeniu operacji asynchronicznej jej wynik może zostać obsłużony przez wywołanie na obietnicy metody then.",
      },
      {
        question: "Czym jest pętla zdarzeń",
        answer:
          "Pętla zdarzeń to mechanizm, który umożliwia asynchroniczne wykonanie, mimo, że JavaScript jest jednowątkowy. Właściwa praca wykonuje się w stosie wywołań, tam funkcje JS są wykonywane. Wiadomość o tym co powinno zostać przetworzone nie ląduje jednak samoczynnie na stosie wywołań. Najpierw te wiadomości trafiają do kolejki, gdzie umieszcza je środowisko uruchomieniowe. Pętla zdarzeń natomiast ciągle nasłuchuje nowych wiadomości w kolejce i wysyła je do stosu wywołań, jeżeli tylko stos jest wolny. Taka implementacja mogłaby sprawiać spore problemy, jeżeli stos wywołań zostałby zablokowany przez czekanie na zasoby, jednak praktycznie wszystkie operacje I/O w JS są nieblokujące (z wyjątkiem kilku wywołań).",
      },
      {
        question: "Czym jest funkcja anonimowa?",
        answer: "Funkcja strzałkowa to skrócony zapis wyrażenia funkcyjnego:",
      },
      {
        question: "Jak działa async?",
        answer:
          "Aby JavaScript nie blokował drzewa renderowania można wykorzystać regułę async. Atrybut async powoduje, że kod JS jest wykonywany niezależnie od etapu ładowania się strony i nie wpływa na ścieżkę renderowania. Atrybut ten może być z powodzeniem zastosowany w przypadku skryptów do:analityki internetowej,    dodatkowych widgetów do strony,",
        secondAnswer:
          "Atrybut async mówi przeglądarce, że skrypt nie wpływa ani na DOM ani na CSSOM i może być przetworzony dopiero po załadowaniu i wyrenderowaniu całej podstrony. Atrybut async działa wyłącznie w przypadku skryptów umieszczonych w osobnym pliku – dlatego wydzielenie skryptu do osobnego pliku jest tak bardzo istotne.",
      },
      {
        question: "opisz atrybut defer?",
        answer:
          "W przypadku kiedy JavaScript manipuluje drzewem DOM, można wykorzystać defer. Dzięki temu, skrypty w nagłówku będą potraktowane z takim priorytetem, jakby były na samym końcu strony. W przypadku kiedy chcemy pogodzić asynchroniczne ładowanie i możliwość manipulacją drzewem DOM, można wykorzystać bibliotekę require.js.",
      },
      {
        question: "Czym jest funkcja strzałkowa?",
        answer:
          "Funkcja anonimowa to taka funkcja, która nie ma swojej nazwy. Funkcje takie wykorzystywane są jako funkcje zwrotne, które przekazujemy do innych funkcji.Przy skracaniu zapisu obowiązuje nas kilka dość prostych zasad.         Jeżeli funkcja wymaga tylko jednego parametru, wtedy mogę (ale nie muszę!) pominąć nawiasy:Jeżeli parametrów jest więcej, lub nie ma żadnego, wtedy nawiasy muszą zostać:Jeżeli funkcja ma tylko jedną instrukcję, mogę pominąć też klamry:A dodatkowo jeżeli jedyną instrukcją jest instrukcja return, także i jej możemy się pozbyć:Natomiast jeżeli funkcja ma więcej instrukcji - klamry muszą pozostać:",
        secondAnswer:
          "Dodatkowymi cechami, które odróżniają je od klasycznych funkcji są:Funkcje strzałkowe nie mają wiązania this i super. Dlatego nie powinniśmy ich używać do definiowania metod w obiektach i klasachNie posiadają właściwości arguments i new.targetUżycie dla nich call, apply i bind nie da oczekiwanych rezultatów. Wynika to właśnie z faktu, że nie ma tutaj wiązania thisNie można ich używać jako konstruktoryNie wolno używać w nich yield",
      },
      {
        question: "Czym jest wyrażenie funkcyjne?",
        answer:
          "wyrażeniem funkcyjnym i jest niczym innym jak podstawieniem funkcji pod zmienną:Wyrażenie i definicja różnią się od siebie nie tylko sposobem zapisu, ale także tym, jak taki kod jest interpretowany przez przeglądarkę.Funkcja stworzona za pomocą deklaracji jest od razu dostępna dla całego skryptu. Wynika to z działania mechanizmu hoistingu,który przenosi taką deklarację na początek danego zakresu kodu (skryptu lub funkcji)W przypadku wyrażeń funkcyjnych takie odwołanie rzuci nam błędem.",
        secondAnswer:
          "Wynika to z faktu, że powyżej podstawiliśmy funkcję pod zmienną, a przecież do takich nie możemy się odwoływać przed ich utworzeniem.Istnieje jeszcze jedna różnica między obydwoma zapisami. Przy stosowaniu deklaracji, dana funkcja zapisywana jest jako klucz obiektu Window (to samo ma miejsce, gdy tworzymy globalną zmienną za pomocą zmiennej var). W przypadku wyrażenia poprzedzonego słowem const/let nie ma to miejsca.",
      },
      {
        question: "Opisz działanie return",
        answer:
          "Każda funkcja zwraca jakąś wartość. Domyślnie jest nią undefined.Instrukcja return nie tylko zwraca wartość, ale i przerywa dalsze działanie danej funkcji.W wielu edytorach kod leżący za return będzie miał przytłumione kolory, co symbolizuje, że taki kod nigdy sie nie wykona:Instrukcji return może być wiele dla jednej funkcji. Zawsze jednak wykonana zostanie tylko jedna Instrukcja return może zwracać dowolną wartość.",
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
          "Nie korzystając z przypisania destrukturyzującego, dostęp do pierwszych trzech elementów tablicy możemy uzyskać w następujący sposób:var first = jakaśTamTablica[0]  var second = jakaśTamTablica[1]; var third = jakaśTamTablica[2];Jeśli natomiast zastosujemy przypisanie destrukturyzujące, ten sam kod można wyrazić w bardziej zwięzły i czytelny sposób:	      var [first, second, third] = jakaśTamTablica;",
      },
      {
        question: "jakie są różnice między arrow function a regular function?",
        answer:
          "Funkcja strzałkowa ma krótszą składnię niż zwykłe wyrażenie funkcji oraz nie posiada własnego this, argumentów, super, tudzież właściwości new.target. Taki sposób wyrażenia funkcji najlepiej wykorzystać przy tworzeniu funkcji bez metod, ponadto nie mogą zostać one użyte jako konstruktory.Dwa czynniki, które wpłynęły na wprowadzenie funkcji strzałkowych: krótszy zapis funkcji i brak wiązania this.",
        secondAnswer:
          "Przed wprowadzeniem funkcji strzałkowych każda nowa funkcja deniniowała swoją własną wartość this (nowy obiekt w przypadku konstruktora, undefined w wywołaniach funkcji strict mode, obiekt bazowy jeśli funkcja jest wywoływana jako `metoda obiektowa`, itp.). Okazało się to niekorzystne przy obiektowym stylu programowania.Funkcja strzałkowa nie posiada własnego this; używana jest wartość this kontekstu wykonania. W związku z tym, w poniższym kodzie, this użyty w funkcji, który jest przekazywany do setInterval, ma taką samą wartość jak this w funkcji otaczającej:",
      },
    ],

    testQuestions: [
      {
        question: "Po co testujemy aplikacje?",
        answer:
          "Testowanie oprogramowania ma na celu sprawdzenie jego poprawnego działania oraz zebranie informacji na jego temat.",
        secondAnswer: "",
      },
      {
        question: "Co to są testy jednostkowe?",
        answer:
          "Testy jednostkowe są to testy sprawdzające małe części kodu(funkcje,metody).Każdy test jest niezależny od poprzedniego oraz w jak najmniejszym stopniu opiera się na zewnętrznych zależnościach (wręcz nie powinno ich być!). Test może zakończyć się sukcesem lub porażką (ang. fail).",
        secondAnswer: "",
      },
      {
        question: "Opisz działanie funkcji expect",
        answer:
          "TZwraca ona obiekt z metodami, które umożliwiają wybranie wygodnego operatora logicznego oraz tego co dokładnie będziemy porównywać.",
        secondAnswer: "",
      },
    ],
  },

  mutations: {
    questionLoop(state) {
      setInterval(() => {
        state.javascriptQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }, 1000);
    },

    randomQuestion(state) {
      state.javascriptQuestions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    },
  },
  actions: {
    questionLoop(context) {
      context.commit("questionLoop");
    },

    randomQuestion(context) {
      context.commit("randomQuestion");
    },
  },
};
