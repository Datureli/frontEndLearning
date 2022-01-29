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
              question: "omów created hook",
              answer:
                "Wywoływane synchronicznie po utworzeniu instancji. Na tym etapie instancja zakończyła przetwarzanie opcji, co oznacza, że ​​skonfigurowano: obserwację danych, obliczone właściwości, metody, wywołania zwrotne watch / event. Jednak faza montażu nie została rozpoczęta, a właściwość $ el nie będzie jeszcze dostępna.",
            },
            {
              question: "omów mounted hook",
              answer:
                "Wywoływana po zamontowaniu instancji, w której el jest zastępowany przez nowo utworzoną maszynę vm. $ El. Jeśli instancja główna jest podłączona do elementu w dokumencie, vm. $ El będzie również w dokumencie po wywołaniu zamontowania.",
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
                "Zasadniczo każde główne zdarzenie cyklu życia Vue jest podzielone na dwa punkty zaczepienia, które są wywoływane tuż przed tym zdarzeniem, a następnie tuż po nim. Istnieją cztery główne zdarzenia (8 głównych punktów zaczepienia), które możesz wykorzystać w swojej aplikacji Vue.",
                secondAnswer: 'Tworzenie - działa na utworzeniu komponentu  Montaż - działa, gdy jest zamontowany DOM  Aktualizacje - uruchamia się, gdy modyfikowane są dane reaktywne  Destruction - działa tuż przed zniszczeniem twojego żywiołu.',
                thirdPartOfAnswer: 'All lifecycle hooks automatically have their this context bound to the component instance, so that you can access data, computed properties, and methods. This means you should not use an arrow function to define a lifecycle method (e.g. created: () => this.fetchTodos()). The reason is arrow functions bind the parent context, so this will not be the Vue instance as you expect and this.fetchTodos will be undefined.In order words, arrow functions does not have their own value of this. The value of this in an arrow function is inherited from the enclosing (lexical) scope. So, you cannot use them inside a hook.'
            },
            {
              question: "Jak stworzyć two-way binding w Vue js?",
              answer:
                "Do stworzenia służy dyrektywa v-model.W obustronnym przepływie danych data albo model jest przypięty do DOM i dom jest przypięty do modelu",
            },
            {
              question: "Cykl życia w composition api",
              answer:
                "W API Composition musimy zaimportować haki cyklu życia do naszego projektu, zanim będziemy mogli ich użyć. Ma to pomóc w utrzymaniu jak najmniejszych projektów.",
                secondAnswer: 'onBeforeMount - wywołane przed rozpoczęciem montażu onMounted - wywoływane, gdy komponent jest montowany onBeforeUpdate - wywoływana, gdy reaktywne dane ulegają zmianie i przed ponownym renderowaniem onUpdated - wywołana po ponownym renderowaniu onBeforeUnmount - wywołana przed zniszczeniem instancji Vue onUnmounted - wywoływana po zniszczeniu instancji onActivated - wywoływane, gdy aktywny jest komponent onDeactivated - wywoływana, gdy utrzymywany przy życiu komponent jest dezaktywowany onErrorCaptured - wywoływana, gdy zostanie przechwycony błąd z komponentu potomnego',
                thirdPartOfAnswer: ''
            },
            {
              question:
                "Podaj różnicę między one-way-data flow a two-way data binding",
              answer:
                "W przepływie jednostronnym,wizualna warstwa aplikacji nie aktualizuje się automatycznie kiedy,kiedy data się zmienia musimy napisać kod który będzie aktualizować się podczas każdej zmiany.W przypadku two-way data binding zmiany dokonywane są automatycznie.Przykłady użycia one-way w Vue to v-bind natomiast two-way to v-model",
            },
            {
              question:
                "opisz beforeCreate",
              answer:
                "Używanie beforeCreatehaka jest przydatne, gdy potrzebujesz jakiegoś rodzaju wywołania logiki / API, które nie musi być przypisane do danych. Ponieważ gdybyśmy teraz przypisywali coś do danych, zostałoby to utracone po zainicjowaniu stanu.",
                secondAnswer: 'This is the first hook that gets called after the Vue instance has been initialized. At this stage, data observation (reactivity), events, computed properties and watchers are yet to be set up. Therefore , we cannot interact with any parts of the component.'
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
              question: "opisz created hook",
              answer:
                "This hook is called after the instance is created. At this stage, the instance has finished processing, data observation (reactivity), computed properties, methods, watchers and event callbacks have been set up. You can’t interact with the DOM at this stage because your component has not been mounted. The $el property is not also available yet.",
            },
            {
              question: "opisz beforeMount hook",
              answer:
                "At this stage, the template is compiled, either from the template or render options, or from the outerHTML of the element that Vue was initialized to. The template isn’t rendered yet and the $el method doesn’t exist either. Please note that this hook is not called during sever-side rendering.",
            },
            {
              question: "opisz Mounted hook",
              answer:
                "alled after the instance has been mounted, where el property is replaced by the newly created vm.$el. If the root instance is mounted to an in-document element, vm.$el will also be in-document when mounted is called. The component becomes fully functional after the mounted hook is called and we can fully interact with it.One thing to take note of is that the mounted hook doesn’t guarantee that the element has been added to DOM. To execute a code that is DOM dependent at this stage, put the code inside a callback method to the Vue.nextTick() function (Vue.nextTick() defers its callback to be executed after the next DOM update cycle). See the example below:",
            },
            {
              question: "Czym jest beforeUpdate hook?",
              answer:
                "pdated — hook is fired after a change has been made. The component’s DOM would have been updated when this hook is called, so you can perform DOM-dependent operations here. However, in most cases you should avoid changing state inside the hook. To react to state changes, it’s usually better to use a computed property or watcher instead.",
            },
            {
              question: "Czym jest update hook?",
              answer:
                "hook is fired after a change has been made. The component’s DOM would have been updated when this hook is called, so you can perform DOM-dependent operations here. However, in most cases you should avoid changing state inside the hook. To react to state changes, it’s usually better to use a computed property or watcher instead.    Note that updated does not guarantee that all child components have also been re-rendered. If you want to wait until the entire view has been re-rendered, you can use vm.$nextTick inside of updated:"
            },
            {
              question: "Czym jest beforeDestroy hook?",
              answer:
                "Called right before a Vue instance is destroyed. At this stage the instance is still fully functional. You can perform necessary cleanups here. Please note that this hook is not called during sever-side rendering..",
            },
            {
              question: "Czym jest Destroy hook?",
              answer:
                "Destroyed — Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed. Please note that this hook is not called during sever-side rendering.",
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
  