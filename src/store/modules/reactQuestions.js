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
        question: "Jak działa Redux",
        answer:
          "Biblioteka ta składa się z takich elementów jak Stan aplikacji (ang. Store), Reducer-y oraz Akcje. Reducer jest to funkcja, która zwraca nowy stan bazując na starym. Przyjmuje dwa argumenty, poprzedni stan oraz akcje Akcje są to obiekty, które zostają przekazane do reducer-a, na podstawie ich typu powinien być zwrócony inny nowy stan aplikacji Store jest to obiekt który posiada mi. takie funkcje getState - zwraca aktualny stan subscribe - służy do dodawania nowej funkcji, która zostanie wywołana, gdy zmieni się stan dispatch - do funkcji przekazujemy akcje i zostanie zmieniony stan Biblioteka działa niezależnie od jakiegokolwiek frameworka. Można jej np. używać z Angular-em. Aby użyć biblioteki razem z React-em, należy dodatkowo użyć biblioteki ReactRedux oraz użyć jej dwóch funkcji connect oraz Provider Provider jest to komponent, który posiada właściwość o nazwie store, który udostępnia stan aplikacji komponentom, działa tak jak ErrorBoundary (tzn. że Provider to komponent, który opakowuje inne komponenty) i korzysta z Context API React-a. Natomiast funkcja connect, służy jako wrapper komponentów. Przekazuje się do niej dwie funkcje mapStateToProps - jest to funkcja, która dostaje jako argument, stan aplikacji i zwraca obiekt bazujący na stanie mapDispatchToProps - jest to funkcja, która dostaje dispatch Reduxa jako argument i zwraca obiekt z funkcjami, które wywołują dispatch z odpowiednimi akcjami czyli dodają funkcje zmiany stanu aplikacji Funkcja connect, jest to komponent wyższego poziomu czyli jest to funkcja która przyjmuje zwykły komponent i zwraca nowy komponent, który ma dostęp do stanu z Reduxa, poprzez dwie funkcje mapStateToProps oraz mapDispatchToProps.",
      },
      {
        question: "Cykl życia komponentów w react",
        answer: "Komponent w React może być w 3 stanach. Montowania - komponent jest dodany do drzewa DOM wywoływane są funkcje:constructor()componentWillMount()render()componentDidMount()Update-u - zmiana właściwości (ang. props) powoduje, że powinien zmienić swój stan wywoływane są funkcje:componentWillReceiveProps()shouldComponentUpdate()componentWillUpdate()render()componentDidUpdate()Odmontowywania - komponent jest usuwany z drzewa DOM wywoływana jest funkcja:componentWillUnmount() Dodatkowo jest jeszcze jedna funkcja dodana w React 16 - componentDidCatch, który wywołuje się, gdy w funkcji render zostanie wyrzucony wyjątek, niestety nie działa razem z funkcjami obsługi zdarzeń." ,
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
        question: "Co to jest React Fiber",
        answer:
          "React Fiber jest no nowy ulepszony silnik w React 16, który polepsza działanie animacji, gestów oraz layoutu, jego główną cechą jest tzw. przyrostowe renderowanie, dzięki któremu można rozbić renderowanie na kilka ramek (ang. frames), realizowane jest to dzięki temu, że możliwe jest zatrzymania i wznowienie renderowania. Dało możliwość szybszego wysłania zmian na ekran.",
      },
      {
        question: "Do czego służy setState",
        answer:
          "Metoda ta służy do zmiany wewnętrznego stanu komponentu, samo przypisanie do this.state nowego stanu albo zmiana wartości jednej z jego właściwości nie sprawi, że komponent się re-renderuje. Stan komponentu najczęściej stosuje się gdy nie potrzebujemy wysyłać go na zewnątrz komponentu. W przeciwnym przypadku raczej trzeba by zastosować Reduxa albo Context API.",
      },
      {
        question: "Jak działa Context API?",
        answer:
          "Context API oraz Redux, który w nowszej wersji korzysta z Context API, można używać do zminimalizowania wielokrotnego dziedziczenia propsów (Nazwane po angielsku prop drilling albo threading), gdy jest potrzeba utrzymywania stanu w aplikacji w wielu komponentach. Context API umożliwia stworzenie lokalnego stanu, który będzie dziedziczony przez inne komponenty w drzewie, pomijając komponenty, które go nie potrzebują. Dlatego właśnie z został użyty w bibliotece Redux. Działa tak jak zasięg funkcyjny (ang. scope), wszystkie funkcje wewnątrz mają dostęp do wszystkich zasięgów powyżej. Context API udostępnia funkcje React.createContext, która tworzy obiekt z dwoma komponentami: obiekt.Provider oraz obiekt.Consumer. Przykładem niech będzie przypadek, gdy musimy dodać internacjonalizacje do naszej aplikacji i wszystkie buttony muszą mieć przetłumaczony text. Nasze przyciski znajdują się na różnym poziomie w drzewie DOM. Zakładając, że nie korzystamy z Reduxa, bez Context Api musielibyśmy przekazywać propsy z językiem do każdego komponentu, aby dostał go każdy przycisk. Za pomocą Context API można to uprościć:",
      },
      {
        question: "Komponenty klasowe w react",
        answer:
          ". Propsy są niemutowanlne w React’cie więc nie nigdy nie ulegają zmianie. Ale this jest i zawsze był mutowalny.",
      },
      {
        question: "Co to są kontrolowane komponenty",
        answer:
          "Są to komponenty np. elementy formularzy input, select lub textarea, których wartość (właściwość value) pochodzi od React-a dlatego, gdy ich stan się zmieni wyrenderują się ponownie z nowych stanem (oczywiście dzięki Virtual DOM nie zostanie utworzony nowy element tylko zmieni się jego właściwość value). Jest to realizowane w taki sposób że pod value jest np. wartość ze state a event np. onChange lub onKeyUp zmienia ten stan.",
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
          "wirtualna reprezentacja DOM, czyli modelu obiektowego strony. W celu optymalizacji ilości operacji zmiany HTML React przeprowadza wszystkie operacja na wirtualnym modelu - aktualizuje go w oparciu o przetworzone dane i porównuje z poprzednią wersją, po czym oblicza jakie elementy HTML należy dodać, usunąć lub zmienić.Wirtualny DOM jest to reprezentacja (w pamięci) prawdziwego drzewa DOM. Operacje wykonywane są na Wirtualnym DOM i gdy coś się zmieni, wykonywane jest porównywanie drzew (ang. diff), a następnie najmniejsza liczba akcji potrzebna do tego aby oba drzewa były takie same. Algorytm, który używa React w celu uaktualnienia natywnego DOM, nazywany jest po angielsku reconciliation, co można przetłumaczyć jako pojednanie. Więcej o algorytmie możesz przeczytać w artykule z oficjalnej dokumentacji"
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
        question: "Czym się różni komponent od elementu",
        answer:
          "Komponent jest to funkcja albo klasa dziedzicząca po React.Component, która ma jakąś logikę lub/i zawiera inne komponenty oraz elementy. Natomiast element jest to obiekt, który ma swój odpowiednik w DOM np. div, span albo input. Jest to jednak uproszczenie myślowe ponieważ sam React nie używa DOM dopiero dodatkowa biblioteka ReactDOM dodaje taką możliwość (jeśli jesteś zainteresowany dokładnym znaczeniem elementu w react musiałbyś zajrzeć do kodu źródłowego React’a, ale jedna wydaje mi się, że element jako element w DOM jest właściwym wyjaśnieniem chociaż nieprecyzyjnym), jednak nie ma wątpliwości że Elementem będzie także Web Komponentem, ponieważ on także będzie miał swój odpowiednik w DOM. Elementy występują tylko w JSX, w wynikowym JavaScript-cie zostają zastąpione przez wywołanie funkcji React.createElement, gdzie pierwszy argument to nazwa taga.",
      },
      {
        question: "Jak działa obsługa zdarzeń w React",
        answer:
          "Zdarzenia w React działają podobnie do tych w natywnym DOM, z pewnymi róznicami nazwy zdarzeń pisane są camel case-em do atrybutu zdarzenia przekazuje się funkcje a nie ciąg znaków argument do funkcji obsługi zdarzenia dostaje obiekt klasy SyntheticEvent, który posiada odwołanie do oryginalnego zdarzenia w polu nativeEvent oraz target wskazujący obiekt, który wywołał zdarzenie Ważną rzeczą jest to że zdarzenia w React nie są unikalne, tylko używane ponownie z innymi wartościami. Ta właściwość nazywa się Event Pooling, tzn. że nie można używać zdarzeń wewnątrz funkcji asynchronicznej np. fetch, ponieważ w momencie gdy asynchroniczna akcja się wywoła obiekt zdarzenia może się zmienić. Zastosowano taki mechanizm ze względów optymalizacyjnych. Można jednak ten mechanizm wyłączyć poprzez wywołanie event.persist().",
      },
      {
        question: "Rodzaje komponentów w react",
        answer: "React wyróżnia dwa typu komponentów: komponent bezstanowy (ang. stateless functional component, SFC) będący funkcją, oraz komponent stanowy (ang. stateful functional component) reprezentowany przez klasę. Na początek utworzymy nasz komponent jako komponent SFC.        Wspomnianym drugim typem komponentów są komponenty stanowe - odróżnia je nie tylko to, że posiadają one stan, czyli mogą przechowywać dane odnośnie swojej reprezentacji (przykładowo komponent na wprowadzanie tekstu - <input> zawierałby informacje o aktualnie wpisanym tekście), ale posiadają też funkcje cyklu życia. Funkcje cyklu życia wywoływane są w określonych momentach i pozwalają na przygotowanie i sterowanie działaniem komponentu. Komponenty stanowe opisywane są przez klasę React.Component i muszą implementować przynajmniej funkcję render, która zwraca kod JSX komponentu.Nazwa naszego komponentu - Tweet - nie przypadkowo zaczyna się dużą literą. W ten sposób dajemy znać JSX, że chodzi nam o komponent, a nie o znacznik HTML. Jeżeli utworzymy komponent header i nie użyjemy wielkiej litery, podczas transformacji zostanie on potraktowany jako znacznik HTML i nie uzyskamy oczekiwanego efektu",
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
