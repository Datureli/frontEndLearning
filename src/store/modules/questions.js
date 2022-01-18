export default {
  namespaced: true,

  state: {
    htmlQuestions: [
      {
        question: "Czym jest Html?",

        answer: `HTML (Hypertext Markup Language) to język znaczników służący do prezentacji treści na stronach internetowych, który jest oparty o hiperłącza łączące poszczególne dokumenty pomiędzy sobą. Przeglądarki internetowe jednoznacznie interpretują kod HTML i na jego bazie przedstawiają treść końcowym użytkownikom.`,

        secondAnswer: `<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
  </body>
</html>`,
      },
      {
        question: "jak wstawić ikonę obok adresu strony www?",

        answer: `Polecenie to pozwala dodać ikonkę (favicon.ico), która będzie widoczna w przeglądarce przy adresie naszej strony. Typowy rozmiar ikony to 16x16 pikseli. W systemie Windows jest dodatkowa możliwość umieszczenia skrótu na pulpicie - wtedy przydatna może być ikona o rozmiarach 32x32. Format *.ico pozwala zapisać dwie wersje rozmiaru w jednym pliku. Niektóre przeglądarki - nie MSIE 6 - pozwalając również używać innych formatów graficznych, takich jak np. PNG.`,
        secondAnswer: `<head>
        <link rel="shortcut icon" href="adres ikony">
      </head>`,
      },

      {
        question: "Czym jest tag <blockquote>?",
        answer:
          "Tag <blockquote> określa treść cytowaną ze źródła zewnętrznego (gazeta, praca naukowa itp.for         (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
        secondAnswer: `<blockquote cite="http://developer.mozilla.org">
        <p>To jest cytat z Mozilla Developer Center.</p>
          </blockquote>`,
      },
      {
        question: "Czym jest Html?",
        answer: `Jest to znacznik, który określa znaczenie elementu.
         Głównie do celów dostępności (ang. accessibility). Jest częścią specyfikacji ARIA. Został też dodany do HTML5.`,
      },
      {
        question: "Co to jest W3C?",
        answer: `Konsorcjum zajmuje się przede wszystkim dbaniem o prawidłowy rozwój sieci. Opracowuje standardy tworzenia protokołów http, standardy tworzenia stron w języku HTML, XHTML, standardy CSS, XML, DOM oraz wiele innych.`,
      },
      {
        question: "Czym jest tag <picture>?",
        answer: `Tag <picture> zapewnia programistom stron internetowych większą elastyczność w określaniu zasobów obrazu. Zamiast jednego obrazu skalowanego w górę lub w dół to, w zależności od rozmiaru viewportu, można dobrać wiele obrazów tak, żeby dla każdej rozdzielczości ładnie wypełnić okno przeglądarki.`,
        secondAnswer:
          "Element <picture> ma dwa różne tagi: jeden lub więcej tagów <source> oraz jeden tag <img>.Tag <source> ma następujące właściwości:srcset (wymagany): określa URL obrazu do wyświetlenia media: akceptuje wszelkie prawidłowe media query, które normalnie byłyby ustawione w CSS      rozmiary: definiuje pojedynczy deskryptor szerokości, media query z deskryptorem szerokości lub rozdzieloną przecinkami listę media query z deskryptorem szerokości type: określa typ MIME",
        thirdPartOfAnswer:
          "Przeglądarka użyje wartości atrybutów, aby załadować najbardziej dopasowany obraz. Tag <img> służy do zapewnienia kompatybilności wstecznej, jeśli przeglądarka nie obsługuje tagu <picture>",
      },
      {
        question: "Czym jest Web Socket?",
        answer:
          "Web sockets to technologia następnej generacji do dwukierunkowej komunikacji dla aplikacji internetowych, która działa na jednym gnieździe i jest wystawiona za pomocą interfejsu napisanego w JavaScript dla przeglądarek zgodnych z HTML5,Po uzyskaniu połączenia gniazda z serwerem WWW, możesz wysyłać dane z przeglądarki do serwera po wywołaniu metody send() oraz odbierać dane z serwera dzięki obsłudze zdarzenia onmessage",
      },
      {
        question: "Czym jest tag <article>?",
        answer:
          "Tag <article> określa niezależną i osobną treść. Najczęściej  używa się go na blogach. ",
      },
      {
        question: "Objaśnij semantyczny html",
        answer:
          "Semantyczny HTML to kod napisany za pomocą tagów które mają określone znaczenie i mogą być odpowiednio interpretowane przez przeglądarkę i developera. Dla odróżnienia tagi które nie są semantyczne są obojętne tzn. nie mówią wprost nic na temat swojej zawartości.Kluczowymi kwestiami stosowania semantycznego html jest accessibility oraz SEO",
        secondAnswer:
          "Tagi nie-semantyczne,Do tej grupy należy np. bardzo popularny <div> </div> lub <span> </span>Tagi semantyczne:",
      },

      {
        question: "to czego służy znacznik <pre>?",
        answer:
          "Wprowadza tekst preformatowany, czyli napisany czcionką monotypiczną (o stałej szerokości znaku), który uwzględnia dodatkowe spacje, tabulację i znaki końca linii (nie trzeba stosować znaczników <br>) oraz nie jest automatycznie zawijany. Dzięki niemu możesz np. wkleić na stronę WWW tekst, wprost ze zwykłego edytora, bez stosowania dodatkowych znaczników (niestety informacje dotyczące formatowania zostaną pominięte). Należy jednak przy tym pamiętać, aby tekst nie zawierał znaków: " <
          " oraz " >
          " (w zamian używaj: &lt; i &gt;).",
        thirdPartOfAnswer: "",
      },
      {
        question: "Do czego służy znacznik Main?",
        answer:
          "Tag <main> określa główną treść dokumentu. Może to ułatwić korzystanie ze skrótów klawiszowych, przybliżaniu w przeglądarkach mobilnych i przy innych czynnościach. W dokumencie musi znajdować się jeden element <main>. Element <main> nie może być zagnieżdżony w żadnym z tych elementów: <article>, <aside>, <footer>, <header> lub <nav>.",
        secondAnswer: "",
      },
      {
        question: "Do czego służy znacznik nav?",
        answer:
          "Tag <nav> definiuje zestaw linków nawigacji. W tagu nav powinny się znaleźć podstawowe linki służące do nawigacji, a nie wszystkie linki na stronie.",
        secondAnswer: "",
      },
      {
        question: "Do czego służy znacznik footer?",
        answer:
          "Tag <footer> definiuje stopkę dokumentu lub sekcji i powinien zawierać informacje o stronie, która go zawiera. Ten tag zwykle zawiera informacje o autorze, prawach autorskich, dane kontaktowe, mapę witryny, powrót do góry oraz linki do powiązanych dokumentów,",
        secondAnswer: "",
      },
      {
        question: "Do czego służy znacznik header?",
        answer:
          "Tag <header> reprezentuje kontener na treść wprowadzającą lub zestaw linków nawigacyjnych. Zazwyczaj zawiera logo, linki nawigacyjne lub nagłówki.",
        secondAnswer: "",
      },
      {
        question: "Czym jest accessibility?(dostępność)",
        answer:
          "Accessibility (pl. dostępność) to tworzenie aplikacji w sposób który jest łatwy do interpretacji dla przeglądarki i/lub specjalnych urządzeń przystosowanych przez osoby niepełnosprawne. Po prostu przeglądarka wie kiedy ma do czynienia z obrazkiem, nawigacją czy artykułem.",
        secondAnswer: "",
      },
      {
        question: "Na czym polega semantyczny Html?",
        answer: "Znacznik Main służy do umieszczania głównej części strony",
        secondAnswer: "",
      },
    ],
    cssQuestions: [
      {
        answerNumbers: 2,
        question: "Rozwiń i opisz skrót BEM",
        answer:
          'Nazwa BEM pochodzi od angielskiego Block Element Modifier.Opiera się ono na podziale elementów na stronie na:bloki - na przykład formularz albo menu,elementy - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu,modyfikatory - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu',
        secondAnswer:
          "W BEM istnieje pewna konwencja nazewnictwa klas CSS. Ogólne zasady tego nazewnictwa przedstawiam poniżej:.block - pierwsze słowo w nazwie oznacza, że klasa dotyczy danego bloku,elementy - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu,modyfikatory - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu",
      },
      {
        answerNumbers: 1,
        question: "Czym jest Css sprites?",
        answer:
          "To technika pozwalająca na łączenie wielu mniejszych obrazów, wykorzystywanych na stronie www, w jeden większy plik, który przy odpowiedniej pomocy styli CSS pozwoli zaoszczędzić nam pasmo serwera oraz czas ładowania się strony,",
      },
      {
        answerNumbers: 1,
        question: "Rozwiń skrót Css",
        answer:
          "Kaskadowe arkusze stylów css służą do definiowania układów graficznych dokumentów HTML.Arkusz stylów CSS zawiera reguły opisujące w jaki sposób przeglądarka internetowa ma wyświetlać zawartość dokumentów HTML lub XML. Za pomocą arkuszy CSS można opisać wiele właściwości prezentacji elementów strony: wybrać kolor tekstu, wypełnienie tła, rodzaj czcionki, ustawić odstępy między elementami czy zdefiniować położenie jednego elementu względem drugiego.",
      },
      {
        answerNumbers: 1,
        question: "Czym jest model pudełkowy?",
        answer:
          "Box model - czyli model pudełkowy - to opis budowy elementów blokowych na stronie www. To słowne określenie pozwala wyobrazić sobie w jaki sposób poszczególne elementy składają się na wielkość całego pudełka. Tymi elementami są marginesy zewnetrzne (w css: margin), obramowanie (w css: border), marginesy wewnętrzne (w css: padding) oraz szerokość (w css: width). Jak się za chwilkę okaże budowa box modelu jest prosta, ale czy na pewno oczywista ... ",
      },
      {
        question: "Opisz zalety Sass",
        answer:
          "Sass to preprocesor CSS,który pozwala na znacznie szybszą i wydajniejszą pracę z arkuszami stylów.Preprocesory pozwalają na programowanie wśród arkuszy stylów, co daje ogromne możliwości przyspieszenia pracy.przeglądarki czytają kod CSS, a kod w formacie Sass będzie dla nich niezrozumiały. Rozwiązaniem tego problemu jest kompilacja plików Sass do wyjściowego CSS",
        secondAnswer:
          "W Sass możemy używać zmiennych,Zagnieżdzanie.Mixins.DziedziczenieKolejna bardzo mocna cecha. Dzięki dziedziczeniu możemy przekazywać część zastosowanych deklaracji z jednego obiektu na drugi. To z kolei ponownie pozwala nam na podążanie za regułą DRY. Aby dany element odziedziczył cechy swego przodka należy wstawić wyrażenie @extend a następnie selektor z którego mamy dziedziczyć. W przykładzie wykorzystamy klasę alert (która może formatować jakiś komunikat) i dodamy kolejne jej odmiany:",
        thirdPartOfAnswer:
          " Do naszej dyspozycji SASS udostępnia operatory typu: +, -, *, /, oraz %. Możliwa jest także konwersja wartości (np z pikseli na procenty).",
      },
      {
        question: "Czym się różni scss od sass?",
        answer:
          "Podstawową różnicą jest składnia, pliki scss są zbliżone do składni CSS, natomiast pliki sass do składni języka Ruby.",
        secondAnswer: "",
      },
      {
        question:
          "Jaka jest różnica między „resetowaniem” a „normalizowaniem” CSS?",
        answer:
          "Resetowanie – ma na celu usunięcie wszystkich domyślnych stylów przeglądarki. Na przykład marginesy, wypełnienia, rozmiary czcionek wszystkich elementów są resetowane. Normalizowanie – zachowuje przydatne style domyślne zamiast cofania wszystkiego. Poprawia również różnice w wyświetlaniu elementów w różnych przeglądarkach.",
        secondAnswer: "",
      },
    ],
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
        question: "Jaka jest różnica między var,let a const?",
        answer:
          "Pierwsza i najważniejsza różnica między let/const a var to zasięg zmiennych.W przypadku let/const zmienne mają zasięg blokowy, co w skrócie oznacza od klamry do klamry.Zmienne deklarowane za pomocą var mają natomiast zasięg funkcyjny, czyli ich zasięg określa ciało funkcji.Ostatnią różnicą - dość mało znaną - jest to, że deklarując zmienną globalną var (poza ciałem funkcji), dodawana jest ona jako właściwość obiektu window. W przypadku let nic takiego się nie dzieje:",
      },
      {
        question: "Czym jest temporal dead zone?",
        answer:
          "Miejsce przed deklaracją zmiennej let/const zwie się temporal dead zone, bo nie możemy odwoływać się do zmiennej, której jeszcze nie zadeklarowaliśmy. Dzięki takiemu zabiegowi nasz kod staje się bardziej logiczny - najpierw tworzymy wszystkie klocki (zmienne, funkcje), a dopiero potem ich używamy.",
      },
      {
        question: "Czym jest Hoisting??",
        answer:
          "Kolejna różnica między starszą deklaracją var a jej młodszymi braćmi to tak zwany hoisting (windowanie).JavaScript lubi pomagać programiście. Jednym z takich przypadków pomocy jest niewidoczne dla programisty wynoszenie deklaracji na początek kodu. I tak na początek kodu wynoszone są deklaracje takie jak var / let/ const / function / class. Różnica jest w sposobie takiego wynoszenia.",
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
        question: "Omów pętle while",
        answer:
          "W pętli tego typu nie definiujemy ani początkowego licznika, ani nie definiujemy zmiany licznika. Musimy te rzeczy zrobić ręcznie.Pętlę while zazwyczaj stosuje się w sytuacjach, kiedy nie wiemy dokładnie, ile iteracji (powtórzeń) ma się wykonać. Wyobraź sobie, że chcesz wygenerować unikalny numer ID albo jakąś liczbę. Generujesz więc daną rzecz, następnie sprawdzasz czy wynik pasuje do założeń. Jak nie pasuje, generujesz dalej. I tak do skutku aż trafisz.",
        secondAnswer:
          "while (wyrażenie_sprawdzające_zakończenie_pętli) {  ...fragment kodu który będzie powtarzany...}",
      },
      {
        question: "Opisz typy danych w javascript",
        answer:
          "W JavaScript dane możemy podzielić na dwie grupy: typy proste(prymitywne) oraz złożone.Do typów prymitywnych zaliczamy:Number,string,bigInt,boolean,undefined,null,symbol a do złożonych:Object (w tym Array, Map i Set).Kolejną charakterystyczną cechą rozróżniającą typy prymitywne od obiektów jest to, że te pierwsze w przeciwieństwie do obiektów są niemutowalne. Mutowalnymi określamy takie dane, którym w czasie ich istnienia możemy zmieniać części składowe:",
        secondAnswer:
          "JavaScript jest językiem dynamicznie typowanym. Oznacza to, że nie musimy deklarować typu zmiennej, ponieważ jest on automatycznie konwertowany do porządanych wartości w czasie wykonywania się skryptu.",
      },
      {
        question: "Czym jest html canvas?",
        answer:
          "element języka HTML wprowadzony w HTML 5 pozwalający na dynamiczne, skryptowe renderowanie kształtów i obrazów bitmapowych. Dzięki wprowadzeniu obiektu canvas możliwe stało się tworzenie dynamicznych dwu- i trójwymiarowych animacji czy gier działających w przeglądarkach bez dodatkowych wtyczek.",
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
          "Wykonuje dostarczoną funkcję jeden raz na każdy element tablicy.Metoda forEach wykonuje dostarczoną funkcje callback raz dla każdego elementu tablicy. Funkcja callback wywoływana jest jedynie dla indeksów tablicy, którym została przypisana wartość; nie jest wywoływana dla indeksów, które zostały usunięte i tych, którym nigdy nie została przypisana żadna wartość.Funkcja callback jest wywoływana z trzema argumentami: wartością elementu, jego indeksem i obiektem tablicy, w którym się ten element zawiera.",
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
          "Gdy przypiszemy wartość null do zmiennej oznacza to, że zerujemy tą zmienną. Nie chcemy aby posiadała ona jakąkolwiek wartość lub referencję do czegokolwiek. Zmienna empty reprezentuje zamierzony brak wartości.Pomimo tego, że operator typeof zwraca nam typ object, zmienna z wartością null nic nie reprezentuje. Jak już wspominałem wcześniej, to że null zwraca typ object jest błędem z czasów powstawania języka JavaScript.undefined może pojawić się gdy nie inicjalizujemy zmiennej,Łatwiej będzie nam pracować z kodem i znaleźć problem gdy nie będziemy posługiwać się wartością undefined. Gdy trafimy na błąd związany z undefined w konsoli przeglądarki będziemy wiedzieć, że o czymś zapomnieliśmy, odwołujemy się do czegoś co nie istnieje. Zawęzimy opcję szukania problemu gdy nie będziemy się dodatkowo posługiwać undefined, a zostawimy go dla JavaScript.",
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
        question: "Czym jest funkcja anonimowa?",
        answer: "Funkcja strzałkowa to skrócony zapis wyrażenia funkcyjnego:",
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
    vueQuestions: [
      {
        question: "Czym jest Vuex?",
        answer:
          "Dzięki Vuex możemy przechowywać stan naszej aplikacji Vue w centralnej lokalizacji.Pozwala nam pobierać i ustawiać stan współdzielenia oraz automatycznie propagować wszelkie zmiany dokonane we wspólnym stanie do wszystkich komponentów.",
      },
      {
        question: "Jakie są zalety Vue.js?",
        answer:
          "vue js posiada niski próg wejścia.Framework jest również lekki,waży tylko 18-23 kb,Vue js jest szybszym frameworkiem niż Angular czy React,virtual DOM,data binding,komponentyAnimation/Transition: VueJS provides several techniques to implement the transition to HTML components. This framework allows you to add third party animation libraries.templates.",
        secondAnswer:
          "konkurentów React i Angular. Jako React jest oparty na komponentach oraz jednostronnym przepływie danych, i podobnie do Angular posiada proste szablony z dobrą składnią. Vue nie potrzebuje konfiguracji środowiska, Do komunikacji pomiędzy komponentami używa się vuex czyli biblioteki, która zarządza dużą ilością danych jednocześnie.Posiada bardzo szczegołową dokumentacje",
      },
      {
        question: "Czym jest composition api?",
        answer:
          "pozwala na pisanie komponentów w sposób oparty na funkcjach. Usprawnienie to zostało zainspirowane przez React Hooks. Nowe API umożliwia hermetyzację logiki w tzw. „composition functions” i pozwala używać jej ponownie we wszystkich komponentach.   ",
      },
      {
        question: "Wyjaśnij cykl życia w Vue",
        answer:
          "pozwala na pisanie komponentów w sposób oparty na funkcjach. Usprawnienie to zostało zainspirowane przez React Hooks. Nowe API umożliwia hermetyzację logiki w tzw. „composition functions” i pozwala używać jej ponownie we wszystkich komponentach.   ",
      },
      {
        question: "Jak stworzyć two-way binding w Vue js?",
        answer:
          "Do stworzenia służy dyrektywa v-model.W obustronnym przepływie danych data albo model jest przypięty do DOM i dom jest przypięty do modelu",
      }, 
      {
        question: "Podaj różnicę między one-way-data flow a two-way data binding",
        answer:
          "W przepływie jednostronnym,wizualna warstwa aplikacji nie aktualizuje się automatycznie kiedy,kiedy data się zmienia musimy napisać kod który będzie aktualizować się podczas każdej zmiany.W przypadku two-way data binding zmiany dokonywane są automatycznie.Przykłady użycia one-way w Vue to v-bind natomiast two-way to v-model",
      },
      {
        question: "Jaka jest różnica między Vue2 a Vue3?",
        answer:
          "Vue 3.0 jest o wiele bardziej wydajne w porównaniu do swojej poprzedniej wersji. Mówimy tutaj o rozmiarze gotowej aplikacji Vue, która jest do 41% lżejsza dzięki użyciu techniki tree-shaking, początkowym renderowaniu, które jest do 55% szybsze, aktualizacjach, które są aż o 133% szybsze oraz o 54% mniejszym zużyciu pamięci.Twórcy Vue.js zaproponowali w nowym wydaniu dwie funkcje dla Single-File Components: script setup oraz style vars.Vue 3.0 zapewnia również lepszą integrację z językiem TypeScript.",
      },
      {
        question: "Co to są gettery?",
        answer:
          "to są funkcje które zwracają nam stan.obiekt.defineProperty API, jeśli jeszcze tego nie wiesz. Ponieważ system reaktywności Vue opiera się na tym API.",
      },
      {
        question: "Czym jest virtual DOM?",
        answer:
          "virtual dom to obiket javascript reprezentujący document object model(dom)Vue aktualizuje virtual dom zamiast aktualizowac po prostu dom.Dzięki temu redukujemy koszt aktualizacji prawdziwego dom.Wirtualny dom oferuje nam możliwość kontrolowania w którym momencie virtual dom ma być wyrenderowany.Oferuje również możliwość polepszenia wydajności naszych aplikacji internetowych poprzez zmniejszenie ilosci aktualizacji dla dom",
      },
      {
        question: "Wymień funkcjonalności w Vue",
        answer:
          "Raktywność,templates,komponenty,transition,routing",
      },
      {
        question: "Objaśnij cykl życia w Vue",
        answer:
          "Raktywność,templates,komponenty,transition,routing",
      },
      
      {
        question: "co to jest flux?",
        answer:
          "Flux to wzorzec projektowy stworzony do ujednolicenia przepływu danych w aplikacjach, szczególnie tych frontowych. Posiada trzy części: dispatch, store i view.View (ang. widok) to część w której użytkownik komunikuje się z aplikacją.Store to w dużym uproszczeniu obiekt z stanem aplikacji.Dispatcher to centralna część fluxa z której wysłamy prośby o zmianę stanu aplikacji.",
      },
      {
        question: "Wyjaśnij na czym polega reaktywność w vue",
        answer:
          "Wszystkie właściwości zdefiniowane w instancji vue są reaktywne.Oznacza to ,że jeżeli zajdzie jakaś zmiana to komponent automatycznie się zaktualizuje.Podczas inicjalizacji wszystkie właściwości są konwertowane do getterów oraz setterów,dzięki temu vue wie kiedy należy dokonać aktualizacji",
      },
      {
        question: "Czym jest single file component?",
        answer:
          "Jest to plik z rozszerzeniem vue. zawierającym komponent vue.W przeciwieństwie do stndardowego podziału plików na style,szkielet oraz logike w odrębnych plików,w single file component wszystko znajduje się w jednym pliku.",
      },
      {
        question: "Wyjaśnij na czym polega przepływ danych w vue",
        answer:
          "Vue używa one-way data flow.Dane są przekazywane do komponentu dziecka z komponentu rodzica za pomocą właściwości props",
      },
      {
        question: "czym jest mapState?",
        answer:
          "życie mapState() pozwala na pobranie i przypisanie do lokalnego scope wartości bezpośrednio z sekcji state w store. W ten sposób otrzymujemy czyste dane – bez żadnych modyfikacji. Ma to duży sens, jeśli są to typy proste – jakaś flaga będąca wartością boolean (true/false), np. flaga „loading” itp.",
      },
      {
        question: "Czym są sunspense components",
        answer:
          "Suspense components to nowa funkcja w vue 3 która tworzy.Ogólną ideą jest umożliwienie komponentom „zawieszenia” renderowania, np. Jeśli potrzebują dodatkowych danych ładowanych ze źródeł zewnętrznych. Gdy wszystkie informacje będą dostępne, js ponownie spróbuje wyrenderować komponent.Aby to osiągnąć, React korzysta z Promises. Komponent może rzucić Promise w swojej metodzie renderowania (lub cokolwiek, co jest wywoływane podczas renderowania komponentu , np. Nowy statyczny getDerivedStateFromProps). React łapie rzuconą Obietnicę i szuka najbliższego Suspensekomponentu na drzewie, które działa jak rodzaj granicy. SuspenseSkładnik bierze element jako fallbackpodpora, która będzie wyświetlana, gdy wszystkie dzieci w jego poddrzewem zawiesinie, bez względu na to gdzie i dlaczego.",
      },
      {
        question: "Jaka jest różnica między composition api a option api?",
        answer:
          "Composition API. Udostępnia nowy sposób tworzenia komponentów, który znacząco różni się od podejścia zaprezentowanego w poprzedniej wersji frameworka.Przede wszystkim większa elastyczność w układaniu logiki kodu, jego lepsza reużywalność oraz poprawiona czytelność dzięki mniejszej ilości zagłębień.Doświadczenie pokazało, że większe aplikacje oparte o Vue.js w wersji 2 były ciężkie do utrzymania, do rozbudowy oraz do diagnozowania błędów.",
        secondAnswer:
          "Composition api posiada setup hook wewnątrz którego piszemy swój kod. Wewnątrz setup hook możemy pogrupować części naszego kodu według logicznego porządku.Dzięki composition api nie musimy więc używać Mixinów.",
      },
      {
        question: "Jaka jest różnica między watch a watchEffect",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
    ],
    typescriptQuestion: [
      {
        question:
          "Jaka jest różnica między wyrażeniem(explicity) a niejawnością(implicity)?",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
      {
        question: "czym jest enum?",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
      {
        question: "czym jest typ unknown?",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
      {
        question: "czym jest generics?",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
      {
        question: "Opisz typ any",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
      {
        question: "Opisz typ void",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
      {
        question: "Czym jest interfejs  w typescript",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
    ],
    gitQuestions: [
      {
        question: "czym jest git?",
        answer:
          "Git to rozproszony system kontroli wersji.Służy on więc do zarządzania historią kodu źródłowego. ",
        secondAnswer: `pozwala na jednoczesną pracę na tym samym kodzie przez kilka osób, 
          umożliwia transferowanie i łączenie zmian z różnych branchy w jednym projekcie,
          pozwala na pracę offline we własnym repozytorium,
          jest szybki i wydajny.`,
      },
      {
        question: "Czym jest commit?",
        answer:
          "Commit – ostateczne zatwierdzenie tymczasowo dokonanych zmian.Kiedy zatwierdzasz zmiany w Gicie, ten zapisuje obiekt zmian (commit), który z kolei zawiera wskaźnik na migawkę zawartości, która w danej chwili znajduje się w poczekalni,  ",
      },
      {
        question: "Czym jest gałąź(branch)?",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
      {
        question: "Czym jest interfejs  w typescript",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
        secondAnswer: "",
      },
      {
        question: "Jak sprawdzić stan plików?",
        answer:
          "Podstawowe narzędzie używane do sprawdzenia stanu plików to polecenie git status. ",
        secondAnswer: "",
      },
      {
        question: "Co to jest gitflow?",
        answer:
          "Git Flow został przedstawiony w 2010 roku i był jednym z pierwszych sposobów ustandaryzowania pracy z gitem.W przypadku Git Flow, mamy do czynienia z tzw. releasami funkcjonalności, nad którymi pracowaliśmy w ostatni czasie. Tak więc nasza aplikacja raz na jakiś czas zostaje uzupełniona o kilka mniejszych bądź jakiś jeden bardziej znaczący feature. Release taki może powstawać przykładowo podczas jednego dwutygodniowego sprintu (korzystając tutaj z terminologii Scrum).",
        secondAnswer: "Pierwsza rzecz, którą należy zrobić, aby wdrożyć model Git Flow, to odpowiednio uporządkować gałęzie w swoim repozytorium. W tym przypadku będziemy operować na pięciu rodzajach branchy:master – produkcyjna wersja aplikacji. Do tego brancha będziemy mergować tylko te zmiany, które już zostały wydane na produkcję oraz krytyczne hotfixy.hotfix – jedyna gałąź bazująca ma masterze. To właśnie ona służy do szybkiego naprawiania krytycznych błędów występujących na produkcji.    release – na tym branchu przygotowywany jest release kolejnej wersji aplikacji. To właśnie wersja aplikacji z tego brancha trafia na produkcję.  develop – gałąź ta jest „nieoficjalnym” masterem podczas pracy nad releasem. Z tego brancha programiści tworzą swoje gałęzie robocze i do niego mergują (rebase-ują) swoją pracę. Gdy praca nad wszystkimi funkcjonalnościami w danym releasie jest gotowa, branch ten jest mergowany do gałęzi „release”.  gałęzie robocze (features) – na tych gałęziach pracujemy na co dzień i tworzymy nowe funkcjonalności.",},
 
    ],
    testQuestions: [
      {
        question: "Po co testujemy aplikacje?",
        answer:
          "Testowanie oprogramowania ma na celu sprawdzenie jego poprawnego działania oraz zebranie informacji na jego temat.",
        secondAnswer: "",
      },
    ],
    errorQuestions: [
      {
        question: "Unchecked runtime.lastError: The message port closed before a response was received.",
        answer:
          "Jednym z powodu wyskakiwania tego typu błędu mogą być rozszerzenia w przeglądarce blokujące treści.",
        secondAnswer: "",
      },
      {
        question: "vue: Uncaught TypeError: Cannot read property ... of undefinedv",
        answer:
          "Just use v-if on a common parent to all the elements in your template relying on that AJAX call, not around each one.",
        secondAnswer: "",
      },
    ]
  },

  getters: {},

  mutations: {
    questionLoop(state) {
      setInterval(() => {
        state.javascriptQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }, 1000);
    },
    htmlQuestionLoop(state) {
      setInterval(() => {
        state.htmlQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }, 1000);
    },
    vueQuestionLoop(state) {
      setInterval(() => {
        state.vueQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }, 1000);
    },
    cssQuestionLoop(state) {
      setInterval(() => {
        state.cssQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }, 1000);
    },
    gitQuestionLoop(state) {
      setInterval(() => {
        state.gitQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }, 1000);
    },
    randomCssQuestion(state) {
      state.cssQuestions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    },
    randomHtmlQuestion(state) {
      state.htmlQuestions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    },
    randomVueQuestion(state) {
      state.vueQuestions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    },
    randomGitQuestion(state) {
      state.gitQuestions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
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
    htmlQuestionLoop(context) {
      context.commit("htmlQuestionLoop");
    },
    cssQuestionLoop(context) {
      context.commit("cssQuestionLoop");
    },
    vueQuestionLoop(context) {
      context.commit("vueQuestionLoop");
    },
    gitQuestionLoop(context) {
      context.commit("gitQuestionLoop");
    },
    randomQuestion(context) {
      context.commit("randomQuestion");
    },
    randomHtmlQuestion(context) {
      context.commit("randomHtmlQuestion");
    },
    randomVueQuestion(context) {
      context.commit("randomVueQuestion");
    },
    randomGitQuestion(context) {
      context.commit("randomGitQuestion");
    },
    randomCssQuestion(context) {
      context.commit("randomCssQuestion");
    },
  },
};
