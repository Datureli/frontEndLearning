export default {
    namespaced: true,
  
    state: {
        typescriptQuestions: [
            {
              question:
                "Jaka jest różnica między wyrażeniem a niejawnością?",
              answer:
                "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
            },
            {
              question: "czym jest enum?",
              answer:
                "Z definicji służą do grupowania numerycznych wartości, jest to pewnego rodzaju zbiór. Elementy enuma, numerowane są od zera.Enumy są często wykorzystywane na bazie strigów.",
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
                "Rest, jak pewnie wiesz z JavaScriptu, zbiera pozostałe parametry z tablicy. ",
            },
            {
              question: "czym jest Intersection Types",
              answer:
                "Połączenie dwóch typów w jeden: ",
            },
            {
              question: "Union Types i Type guard",
              answer:
                "Pozwala opisać typ jeden z dwóch (lub wielu). Możemy go fajnie użyć z tzw. Type guardem. Co to jest type guard? Type guard pozwala nam sprawdzić np. Czy dana zależność znajduje się w obiekcie. in to zależność JavaScriptowa, nie TS'owa. Type guardem może być również typeof czy też instanceof, metod na type guardy jest wiele.",
            },
            {
              question: "czym jest alias typów?",
              answer:
                "Pozwala na zdefiniowanie aliasu danego typu. Często w przykładach wykorzystywaliśmy typ string dla userName. Jeśli zdefiniujemy sobie taki alias, będziemy mogli go używać w wielu miejscach.",
            },
            {
              question: "opisz funkcje w typescript?",
              answer:
                "Każdy parametr funkcji ma własny typ, definiujemy go dwukropkiem. Po nawiasach (), podajemy typ, jaki będzie miała zwracana wartość z funkcji. Taka sama konstrukcja tyczy się funkcji strzałkowych.parametry funkcji typujemy po dwukropku.Defaultowo wszystkie parametry są wymagane, możemy to jednak zmienić stawiając znak zapytania przed dwukropkiem.Możemy podać domyślną wartość dla parametru funkcji, gdy to zrobimy, typescript domyśli się jaki jest typ naszej wartości.",
            },
            {
              question: "opisz tablice w typescript?",
              answer:
                "W typescript tablice dzielą się na dwa rodzaje: listę oraz tuple.W liście wszystkie elementy mają ten sam typ.Można użyć tu type literals lub globalnych interfejsów a dokładniej generics.W tuple elementy niekoniecznie muszą mieć ten sam typ.",
            },
            {
              question: "opisz Typy generyczne(Generics)?",
              answer:  "Pozwalają nam one nadawać dynamicznie typy. Wyznaczają, w pewnym sensie, kolejny poziom abstrakcji. Mają zastosowanie w funkcjach, interfejsach i klasach.",
            },
            {
              question: "Czym jest asercja typów?",
              answer:
                "Powiedzmy, że zadeklarowałeś w pewnym momencie zmieną typu any. Po jakimś czasie wiesz, że ta zmienna powinna być typu string. Za pomocą asercji typów możesz oznajmić TypeScriptowi, że wiesz, co robisz. Nie wpływa ona na runtime, jest używana tylko w procesie kompilacji. Asercję możemy zapisać na dwa sposoby.",
            },
            {
              question: "opisz typ never?",
              answer:
                "Typ never reprezentuje typ, który nigdy nie przemija. Może być sub typem każdego typu (oprócz samego siebie). Pewnie niewiele Ci to mówi, spójrzmy na przykładzie. Funkcja, która zwraca never, musi mieć tzw unreachable end point.",
            },
            {
              question: "Dlaczego powinniśmy używać typescripta?",
              answer:
                "błędy typu są wyłapywane podczas kompilacji,bogatsza obsługa edytorów,łatwiejszy  w odczycie i rozumieniu kod,wspomaga developer experience(debugowanie)",
            },
            {
              question: "czym jest typ unknown?",
              answer:
                "Przedstawiam Ci typ unknown, to właśnie on może być skuteczny przy danych z API. Jest on bardzo podobny do any, bo tak jak any może przyjąć każdy typ. Samo unknown nie jest jednak przypisywalne do innej wartości niż any lub unknown, bez aktywnej asercji typów. Dlaczego unknown jest lepszym wyborem od any? Daje nam on podobną swobodę, ale pilnuje nas, przed nieświadomym przypisaniem do poprawnie otypowej zmiennej.",
            },
            {
              question: "czym jest generics?",
              answer:
                "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
            },
            {
              question: "czym są intefejsy?",
              answer:
                "Jednym z podstawowych zasad TS jest to, że sprawdzanie typów koncentruje się na 'kształcie' ich wartości. Mówimy na to podtyp strukturalny. W TypeScript sposobem na definiowanie takich związków są właśnie interfejsy.Dzięki nim możemy definiować strukturę objektu. Są one niezmiernie przydatne w klasach.Jeśli chcesz, aby dana wartość była tylko do odczytu i żebyś nie mógł jej modyfikować, powinieneś skorzystać z readonly.",
                secondAnswer: 'Możemy rozszerzać interfejsy używając słowa extends. Stwórzmy dwa interfejsy - Dog i Animal.'
            },
            {
              question: "Opisz typ any",
              answer:
                "Oznacza każdy typ, jeśli to możliwe, unikaj wrzucania any tam, gdzie nie ma ono zastosowania.any, może być przydatne przy zaciąganiu jakiś zewnętrznych danych (API), jest to najpopularniejsza metoda, ale nie najlepsza. TypeScript od pewnego czasu daje nam lepszy sposób.",
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
              question: "Union Types i Type guard ",
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
        state.typescriptQuestions.sort(() => Math.floor( Math.random() - 0.5));
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
  