export default {
  namespaced: true,

  state: {
    typescriptQuestions: [
      {
        question: "czym jest enum?",
        answer:
          "Z definicji służą do grupowania numerycznych wartości, jest to pewnego rodzaju zbiór. Elementy enuma, numerowane są od zera.Enumy są często wykorzystywane na bazie stringów.",
      },
      {
        question: "opisz typ tuple?",
        answer:
          "Typ tuple pozwala zadeklarować tablicę z wartościami o różnych typach. Nie muszą być one takie same, jeśli znamy typy wartości, możemy zamiast any, podać typ tuple.",
      },
      {
        question: "opisz Utility Types?",
        answer:
          "Są to globalne typy pomocnicze. Przydają się, jeśli mamy kilka typów, które są np. readonly lub optional. Mają podobną składnię do typów generycznych.",
      },
      {
        question: "czym jest parametr rest?",
        answer:
          "Rest podobnie jak w javascript zbiera pozostałe parametry z tablicy. ",
      },
      {
        question: "czym jest Intersection Types",
        answer: "Połączenie dwóch typów w jeden",
      },
      {
        question: "Union Types i Type guard",
        answer:
          "Pozwala opisać typ jeden z dwóch (lub wielu). Możemy go użyć z Type guardem. Type guard pozwala nam sprawdzić np. Czy dana zależność znajduje się w obiekcie. in to zależność JavaScriptowa, nie TS'owa. Type guardem może być również typeof czy też instanceof, metod na type guardy jest wiele.",
      },
      {
        question: "Javascript vs typescript",
        answer:
          "TypeScript to nadzbiór języka JavaScript, który dodaje opcjonalne adnotacje typów i inne funkcje, takie jak interfejsy, klasy i przestrzenie nazw. JavaScript to dynamicznie typowany język, który jest używany głównie do tworzenia stron internetowych po stronie klienta, ale może być również używany do programowania po stronie serwera.TypeScript posiada opcjonalne adnotacje typów, podczas gdy JavaScript jest językiem o dynamicznych typach. Oznacza to, że w TypeScript można określić typ danych zmiennych, parametrów i wartości zwracanych, co może pomóc w wykrywaniu błędów związanych z typami w czasie kompilacji.",
      },
      {
        question: "czym jest alias typów?",
        answer:
          "Pozwala na zdefiniowanie aliasu danego typu. Jeśli zdefiniujemy sobie taki alias, będziemy mogli go używać w wielu miejscach.",
      },
      {
        question: "czym jest jawne rzutowanie?",
        answer:
          "Jeden obiekt można rzutowaćna obiekt innego typu, używając zapisu z parąnawiasów kątowych (< >)Właściwie nie jest to rzutowanie w ścisłym znaczeniu tego słowa, a raczej asercja stosowana przez kompilator TypeScript w trakcie wykonywania kodu. Wszelkie zastosowane jawne rzutowania zostan ąusunięte ze skompilowanego kodu JavaScript, dzięki czemu nie będąwpływały na działanie kodu podczas jego wykonywania",
      },
      {
        question: "Opisz tsconfig?",
        answer:
          "tsconfig.json jest plikiem konfiguracyjnym używanym w projektach opartych na TypeScript. Jest to plik w formacie JSON, który definiuje różne ustawienia i opcje kompilacji dla projektu TypeScript.Oto kilka ważnych opcji, które można skonfigurować w pliku tsconfig.json:'compilerOptions': Jest to sekcja, w której można określić opcje kompilatora TypeScript. Należą do nich m.in. ustawienia dotyczące targetu (docelowego poziomu JavaScript, na który ma być skompilowany kod), modułu (systemu modułów, np. CommonJS, ES6), ścieżki (do rozwiązywania modułów), strict (włączanie/wyłączanie restrykcyjnych sprawdzeń typów) i inne.'include': Określa, które pliki lub foldery mają być uwzględnione podczas kompilacji. Można tu używać wzorców glob, aby wskazać odpowiednie pliki do kompilacji.'exclude': Przeciwnie do 'include', określa, które pliki lub foldery mają być wykluczone z procesu kompilacji.'extends': Pozwala na rozszerzenie konfiguracji poprzez odwołanie się do innego pliku tsconfig.json. Można użyć tej opcji, aby dziedziczyć ustawienia z innej konfiguracji.'files': Pozwala na bezpośrednie określenie listy plików, które mają być uwzględnione w kompilacji. Ten parametr zastępuje automatyczne wyszukiwanie plików w strukturze projektu.'compilerOptions.outDir': Określa katalog docelowy, do którego mają być zapisane skompilowane pliki JavaScript.'compilerOptions.sourceMap': Umożliwia generowanie plików źródłowych (source maps), które pozwalają na debugowanie skompilowanego kodu TypeScript w oryginalnym kodzie TypeScript.'compilerOptions.noEmit': Jeśli ustawione na true, uniemożliwia generowanie plików wynikowych JavaScript podczas kompilacji.",
      },
        {
        question: "Interoperacyjność w ts/js?",
        answer:
          "TypeScript i JavaScript mają pełną interoperacyjność, co oznacza, że można używać kodu TypeScript w projektach JavaScript i odwrotnie. TypeScript jest nadzbiorem języka JavaScript, co oznacza, że każdy poprawny kod JavaScript jest również poprawnym kodem TypeScript.Możesz rozszerzać istniejący kod JavaScript, dodając deklaracje typów, interfejsy, dekoratory i inne funkcje dostępne w TypeScript. To pozwala na silniejszą kontrolę typów i lepsze narzędzia deweloperskie.",
      },
      {
        question: "opisz funkcje w typescript?",
        answer:
          "Każdy parametr funkcji ma własny typ, definiujemy go dwukropkiem. Po nawiasach (), podajemy typ, jaki będzie miała zwracana wartość z funkcji. Taka sama konstrukcja tyczy się funkcji strzałkowych. Parametry funkcji typujemy po dwukropku. Defaultowo wszystkie parametry są wymagane, możemy to jednak zmienić stawiając znak zapytania przed dwukropkiem. Możemy podać domyślną wartość dla parametru funkcji, gdy to zrobimy, typescript domyśli się jaki jest typ naszej wartości.",
      },
      {
        question: "opisz tablice w typescript?",
        answer:
          "W typescript tablice dzielą się na dwa rodzaje: listę oraz tuple. W liście wszystkie elementy mają ten sam typ.Można użyć tu type literals lub globalnych interfejsów a dokładniej generics. W tuple elementy niekoniecznie muszą mieć ten sam typ.",
      },
      {
        question: "opisz Typy generyczne(Generics)?",
        answer:
          "Pozwalają nam one nadawać dynamicznie typy. Wyznaczają, w pewnym sensie, kolejny poziom abstrakcji. Mają zastosowanie w funkcjach, interfejsach i klasach.",
      },
      {
        question: "Czym są asercje typów?",
        answer:
          "Asercje w TypeScript to mechanizm, który pozwala programiście wyrazić swoją pewność co do typu wartości w określonym miejscu kodu. Służą one do informowania kompilatora TypeScript, że znamy typ wartości bardziej dokładnie niż wynika to z analizy statycznej typów, na przykład gdy korzystamy z typów bardziej ogólnych lub wynikających z inferencji typów.Istnieją dwa rodzaje asercji w TypeScript:  Asertywny operator typu (as): Pozwala na ręczne przypisanie wartości do określonego typu, który nie jest bezpośrednio zgodny z typem aktualnej wartości. Przykład: W tym przykładzie używamy operatora as do asercji, że wartość value jest typu string, aby uzyskać dostęp do właściwości length. Bez asercji typ value byłby rozpoznany jako unknown, a kompilator nie pozwoliłby na bezpośrednie odwołanie się do właściwości length typu string.Składnia asercji typu (<Type>): Jest starszym stylem asercji w TypeScript. Przez wiele wersji języka była preferowana, ale obecnie zaleca się używanie operatora as. Przykład:Ten przykład używa składni asercji typu <Type> do asercji, że wartość value jest typu string, aby uzyskać dostęp do właściwości length. Podobnie jak w przypadku operatora as, bez asercji typ value byłby rozpoznany jako unknown.  Ważne jest, aby używać asercji z umiarem i tylko wtedy, gdy jesteśmy absolutnie pewni, że dana wartość ma oczekiwany typ. Niepoprawne asercje typu mogą prowadzić do błędów i nieprawidłowego zachowania programu",
          codeExample: "const value: unknown = 'Hello, world!'const length: number = (value as string).length;"
      },
      {
        question: "Czym jest asercja typów?",
        answer:
          "Powiedzmy, że zadeklarowałeś w pewnym momencie zmieną typu any. Po jakimś czasie wiesz, że ta zmienna powinna być typu string. Za pomocą asercji typów możesz oznajmić TypeScriptowi, że wiesz, co robisz. Nie wpływa ona na runtime, jest używana tylko w procesie kompilacji. Asercję możemy zapisać na dwa sposoby.",
      },
      {
        question: "opisz typ never?",
        answer:
          "Typ never reprezentuje typ, który nigdy nie przemija. Może być sub typem każdego typu (oprócz samego siebie). Funkcja, która zwraca never, musi mieć tzw unreachable end point.",
      },
      {
        question: "czym jest non null assertion operator?",
        answer:
          "Non-null assertion operator (!) to operator w TypeScript, który służy do asercji, że wartość nie jest typu null ani undefined. Operator ten informuje kompilator, że pomimo tego, że dany typ może być potencjalnie null lub undefined, programista jest pewien, że w danym miejscu wartość będzie zawsze dostępna.Składnia non-null assertion operatora to wykrzyknik ! umieszczony po zmiennej lub wyrażeniu.Warto jednak zachować ostrożność przy używaniu non-null assertion operatora, ponieważ może to prowadzić do błędów runtime, jeśli asercja okaże się fałszywa. Operator ten pozwala omijać statyczną analizę typów, więc warto go używać tylko wtedy, gdy jesteśmy absolutnie pewni, że wartość nie będzie null lub undefined. Przed zastosowaniem tego operatora należy dokładnie rozważyć kontekst i upewnić się, że asercja jest uzasadniona.",
      },
      {
        question: "Dlaczego powinniśmy używać typescripta?",
        answer:
          "błędy typu są wyłapywane podczas kompilacji,bogatsza obsługa edytorów,łatwiejszy w odczycie i rozumieniu kod,wspomaga developer experience(debugowanie)",
      },
      {
        question: "czym jest typ unknown?",
        answer:
          "typ unknown może być skuteczny przy danych z API. Jest on bardzo podobny do any, bo tak jak any może przyjąć każdy typ. Samo unknown nie jest jednak przypisywalne do innej wartości niż any lub unknown, bez aktywnej asercji typów. Dlaczego unknown jest lepszym wyborem od any? Daje nam on podobną swobodę, ale pilnuje nas, przed nieświadomym przypisaniem do poprawnie otypowej zmiennej.",
      },
      {
        question: "czym jest generics?",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
      {
        question: "czym są intefejsy?",
        answer:
          "Jednym z podstawowych zasad ts jest to, że sprawdzanie typów koncentruje się na 'kształcie' ich wartości. Mówimy na to podtyp strukturalny. W TypeScript sposobem na definiowanie takich związków są właśnie interfejsy. Dzięki nim możemy definiować strukturę obiektu. Są one niezmiernie przydatne w klasach.Jeśli chcesz, aby dana wartość była tylko do odczytu i żebyś nie mógł jej modyfikować, powinieneś skorzystać z readonly. Możemy rozszerzać interfejsy używając słowa extends.",
      },
      {
        question: "Opisz typ any",
        answer:
          "Oznacza każdy typ. any, może być przydatne przy zaciąganiu jakiś zewnętrznych danych (API).",
      },
      {
        question: "Czym jest klasa public?",
        answer:
          "public w TypeScripcie działają tak jak *normalne właściwości, nie musisz ich oznaczać.",
      },
      {
        question: "Czym jest klasa private?",
        answer:
          "Każdą właściwość możemy zmienić na prywatną, poprzedzając ją słowem private. Taka właściwość nie będzie dostępna poza klasą, w której się znajduje. Prywatne właściwości nie są chronione podczas runtime'u",
      },
      {
        question: "Czym jest implements w interfejsach?",
        answer:
          "Interfejsy wykorzystujemy w klasach, używając słowa implements. Możemy ich podać kilka, mogą również być one rozszerzane.",
      },
      {
        question: "Czym są klasy abstrakcyjne?",
        answer:
          "Klas abstrakcyjnych nie możemy instancjonować. Tylko klasy dziedziczne mogą to robić, no chyba, że są również abstrakcyjne. Abstrakcyjne klasy mogą również posiadać abstrakcyjne metody, nie mogą być one implementowane, posiadają tylko tzw. sygnaturę typów. Do oznaczania abstrakcyjnych klas i ich metod używamy słowa abstract.Przypominają one Intefejsy, ale nimi nie są. Abstrakcyjne klasy mogą zawierać również metody z jakąś implementacją (metody bez abstract), interfejsy tego nie robią.Abstrakcyjne klasy występują tylko w procesie kompilacji, podczas runtime'u zachowują się jak normalne klasy.",
      },
      {
        question: "Union Types i Type guard",
        answer:
          "Pozwala opisać typ jeden z dwóch (lub wielu). Możemy go fajnie użyć z tzw. Type guardem. Co to jest type guard? Type guard pozwala nam sprawdzić np. Czy dana zależność znajduje się w obiekcie. in to zależność JavaScriptowa, nie TS'owa. Type guardem może być również typeof czy też instanceof, metod na type guardy jest wiele.",
      },
      {
        question: "Czym jest klasa protected?",
        answer:
          "Podobne do private, różnią się tym, że protected możemy użyć podczas dziedziczenia.",
      },
      {
        question: "Co to jest type casting?",
        answer:
          "Oznacza każdy typ, jeśli to możliwe, unikaj wrzucania any tam, gdzie nie ma ono zastosowania.",
      },
      {
        question: "Czym są indeksowane typy?",
        answer:
          "Tak samo jak możemy typować funkcję, możemy również użyc interfejsów z tzw. indeksowalnymi typami.",
      },
      {
        question: "Opisz typ void",
        answer:
          "W pewnym sensie przeciwieństwo any, jest to typ 'brak typu'. Najczęściej używany przy funkcjach, jako oznaczenie, że dana funkcja nic nie zwraca:",
      },
    ],
  },

  mutations: {
    randomTypescriptQuestion(state) {
      state.typescriptQuestions.sort(() => Math.floor(Math.random() - 0.5));
    },
  },
  actions: {
    typescriptQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomTypescriptQuestion");
      }, 5000);
    },
    randomTypescriptQuestion(context) {
      context.commit("randomTypescriptQuestion");
    },
  },
};
