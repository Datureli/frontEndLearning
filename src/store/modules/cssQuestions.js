export default {
  namespaced: true,

  state: {
    cssQuestions: [
      {
        question: `Rozwiń i opisz skrót BEM`,
        answer: `Nazwa BEM pochodzi od angielskiego Block Element Modifier.Opiera się ono na podziale elementów na stronie na:bloki - na przykład formularz albo menu,elementy - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu,modyfikatory - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu`,
        secondAnswer: `W BEM istnieje pewna konwencja nazewnictwa klas CSS. Ogólne zasady tego nazewnictwa przedstawiam poniżej:.block - pierwsze słowo w nazwie oznacza, że klasa dotyczy danego bloku,elementy - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu,modyfikatory - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu`,
      },
      {
        answerNumbers: 1,
        question: `Czym jest Css sprites?`,
        answer: `To technika pozwalająca na łączenie wielu mniejszych obrazów, wykorzystywanych na stronie www, w jeden większy plik, który przy odpowiedniej pomocy styli CSS pozwoli zaoszczędzić nam pasmo serwera oraz czas ładowania się strony,`,
      },
      {
        answerNumbers: 1,
        question: `Rozwiń skrót Css`,
        answer: `Kaskadowe arkusze stylów css służą do definiowania układów graficznych dokumentów HTML.Arkusz stylów CSS zawiera reguły opisujące w jaki sposób przeglądarka internetowa ma wyświetlać zawartość dokumentów HTML lub XML. Za pomocą arkuszy CSS można opisać wiele właściwości prezentacji elementów strony: wybrać kolor tekstu, wypełnienie tła, rodzaj czcionki, ustawić odstępy między elementami czy zdefiniować położenie jednego elementu względem drugiego.`,
      },
      {
        question: `Czym jest model pudełkowy?`,
        answer: `Model pudełkowy to opis budowy elementów blokowych na stronie www.Pozwala wyobrazić sobie w jaki sposób poszczególne elementy składają się na wielkość całego pudełka.Tymi elementami są marginesy zewnetrzne, obramowanie, marginesy wewnętrzne oraz szerokość.`,
      },
      {
        question: `Opisz zalety Sass`,
        answer: `Sass to preprocesor CSS,który pozwala na znacznie szybszą i wydajniejszą pracę z arkuszami stylów.Preprocesory pozwalają na programowanie wśród arkuszy stylów, co daje ogromne możliwości przyspieszenia pracy.przeglądarki czytają kod CSS, a kod w formacie Sass będzie dla nich niezrozumiały. Rozwiązaniem tego problemu jest kompilacja plików Sass do wyjściowego CSS`,
        secondAnswer: `W Sass możemy używać zmiennych,Zagnieżdzanie.Mixins.DziedziczenieKolejna bardzo mocna cecha. Dzięki dziedziczeniu możemy przekazywać część zastosowanych deklaracji z jednego obiektu na drugi. To z kolei ponownie pozwala nam na podążanie za regułą DRY. Aby dany element odziedziczył cechy swego przodka należy wstawić wyrażenie @extend a następnie selektor z którego mamy dziedziczyć. W przykładzie wykorzystamy klasę alert (która może formatować jakiś komunikat) i dodamy kolejne jej odmiany:`,
        thirdPartOfAnswer: `Do naszej dyspozycji SASS udostępnia operatory typu: +, -, *, /, oraz %. Możliwa jest także konwersja wartości (np z pikseli na procenty).`,
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
        question: `Jaka jest różnica między CSS Grid i Flexboksem?`,
        answer: `Grid tworzy siatkę, która jest dwuwymiarowa i składa się z kolumn i wersów. Odrębne podejście wykorzystuje się w przypadku Flexboksów, czyli takiemu podejściu do umiejscawiania i wyrównywania obiektów na stronie, gdzie występują one w jednym „wymiarze”: w poziomie lub w pionie.`,
        secondAnswer: ``,
      },
      {
        question: `Jakie są typy selektorów w css?`,
        answer: `selektor uniwersalny: selektor uniwersalny oznacza wszystkie elementy na stronie.selektor typu element:Ten selektor dopasowuje jeden lub więcej elementów html o tym samym imieniu.id selector:ten selektor dopasowuje każdy element html którego id posiada taką samą wartość jak selektor,class selektor: Ten selektor dopasowuje każdy element na stronie który zawiera atrybut klasy przypisany do tej samej wartości co klasa.kombinator potomstwa: pozwala łączyć dwa lub więcej selektorów co pozwala bardziej sprecyzować metode selekcji.Child combinator:A selector that uses the child combinator służy do wskazania elementu, który jest dzieckiem innego elementu. Kombinator dziecka jest znakiem większości (U+003E, >) i oddziela dwa selektory złożone. Białe znaki wokół > są opcjonalne i nie mają specjalnego znaczenia.`,
        secondAnswer: `General Sibling Combinator:The general sibling combinator (~) separates two selectors and matches all iterations of the second element, that are following the first element (though not necessarily immediately), and are children of the same parent element.Adjacent Sibling Combinator:Attribute Selector`,
      },
      {
        question: `Jakie są ograniczenia w css?`,
        answer: `Zgodność z przeglądarką - niektóre selektory są wspierane a niektóre nie.Musimy wiedzieć które są wspierane a które nie.Cross browser issue: niektóre selektory zachowują się inaczej w różnych przeglądarkach.Nie posiada parent selector: Na ten moment w css nie możesz zaznaczyc tagu rodzica`,
      },
      {
        question: `Jaka jest różnica między resetowaniem a normalizowaniem CSS?`,
        answer: `Resetowanie ma na celu usunięcie wszystkich domyślnych stylów przeglądarki. Na przykład marginesy, wypełnienia, rozmiary czcionek wszystkich elementów są resetowane.Normalizowanie zachowuje przydatne style domyślne zamiast cofania wszystkiego.Poprawia również różnice w wyświetlaniu elementów w różnych przeglądarkach.`,
      },
    ],
  },

  mutations: {
    cssQuestionLoop(state) {
      setInterval(() => {
        state.cssQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }, 1000);
    },
    randomCssQuestion(state) {
      state.cssQuestions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    },
  },
  actions: {
    cssQuestionLoop(context) {
      context.commit("cssQuestionLoop");
    },
    randomCssQuestion(context) {
      context.commit("randomCssQuestion");
    },
  },
};
