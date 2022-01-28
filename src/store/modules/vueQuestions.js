export default {
    namespaced: true,
  
    state: {
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
              question: "Czym są komponenty funkcyjne",
              answer:
                "props zawsze napływają do komponentu z zewnątrz. Drugim obiektem, który służy do zarządzania danymi w komponentach, jest state. Dzięki nim komponent może zarządzać stanem od wewnątrz. state jest dostępne wyłącznie w komponentach klasowych.Z tego powodu komponenty funkcyjne często określa się inną, dość rozwlekłą w języku polskim, nazwą: funkcyjne komponenty pozbawione stanu (ang. functional stateless components, FCS).",
                secondAnswer: 'Po co decydujemy się na korzystanie z komponentów, które mają jawnie ograniczony zakres możliwości?Jak się okazuje, te ograniczenia mają swoje zalety.Komponenty funkcyjne cechuje prostota, zwięzłość i przewidywalność. Nie musimy przejmować się stanem ani innymi funkcjonalnościami, dodającymi zbędną złożoność.Komponenty pozbawione stanu są świetnym sposobem na redukowanie złożoności aplikacji.'
            },
            {
              question: "Czym są mixiny?",
              answer:
                "mixiny to funkcje które pozwalają nam na reużywalność kodu pomiędzy komponentami w vue js.Jest to objekt javascript który może zawierać każdą opcję jaką zawiera komponent",
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
              question:
                "Podaj różnicę między one-way-data flow a two-way data binding",
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
              answer: "Raktywność,templates,komponenty,transition,routing",
            },
            {
              question: "Objaśnij cykl życia w Vue",
              answer: "Raktywność,templates,komponenty,transition,routing",
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
    },
  
    mutations: {
      vueQuestionLoop(state) {
        setInterval(() => {
          state.vueQuestions.sort(function() {
            return Math.round(Math.random()) - 0.5;
          });
        }, 1000);
      },
      randomVueQuestion(state) {
        state.vueQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }
    },
      actions: {
        vueQuestionLoop(context) {
          context.commit("vueQuestionLoop");
        },
        randomVueQuestion(context) {
          context.commit("randomVueQuestion");
        },
      },
    }
  