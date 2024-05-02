export default {
  namespaced: true,

  state: {
    javascriptQuestions: [
      {
        question: "Jak zadeklarować zmienną w javascript?",
        answer:
          "Aby zadeklarować zmienną, powinniśmy posłużyć się jednym ze słów kluczowych var, let lub const. Pod zmienne możemy podstawić dowolne wartości jakie będziemy chcieli. Zaleca się używanie let oraz const zamiast var. Dzięki nim nasze skrypty stają się bardziej optymalne pod względem zarządzania pamięcią, ale i potencjalnie unikamy niektórych problematycznych sytuacji. Nazwa zmiennej nie może zaczynać się od cyfry, nie może zawierać spacji, kropki, przecinka ani myślnika (można natomiast używać podkreślenia), nazwą zmiennej nie może być słowo kluczowe zarezerwowane przez JavaScript",
          hint: [
            'Zmienne o takiej samej nazwie,ale utworzone przy pomocy różnej wielkości liter to dwie różne zmienne.',
          ]
      },
      {
        question: "Czym jest debugowanie?",
        answer:
          "Debugowanie to proces znajdowania i eliminowania błędów w kodzie programu. Oznacza to analizowanie, testowanie i śledzenie działania kodu w celu zidentyfikowania i zrozumienia problemów, które prowadzą do nieoczekiwanych zachowań lub awarii aplikacji. Celem debugowania jest zapewnienie, że program działa zgodnie z oczekiwaniami i spełnia wymagania funkcjonalne i niefunkcjonalne."
      },
      {
        question: "Jak działa słowo kluczowe new?",
        answer:
          "Słowo kluczowe new w JavaScript służy do tworzenia nowych obiektów na podstawie konstruktora (funkcji). W momencie wywołania new, tworzona jest nowa instancja obiektu, a następnie konstruktor jest wywoływany z nowym obiektem jako kontekstem (this). Konstruktor może manipulować nowym obiektem, dodając mu właściwości i metody. Na koniec, jeśli konstruktor nie zwraca jawnie innej wartości, to nowo utworzony obiekt jest zwracany jako wynik wywołania new.",
      },
      {
        question: "Opisz typ bigInt?",
        answer:
          "Służy do obsługi liczb całkowitych o dowolnej precyzji. Jest to przydatne w przypadkach, gdy potrzebujemy manipulować bardzo dużymi liczbami, które przekraczają limity typu Number.Aby zadeklarować liczbę jako BigInt, dodaj literał n na końcu liczby. Warto zauważyć, że operacje na liczbach BigInt różnią się od operacji na typach danych numerycznych, takich jak Number. Nie można na przykład używać operatorów arytmetycznych +, -, * i / do bezpośrednich operacji na liczbach BigInt. Zamiast tego, należy używać odpowiednich metod dostępnych dla typu BigInt, takich jak BigInt.add(), BigInt.subtract, BigInt.multiply i BigInt.divide.Warto również zauważyć, że nie można mieszać typu BigInt z typem Number w operacjach arytmetycznych. Jeśli próbujesz wykonać operację między BigInt a Number, będzie konieczne przekonwertowanie jednego z typów, na przykład za pomocą BigInt lub Number.Warto również pamiętać, że BigInt nie jest obsługiwany w niektórych starszych przeglądarkach.",
      },
      {
        question: "Czym jest konstruktor?",
        answer:
          "konstruktor jest metodą, która służy do tworzenia i inicjalizacji obiektów zdefiniowanych za pomocą klasy (class) w języku JavaScript. Jest to specjalna metoda, która jest wywoływana w momencie tworzenia nowej instancji klasy, dzięki czemu można zainicjalizować pola obiektu oraz wykonać inne operacje potrzebne do poprawnego działania obiektu. Konstruktor może przyjmować parametry, które są przekazywane podczas tworzenia instancji klasy. Można zdefiniować tylko jeden konstruktor w klasie, a do wywołania konstruktora klasy bazowej służy słowo kluczowe 'super'.",
      },
      {
        question: "Czym jest metoda GET?",
        answer: "Metoda GET jest jednym z podstawowych rodzajów żądań HTTP używanych do pobierania danych z interfejsu API. Przesyłanie żądania GET oznacza, że klient (np. przeglądarka internetowa) prosi serwer o zwrócenie określonego zasobu.Podczas użycia metody GET, żądanie jest przesyłane do serwera w formie URL z parametrami, jeśli są potrzebne. Serwer odczytuje te parametry, przetwarza żądanie i zwraca odpowiedź zawierającą żądane dane. Odpowiedź serwera może być w formacie HTML, JSON, XML lub innym, zależnie od tego, jak skonfigurowany jest interfejs API.",
      },
      {
        question: "Czym jest delegacja zdarzeń?",
        answer: "Delegacja zdarzeń to technika programowania polegająca na przypisywaniu obsługi zdarzeń do elementu nadrzędnego, zamiast do każdego pojedynczego elementu potomnego. W efekcie, zdarzenia występujące na elementach potomnych są przechwytywane i obsługiwane przez element nadrzędny.Dzięki temu możemy oszczędzić kodu i zwiększyć wydajność, szczególnie w przypadku dużej liczby elementów potomnych.Mechanizm delegacji zdarzeń polega na sprawdzeniu, który element potomny wywołał dane zdarzenie (na podstawie informacji o elemencie źródłowym zdarzenia) i podjęciu odpowiednich działań w zależności od tego elementu. Może to być realizowane przy użyciu metod takich jak event.target lub event.currentTarget, które dostarczają informacje o elemencie, na którym zdarzenie zostało wywołane.",
      },
      {
        question: "Różnica między deklaracją funkcji a klasy?",
        answer:
          "Deklaracje funkcji są przenoszone na początek (hoisting) w procesie wykonywania kodu, co oznacza, że można je wywoływać przed ich faktyczną deklaracją w kodzie. W praktyce oznacza to, że możemy używać funkcji przed ich zdefiniowaniem. Deklaracje klas nie są podnoszone. Oznacza to, że musimy zadeklarować klasę przed jej użyciem w kodzie. Jeśli próbujemy odwołać się do klasy przed jej deklaracją, spowoduje to błąd. Inna ważna różnica dotyczy sposobu, w jaki są one używane. Funkcje są używane do definiowania bloków kodu, które można wywoływać wielokrotnie w różnych miejscach programu. Klasy natomiast służą do tworzenia obiektów, które mają określone właściwości i metody.",
      },
      {
        question: "Czym jest super w javascript?",
        answer:
          "Słowo kluczowe super w JavaScript jest używane do odwoływania się do rodzica (klasy nadrzędnej) i wywoływania jego metod. Jest to przydatne w przypadku dziedziczenia klas, gdy chcemy skorzystać z funkcji zdefiniowanych w klasie nadrzędnej.",
      },
      {
        question: "Czym jest instrukcja try i caych w api call?",
        answer:
          "Instrukcja try pozwala zdefiniować blok kodu, który ma być testowany pod kątem błędów podczas wykonywania. Instrukcja catch umożliwia zdefiniowanie bloku kodu, który ma zostać wykonany, jeśli w bloku try wystąpi błąd. Try służy do sprawdzania błędów, podczas gdy catch służy do obsługi błędu.",
      },
      {
        question: "Czym jest funkcja some?",
        answer:
          "Służy do sprawdzania, czy przynajmniej jeden element w tablicy spełnia określone kryterium, które jest zdefiniowane za pomocą funkcji zwrotnej (callback). W przypadku, gdy choć dla jednego elementu funkcja zwrotna zwróci wartość true, metoda some zwróci wartość true. W przeciwnym razie, gdy funkcja zwrotna zwróci wartość false dla wszystkich elementów, metoda some zwróci wartość false.",
      },
      {
        question: "Czym jest funkcja reduce?",
        answer:
          "Służy do wykonania operacji na tablicy, redukując ją do pojedynczej wartości wynikowej. Funkcja reduce wykonuje iterację po elementach tablicy i używa funkcji zwrotnej do łączenia elementów w celu ostatecznego uzyskania wyniku.Funkcja zwrotna używana w reduce ma dwa parametry: akumulator i aktualny element. W pierwszej iteracji akumulator przyjmuje wartość początkową, która może być podana jako drugi argument metody reduce, lub jeśli pominięta, to pierwszy element tablicy staje się wartością początkową. Następnie funkcja zwrotna jest wywoływana dla każdego kolejnego elementu w tablicy, a jej wynik staje się nową wartością akumulatora dla kolejnej iteracji. Proces ten powtarza się, aż do przejścia przez wszystkie elementy tablicy, a ostateczny wynik jest zwracany.",
      },
      {
        question: "Czym jest funkcja map?",
        answer:
          "Metoda map robi pętlę po tablicy i każdorazowo zwraca nowy element tablicy. W wyniku po zakończeniu całej pętli zwracana jest nowa tablica z taką samą liczbą elementów.",
      },
      {
        question: "Co robi metoda pop",
        answer:
          "metoda pop usuwa ostatni element z tablicy",
      },
      {
        question: "Czym są getery i setery",
        answer:
          "Get używasz do pobierania wartości, a set do przypisania wartości. ",
      },
      {
        question: "Czym są domknięcia?",
        answer:
          "Są to funkcje, które 'zapamiętują' zakres zmiennych, w którym zostały zdefiniowane, nawet po zakończeniu wykonywania tego zakresu. To oznacza, że funkcja może uzyskać dostęp do zmiennych, które były dostępne w jej zakresie nadrzędnym, nawet jeśli ten zakres został już zakończony. Closures są przydatne w wielu aspektach programowania w JavaScript, w tym w obszarach takich jak zarządzanie stanem, obsługa zdarzeń i tworzenie funkcji zwrotnych.",
      },
      {
        question: "Czym są metody?",
        answer:
          "Metody JavaScript to akcje, które można wykonywać na obiektach. Metodą obiektu nazywamy właściwość zawierającą definicję funkcji (inaczej: metoda to funkcja przechowywana jako właściwość obiektu).",
      },
      {
        question: "Czym jest obiekt w javascript?",
        answer:
          "Obiekty w JavaScript to kontenery dla nazwanych wartości, zwanych właściwościami i metodami. W JS prawie wszystko jest obiektem: Obiekty są zmiennymi, ale mogą zawierać wiele wartości.",
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
          "JavaScript w przeciwieństwie do wielu innych języków, np. Javy nie ma dedykowanego mechanizmu dla klas.W JS wszystko jest obiektem, nawet funkcje. W efekcie czego można zaimplementować mechanizm dziedziczenia, opierając się na prototypach.",
      },
      {
        question: "Czym jest endpoint?",
        answer:
          "to unikalny adres URL, który wywołujesz w celu interakcji z innym systemem.",
      },
      {
        question: "Co w javascript nie jest obiektem?",
        answer:
          "Wszystkie wartości JavaScript, z wyjątkiem prymitywów, są obiektami.Prymitywna wartość jest to wartość, która ma właściwości lub metody. Prymitywny typ danych to dane, które posiadają pierwotną wartość.  JavaScript definiuje 5 prymitywnych typów danych:",
      },
      {
        question: "Jaka jest różnica między var,let a const?",
        answer:
          "Pierwsza i najważniejsza różnica między let/const a var to zasięg zmiennych. W przypadku let/const zmienne mają zasięg blokowy, co w skrócie oznacza od klamry do klamry. Zmienne deklarowane za pomocą var mają natomiast zasięg funkcyjny, czyli ich zasięg określa ciało funkcji.Ostatnią różnicą jest to, że deklarując zmienną globalną var (poza ciałem funkcji), dodawana jest ona jako właściwość obiektu window. W przypadku let nic takiego się nie dzieje",
      },
      {
        question: "Czym jest temporal dead zone?",
        answer:
          "Miejsce przed deklaracją zmiennej let/const zwie się temporal dead zone, bo nie możemy odwoływać się do zmiennej, której jeszcze nie zadeklarowaliśmy. Dzięki takiemu zabiegowi nasz kod staje się bardziej logiczny",
      },
      {
        question: "Czym jest prototyp?",
        answer:
          "Każdy obiekt posiada prywatną własność łączącą go z innym obiektem zwanym jego prototypem. Obiekt prototype posiada swój własny prototyp, i tak dalej aż obiekt osiągnie null jako swój prototyp. null nie ma prototypu i działa jak zakończenie łańcucha prototypów.",
      },
      {
        question: "Czym jest Hoisting??",
        answer:
          "To wbudowany w JavaScript mechanizm wynoszący deklarację zmiennych bez ich inicjowania na początek funkcji.Na początek kodu wynoszone są deklaracje takie jak var, let, const, function, class. Różnica jest w sposobie takiego wynoszenia.",
      },
      {
        question: "opisz inkrementacje i dekrementacje",
        answer:
          "Operatory inkrementacji i dekrementacji, mogą występować przed zmienną lub po zmiennej. Gdy występuje przed zmienną, zwiększenie jej wartości nastąpi w danej instrukcji. Jeżeli występuje po zmiennej, zwiększona wartość wystąpi dopiero w kolejnej instrukcji",
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
        answer: "Operator warunkowy to skrócona wersja warunku if",
      },
      {
        question: "Jaka jest różnica między map a forEach?",
        answer:
          "W teori efekt działania jest taki sam. Map zwraca nam nową tablice natomiast forEach zwraca undefined. Map jest o wiele szybszy niż forEach(60%)",
      },
      {
        question: "Jak wyczyścić tablice?",
        answer:
          "Można to zrobić na wiele sposobów, zerując jej długość: arrayList.length = 0. Możliwe jest także użycie arrayList = [], co sprawi, że wartością zmiennej arrayList będzie nowy obiekt Array. Należy tu jednak pamiętać, że drugą metodę można stosować tylko wtedy, gdy do pierwszego obiektu Array nie ma w kodzie żadnych referencji.",
      },
      {
        question: "Czym jest instrukcja switch?",
        answer: `Instrukcja switch jest sposobem tworzenia warunków na zasadzie przyrównania wyniku do konkretnych wartości. Każdy przypadek kończy się słowem break, które kończy wykonywanie instrukcji switch. Jeżeli pominiemy to słowo, wtedy nawet przy pomyślnym przyrównaniu zostaną wykonane kolejne sprawdzenia, co często może powodować błędy. Dodatkowo instrukcja switch ma specjalny przypadek default który będzie wybierany, gdy wszystkie inne przypadki będą błędne (odpowiednik else w instrukcji if). Warto zaznaczyć, że instrukcja switch nie służy do testowania warunków, a do przyrównywania zmiennej do wartości`,
      },
      {
        question: "Omów pętle for",
        answer: `pętla for jest typowo "manualna". Trzeba ustawić licznik, kiedy ma się zakończyć i jak ma być zwiększany. Dodatkowo ręcznie trzeba się odwoływać do danego elementu w tablicy.`,
      },
      {
        question: "Zakres globalny i obiekt globalny",
        answer: `Gdy uruchamiamy kod JavaScript, dla takiego kodu zawsze powstaje zakres globalny, a także obiekt globalny. Obiekt ten w przypadku przeglądarki nazywa się window. Zarówno w zakresie globalnym, jak i w obiekcie globalnym mogą powstawać zmienne, które mają zasięg globalny. Zasięg globalny oznacza, że zmienne dostępne są w całym kodzie.`,
      },
      {
        question: "Czym jest dependency injection?",
        answer: `to wzorzec projektowy polegający na tym, że obiekt nie inicjalizuje swoich zależności sam, tylko przyjmuje je z zewnątrz poprzez tzw. „wstrzykiwanie”. Główną zaletą takiego podejścia jest między innymi łatwiejsze pisanie testów jednostkowych. Użycie DI może również sprawić, że nasze obiekty będą ze sobą luźniej powiązane.`,
      },
      {
        question: "Czym jest deklaracja przestrzeni nazw?",
        answer: `Deklaracja przestrzeni nazw w języku C# służy do organizowania kodu w logiczne grupy i rozwiązywania konfliktów nazw między różnymi typami lub klasami. Przestrzenie nazw pozwalają uniknąć kolizji nazw, gdy w projekcie używamy różnych klas lub typów o tych samych nazwach.eklaracja przestrzeni nazw jest wprowadzana za pomocą słowa kluczowego namespace. Może być umieszczona na początku pliku lub wewnątrz innych przestrzeni nazw. Wewnątrz deklaracji przestrzeni nazw możemy definiować klasy, struktury, interfejsy i inne elementy kodu.`,
      },
      {
        question: "Do czego służy słowo kluczowe using?",
        answer: `using System; - słowo kluczowe using pozwala nam na włączenie do naszego programu przestrzeni nazw System. `,
      },
      {
        question: "Czym jest garbage collector?",
        answer: `Garbage Collector to mechanizm automatycznego zarządzania pamięcią, który jest dostępny w niektórych językach programowania, takich jak C# i Java. Jego głównym celem jest odciążenie programisty od ręcznego zarządzania pamięcią i zwalniania nieużywanych zasobów.Podstawowym zadaniem Garbage Collectora jest śledzenie i identyfikowanie obiektów w programie, które nie są już dostępne i nie są używane przez żadną część programu. Głównym powodem, dla którego obiekty stają się "śmieciami", jest utrata referencji do nich przez program.w JavaScript również występuje mechanizm Garbage Collectora. JavaScript jest językiem programowania z automatycznym zarządzaniem pamięcią, co oznacza, że programista nie musi ręcznie zarządzać alokacją i zwalnianiem pamięci.`,
      },
      {
        question: "Jak działa pętle while",
        answer:
          "W Pętli while warunek zakończenia pętli jest na początku instrukcji.Jeżeli warunek od razu jest fałszywy, nie zostanie wykonana żadna operacja. Oczywiście, jeżeli znowu wstawimy do instrukcji while stałą wartość true to otrzymamy nieskończoną pętlę. W pętli tego typu nie definiujemy ani początkowego licznika, ani nie definiujemy zmiany licznika. Musimy te rzeczy zrobić ręcznie. Pętlę while zazwyczaj stosuje się w sytuacjach, kiedy nie wiemy dokładnie, ile iteracji ma się wykonać.",
      },
      {
        question: "Jak działa pętla do while",
        answer:
          "Pętla do...while działa dopóty, dopóki warunek w pętli nie będzie wartością false:Warunek pętli jest na końcu wyrażenia, dlatego też pętla do...while wykona się zawsze przynajmniej raz.Jeżeli do warunku wstawimy po prostu wartość true, pętla będzie się kręcić w nieskończoność.",
      },
      {
        question: "Opisz typy danych w javascript",
        answer:
          "Dane możemy podzielić na typy proste(prymitywne) oraz złożone. Do typów prymitywnych zaliczamy: Number, string, bigInt, boolean, undefined, null,symbol a do złożonych:Object (w tym Array, Map i Set).Kolejną charakterystyczną cechą rozróżniającą typy prymitywne od obiektów jest to, że te pierwsze w przeciwieństwie do obiektów są niemutowalne.Mutowalnymi określamy takie dane, którym w czasie ich istnienia możemy zmieniać części składowe",
      },

      {
        question: "Wyjaśnij funkcję parseInt",
        answer:
          "Możesz zamienić String na liczbę całkowitą używając wbudowanej funkcji parseInt. Funkcja ta przyjmuje podstawę do konwersji jako opcjonalny drugi argument, który zawsze należy podawać",
      },
      {
        question: "Jak działa fetch api?",
        answer:
          "Najpierw określamy ścieżkę (Fetch), po drugie żądamy danych z serwera (Request), po trzecie określamy typ treści (Body) i wreszcie uzyskujemy dostęp do danych (Response).",
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
        answer: `Żeby sprawdzić czy dana zmienna jest tablicą, powinniśmy skorzystać z metody Array.isArray(). Wynika to z faktu, że tablice w Javascript także są obiektami i typeof zwraca nam object`,
      },
      {
        question: "Opisz działanie setTimeout",
        answer: `Wywołuje funkcję po określonym czasie opóźnienia. setTimeout oczekuje dwóch argumentów, jednej referencji do funkcji wywołania zwrotnego oraz opóźnienia w milisekundach. setTimeout może również akceptować argumenty po opóźnieniu, a dodatkowe wartości zostaną przekazane do funkcji wywołania zwrotnego. Timer można wyłączyć przy użyciu metody clearTimeout.`,
      },
      {
        question: "Do czego służy setInterval?",
        answer:
          "Ustawia opóźnienie do cyklicznego wywoływania określonej funkcji.Możliwe jest anulowanie wykonania fukcji poprzez wywołanie window.clearInterval(). Jeżeli funkcja ma zostać wykonana tylko raz a nie być wykonywana cyklicznie to należy skorzystać z setTimeout.",
      },
      {
        question: "Opisz pętle forEach",
        answer:
          "Wykonuje dostarczoną funkcję jeden raz na każdy element tablicy.Funkcja callback wywoływana jest jedynie dla indeksów tablicy, którym została przypisana wartość; nie jest wywoływana dla indeksów, które zostały usunięte i tych, którym nigdy nie została przypisana, żadna wartość.Funkcja callback jest wywoływana z trzema argumentami: wartością elementu, jego indeksem i obiektem tablicy, w którym się ten element zawiera.",
      },
      {
        question: "Do czego służy array.indexOf?",
        answer:
          "Zwraca pierwszy, najmniejszy indeks elementu w tablicy równego podanej wartości lub -1, gdy nie znaleziono takiego elementu.",
      },
      {
        question: "Jaka jest różnica między null a undefined?",
        answer:
          "undefined – coś nie zostało zainicjalizowane, null – coś jest aktualnie niedostępne. W JavaScript undefined oznacza, że zmienna została zadeklarowana ale jeszcze nie ma żadnej przypisanej wartości. Null może być reprezentowane jako wartość, bezwartości, inaczej mówiąc możemy przypisać do zmiennej temp pudełko z cyferką 5, albo samo pudełko, samo pudełko jest nullem.Pomimo tego, że operator typeof zwraca nam typ object, zmienna z wartością null nic nie reprezentuje.to że null zwraca typ object jest błędem z czasów powstawania języka.Gdy trafimy na błąd związany z undefined w konsoli przeglądarki będziemy wiedzieć, że o czymś zapomnieliśmy, odwołujemy się do czegoś co nie istnieje.Wartość null i undefined reprezentują puste, nieokreślone wartości. Jeżeli porównamy oba typy przez potrójny znak równości i wypiszemy do konsoli, zobaczymy wartość false",
      },
      {
        question: "Co to są funkcje?",
        answer:
          "Funkcja anonimowa to taka funkcja, która nie ma swojej nazwy. Funkcje takie wykorzystywane są jako funkcje zwrotne, które przekazujemy do innych funkcji.",
      },
      {
        question:
          "Czym jest podwójny wykrzyknik w javascript?",
        answer:
          "Jest to skrócona wersja sprawdzenia czy zmienna to Boolean(true albo false)",
      },
      {
        question: "pętla for in vs for of",
        answer:
          "Pętla for of używana jest do iterowania po obiektach iterowalnych jak string, tablice, struktury danych jak Map czy Set. Pętla for in jest używana głównie do iterowania po właściwościach obiektów. Iterując w pętli for of po stringu np 'hey' zostaną zwrócone nam litery h-e-y,natomiast pętla for in nie jest zalecana do wartości string,zwróciłaby nam w tym przypadku 0,1,2.",
      },
      {
        question: "Czym jest IIFE?",
        answer:
          "Immediately Invoked Function Expression — Funkcja natychmiastowa jest wywoływana automatycznie bezpośrednio po jej odczytaniu. Uzyskujemy ją przez deklarację funkcji anonimowej (bez nazwy) w nawiasach okrągłych, przez co taka konstrukcja jest traktowana jako wyrażenie. Po wyrażeniu dodajemy kolejne dwa nawiasy, przez co jest ono automatycznie wywoływane.Dzięki wykorzystaniu funkcji natychmiastowych ograniczamy zakres (scope) zmiennych tylko do tej metody.Zmniejsza to tym samym potencjalne konflikty z innymi bibliotekami.",
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
        question: "Czym jest npm?",
        answer:
          "Rozwinięciem skrótu NPM jest Node Package Manager. NPM pełni dwie funkcje. Pierwszą z nich to repozytorium otwartych i darmowych bibliotek, frameworków, narzędzi i wszelkiego rodzaju projektów, które są uruchamiane za pomocą Node.js. Jeżeli chcemy zainstalować jakąś paczkę z repozytorium NPM musimy użyć konsoli systemowej. I to jest właśnie druga funkcja NPM, jest to narzędzie linii komend. Za pomocą prostej komendy npm install nazwa_paczki możemy pobrać dowolną paczkę kodu i użyć jej w naszej aplikacji.",
      },
      {
        question: "czym jest funkcja wyższego rzędu?",
        answer:
          "Funkcja wyższego rzędu to funkcja, która przyjmuje inne funkcje jako parametry lub też taka, której wynik również jest funkcją. Przykładowa funkcja wyższego rzędu to map służąca do zwracania listy z wynikami funkcji dla wszystkich elementów z danej listy.",
      },
      {
        question: "Opisz PromiseAll?",
        answer:
          "jeśli chcemy obsłużyć więcej niż jedną obietnicę naraz, a nie zależy nam na kolejności w jakiej obietnice te zostaną rozwiązane, wtedy możemy posłużyć się metodą Promise.all([…]).Jako parametr przyjmuje ona w tablicy, egzemplarze obietnic. Jeśli wszystkie obietnice zostaną spełnione, Promise.all() zwraca obiekt Promise wraz z tablicą wartości zwróconych ze wszystkich spełnionych obietnic. Kolejność wartości zwróconych w tablicy jest taka sama jak kolejność obiektów Promise przekazanych do Promise.all().",
      },
      {
        question: "Opisz Promise.race",
        answer:
          "W odróżnieniu od metody Promise.all(), która czekała do momentu rozwiązania wszystkich obietnic, metoda Promise.race() zwróci pierwszą zakończoną obietnicę.",
      },
      {
        question: "instrukcja break i continue",
        answer:
          "W instrukcjach iteracyjnych słowo kluczowe break bezwarunkowo przerywa wykonwyanie się pętli. Jest to proste rozwiązanie i ma zastosowanie w sytuacji, gdy dalsze powtarzanie instrukcji w pętli, nie są już potrzebne.Słowo kluczowe continue, powoduje wznowienie działania pętli i zaprzestanie wykonywania dalszych instrukcji dla danego powtórzenia. Stosuje się je w przypadku, gdy w danej iteracji pętli nie ma konieczności wykonania instrukcje, które występują po słowie kluczowym continue, ale znajdują się w bloku danej pętli. Popatrzmy na przykład:",
      },
      {
        question: "Jakie są zasady korzystania z rest api?",
        answer:
          "Interfejs API REST powinien zapewniać przypisanie jednego elementu danych, takiego jak nazwa lub adres e-mail użytkownika, do jednego identyfikatora URl. Rozdzielenie klienta i serwera - Podczas projektowania interfejsu API REST aplikacje klienta i serwera muszą być całkowicie niezależne od siebie. Aplikacja kliencka powinna dysponować wyłącznie informacją o identyfikatorze URI żądanego zasobu. Nie może ona wchodzić w interakcje z aplikacją serwera w żaden inny sposób. Podobnie aplikacja serwera nie powinna modyfikować aplikacji klienckiej, a jedynie przekazywać jej żądane dane za pośrednictwem protokołu HTTP.Bezstanowość. Interfejsy API REST są bezstanowe. To oznacza, że każde żądanie musi zawierać wszystkie informacje niezbędne do jego przetworzenia.",
      },
      {
        question:
          "Jakie są zalety i wady rozszerzania wbudowanych obiektów JavaScript?",
        answer:
          "Rozszerzanie wbudowanych obiektów uważane jest za złą praktykę. W ten sposób zmieniamy zachowanie obiektów. I o ile mowa o obiekcie, z którego będzie działał tylko konkretny kod, to problem nie jest duży, ale w przypadku zewnętrznego kodu, który wykorzysta rozszerzony obiekt, nic nie będzie działać. Dobrą praktyką jest korzystanie ze wbudowanych metod. Dodawanie własnych metod do obiektów może być problematyczne także ze względu na interferencje z bibliotekami, które same mogą rozszerzać obiekty o te same metody. Wówczas dojdzie do konfliktu, nadpisania, i kod po prostu nie będzie działał. Zaletą rozszerzania wbudowanych typów może być natomiast to, że można zbudować w ten sposób polyfill, przez co kod będzie działał również na starszym oprogramowaniu, przeglądarkach nieobsługujących nowszych wersji JavaScript.",
      },
      {
        question: "Czym jest promise?",
        answer:
          "Promise jest obiektem w JavaScript, który reprezentuje wartość, która może być dostępna teraz, w przyszłości lub nigdy. Obietnice zostały wprowadzone, aby ułatwić pracę z kodem asynchronicznym, unikając tak zwanej 'piramidy wywołań zwrotnych' i czyniąc kod bardziej czytelnym i łatwiejszym w utrzymaniu. Obiekty Promise mają trzy stany: 'pending' (oczekujący), 'fulfilled' (spełniony) i 'rejected' (odrzucony). W przypadku obietnicy w stanie oczekującym, może ona przejść do stanu spełnionego z wynikiem lub do stanu odrzuconego z powodem błędu. Możemy manipulować obietnicami przy użyciu metod takich jak 'then', 'catch' i 'finally'. Metoda 'then' jest wywoływana, gdy obietnica zostanie spełniona, a metoda 'catch' jest wywoływana, gdy obietnica zostanie odrzucona. Metoda 'finally' jest opcjonalna i jest wywoływana bez względu na to, czy obietnica została spełniona, czy odrzucona, umożliwiając nam wykonanie pewnych operacji końcowych. Dzięki temu, używając obietnic, możemy lepiej kontrolować przepływ asynchronicznego kodu i obsługiwać błędy w bardziej czytelny sposób.",
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
        question: "Czym jest JSON?",
        answer:
          "JSON (ang. JavaScript Object Notation) to otwarty format zapisu struktur danych. Jego przeznaczeniem jest najczęściej wymiana danych pomiędzy aplikacjami. JSON składa się z par atrybut – wartość oraz typów danych tablicowych. Notacja JSONa jest zbieżna z obiektami w języku JavaScript..Jaki problem rozwiązuje JSON?: Często zachodzi potrzeba wymiany danych pomiędzy aplikacjami lub pomiędzy składowymi architektury (np. pomiędzy front-endem a back-endem aplikacji). Wysyłając wartości liczbowe lub prosty string nie mamy żadnego dylematu – problem zaczyna się wtedy, kiedy chcemy przekazać tablicę, obiekt, lub serię danych zawartych w jednej zmiennej. Właśnie w takim przypadku używamy formatu JSON.",
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
        question: "Czym jest redundancja danych?",
        answer:
          "Redundancja to nadmiarowość w stosunku do tego, co konieczne lub zwykłe. Określenie może odnosić się zarówno do nadmiaru zbędnego lub szkodliwego, niecelowo zużywającego zasoby, jak i do pożądanego zabezpieczenia na wypadek uszkodzenia części systemu.",
      },
      {
        question: "Czym jest kolizja nazw?",
        answer:
          "Sytuacja, gdy dwie różne części aplikacji mają zdefiniowane zmienne globalne o tej samej nazwie, ale różnym przeznaczeniu.",
      },
      {
        question: "Czym jest transpilacja?",
        answer:
          "Transpilacja to proces konwersji kodu ES6 do wariantu ES5. Jest to technika, która z jednej strony umożliwia nam pisanie nowoczesnego kodu ES6 a z drugiej sprawia, że nasze aplikacje mogą być uruchamiane np. w starszych przeglądarkach, które tego najnowszego standardu JavaScript nie obsługują.",
      },
      {
        question: "Czym jest typ bigINt?",
        answer:
          "Typ ten powstał po to aby operować na bardzo dużych liczbach, z którymi nie radzi sobie typ number. Mowa tu o liczbach większych niż 2^53. Wtedy typ number traci swoją precyzję i dlatego powstał typ bigint. Deklaruje się go używając litery n na końcu liczby",
      },
      {
        question: "Co robi metoda includes?",
        answer:
          "Sprawdza, czy element istnieje w tablicy i zwraca wartość logiczną true lub false.",
      },
      {
        question: "Co nowego pojawiło się es6?",
        answer:
          "Klasy definiowane za pomocą Class, zmienne let oraz const oraz nowe podejście do zakresu zmiennych. Łańcuchy szablonowe plus możliwość tworzenia np. wieloliniowych String, przypisywanie wartości z użyciem Destructuring,Mechanizm Promises zapewniający nowe podejście do programowania asynchronicznego,Arrow functions funkcje definiowanie z użyciem strzałki =>,Natywne moduły,Nowe metody String, Math, Array czy Number",
      },
      {
        question: "różnice pomiędzy == a ===?",
        answer:
          "== to operator równości, czyli zwraca prawdę, jeżeli wartości są sobie równe. Natomiast operator identyczności === zwraca prawdę, jeżeli wartości są sobie równe, a zmienne są tego samego typu. W praktyce wykorzystuje się to często przy funkcjach które zwracają raz wartość liczbową a raz wartość boolean. jeżeli mamy '2' == 2 to JS zmieni typ pierwszego parametru na number.",
      },
      {
        question: "Jak działa async?",
        answer:
          "Aby JavaScript nie blokował drzewa renderowania można wykorzystać regułę async. Atrybut async powoduje, że kod JS jest wykonywany niezależnie od etapu ładowania się strony i nie wpływa na ścieżkę renderowania.",
      },
      {
        question: "opisz atrybut defer?",
        answer:
          "W przypadku kiedy JavaScript manipuluje drzewem DOM, można wykorzystać defer. Dzięki temu, skrypty w nagłówku będą potraktowane z takim priorytetem, jakby były na samym końcu strony. W przypadku kiedy chcemy pogodzić asynchroniczne ładowanie i możliwość manipulacją drzewem DOM, można wykorzystać bibliotekę require.js.",
      },
      {
        question: "różnice między splice vs slice",
        answer:
          "Obie metody potrafią usuwać wybrane elementy, które następnie zwracają.splice modyfikuje oryginalną tablicę. Slice tworzy i modyfikuje kopię oryginalnej tablicy. W przypadku slice po każdym jej wywołaniu uzyskujemy ten sam wynik ponieważ za każdym razem metoda tworzy sobie nową kopię oryginalnej tablicy i na niej pracuje. Z kolei metoda splice pracuje cały czas na tej samej tablicy. Metoda splice potrafi również dodawać elementy do tablicy.",
      },
      {
        question: "Czym jest symbol w javascript?",
        answer:
          "Funkcja Symbol zwraca wartość typu symbol, Każdy symbol zwrócony przez Symbol jest unikalny. Symbol powinien być użyty jako identyfikator własności obiektu, został zaprojektowany jedynie w tym celu.typ Symbol jest typem prostym",
      },
      {
        question: "Opisz słowo kluczowe this",
        answer:
          "Można powiedzieć, że jest to referencja do obiektu, który wywołał daną funkcję. W zakresie globalnym “this” jest po prostu referencją do obiektu window i mogą być w zasadzie stosowane zamiennie.",
      },
      {
        question: "Czym jest funkcja strzałkowa?",
        answer:
          "Funkcja strzałkowa ma krótszą składnię niż zwykłe wyrażenie funkcji oraz nie posiada własnego this, argumentów, super, właściwości new.target. Taki sposób wyrażenia funkcji najlepiej wykorzystać przy tworzeniu funkcji bez metod, ponadto nie mogą zostać one użyte jako konstruktory.",  
      },
      {
        question: "Czym jest wyrażenie funkcyjne?",
        answer:
          "Zmienne w JavaScripcie mogą przechowywać funkcję.wyrażeniem funkcyjnym  jest podstawienie funkcji pod zmienną.Wyrażenie i definicja różnią się od siebie nie tylko sposobem zapisu, ale także tym, jak taki kod jest interpretowany przez przeglądarkę. Funkcja stworzona za pomocą deklaracji jest od razu dostępna dla całego skryptu. Wynika to z działania mechanizmu hoistingu,który przenosi taką deklarację na początek danego zakresu kodu (skryptu lub funkcji).W przypadku wyrażeń funkcyjnych takie odwołanie skończy się błędem.",
      },
      {
        question: "Opisz działanie return",
        answer:
          "Każda funkcja zwraca jakąś wartość. Domyślnie jest nią undefined.Instrukcja return zwraca wartość i przerywa dalsze działanie danej funkcji. W wielu edytorach kod leżący za return będzie miał przytłumione kolory, co symbolizuje, że taki kod nigdy sie nie wykona. Instrukcji return może być wiele dla jednej funkcji. Zawsze jednak wykonana zostanie tylko jedna. Instrukcja return może zwracać dowolną wartość.",
      },
      {
        question: "Opisz pracę z plikiem psd",
        answer:
          "Psd to projekt graficzny bazujacy na programie Adobe Photoshop. Plik ten dostarcza wszystkich niezbędnych grafik, z jakich składa się strona, jak i informacji pozwalających na jej zakodowanie. Dzięki takiej wizualizacji Web Developer jest w stanie przenieść projekt na kod Html. ",
      },
      {
        question: "Jak działa metoda shift?",
        answer:
          "Metoda shift usuwa pierwszy element z tablicy i zwraca ten element jako wynik operacji. Pozostałe elementy tablicy są przesuwane, tak że następny element staje się pierwszym.",
      },
      {
        question: "Czym jest metoda?",
        answer:
          "W języku JavaScript metoda jest funkcją, która jest powiązana z obiektem lub typem danych i może być wywołana na tym obiekcie lub typie danych. Metody umożliwiają wykonywanie określonych działań lub operacji na danym obiekcie lub typie danych. Mogą manipulować danymi, zwracać wartości, modyfikować stan obiektu lub wykonywać inne operacje zdefiniowane dla danego typu lub obiektu.",
      },
      {
        question: "Na czym polega destrukturyzacja?",
        answer:
          "Destrukturyzacja to proces wydobycia lub rozpakowania wartości z tablicy lub obiektu i przypisywania ich do oddzielnych zmiennych. Można to zrobić przy użyciu składni przypominającej strukturę tablicy lub obiektu, co pozwala łatwo dostępować do poszczególnych elementów lub właściwości.",
      },
      {
        question: "jakie są różnice między arrow function a regular function?",
        answer:
          "Funkcja strzałkowa ma krótszą składnię niż zwykłe wyrażenie funkcji oraz nie posiada własnego this, argumentów, super, właściwości new.target. Taki sposób wyrażenia funkcji najlepiej wykorzystać przy tworzeniu funkcji bez metod, ponadto nie mogą zostać one użyte jako konstruktory.",
      },
    ],
  },

  mutations: {
    randomJavascriptQuestion(state) {
      state.javascriptQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
