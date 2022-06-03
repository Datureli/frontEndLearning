export default {
  namespaced: true,

  state: {
    reactQuestions: [
      {
        question: "Czym jest defaultProps?",
        answer:
          "defaultProps pozwala nam na ustawienie propsów,ustawienie wartości domyślnej dla propsów",
      },
      {
        question: "Czym jest jsx?",
        answer:
          "Tworzy elementy reactowe,które po renderowaniu są przetwarzane na węzły document object model",
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
        question: "Czym jest hook?",
        answer:
          "Czym jest hook? Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. W kolejnych rozdziałach poznamy inne hooki.Hooki nie działają w klasach. Ale możesz używać ich zamiast klas.",
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
    ],
  },

  mutations: {
    randomReactQuestion(state) {
      state.reactQuestions.sort(() => ~~Math.random() - 0.5);
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
