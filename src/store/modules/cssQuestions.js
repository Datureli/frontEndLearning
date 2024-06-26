export default {
  namespaced: true,

  state: {
    cssQuestions: [
      {
        question: `Rozwiń i opisz skrót BEM`,
        answer: `Nazwa BEM pochodzi od angielskiego Block Element Modifier.Opiera się ono na podziale elementów na stronie na bloki - na przykład formularz albo menu,elementy - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu,modyfikatory - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu`,
        trueAnswer: "Block element modifier",
        firstFakeAnswer: "Blind element modifier",
        secondFakeAnswer: "dsadsa",
        thirdFakeAnswer: "dsadas",
      },
      {
        question: `Czym jest Css sprites?`,
        answer: `To technika pozwalająca na łączenie wielu mniejszych obrazów, wykorzystywanych na stronie www, w jeden większy plik, który przy odpowiedniej pomocy styli CSS pozwoli zaoszczędzić nam pasmo serwera oraz czas ładowania się strony.`,
      },
      {
        question: `Czym jest specifity?`,
        answer: `Specificity to zasada, która określa który selektor ma pierwszeństwo w przypadku, kiedy wiele z nich ustawia te same reguły CSS dla tego samego znacznika HTML.`,
      },
      {
        question: `Rozwiń skrót Css`,
        answer: `Kaskadowe arkusze stylów css służą do definiowania układów graficznych dokumentów html. Arkusz stylów CSS zawiera reguły opisujące w jaki sposób przeglądarka internetowa ma wyświetlać zawartość dokumentów HTML lub XML. Za pomocą arkuszy CSS można opisać wiele właściwości prezentacji elementów strony: wybrać kolor tekstu, wypełnienie tła, rodzaj czcionki, ustawić odstępy między elementami czy zdefiniować położenie jednego elementu względem drugiego.`,
      },
      {
        question: `Czym jest model pudełkowy?`,
        answer: `Model pudełkowy to opis budowy elementów blokowych na stronie www.Pozwala wyobrazić sobie w jaki sposób poszczególne elementy składają się na wielkość całego pudełka.Tymi elementami są marginesy zewnetrzne, obramowanie, marginesy wewnętrzne oraz szerokość.`,
      },
      {
        question: `border-box,content-box,padding-box - różnice`,
        answer: `content box - jest to domyślny styl, jak określa go standard CSS. Własności width i height są wymierzane zawierając tylko zawartość, ale nie border, margin lub padding.Padding box - własności width i height zawierają rozmiar dopełnienia (padding), ale nie zawierają obramowania (border) ani marginesu (margin).border-box - własności width i height zawierają dopełnienie i obramowanie, ale nie margines. Jest to model pudełkowy używany przez Internet Explorer, kiedy dokument nie jest w trybie zgodności ze standardami`,
      },
      {
        question: `Opisz zalety Sass`,
        answer: `Sass to preprocesor CSS,który pozwala na znacznie szybszą i wydajniejszą pracę z arkuszami stylów. Preprocesory pozwalają na programowanie wśród arkuszy stylów, co daje ogromne możliwości przyspieszenia pracy. przeglądarki czytają kod CSS, a kod w formacie Sass będzie dla nich niezrozumiały. Rozwiązaniem tego problemu jest kompilacja plików Sass do wyjściowego CSS.Do naszej dyspozycji SASS udostępnia operatory typu: +, -, *, /, oraz %. Możliwa jest także konwersja wartości (np z pikseli na procenty).W Sass możemy używać zmiennych,Zagnieżdzanie.Mixins.Dziedziczenie. Dzięki dziedziczeniu możemy przekazywać część zastosowanych deklaracji z jednego obiektu na drugi. To z kolei ponownie pozwala nam na podążanie za regułą DRY.`,
      },
      {
        question: `Czym się różni scss od sass?`,
        answer: `Podstawową różnicą jest składnia, pliki scss są zbliżone do składni CSS, natomiast pliki sass do składni języka Ruby.`,
      },
      {
        question: `Czym jest selektor atrybutu?`,
        answer: `To zaprezentowana wraz z premierą CSS 3 możliwość przypisania stylów do selektora nie na podstawie nazwy czy klasy, ale na podstawie jego atrybutów HTML-u. Selektor atrybutu można zatem zastosować do wszystkich obiektów w dokumencie, które mają np. określone wymiary czy też linków prowadzących nawet pod konkretne adresy. `,
      },
      {
        question: `grid vs flexbox`,
        answer: `Podstawową i zasadniczą różnicą między tymi dwiema właściwościami jest to, że Flexbox jest właściwością jednowymiarową. To znaczy, że możemy dzięki niej układać elementy w poziomie LUB w pionie, natomiast Grid jest dwuwymiarowy i daje nam możliwość pracy w poziomie ORAZ w pionie.Dzięki gridowi możemy tworzyć bardziej asymetryczne układy stron internetowych, ponieważ daje nam większą kontrolę nad elementami.Dodatkowo mamy możliwość usytuowania elementów w taki sposób, aby nachodziły na siebie bez zakłócania reszty elementów tak jak robiła to właściwość float, po użyciu której często spotykaną praktyką było pisanie tak zwanych "Clearfixów".Są również sytuacje, których grid jest wręcz must use, jak na przykład asymetryczny układ bloga lub ciekawa galeria zdjęć.`,
      },
      {
        question: `Jakie są typy selektorów w css?`,
        answer: `Sselektor uniwersalny oznacza wszystkie elementy na stronie. Selektor typu element dopasowuje jeden lub więcej elementów html o tym samym imieniu. id selector dopasowuje każdy element html którego id posiada taką samą wartość jak selektor, class selektor dopasowuje każdy element na stronie który zawiera atrybut klasy przypisany do tej samej wartości co klasa.kombinator potomstwa: pozwala łączyć dwa lub więcej selektorów co pozwala bardziej sprecyzować metode selekcji.Child combinator służy do wskazania elementu, który jest dzieckiem innego elementu. Kombinator dziecka jest znakiem większości (U+003E, >) i oddziela dwa selektory złożone.`,
      },
      {
        question: `Jakie są ograniczenia w css?`,
        answer: `Zgodność z przeglądarką - niektóre selektory są wspierane a niektóre nie.Cross browser issue: niektóre selektory zachowują się inaczej w różnych przeglądarkach.`,
      },
      {
        question: `Jaka jest różnica między resetowaniem a normalizowaniem CSS?`,
        answer: `Resetowanie ma na celu usunięcie wszystkich domyślnych stylów przeglądarki. Na przykład marginesy, wypełnienia, rozmiary czcionek wszystkich elementów są resetowane.Normalizowanie zachowuje przydatne style domyślne zamiast cofania wszystkiego.Poprawia również różnice w wyświetlaniu elementów w różnych przeglądarkach.`,
      },
    ],
  },

  mutations: {
    randomCssQuestion(state) {
      state.cssQuestions.sort(() => Math.floor(Math.random() - 0.5));
    },
  },
  actions: {
    cssQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomCssQuestion");
      }, 5000);
    },
    randomCssQuestion(context) {
      context.commit("randomCssQuestion");
    },
  },
};
