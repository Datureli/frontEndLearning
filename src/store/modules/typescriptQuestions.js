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
              question: "czym jest parametr rest?",
              answer:
                "Rest, jak pewnie wiesz z JavaScriptu, zbiera pozostałe parametry z tablicy. ",
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
                "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
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
                "Oznacza każdy typ, jeśli to możliwe, unikaj wrzucania any tam, gdzie nie ma ono zastosowania.",
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
      typescriptQuestionLoop(state) {
        setInterval(() => {
          state.typescriptQuestions.sort(function() {
            return Math.round(Math.random()) - 0.5;
          });
        }, 1000);
      },
      randomTypescriptQuestion(state) {
        state.typescriptQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      },
    },
    actions: {
      typescriptQuestionLoop(context) {
        context.commit("typescriptQuestionLoop");
      },
      randomTypescriptQuestion(context) {
        context.commit("randomTypescriptQuestion");
      },
    },
  };
  