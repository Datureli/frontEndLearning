export default {
  namespaced: true,

  state: {
    reactQuestions: [
      {
        question: "Czym jest create-react-app?",
        answer:
          "Środowisko pracy stworzone przez Create React App nie tylko umożliwi ci stosowanie najnowszych funkcjonalności języka JavaScript, lecz także zoptymalizuje twój kod przed oddaniem go do użytku i ogólnie znacznie usprawni twoją pracę. Aby móc skorzystać z tego rozwiązania na swoim komputerze,Create React App nie obsługuje ani logiki backendu ani baz danych; tworzy jedynie frontendowy potok budowania (ang. build pipeline). Dzięki temu możesz go używać z dowolnie wybranym przez siebie backendem.  ",
      },
      {
        question: "Czym jest jsx?",
        answer:
          "Tworzy elementy reactowe,które po renderowaniu są przetwarzane na węzły document object model. Kompilator JSX, np. Babel parsuje kod JavaScript (JSX), znajduje wszystkie odwołania do tagów html i zastępuje je wywołaniem funkcji React.createElement lub w przypadku, gdy nazwa tagu jest z dużej litery, kompilator używa zmiennej komponentu.",
      },
      {
        question: "Komponenty funkcyjne w react",
        answer:
          "Cechy charakterystyczne komponentów funkcyjnych: otrzymują dane od rodziców za pośrednictwem obiektu prop  są pozbawione stan  zajmują się prezentacją a nie logiką aplikacji",
      },
      {
        question: "Co to jest Flux i jaka jest różnica między Flux a Redux",
        answer:
          "Flux jest to architektura aplikacji zaproponowana przez Facebook-a, twórcy frameworka React.js. Flux nie jest to konkretna biblioteka ale architektura, której głównym elementem jest funkcja Dispatcher, A całość używa architektury podobnej do Publish/Subscribe lub EventEmitter. Flux korzysta z jedno kierunkowego przepływu danych w celu utrzymywania stanu aplikacji. I ile Flux jest to nazwa architektury to Redux jest to już biblioteka, która implementuje ją tą.",
      },
      {
        question: "Cykl życia komponentów w react",
        answer:
          "Komponent w React może być w 3 stanach. Montowania - komponent jest dodany do drzewa DOM wywoływane są funkcje:constructor()componentWillMount()render()componentDidMount()Update-u - zmiana właściwości (ang. props) powoduje, że powinien zmienić swój stan wywoływane są funkcje:componentWillReceiveProps()shouldComponentUpdate()componentWillUpdate()render()componentDidUpdate()Odmontowywania - komponent jest usuwany z drzewa DOM wywoływana jest funkcja:componentWillUnmount() Dodatkowo jest jeszcze jedna funkcja dodana w React 16 - componentDidCatch, który wywołuje się, gdy w funkcji render zostanie wyrzucony wyjątek, niestety nie działa razem z funkcjami obsługi zdarzeń." ,
      },
      {
        question: "Co to są komponenty wyższego rzędu?",
        answer:
          "Komponenty wyższego rzędu (ang. Higher Order Component - HOC), zasada jest podobna do funkcji wyższego rzędu. Komponenty tego typu do funkcje, które przyjmują komponenty jako argument oraz zwracają nowy argument. Przykładem może być funkcja connect z biblioteki Redux.",
      },
      {
        question: "Co to są render props?",
        answer:
          "Render props są to właściwości komponentu, które zawierają funkcje, która otrzymuje stan komponentu lub jakieś inne dane i zwraca kod jsx:",
      },
      {
        question: "Komponenty klasowe w react",
        answer:
          ". Propsy są niemutowanlne w React’cie więc nie nigdy nie ulegają zmianie. Ale this jest i zawsze był mutowalny.",
      },
      {
        question: "Czym jest conditional rendering?",
        answer:
          "Renderowanie warunkowe działa w Reakcie tak samo jak instrukcje warunkowe w javascripcie. Aby stworzyć elementy odzwierciedlające aktualny stan aplikacji, należy użyć instrukcji if lub operatora warunkowego oraz pozwolić Reactowi je dopasować poprzez aktualizację interfejsu użytkownika.",
      },
      {
        question: "Różnica między props a state?",
        answer:
          "State używa się do przechowywania danych w bieżącym widoku.Natomiast props używamy do przekazania danych do komponentu dziecka.props zawsze napływają do komponentu z zewnątrz. Drugim obiektem, który służy do zarządzania danymi w komponentach, jest state. Dzięki nim komponent może zarządzać stanem od wewnątrz. state jest dostępne wyłącznie w komponentach klasowych.",
      },
      {
        question: "jakie są zasady korzystania z hooków?",
        answer:
          "Wywołuj hooki tylko z najwyższego poziomu kodu  Nie wywołuj hooków wewnątrz pętli, instrukcji warunkowych czy zagnieżdżonych funkcji. Korzystaj z hooków tylko z najwyższego poziomu kodu twoich komponentów funkcyjnych, jeszcze przed zwróceniem wartości. Przestrzegając tej zasady, zyskujesz pewność, że hooki zostaną wywołane w tej samej kolejności, za każdym razem gdy komponent jest renderowany. To właśnie pozwala Reactowi na właściwe przechowywanie stanu pomiędzy kolejnymi wywołaniami useState i useEffect (Jeśli ciekawi cię ten temat, dogłębnie wyjaśnimy go w kolejnym podrozdziale.)    ",
          secondAnswer: 'Wywołuj hooki tylko w komponentach funkcyjnych Nie wywołuj hooków wewnątrz zwykłych javascriptowych funkcji. Zamiast tego możesz:  ✅ Wywoływać hooki wewnątrz reactowych komponentów funkcyjnych. ✅ Wywoływać hooki wewnątrz własnych hooków (więcej na ten temat dowiemy się w następnym rozdziale). Przestrzegając tej zasady, upewniasz się, że cała logika związana ze stanem komponentu jest wyraźnie widoczna w jego kodzie źródłowym.',
          thirdPartOfAnswer: 'Wydaliśmy wtyczkę dla ESLinta o nazwie eslint-plugin-react-hooks, która wymusza stosowanie tych dwóch zasad. Jeśli chcesz ją wypróbować, możesz dodać ją do swojego projektu w następujący sposób:'
      },
      {
        question: "Kiedy powinno się korzystać z hooków?",
        answer:
          " Jeśli po stworzeniu komponentu funkcyjnego zorientujesz się, że potrzebujesz przechować kilka wartości w stanie, dotychczas musiałeś zamienić taki komponent na klasę. Teraz możesz skorzystać z hooka z wewnątrz istniejącego komponentu funkcyjnego",
      },
      {
        question: "Listy i klucze?",
        answer:
          " „Klucz” (ang. key) jest specjalnym atrybutem o typie łańcucha znaków, który musisz dodać podczas tworzenia elementów listy.Klucze pomagają Reaktowi zidentyfikować, które elementy uległy zmianie, zostały dodane lub usunięte. Klucze powinny zostać nadane elementom wewnątrz tablicy, aby elementy zyskały stabilną tożsamość:Nie zalecamy używania indeksów jako kluczy, jeżeli kolejność elementów może ulec zmianie.Może to negatywnie wpłynąć na wydajność i spowodować problemy ze stanem komponentu. ",
      },
      {
        question: "Czym jest hook?",
        answer:
          "Czym jest hook? Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. W kolejnych rozdziałach poznamy inne hooki.Hooki nie działają w klasach. Ale możesz używać ich zamiast klas.",
      },
      {
        question: "VDOM?",
        answer:
          "wirtualna reprezentacja DOM, czyli modelu obiektowego strony. W celu optymalizacji ilości operacji zmiany HTML React przeprowadza wszystkie operacja na wirtualnym modelu - aktualizuje go w oparciu o przetworzone dane i porównuje z poprzednią wersją, po czym oblicza jakie elementy HTML należy dodać, usunąć lub zmienić."
      },
      {
        question: "Czym jest babel?",
        answer:
          "Babel to tak zwany transpilator (lub kompilator), czyli narzędzie pozwalające na przekształcanie kodu źródłowego napisanego w jednym języku na inny. Dzięki odpowiednim presetom oraz pluginom możemy już dziś pisać aplikacje wykorzystując standard ECMAScript 2017 i transpilować go do wersji ECMAScript 5, którą obsługuje nawet Internet Explorer 8. To również dzięki Babel jesteśmy w stanie używać składni JSX. Należy pamiętać, iż o ile babel pozwala nam na dodanie funkcjonalności, która nie jest jeszcze oficjalnym standardem ECMAScript, o tyle musimy liczyć się z tym, że używana w tym wypadku przez nas funkcjonalność (lub jej składnia) może ulec zmianie lub zostać ostatecznie odrzucona."
      },

      {
        question: "Czym jest webpack?",
        answer:
          "Webpack pełni wiele funkcji, ale jego podstawową jest przetwarzanie wszelkich zasobów naszej aplikacji, takich jak plik JS, grafiki, arkusze CSS w celu przygotowania tzw. bundli czyli pakietów, które mogą odczytywać przeglądarki. Moduły npm w dużej większości składają się z dziesiątek plików, setek zależności, różnych wersji etc. - przeglądarki nie są jeszcze gotowe na obsłużenie tak dostarczanych aplikacji. Dzięki odpowiedniej konfiguracji Webpack jest w stanie zebrać cały kod naszej aplikacji i zapisać go do jednego (lub więcej) plików wynikowych, dzięki czemu możemy bez problemu dostarczyć go przeglądarce (a przy okazji, używając Babel zmienić na kod, który będzie ona w stanie rozpoznać). Zastępuje on rozwiązania takie jak gulp, grunt czy browserify - jest w stanie przetworzyć na bieżąco nasz kod LESS/SASS do CSS, skompresować pliki graficzne i skopiować je do odpowiedniego katalogu tak, by były dostępne dla aplikacji niezależnie od tego gdzie ją uruchamiamy. Webpack monitoruje nasze zmiany w czasie rzeczywistym dzięki czemu po zapisaniu kodu nasza strona natychmiast aktualizuje się bez konieczności odświeżania przeglądarki Webpack uruchamiany jest w środowisku developerskim, lub w celu stworzenia produkcyjnej wersji aplikacji, dlatego też musi on mieć dostęp do wszystkich materiałów, które chcemy na stałe zapisać w publicznych plikach aplikacji. Tak wygenerowane pliki następnie umieszczamy na dowolnym serwerze HTTP w celu udostępnienia w Internecie."
      },
    
      {
        question: "Czym jest hook?",
        answer:
          "useState() – The state of your application is guaranteed to change at some time. The useState() hook is a function that accepts one parameter, the initial state (which might be the value of a variable, an object, or any other sort of data in your component), and returns two values: the current state and a function that can be used to update the state.",
          secondAnswer: 'useEffect() – The Effect Hook is activated by default after the first render and each time the state is changed. As the names suggest, it is used to perform an effect each time the state changes. This hook is great for configuring listeners, retrieving data from the API, and deleting listeners before the component is removed from the DOM.'
      },
      {
        question: "Po co nam styled components?",
        answer:
          "No class name hell - styled-components generuje unikalne nazwy klas dla twoich stylów. Nigdy nie będziesz musiał się martwić o błędy ortograficzne lub używanie nazw klas, które nie mają znaczenia.using props - styled-components pozwalają nam rozszerzyć właściwości stylizacji za pomocą parametru props, powszechnie używanego w React — tym samym dynamicznie wpływając na odczucia komponentu poprzez stan aplikacji.",
          secondAnswer: 'Obsługuje składnię Sass Pisanie składni Sassa po wyjęciu z pudełka bez konieczności konfigurowania jakichkolwiek preprocesorów lub dodatkowych narzędzi do budowania jest możliwe dzięki styled-components. W definicjach stylów możesz użyć znaku &, aby wskazać bieżący komponent, użyć pseudoselektorów i poeksperymentować z zagnieżdżaniem. Tematystyled-components mają pełną obsługę motywów dzięki wyeksportowaniu komponentu opakowania ThemeProvider. Ten komponent zapewnia motyw dla wszystkich komponentów React w sobie za pośrednictwem Context API. W drzewie renderowania wszystkie styled-components będą miały dostęp do dostarczonego motywu, nawet jeśli mają wiele poziomów głębokości. Kontynuując ten samouczek, przyjrzymy się bliżej cechom stylizowanych komponentów.'
      },
      {
        question: "Czym jest useEffect?",
        answer:
          "useEffect pozwala wykonać „efekty uboczne” w komponentach funkcyjnych.useEffect pełni podobną funkcję jak metody cyklu życia w komponentach klasowych componentDidMount, componentDidUpdate i componentWillUnMount.Masz także możliwość zdecydować, kiedy nastąpi kolejne renderowanie.By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.",
          secondAnswer: 'useEffect działa przy pierwszym jak i przy kazdym kolejnym wyrenderowaniu.'
      },
      {
        question: "Czym jest useState?",
        answer:
          "useState jest hookiem, wywołujemy go wewnątrz komponentu funkcyjnego, gdy chcemy dodać stan lokalny. React zachowa ten stan podczas ponownego renderowania.useState zwraca dwie rzeczy: aktualną wartość stanu oraz funkcję, która pozwala zaktualizować komponent. Wywołanie funkcji będzie działać podobnie do this.setState, który zaktualizuje wartość stanu, z tym wyjątkiem, że nie scali nowego i starego stanu ze sobą.",
      },
      {
        question: "Rodzaje komponentów w react",
        answer:
          "React wyróżnia dwa typu komponentów: komponent bezstanowy (ang. stateless functional component, SFC) będący funkcją, oraz komponent stanowy (ang. stateful functional component) reprezentowany przez klasę. Na początek utworzymy nasz komponent jako komponent SFC.        Wspomnianym drugim typem komponentów są komponenty stanowe - odróżnia je nie tylko to, że posiadają one stan, czyli mogą przechowywać dane odnośnie swojej reprezentacji (przykładowo komponent na wprowadzanie tekstu - <input> zawierałby informacje o aktualnie wpisanym tekście), ale posiadają też funkcje cyklu życia. Funkcje cyklu życia wywoływane są w określonych momentach i pozwalają na przygotowanie i sterowanie działaniem komponentu. Komponenty stanowe opisywane są przez klasę React.Component i muszą implementować przynajmniej funkcję render, która zwraca kod JSX komponentu.Nazwa naszego komponentu - Tweet - nie przypadkowo zaczyna się dużą literą. W ten sposób dajemy znać JSX, że chodzi nam o komponent, a nie o znacznik HTML. Jeżeli utworzymy komponent header i nie użyjemy wielkiej litery, podczas transformacji zostanie on potraktowany jako znacznik HTML i nie uzyskamy oczekiwanego efektu",
      },
    ],
  },

  mutations: {
    randomReactQuestion(state) {
      state.reactQuestions.sort(() => Math.floor( Math.random() - 0.5));
    },
  },
  actions: {
    reactQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomReactQuestion");
      }, 5000);
    },
    randomReactQuestion(context) {
      context.commit("randomReactQuestion");
    },
  },
};
