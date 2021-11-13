export default {
namespaced: true,

  state: {
    cssQuestions: [
      {
        answerNumbers: 2,
        question: "Rozwiń i opisz skrót BEM",
        answer:
          "Nazwa BEM pochodzi od angielskiego: “Block Element Modifier”.Opiera się ono na podziale elementów na stronie na:bloki - na przykład formularz albo menu,elementy - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu,modyfikatory - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu",
        secondAnswer:
          "W BEM istnieje pewna konwencja nazewnictwa klas CSS. Ogólne zasady tego nazewnictwa przedstawiam poniżej:.block - pierwsze słowo w nazwie oznacza, że klasa dotyczy danego bloku,elementy - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu,modyfikatory - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu",
      },
      {
        answerNumbers: 1,
        question: "Czym jest Css sprites?",
        answer:
          "To technika pozwalająca na łączenie wielu mniejszych obrazów, wykorzystywanych na stronie www, w jeden większy plik, który przy odpowiedniej pomocy styli CSS pozwoli zaoszczędzić nam pasmo serwera oraz czas ładowania się strony,",
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
          "Powyżej w listingach używałem instrukcji if, która wykonuje dany kod tylko w przypadku, gdy w nawiasach wynikiem będzie prawda.Zwróć tylko uwagę, że przy każdej instrukcji if (w tym else if) musimy podać warunek, natomiast else zawsze jest bez warunku.",
      },
      {
        question: "Czym jest ternary operator?",
        answer:
          "Operator warunkowy (tak zwany ternary operator), to tak naprawdę skrócona wersja warunku if:",
      },
      {
        question: "Czym jest instrukcja switch?",
        answer:
          "Instrukcja switch jest kolejnym sposobem tworzenia warunków - tym razem na zasadzie przyrównania wyniku do konkretnych wartości.Każdy przypadek kończy się słowem break, które kończy wykonywanie instrukcji switch.Jeżeli pominiemy to słowo, wtedy nawet przy pomyślnym przyrównaniu zostaną wykonane kolejne sprawdzenia, co często może powodować błędy.Dodatkowo instrukcja switch ma specjalny przypadek default który będzie wybierany, gdy wszystkie inne przypadki będą błędne (odpowiednik else w instrukcji if).Warto zaznaczyć, że instrukcja switch nie służy do testowania warunków, a do przyrównywania zmiennej do wartości:",
      },
      {
        question: "Omów pętle for",
        answer:
          "Operator warunkowy (tak zwany ternary operator), to tak naprawdę skrócona wersja warunku if:",
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Omów pętle while",
        answer:
          "OZauważ, że w pętli tego typu nie definiujemy ani początkowego licznika, ani nie definiujemy zmiany licznika. Musimy te rzeczy zrobić ręcznie.Pętlę while zazwyczaj stosuje się w sytuacjach, kiedy nie wiemy dokładnie, ile iteracji (powtórzeń) ma się wykonać. Wyobraź sobie, że chcesz wygenerować unikalny numer ID albo jakąś liczbę. Generujesz więc daną rzecz, następnie sprawdzasz czy wynik pasuje do założeń. Jak nie pasuje, generujesz dalej. I tak do skutku aż trafisz.",
        secondAnswer:
          "while (wyrażenie_sprawdzające_zakończenie_pętli) {  ...fragment kodu który będzie powtarzany...}",
      },
      {
        question: "Opisz typy danych w javascript",
        answer:"W JavaScript dane możemy podzielić na dwie grupy: typy proste(prymitywne) oraz złożone.Do typów prymitywnych zaliczamy:Number,string,bigInt,boolean,undefined,null,symbol a do złożonych:Object (w tym Array, Map i Set).Kolejną charakterystyczną cechą rozróżniającą typy prymitywne od obiektów jest to, że te pierwsze w przeciwieństwie do obiektów są niemutowalne. Mutowalnymi określamy takie dane, którym w czasie ich istnienia możemy zmieniać części składowe:",
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
        question: "Jak dodać element do tablicy?",
        answer:
          "by dodać do tablicy element na jej końcu, możemy użyć metody push(element1, element2, ...).Drugą metodą jest po prostu ustawianie elementu na danym indeksie:",
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Jak sprawdzić czy zmienna jest tablicą?",
        answer:
          `Żeby sprawdzić czy dana zmienna jest tablicą, powinniśmy skorzystać z metody Array.isArray(). Wynika to z faktu, że tablice w Javascript także są obiektami i typeof zwraca nam "object"`,
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
      },
      {
        question: "Opisz działanie setTimeout",
        answer:
          `setTimeout wywołuje funkcję po określonym czasie opóźnienia.setTimeout oczekuje dwóch argumentów, jednej referencji do funkcji wywołania zwrotnego oraz opóźnienia w milisekundach. setTimeout może również akceptować argumenty po opóźnieniu, a dodatkowe wartości zostaną przekazane do funkcji wywołania zwrotnego. Timer można wyłączyć przy użyciu metody clearTimeout.`,
        secondAnswer:
          "Powyższe może się przydać przy opóźnianiu zadań, które mogą spowalniać programowanie oraz blokować następne funkcje. Pamiętajmy, że setTimeout ustawia jedynie minimalny czas, który musi minąć przed wywołaniem. Jeśli silnik jest zajęty czymś innym, to kod może być uruchomiony znacznie później. Co więcej, wartość 0 nie musi być deklarowana - będzie ona domyślna nawet jeśli się ją pominie",
      },
      {
        question: "Do czego służy setInterval?",
        answer:
          "Operator warunkowy (tak zwany ternary operator), to tak naprawdę skrócona wersja warunku if:",
        secondAnswer:
          "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}Różnica między setTimeout i setInterval polega na tym, że metoda setTimeout() uruchamia wyrażenie tylko raz, a setInterval() robi to regularnie po określonym czasie.",
      },
    ],
  },

  getters: {

  },

  mutations: {
    randomQuestion() {
      setInterval(() => {
        state.javascriptQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }, 1000);
    },
  },
  actions: {
    randomQuestion (context) {
      context.commit('randomQuestion')
    }
  },
};
