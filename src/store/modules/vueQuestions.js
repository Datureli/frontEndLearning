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
              question: "Czym jest created hook",
              answer:
                "Jest to pierwszy hook który działa w naszym komponencie.Wywoływane synchronicznie po utworzeniu instancji. Na tym etapie instancja zakończyła przetwarzanie opcji, co oznacza, że ​​skonfigurowano: obserwację danych, obliczone właściwości, metody, wywołania zwrotne watch / event. Jednak faza montażu nie została rozpoczęta, a właściwość $ el nie będzie jeszcze dostępna.",
                secondAnswer: 'W odróżnieniu od innych hooks,creation hook działą również podczas server-side renderingu.Nie posiada dostępu do dom ani docelowego elemntu montażowego'
            },
            {
              question: "Czym jest mounted hook",
              answer:
                "Jest najczęściej wywoływanym hookiem.Pozwalają nam na dostęp do naszego komponentu natychmiastowo przed i po pierwszym wyrenderowaniu.Nie działają podczas renderowania po stronie serwera.Używany go jeżeli potrzebuje dostępu lub potrzebujemy zmodyfikować DOM naszego komponentu natychmiastowo przez lub po pierwszym wyrenderowaniu.Nie należy używać mounting hooks jeżeli potrzebujemy fetchować naszą data komponent podczas inicjalizacji Wywoływana po zamontowaniu instancji, w której el jest zastępowany przez nowo utworzoną maszynę vm. $ El. Jeśli instancja główna jest podłączona do elementu w dokumencie, vm. $ El będzie również w dokumencie po wywołaniu zamontowania.",
            },
            {
              question: "Czym są komponenty?",
              answer:
                "Komponenty są to instancje Vue, dzięki którym możemy wielokrotnie wykorzystywać te same części kodu w uniwersalny sposób. Unikamy w ten sposób powtarzania się, czyli przestrzegamy zasady DRY (Don’t Repeat Yourself). Dzięki temu aplikacja wygląda czysto i przejrzyście, a w przypadku błędów nie musimy poprawiać ich w wielu miejscach.",
                secondAnswer: 'Komponent definiujemy za pomocą Vue.component. Pierwszym argumentem metody jest nazwa elementu DOM, z którego będziemy korzystać w szablonach. Drugi parametr to obiekt, który w tym przypadku posiada dwie właściwości. Najważniejszą z nich jest template, który w efekcie będzie podmieniany w realnym drzewie DOM za każdym razem, kiedy użyjemy komponentu. Drugą właściwością obiektu jest metoda data (metoda, nie obiekt!) zwracająca obiekt z danymi, które będą dostępne w zakresie pojedynczego komponentu.',
                thirdPartOfAnswer: 'Komponenty można zagnieżdżać wewnątrz siebie budując jednocześnie bardziej zaawansowane struktury szablonów. W przykładzie poniżej stworzono dwa proste przykłady: parent i child. Wykorzystane tu zostały specjalne tagi <slot></slot>, które stanowią placeholder. W ich miejscu renderowane jest to, co zostało umieszczone w elemencie rodzica.'
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
                "pozwala na pisanie komponentów w sposób oparty na funkcjach.Nowe API umożliwia hermetyzację logiki w tzw. „composition functions” i pozwala używać jej ponownie we wszystkich komponentach.   ",
            },
            {
              question: "Czym są zdarzenia?",
              answer:
                "Z obsługą zdarzeń mieliśmy do czynienia podczas omawiania dyrektywy v-on. Za jej pomocą dodajemy event listener, który będzie nasłuchiwał wystąpienia zdefiniowanego zdarzenia, a po jego wyzwoleniu wykonywał konkretną akcję (na przykład wykonywał metodę). Pójdźmy jednak o krok dalej i zastanówmy się, jak wygląda komunikacja pomiędzy komponentami w kontekście zdarzeń. Możemy wyobrazić sobie prostą sytuację, w której mamy drzewo DOM składające się z elementu rodzica i zagnieżdżonego w nim dziecka.",
                secondAnswer: ''
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
              question: "Do czego nam plik main.js w vue?",
              answer:
                "Dzieją się tu trzy zasadnicze rzeczy, na które warto zwrócić uwagę:Tworzona jest instancja Vue.Renderowanie komponentu najwyższego poziomu przeniesione zostaje do App.vue.Instancja Vue zostaje powiązana z elementem #app znajdującym się w pliku index.html.",
            },
            {
              question: "Czym jest vue-cli?",
              answer:
                "plikacja konsolowa oparta o node.js, dzięki której będziemy w stanie zarządzać naszą aplikacją z poziomu terminala. Aby zainstalować vue-cli musimy posiadać node.js oraz npm/yarn.",
            },
            {
              question: "Wyjaśnij cykl życia w Vue",
              answer:
                "Jest to proces instancji vue wewnątrz której uruchamiane zostają pewne funkcje które przechodzą przez proces tworzenia i aktualizowania drzewa DOM.Dzięki temu wiemy jak vue działa pod spodem.Wszystkie elementy cyklu zycia posiadają dostęp do this content przypisaną do instancji dzięki czemu możemy uzyskać dostęp do data,computed oraz metod. Wewnątrz powstają i istnieją komponenty vue i są nazywane lifecycle hook's.Cykl życia pozwala nam wiedzieć kiedy nasz komponent powstał,kiedy zostal dodany do dom,zaktualizowany lub zniszcony.  Zasadniczo każde główne zdarzenie cyklu życia Vue jest podzielone na dwa punkty zaczepienia, które są wywoływane tuż przed tym zdarzeniem, a następnie tuż po nim. Istnieją cztery główne zdarzenia (8 głównych punktów zaczepienia), które możesz wykorzystać w swojej aplikacji Vue.",
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
                "W przepływie jednostronnym,wizualna warstwa aplikacji nie aktualizuje się automatycznie kiedy data się zmienia musimy napisać kod który będzie aktualizować się podczas każdej zmiany.W przypadku two-way data binding zmiany dokonywane są automatycznie.Przykłady użycia one-way w Vue to v-bind natomiast two-way to v-model",
            },
            {
              question:
                "opisz beforeCreate",
              answer:
                "BeforeCreate uruchamia się każdorazowo podczas inicjalizacji naszego komponentu.Data na ten moment nie jest reaktywna,a eventy nie zostały jeszcze ustawione więc nie możemy dokonać ,żadnych interakcji z naszym komponentem. Używanie beforeCreatehaka jest przydatne, gdy potrzebujesz jakiegoś rodzaju wywołania logiki / API, które nie musi być przypisane do danych. Ponieważ gdybyśmy teraz przypisywali coś do danych, zostałoby to utracone po zainicjowaniu stanu.",
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
              question: "Czym jest updated hook?",
              answer:
                "Jest uruchamiany zaraz po tym jak data naszego komponentu oraz dom zostaną rerenderowane.Używamy go w sytuacji gdy potrzebujemy dostępu do DOM zaraz po zmianie propety  ",
            },
            {
              question: "opisz created hook",
              answer:
                "Uruchamia się zanim template i virtual DOM zostaną zamonotowane lub wyrenderowane.Wywoływana jest zaraz po utworzeniu instancji.Masz dostęp do reaktywnej data oraz events które są aktywne. Na tym etapie instancja zakonczyla przetwarzanie daty,computed,metod,watchers oraz event callback.Nie możemy narazie odziaływać na drzewo DOM ponieważ nasz komponent nie został zamontowany.Również właściwość $el nie jest dostępna.",
            },
            {
              question: "opisz beforeMount hook",
              answer:
                "Na tym etapie,template został skompilowany ani wyrenderowany.Metoda $el nie istnieje.Uruchamia się zaraz przed początkowym renderowaniem  oraz zaraz po tym jak template albo funkcja renderująca zostaje skompilowana.Nie może zostać wywołany podczas server-side renderingu",
            },
            {
              question: "opisz Mounted hook",
              answer:
                "W mounted hook posiadasz pełny dostęp do reaktywnego komponentu,template oraz wyrenderowanego drzewa DOM(poprzez this.$el).Należy go używać w przypadku gdy chcemy modyfikować DOM,w szczególności przy integracji z innymi bibliotekami innymi niż vue.Należy wspomnieć,że mounted hook nie gwarantuje nam ,że element będzie dodany do drzewa dom na tym etapie",
            },
            {
              question: "Czym jest beforeUpdate hook?",
              answer:
                "Uruchamia się podczas gdy data w naszym komponencie ulega zmianie oraz cykl update się rozpoczyna,zaraz przed tym DOM jest patched oraz rerenderowany.Używamy go jeżeli potrzebujemy dostać się do new state w jakiejkolwiek reactive data naszego komponentu zanim zostanie wyrenderowany.Podczas wywołania tego hooka dom komponentu zostanie zaktualizowany więc możemy wykonywać operacje na drzewie dom.Należy jednak pamiętam ,że w większości przypadków powinieneś unikać zmiany state podczas uzywania tego hooka.Aby dokonać zmian lepiej jest użyć właściwości computed lub watcher.",
            },
            {
              question: "Czym jest update hook?",
              answer:
                "Updating hooks są zawsze wywołwane gdy reaktywny propety używany przez twój komponent zmienia się lub coś innego powoduje przerenderowanie komponentu.Pozwala nam wejść w  watch-compute-render cycle dla twojego komponentu.Używamy go gdy potrzebujemy wiedzieć kiedy nasz komponent renderuje się na nowo np dla debugowania.Nie należy używać update hooks jeżeli chcemy wiedzieć kiedy reaktywność naszego komponentu ulega zmianie.Zamiast tego możęmy użyć watch albo computed. "
            },
            {
              question: "Czym jest beforeDestroy hook?",
              answer:
                "Jest uruchamiany zaraz przed zniszczeniem komponentu.Komponent nadal będzie istniał i będzie funkcjonalny.Używamy go gdy chcemy wyczyścić eventy lub reaktywność.Na ten moment instancja jest w pełni funkcjonalna.Hook ten Please note that this hook is not called during sever-side rendering..",
            },
            {
              question: "Czym jest destroyed hook?",
              answer:
                "Podczas gdy osiągamy stan destroyed hook,praktycznie nic nie pozostaje w naszym komponencie.Wszystko co zostało z nim powiązane zostaje usunięte.Używamy go gdy chcemy wyczyścić lub poinformować server ,że komponent został zniszczony.",
            },
            {
              question: "Czym jest activated i dezactivated hook?",
              answer:
                "Służą utrzymywania przy życiu komponentów.Pozwalają nam wykryć kiedy komponent owinięty w tag <keep-alive>.Możemy użyć ich do fetchowania data dla naszego komponentu oraz aby uchwycić zmiany naszego state.Zachowuje się jak created oraz beforedestroy bez potrzeby tworzenia komponentu na nowo",
            },
            {
              question: "Czym są destructing hooks?",
              answer:
                "Pozwalają nam wykonywać akcje kiedy nasz komponent zostanie zniszczony,takie jak cleanup lub wysyłanie analiz.Zostają odpalone kiedy komponent zostanie usunięty z drzewa DOM",
            },
            {
              question: "Czym jest Destroy hook?",
              answer:
                "Destroyed — Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed. Please note that this hook is not called during sever-side rendering.",
            },
            {
              question: "Czym jest virtual DOM?",
              answer:
                "virtual dom to obiekt javascript reprezentujący document object model(dom)Vue aktualizuje virtual dom zamiast aktualizowac po prostu dom.Dzięki temu redukujemy koszt aktualizacji prawdziwego dom.Wirtualny dom oferuje nam możliwość kontrolowania w którym momencie virtual dom ma być wyrenderowany.Oferuje również możliwość polepszenia wydajności naszych aplikacji internetowych poprzez zmniejszenie ilosci aktualizacji dla dom",
            },
            {
              question: "Wymień funkcjonalności w Vue",
              answer: "Raktywność,templates,komponenty,transition,routing",
            },
            {
              question: "Jak działa Vue?",
              answer: "Zasadniczą czynnością, jaką musimy wykonać na samym początku jest powiązanie obiektu Vue z konkretnym elementem DOM w naszym dokumencie. Instancja Vue musi wiedzieć, w jakim zakresie ma działać i trzeba to wyraźnie zdefiniować. Robimy to poprzez podanie nazwy selectora właściwości el obiektu, którego przekazujemy jako argument konstruktora Vue(). Dzięki temu każde dziecko zdefiniowanego elementu będzie obserwowane i przetwarzane jako wirtualne drzewo DOM (Virtual DOM).",
              secondAnswer: 'Właściwość data zawiera pola, których będziemy używać do przechowywania naszych danych, methods przetrzymuje definicje metod dostępnych w zasięgu instancji. Metody kryjące się w computed to wartości obliczane dynamicznie. Definiujemy je jako metody, jednakże w momencie ich użycia korzystamy z nich jak ze zwykłego pola (Vue oblicza je automatycznie).',
              thirdPartOfAnswer: 'Ważną kwestią jest sposób odwoływania się do jednej z powyższych właściwości, który odbywa się pośrednictwem referencji this. Jest to możliwe dzięki temu, że Vue łączy wszystkie właściwości z główną instancją obiektu, co daje do nich bezpośredni dostęp.'
            },
            {
              question: "Czym są dyrektywy?",
              answer: "Dyrektywy są specjalnymi atrybutami znajdującymi swoje zastosowanie w szablonach. Poprzedzane są prefiksem v-, na przykład: v-if, v-else, v-for, v-model, v-bind. Warto pamiętać, że wiele z nich posiada aliasy, które mogą być używane zamiennie.",
            },
            {
              question: "Opisz dyrektywe v-on",
              answer: "Pozwala na wiązanie event listenerów do wybranych elementów DOM.",
            },
            {
              question: "Opisz dyrektywe v-for",
              answer: "Pozwala na wykonanie pętli na powiązanym elemencie DOM.",
            },
            {
              question: "Opisz dyrektywe v-bind",
              answer: "Pozwala na wiązanie wyrażeń do atrybutów elementów DOM.",
            },
            {
              question: "Opisz dyrektywe v-model",
              answer: "Pozwala na wiązanie elementów DOM takich jak na przykład input do pól obiektu data.",
            },
      
            {
              question: "co to jest flux?",
              answer:
                "Flux to wzorzec projektowy stworzony do ujednolicenia przepływu danych w aplikacjach, szczególnie tych frontowych. Posiada trzy części: dispatch, store i view.View (ang. widok) to część w której użytkownik komunikuje się z aplikacją.Store to w dużym uproszczeniu obiekt z stanem aplikacji.Dispatcher to centralna część fluxa z której wysłamy prośby o zmianę stanu aplikacji.",
            },
            {
              question: "Na czym polega reaktywność w vue",
              answer:
                "Wszystkie właściwości zdefiniowane w instancji vue są reaktywne.Oznacza to ,że jeżeli zajdzie jakaś zmiana to komponent automatycznie się zaktualizuje.Podczas inicjalizacji wszystkie właściwości są konwertowane do getterów oraz setterów,dzięki temu vue wie kiedy należy dokonać aktualizacji",
            },
            {
              question: "Czym jest single file component?",
              answer:
                "Jest to plik z rozszerzeniem vue. zawierającym komponent vue.W przeciwieństwie do stndardowego podziału plików na style,szkielet oraz logike w odrębnych plików,w single file component wszystko znajduje się w jednym pliku.",
            },
            {
              question: "Jak walidować propsy?",
              answer:
                "Możemy tego dokonać poprzez dodanie required key oraz jego wartości do props.Możemy walidować za pomocą typu propsa oraz używając required.",
            },
            {
              question: "Wyjaśnij na czym polega przepływ danych w vue",
              answer:
                "Vue używa one-way data flow.Dane są przekazywane do komponentu dziecka z komponentu rodzica za pomocą właściwości props",
            },
            {
              question: "Czym jest props?",
              answer:
                "Propsy są używane do przekazywania informacji/data z komponentu rodzica do komponentu dziecka.Można go zarejestrować w komponencie aby przekazać dane do jednego z komponentów dziecka.Dane w props mogą przepływać tylko jednostronnie,z komponentu rodzica do komponentu dziecka.To oznacza ,że nie jesteśmy w stanie przesłać propsa z komponentu dziecka do rodzica.",
                secondAnswer: 'Propsy są read-only a to oznacza ,że nie mogą zostać zmodyfikowane przez komponent dziecka ponieważ wartość należy do komponentu rodzica'
            },
            {
              question: "czym jest mapState?",
              answer:
                "życie mapState() pozwala na pobranie i przypisanie do lokalnego scope wartości bezpośrednio z sekcji state w store. W ten sposób otrzymujemy czyste dane – bez żadnych modyfikacji. Ma to duży sens, jeśli są to typy proste – jakaś flaga będąca wartością boolean (true/false), np. flaga „loading” itp.",
            },
            {
              question: "Czym są sunspense components",
              answer:
                "Suspense components to nowa funkcja w vue 3 której ogólną ideą jest umożliwienie komponentom „zawieszenia” renderowania, np. Jeśli potrzebują dodatkowych danych ładowanych ze źródeł zewnętrznych. Gdy wszystkie informacje będą dostępne, js ponownie spróbuje wyrenderować komponent.Aby to osiągnąć Komponent może rzucić Promise w swojej metodzie renderowania (lub cokolwiek, co jest wywoływane podczas renderowania komponentu , np. Nowy statyczny getDerivedStateFromProps). React łapie rzuconą Obietnicę i szuka najbliższego Suspensekomponentu na drzewie, które działa jak rodzaj granicy. SuspenseSkładnik bierze element jako fallbackpodpora, która będzie wyświetlana, gdy wszystkie dzieci w jego poddrzewem zawiesinie, bez względu na to gdzie i dlaczego.",
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
  