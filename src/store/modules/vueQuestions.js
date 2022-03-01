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
        secondAnswer:
          "W odróżnieniu od innych hooks,creation hook działą również podczas server-side renderingu.Nie posiada dostępu do dom ani docelowego elemntu montażowego",
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
        secondAnswer:
          "Komponent definiujemy za pomocą Vue.component. Pierwszym argumentem metody jest nazwa elementu DOM, z którego będziemy korzystać w szablonach. Drugi parametr to obiekt, który w tym przypadku posiada dwie właściwości. Najważniejszą z nich jest template, który w efekcie będzie podmieniany w realnym drzewie DOM za każdym razem, kiedy użyjemy komponentu. Drugą właściwością obiektu jest metoda data (metoda, nie obiekt!) zwracająca obiekt z danymi, które będą dostępne w zakresie pojedynczego komponentu.",
        thirdPartOfAnswer:
          "Komponenty można zagnieżdżać wewnątrz siebie budując jednocześnie bardziej zaawansowane struktury szablonów. W przykładzie poniżej stworzono dwa proste przykłady: parent i child. Wykorzystane tu zostały specjalne tagi <slot></slot>, które stanowią placeholder. W ich miejscu renderowane jest to, co zostało umieszczone w elemencie rodzica.",
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
          "Composition API to nowa struktura do budowania komponentów Vue w celu poprawy czytelności kodu i ponownego wykorzystania.pozwala na pisanie komponentów w sposób oparty na funkcjach.Nowe API umożliwia hermetyzację logiki w tzw. „composition functions” i pozwala używać jej ponownie we wszystkich komponentach.   ",
      },
      {
        question: "Czym są zdarzenia?",
        answer:
          " Za jej pomocą dodajemy event listener, który będzie nasłuchiwał wystąpienia zdefiniowanego zdarzenia, a po jego wyzwoleniu wykonywał konkretną akcję (na przykład wykonywał metodę).",
        secondAnswer: "",
      },
      {
        question: "Jaka jest różnica między vue a nuxt?",
        answer:
          "Nuxt.js i Vue.js obsługują logikę w różny sposób.Główna różnica polega na tym vue zawsze działa po stronie klienta,nuxt nie,co w niektórych wypadkach może powodować problemy.Na przykład gdy próbuje y zaznaczyć element dom,zaraz po tym jak aplikacja zostanie załadowana,istnieje możliwość, że aplikacja działa po stronie Node.js,a w node.js nie ma elementów dom",
        secondAnswer: "To samo miałoby miejsce podczas uzyskiwania dostępu do lokalnej pamięci przeglądarki. To jest główny powód, dla którego Nuxt używa plików cookie w pamięci lokalnej — ponieważ są one zawsze dostępne.Z Vue nie mamy tego rodzaju problemów, ponieważ zawsze działa na kliencie i dlatego nie musimy zawracać sobie głowy tego rodzaju potencjalnymi problemami.",
        thirdPartOfAnswer: 'Nuxt.js generuje własny router w oparciu o strukturę folderów, podczas gdy w przypadku Vue.js należy to zrobić ręcznie – pamiętaj jednak, że obie zasady mają swoje plusy i minusy. Automatycznie generowane zalety routera polegają na tym, że łatwiej i szybciej go utworzyć. Po prostu tworzysz katalog i pliki, a Nuxt wykonuje całą pracę. Ale minusem jest to, że jest mniej kontrolowalny i zarządzalny niż ręcznie napisany.'
      },
      {
        question: "Czym są komponenty funkcyjne",
        answer:
          "props zawsze napływają do komponentu z zewnątrz. Drugim obiektem, który służy do zarządzania danymi w komponentach, jest state. Dzięki nim komponent może zarządzać stanem od wewnątrz. state jest dostępne wyłącznie w komponentach klasowych.Z tego powodu komponenty funkcyjne często określa się inną nazwą funkcyjne komponenty pozbawione stanu (ang. functional stateless components, FCS).",
        secondAnswer:
          "Po co decydujemy się na korzystanie z komponentów, które mają jawnie ograniczony zakres możliwości?Jak się okazuje, te ograniczenia mają swoje zalety.Komponenty funkcyjne cechuje prostota, zwięzłość i przewidywalność. Nie musimy przejmować się stanem ani innymi funkcjonalnościami, dodającymi zbędną złożoność.Komponenty pozbawione stanu są świetnym sposobem na redukowanie złożoności aplikacji.",
      },
      {
        question: "Czym są mixiny?",
        answer:
          "mixiny to funkcje które pozwalają nam na reużywalność kodu pomiędzy komponentami w vue js.Jest to objekt javascript który może zawierać każdą opcję jaką zawiera komponent.Mixiny są pisane w odrebnym pliku i mogą być dzielone pomiędzy komponentami",
      },
      {
        question: "Do czego nam plik main.js w vue?",
        answer:
          "W pliku main.js Dzieją się tu trzy zasadnicze rzeczy, na które warto zwrócić uwagę:Tworzona jest instancja Vue.Renderowanie komponentu najwyższego poziomu przeniesione zostaje do App.vue.Instancja Vue zostaje powiązana z elementem #app znajdującym się w pliku index.html.",
      },
      {
        question: "Czym jest vue-cli?",
        answer:
          "Aplikacja konsolowa oparta o node.js, dzięki której będziemy w stanie zarządzać naszą aplikacją z poziomu terminala. Aby zainstalować vue-cli musimy posiadać node.js oraz npm/yarn.",
      },
      {
        question: "Czym jest vue?",
        answer:
          "vue.js to open-source,progresywny framework javascript stworzony do tworzenia interfejsów użytkownika.Biblioteka skupiona jest na view layer.Jest łatwy w użyciu i w integracji z innymi bibliotekami",
      },
      {
        question: "Czym jest atrybut ref?",
        answer:
          "Vue zapewnia nam koncept propsów oraz zdarzeń umożliwiających komunikację pomiędzy komponentem rodzica i komponentem dziecka.Czasami trzeba uzyskać dostęp bezpośrednio do komponentu dziecka w javascript.Aby uzyskać ten efekt możemy użyć atrybutu ref aby przypisać referencje id do komponentu dziecka.Po przypisaniu mamy dostęp do instancji komponentu w miejscu gdzie zdefiniowalismy ref",
      },
      {
        question: "Wyjaśnij cykl życia w Vue",
        answer:
          "Jest to proces instancji vue wewnątrz której uruchamiane zostają pewne funkcje które przechodzą przez proces tworzenia i aktualizowania drzewa DOM.Dzięki temu wiemy jak vue działa pod spodem.Wszystkie elementy cyklu zycia posiadają dostęp do this content przypisaną do instancji dzięki czemu możemy uzyskać dostęp do data,computed oraz metod. Wewnątrz powstają i istnieją komponenty vue i są nazywane lifecycle hook's.Cykl życia pozwala nam wiedzieć kiedy nasz komponent powstał,kiedy zostal dodany do dom,zaktualizowany lub zniszcony.  Zasadniczo każde główne zdarzenie cyklu życia Vue jest podzielone na dwa punkty zaczepienia, które są wywoływane tuż przed tym zdarzeniem, a następnie tuż po nim. Istnieją cztery główne zdarzenia (8 głównych punktów zaczepienia), które możesz wykorzystać w swojej aplikacji Vue.",
        secondAnswer:
          "Tworzenie - działa na utworzeniu komponentu  Montaż - działa, gdy jest zamontowany DOM  Aktualizacje - uruchamia się, gdy modyfikowane są dane reaktywne  Destruction - działa tuż przed zniszczeniem twojego żywiołu.",
        thirdPartOfAnswer:
          "All lifecycle hooks automatically have their this context bound to the component instance, so that you can access data, computed properties, and methods. This means you should not use an arrow function to define a lifecycle method (e.g. created: () => this.fetchTodos()). The reason is arrow functions bind the parent context, so this will not be the Vue instance as you expect and this.fetchTodos will be undefined.In order words, arrow functions does not have their own value of this. The value of this in an arrow function is inherited from the enclosing (lexical) scope. So, you cannot use them inside a hook.",
      },
      {
        question: "Jak stworzyć two-way binding w Vue js?",
        answer:
          "Do stworzenia służy dyrektywa v-model.W obustronnym przepływie danych data albo model jest przypięty do DOM i dom jest przypięty do modelu",
      },
      {
        question: "Jak działają layouts w nuxt?",
        answer:
          "Aplikacje Vue.js mają główny plik App.vue, który jest głównym opakowaniem(wrapper) komponentów głównych dla wszystkich komponentówCnaplikacji. Nuxt.js wykorzystuje układy, w których każdy układ służy jako indywidualne opakowanie dla komponentów aplikacji.Na przykład, jeśli chcemy, aby niektóre strony korzystały z różnych bibliotek UI, globalnych stylów CSS, rodzin czcionek, systemów projektowania, metatagów lub innych elementów, możemy zdefiniować układ, który ma być używany jako jego główny komponent nadrzędny. Domyślnie wszystkie strony Nuxt.js używają układu default.vue.",
      },
      {
        question: "Czym są sloty?",
        answer:
          "Sloty ogólne rzecz biorąc są mechanizmem, który pozwala nam na tworzenie komponentów wielokrotnego użytku. Mechanizm ten na pewno ułatwia korzystanie z pewnej znanej programistom reguły DRY( Don’t Repeat Yourself). Cały trik polega na tym że sloty dają nam możliwość umieszczenia lub zmiany treści jeżeli komponent dziecka zaimportujemy do rodzica. Sloty w Vue.js możemy rozumieć jako miejsce w ktorym umieszczamy nową treść lub pozostawiamy tą domyślnie zadeklarowaną.",
      },
      {
        question: "Czym są scoped slots?",
        answer:
          "Istnieje też coś co nazywamy Scoped slots. Wymieniony rodzaj slotów jest szczególnie przydatny jeżeli chcielibyśmy przekazać dane z komponentu dziecka posiadajcego sloty do rodzica",
      },
      {
        question: "Struktura w nuxt js?",
        answer:
          "assets – jest to miejsce, w którym możemy przechowywać nieprzetworzone pliki, taki jak np. less czy sass. Nuxt.js wspiera wiele różnych preprocesorów i to jest dobre miejsce na trzymanie ich źródeł.components – folder zawierający fundament działania Vue.js a więc wszystkie nasze reużywalne komponenty.layouts i pages – tutaj znajdują się główne szablony naszego frontendu. Każda strona obsługiwana przez routing znajduje się w katalogu pages i jest opakowana przez główny szablon. Szablony te służą głównie do ustandaryzowania pewnych elementów na frontendzie dla wielu stron takich jak wspólny nagłówek i stopka czy jednolite menu na każdej podstronie.",
          secondAnswer: 'middleware i plugins – jak sama nazwy wskazują są to miejsca, w których przechowujemy kod, który wpływa na działanie naszej aplikacji w taki sposób, że rozszerza lub dodaje pewne mechanizmy lub modyfikuje zachowanie.server – tutaj znajduje się kod, który uruchamiany jest po stronie serwera. W moim przypadku jest to konfiguracja instancji serwera Express.',
          thirdPartOfAnswer: 'static – miejsce, w którym znajdują się wszystkie pliki statyczne (js, css, img, fonts, itp.). Co ważne wszystkie pliki z tego katalogu są automatycznie udostępnione na świat. Dla przykładu gdy mamy ikonę naszej aplikacji w pliku static/favicon.ico możemy ją wyświetlić za pomocą adresu http://localhost/favicon.ico.store – jest to miejsce gdzie znajduje się kod z logiką przechowującą poszczególne stany aplikacji. Możemy sobie wyobrazić je, jako globalny rejestr, gdzie poszczególne elementy / komponenty naszego frontendu mają dostęp i mogą go odczytywać lub zmodyfikować jego stan podczas “życia” aplikacji aby współdzielić pewne informacje.nuxt.config.js – główny plik z konfiguracją aplikacji Nuxt.js..env – plik z konfiguracją naszej aplikacji'
      },
      {
        question: "Cykl życia w composition api",
        answer:
          "W API Composition musimy zaimportować haki cyklu życia do naszego projektu, zanim będziemy mogli ich użyć. Ma to pomóc w utrzymaniu jak najmniejszych projektów.",
        secondAnswer:
          "onBeforeMount - wywołane przed rozpoczęciem montażu onMounted - wywoływane, gdy komponent jest montowany onBeforeUpdate - wywoływana, gdy reaktywne dane ulegają zmianie i przed ponownym renderowaniem onUpdated - wywołana po ponownym renderowaniu onBeforeUnmount - wywołana przed zniszczeniem instancji Vue onUnmounted - wywoływana po zniszczeniu instancji onActivated - wywoływane, gdy aktywny jest komponent onDeactivated - wywoływana, gdy utrzymywany przy życiu komponent jest dezaktywowany onErrorCaptured - wywoływana, gdy zostanie przechwycony błąd z komponentu potomnego",
        thirdPartOfAnswer: "",
      },
      {
        question: "Czym jest one-way data flow?",
        answer:
          "Jednokierunkowy przepływ danych oznacza, że ​​model jest jedynym źródłem prawdy. Zmiany w interfejsie użytkownika wywołują komunikaty sygnalizujące zamiar użytkownika wobec modelu (lub „przechowywanie” w React). Tylko modelka ma dostęp do zmiany stanu aplikacji.",
      },
      {
        question: "Czym jest one-way data flow?",
        answer:
          "Wszystkie prosy działają tylko w jednym kierunku,z komponentu rodzica do komponentu dziecka.Jeżeli zajdzie jakaś zmiana w komponencie rodzina to automatycznie aktualizuje komponent dziecka ale nie działa to w drugą strone,zapobiega to mutowaniu statu rodzica.",
      },
      {
        question: "po co używamy atrybutu key w dyrektywie v-for?",
        answer:
          "Aby śledzić tożsamość każdego węzła, a tym samym ponownie używać i zmieniać kolejność istniejących elementów, musisz podać unikalny atrybut klucza dla każdego elementu w iteracji v-for. Idealną wartością klucza byłby unikalny identyfikator każdego przedmiotu. W związku z tym zawsze zaleca się dostarczanie klucza z v-for, gdy tylko jest to możliwe, chyba że iterowana zawartość DOM jest prosta.Nie należy używać wartości innych niż pierwotne, takich jak obiekty i tablice, jako kluczy v-for. Zamiast tego użyj ciągów lub wartości liczbowych.",
      },
      {
        question: "jaka jest różnica między v-show i v-if?",
        answer:
          "Czasami napotkasz na sytuację, w której dodanie/usunięcie elementu przez v-if/v-else będzie z różnych względów niepożądane. Możesz wtedy użyć dyrektywy v-show, która w przypadku, kiedy warunek nie jest spełniony nadaje elementowi styl display: none;. Oznacza to, że jest on zawsze obecny w drzewie DOM, ale czasami po prostu niewidoczny.  Warto wspomnieć, że dyrektywa v-else nie działa razem z v-show.",
        secondAnswer:
          "v-if directive is used to render a block conditionally. It has lazy behavior meaning if the initial condition is false then it will not render the block until the condition becomes true. v-if completely destroy and recreate the elements during condition change.  It has less initial render cost but high toggle cost so when your condition is not changing frequently at runtime then use v-if directive.  v-show directive is also used to render a block conditionally. v-show always renders the element. It just sets the CSS display property instead of destroying the element or block from DOM.  It has high cost of initial rendering but less cost of toggle, so when you need frequent toggle then use v-show directive",
      },
      {
        question: "Czym jest atrybut key?",
        answer:
          "Każdy element powinien mieć przypisany atrybut key z identyfikatorem w postaci stringu lub wartości numerycznej. Pozwala to Vue lepiej śledzić zmiany na liście i poprawić wydajność.Atrybut key to podpowiedz dla algorytmu virtual DOM.W przypadku gdy nie użyjemy atrybutu key Vue uses an algorithm that minimizes element movement and tries to reuse the elements of the same type. But with 'key' attribute elements will be reordered and the elements without key are destroyed. It's similar to $index in AngularJS. It's mostly used with the 'v-for' directive.",
      },
      {
        question:
          "Podaj różnicę między one-way-data flow a two-way data binding",
        answer:
          "W przepływie jednostronnym,wizualna warstwa aplikacji nie aktualizuje się automatycznie kiedy data się zmienia musimy napisać kod który będzie aktualizować się podczas każdej zmiany.W przypadku two-way data binding zmiany dokonywane są automatycznie.Przykłady użycia one-way w Vue to v-bind natomiast two-way to v-model",
      },
      {
        question: "opisz beforeCreate",
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
        question: "Czemu nie powinniśmy używać v-if razem z v-for?",
        answer:
          "Nie powinniśmy używać razem tych dyrektyw ponieważ v-for posiada większy priorytet niż v-if",
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
          "Updating hooks są zawsze wywołwane gdy reaktywny propety używany przez twój komponent zmienia się lub coś innego powoduje przerenderowanie komponentu.Pozwala nam wejść w  watch-compute-render cycle dla twojego komponentu.Używamy go gdy potrzebujemy wiedzieć kiedy nasz komponent renderuje się na nowo np dla debugowania.Nie należy używać update hooks jeżeli chcemy wiedzieć kiedy reaktywność naszego komponentu ulega zmianie.Zamiast tego możęmy użyć watch albo computed. ",
      },
      {
        question: "Czym jest beforeDestroy hook?",
        answer:
          "Jest uruchamiany zaraz przed zniszczeniem komponentu.Komponent nadal będzie istniał i będzie funkcjonalny.Używamy go gdy chcemy wyczyścić eventy lub reaktywność.Na ten moment instancja jest w pełni funkcjonalna.Nie jest renderowany po stronie serwera",
      },
      {
        question: "Jakie modyfikatory zdarzeń udostępnia vue?",
        answer:
          "Normalnie JavaScript udostępnia event.preventDefault() lub event.stopPropagation() wewnątrz modułów obsługi zdarzeń. Możesz użyć metod dostarczanych przez vue, ale te metody są przeznaczone do logiki danych, a nie do obsługi zdarzeń DOM. Vue udostępnia poniżej modyfikatory zdarzeń dla v-on, a te modyfikatory są przyrostkami dyrektywy oznaczonymi kropką..stop .prevent .capture .self .once .passive",
      },
      {
        question: "Czym są kluczowe modyfikatory?",
        answer:
          "Vue obsługuje modyfikatory klawiszy na v-on do obsługi zdarzeń związanych z klawiaturą. Weźmy przykład zdarzenia keyup z enter keycode..enter .tab .delete (captures both “Delete” and “Backspace” keys) .esc .space .up .down .left .right",
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
          "Zarówno ref jak i reactive mogą sprawić ,że wartość będzie reaktywna.Jednak różnią się od siebie w użyciu i dostępie.Ref można bezpośrednio przypisać do pojedynczej zmiennej lub stałej,podczas gdy reaktywność może być używana jako zwykła funkcja data,to sprawia ,że cały obiekt jaki obejmuje jest reaktywny.Ref potrzebuje wartości(value) aby uzyskać dostęp do kontentu,podczas gdy reactive ma bezpośredni dostęp",
      },
      {
        question: "Jaka jest różnica między ref a reactive?",
        answer:
          "Pozwalają nam wykonywać akcje kiedy nasz komponent zostanie zniszczony,takie jak cleanup lub wysyłanie analiz.Zostają odpalone kiedy komponent zostanie usunięty z drzewa DOM.używanie reactive zamiast ref pozwala nam zrezygnować z value",
      },
      {
        question: "Czym jest toRefs?",
        answer:
          "Ta funkcja przekonwertuje każdą z wartości obiektu i zmapuje ją w jej własnym ref.właściwości są reaktywne, więc jeśli musisz użyć destrukturyzacji ES6, powinieneś użyć toRefs, w przeciwnym razie wpłynęłoby to na reaktywność właściwości.",
      },
      {
        question: "Jak uzywać propsów w composition api?",
        answer:
          "Aby uzyskać dostęp do propsów w setup function,musimy przekazać go jako argument.Nadal obowiązuje tu zasada braku destrukturyzacji, ponieważ jeśli to zrobimy, stracimy reaktywność.",
      },
      {
        question: "Co to composables?",
        answer:
          "to funkcja, która wykorzystuje interfejs Vue Composition API do hermetyzacji i ponownego użycia logiki stanowej.Budując aplikacje frontendowe, często mamy potrzebę ponownego wykorzystania logiki do typowych zadań.jego funkcja formatująca hermetyzuje logikę bezstanową: pobiera dane wejściowe i natychmiast zwraca oczekiwane dane wyjściowe.",
      },
      {
        question: "dlaczego powinniśmy unikać używania this wewnątrz setup?",
        answer:
          "Należy unikać używania this wewnątrz setup ponieważ this nie będzie odnosić się do komponentu.Setup() jest wywoływany przed właściwością data,computed,methods więc nie będą dostępne wewnątrz naszej instacji setup",
      },
      {
        question: "Plusy i minusy miksów w Vue 3",
        answer:
          "Miksery umożliwiają wyodrębnienie funkcjonalności komponentu w oddzielnej jednostce kodu. Każda funkcjonalność jest umieszczona w osobnym miksie, a każdy komponent może używać jednego lub więcej miksów. Kawałki zdefiniowane w miksie mogą być używane w komponencie tak, jakby były zdefiniowane w samym komponencie. Miksy są trochę podobne do klas w językach obiektowych, ponieważ zbierają kod związany z daną funkcjonalnością. Podobnie jak klasy, mieszanki mogą być dziedziczone (używane) w innych jednostkach kodu.",
        secondAnswer:
          "Jednak rozumowanie z użyciem mikserów jest trudniejsze, ponieważ w przeciwieństwie do klas, mieszanki nie muszą być projektowane z myślą o hermetyzacji. Mixiny mogą być kolekcjami luźno powiązanych fragmentów kodu bez dobrze zdefiniowanego interfejsu ze światem zewnętrznym. Używanie więcej niż jednej mieszanki na raz w tym samym komponencie może spowodować, że komponent będzie trudny do zrozumienia i użycia.",
        thirdPartOfAnswer:
          "Bardziej praktycznym problemem, który może wystąpić podczas używania mikserów w Vue, jest kolizja nazw, co ma miejsce, gdy używa się dwóch lub więcej mixinów deklarujących nazwy pospolite. W tym miejscu należy zaznaczyć, że jeśli domyślna strategia Vue radzenia sobie z kolizjami nazw nie jest idealna w danej sytuacji, to deweloper może ją dostosować, co odbywa się kosztem wprowadzenia większej złożoności.Inną kwestią jest to, że mixiny nie oferują czegoś podobnego do konstruktora klas. To jest problem, ponieważ często potrzebujemy funkcjonalności, która jest bardzo podobna, ale nie dokładnie to samo, występować w różnych komponentach. W niektórych prostych przypadkach można to obejść, stosując mieszanki w fabrykach.                ",
      },
      {
        question: "Czym jest atrybut ref?",
        answer:
          "ref pozwala nam uczynić dowolną zmienną reaktywną.Ref bierze argument i zwraca go owiniętego w obiekt z wartością,może być później użyty aby uzyskać dostęp lub zmutować wartość reaktywnej zmiennej.W innych słowach ref wytwarza reaktywną referencje dla naszej wartości.",
      },
      {
        question: "Czym jest multi root template?",
        answer:
          "W vue 2 mogliśmy mieć tylko jeden root element wewnątrz templatu.W vue 3 uległo to zmianie dzięki funkcji fragmens,dzięki temu nie musimy więcej posiadać tylko jednego root element.",
      },
      {
        question: "Czym jest setup w composition api?",
        answer:
          "Composition api wprowadza opcję setup(), która jest uruchamiana przed każdym przechwyceniem cyklu życia. Setup() zostanie uruchomiony przed utworzeniem komponentu, gdy właściwości zostaną rozwiązane i będą gotowe do użycia 🤗. I na nim będziesz mógł napisać dowolną logikę JavaScript, której potrzebujesz.Funkcja setup() przyjmuje dwa argumenty: pierwszy to props a drugi context .kontekst jest normalnym obiektem JS i nie jest reaktywny, omówimy to poniżej.",
      },
      {
        question: "Czym są filtry?",
        answer:
          "Filtry są używane do formatownia tekstu w naszej aplikacji.Są używane wraz z interpolacją and v-bind.",
      },
      {
        question: "wymień zalety nuxt.js?",
        answer:
          "Obsługa modelu SSR, czyli możemy tworzyć kod, który działa zarówno po stronie serwera, jak i klienta, co ma ogromne znaczenie dla SEO.Obsługa modelu strony statycznej, a więc możemy stworzyć czystą stronę w html dla wszystkich naszych zaprogramowanych reguł routingu.Komponenty zamknięte w pojedynczym pliku, z jasnym podziałem na struktury, takie jak szablon (<template>), style – w tym preprocesory np. Less, Sass (<style>) oraz kod JavaScript – w tym preprocesory np. TypeScript (<script>).Domyślna obsługa i konfiguracja dla wielu bibliotek interfejsu graficznego",
          secondAnswer: 'Ustrukturyzowana budowa – nie musimy zastanawiać się, gdzie dany element powinien się znaleźć w strukturze katalogów.Pełna obsługa routingu, wielojęzyczności, kontroli dostępu, middlewares itp.Pełna obsługa kompilacji ES6/ES7/ES8 – nie musimy wchodzić w szczegóły znajomości takich narzędzi, jak Webpack czy Babel i martwić się o to, czy nasz kod zadziała na wszystkich przeglądarkach.Obsługa zmian w kodzie w czasie rzeczywistym i przeładowywanie procesu bez konieczności ingerencji dewelopera (ang. hot code reloading)Dostępny analizator wygenerowanego kodu naszej aplikacji – w przejrzysty sposób obrazuje jak poszczególne moduły wpływają na rozmiar wynikowego kodu css oraz js.'
      },
      {
        question: "Czym jest nuxt?",
        answer:
          "Nuxt.js jest to framework wykorzystujący Vue.js, który dodaje możliwość tworzenia aplikacji w oparciu o model SPA (ang. Single Page Application), SSR (ang. Server Side Rendering) lub statycznych plików html.Nuxt od razu konfiguruje Webpack w taki sposób, aby serwer developerski kompilował zmiany na bieżąco. Oznacza to, że aby zobaczyć zmiany wystarczy zapisać edytowany plik. Nie trzeba natomiast kompilować aplikacji od nowa za każdym razem, tak jak w “czystym” Vue. Oczywiście skonfigurowanie Webpack w taki sposób dla Vue również jest możliwe, ale nie jest gotowe od razu po stworzeniu projektu i może nie być zbyt oczywiste.",
      },
      {
        question: "Wyjaśnij reaktywność w composition api?",
        answer:
          "Wartości zadeklarowane w setup nie są domyślnie reaktywne.W Options API obiekt danych konwertuje swoje właściwości na pobierające/ustawiające, aby były reaktywne a zatem za każdym razem, gdy dokonamy zmiany, zostanie to odzwierciedlone w DOM.W przypadku setup, aby odzwierciedlić zmiany, musisz upewnić się, że wartość jest reaktywna, używając opcji Ref lub Reactive.Słowo kluczowe „this” nie jest dostępne w setup. W Options API słowo kluczowe „this” odnosi się do komponentu, ale w Composition API „this” będzie niezdefiniowane.Ponieważ setup jest wywoływana przed jakimkolwiek innym przechwyceniem cyklu życia, „this” nie będzie odwołaniem do bieżącej aktywnej instancji i dlatego nie będzie zachowywać się jak w innych opcjach.",
        secondAnswer:
          "Setup musi zwracać obiekt za każdym razem, gdy chcesz, aby szablon komponentu miał dostęp do właściwości kontekstu, a także właściwości przekazanych do setup. Właściwość z setup, której chcesz użyć w szablonie komponentu, musi zostać zwrócona w obiekcie JS.",
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
        answer:
          "Zasadniczą czynnością, jaką musimy wykonać na samym początku jest powiązanie obiektu Vue z konkretnym elementem DOM w naszym dokumencie. Instancja Vue musi wiedzieć, w jakim zakresie ma działać i trzeba to wyraźnie zdefiniować. Robimy to poprzez podanie nazwy selectora właściwości el obiektu, którego przekazujemy jako argument konstruktora Vue(). Dzięki temu każde dziecko zdefiniowanego elementu będzie obserwowane i przetwarzane jako wirtualne drzewo DOM (Virtual DOM).",
        secondAnswer:
          "Właściwość data zawiera pola, których będziemy używać do przechowywania naszych danych, methods przetrzymuje definicje metod dostępnych w zasięgu instancji. Metody kryjące się w computed to wartości obliczane dynamicznie. Definiujemy je jako metody, jednakże w momencie ich użycia korzystamy z nich jak ze zwykłego pola (Vue oblicza je automatycznie).",
        thirdPartOfAnswer:
          "Ważną kwestią jest sposób odwoływania się do jednej z powyższych właściwości, który odbywa się pośrednictwem referencji this. Jest to możliwe dzięki temu, że Vue łączy wszystkie właściwości z główną instancją obiektu, co daje do nich bezpośredni dostęp.",
      },
      {
        question: "Czym są dyrektywy?",
        answer:
          "Dyrektywy są specjalnymi atrybutami znajdującymi swoje zastosowanie w szablonach. Poprzedzane są prefiksem v-, na przykład: v-if, v-else, v-for, v-model, v-bind. Warto pamiętać, że wiele z nich posiada aliasy, które mogą być używane zamiennie.",
      },
      {
        question: "Opisz dyrektywe v-on",
        answer:
          "Pozwala na wiązanie event listenerów do wybranych elementów DOM.",
      },
      {
        question: "Opisz dyrektywe v-for",
        answer: "Pozwala na wykonanie pętli na powiązanym elemencie DOM.",
      },
      {
        question: "Czym jest x-templates",
        answer: "Oprócz zwykłych szablonów i szablonów wbudowanych, możesz również definiować szablony za pomocą elementu skryptu typu text/x-template, a następnie odwołując się do szablonu za pomocą identyfikatora.",
      },
      {
        question: "Czym jest tag keep-alive?",
        answer: "to abstrakcyjny komponent używany do zachowania stanu komponentu lub uniknięcia ponownego renderowania. Gdy owiniesz tag wokół komponentu dynamicznego, buforuje on instancje nieaktywnego komponentu bez ich niszczenia.",
      },
      {
        question: "Opisz dyrektywe v-bind",
        answer: "Pozwala na wiązanie wyrażeń do atrybutów elementów DOM.",
      },
      {
        question: "Opisz dyrektywe v-model",
        answer:
          "Pozwala na wiązanie elementów DOM takich jak na przykład input do pól obiektu data.Pamiętaj, że v-model zignoruje wartość początkową, sprawdzone lub wybrane atrybuty znajdujące się na dowolnych elementach formularza. Dlatego zawsze używa danych instancji Vue jako źródła prawdy",
      },
      {
        question: "Jakie są obsługiwane modyfikatory w v-model?",
        answer:
          "Dyrektywa v-model obsługuje trzy modyfikatory.1. lazy: Domyślnie v-model synchronizuje dane wejściowe z danymi po każdym zdarzeniu wejściowym. Możesz dodać modyfikator leniwy, aby zamiast tego synchronizować zdarzenia po zmianie.. liczba: Jeśli chcesz, aby dane wprowadzane przez użytkownika były automatycznie umieszczane jako liczba, możesz dodać modyfikator liczby do swojego v-modelu. Nawet z type='number', wartość elementów wejściowych HTML zawsze zwraca ciąg. Tak więc ten modyfikator rzutowania jest wymagany.3. trim: jeśli chcesz, aby białe znaki z danych wprowadzonych przez użytkownika były przycinane automatycznie, możesz dodać modyfikator przycinania do swojego v-modelu.",
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
        question: "Co to jest rejestracja globalna w komponentach?",
        answer:
          "Komponenty zarejestrowane globalnie mogą być użyte w szablonie dowolnej głównej instancji Vue (nowej Vue) utworzonej po rejestracji.",
      },
      {
        question: " Opisać walidacje dostępne dla propsów",
        answer:
          " Vue zapewnia walidacje, takie jak typy, wymagane pola(required), wartości domyślne(default) wraz z niestandardowymi walidacjami.",
      },
      {
        question: " Co to są dyrektywy niestandardowe?",
        answer:
          "Dyrektywy niestandardowe to małe polecenia, które można dołączyć do elementów DOM. Są one poprzedzone v-, aby poinformować bibliotekę, że używasz specjalnego fragmentu znaczników i aby zachować spójność składni. Są one zazwyczaj przydatne, jeśli potrzebujesz niskopoziomowego dostępu do elementu HTML, aby kontrolować pewne zachowanie.",
      },
      {
        question: "Co to jest router vue i jakie są jego funkcje?",
        answer:
          "Vue Router to oficjalna biblioteka routingu dla aplikacji jednostronicowych zaprojektowana do użytku z frameworkiem Vue.js.Zagnieżdżone mapowanie trasy/widoku Modułowa, oparta na komponentach konfiguracja routera Parametry trasy, zapytanie, symbole wieloznaczne Zobacz efekty przejścia obsługiwane przez system przejść Vue.js Szczegółowa kontrola nawigacji Linki z automatycznymi aktywnymi klasami CSS Tryb historii HTML5 lub tryb skrótu z automatycznym przywracaniem w IE9 Przywróć pozycję przewijania po powrocie do trybu historii",
      },
      {
        question: "Jaka jest różnica między rejestracją lokalną a globalną w systemie modułowym?",
        answer:
          "W przypadku rejestracji lokalnej należy utworzyć każdy komponent w folderze components (opcjonalne, ale zalecane) i zaimportować je do sekcji komponentów innego pliku komponentu.W rejestracji globalnej musisz wyeksportować wszystkie komponenty wspólne lub podstawowe w osobnym pliku. Ale niektóre popularne pakiety, takie jak webpack, upraszczają ten proces, używając require.context do globalnego rejestrowania podstawowych komponentów w poniższym pliku wejściowym (jednorazowo).",
      },
      {
        question: "Wyjaśnij na czym polega przepływ danych w vue",
        answer:
          "Vue używa one-way data flow.Dane są przekazywane do komponentu dziecka z komponentu rodzica za pomocą właściwości props",
      },
      {
        question: "Jak komunikować się z komponentu dziecka to komponentu rodzica?",
        answer:
          "Jeśli chcesz, aby dziecko chciało ponownie komunikować się z rodzicem, wyemituj zdarzenie od dziecka za pomocą obiektu $emit do rodzica,",
      },
      {
        question: "Kiedy komponent potrzebuje pojedynczego elementu głównego?",
        answer:
          " W VueJS 2.x każdy komponent musi mieć jeden element główny(root element), gdy szablon ma więcej niż jeden element. W takim przypadku musisz owinąć elementy elementem nadrzędnym.  W przeciwnym razie wystąpi błąd, mówiący, że Szablon komponentu powinien zawierać dokładnie jeden element główny. Podczas gdy w 3.x komponenty mogą teraz mieć wiele węzłów głównych. Ten sposób dodawania wielu węzłów głównych nazywa się fragmentami."
      },
      {
        question: "Czym jest props?",
        answer:
          "Propsy to niestandardowe atrybuty, które można zarejestrować w komponencie. są używane do przekazywania informacji/danych z komponentu rodzica do komponentu dziecka.Można go zarejestrować w komponencie aby przekazać dane do jednego z komponentów dziecka.Dane w props mogą przepływać tylko jednostronnie,z komponentu rodzica do komponentu dziecka.To oznacza ,że nie jesteśmy w stanie przesłać propsa z komponentu dziecka do rodzica.",
        secondAnswer:
          "Propsy są read-only a to oznacza ,że nie mogą zostać zmodyfikowane przez komponent dziecka ponieważ wartość należy do komponentu rodzica",
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
          "W watchEffect główna różnica polega na tym, że nie obserwujesz jednej konkretnej wartości reaktywnej, ale każdą reaktywną wartość w funkcji zwrotnej.Hook działa jak computed hook lub computed option, ale zamiast zwracać wartość, używasz jej do wyzwalania efektów ubocznych.Ponieważ po prostu definiujesz funkcję zwrotną i jest ona uruchamiana automatycznie, jeśli zmieni się jedna z reaktywnych zmiennych, których używasz w jej wnętrzu. Ale to zachowanie może być problematyczne. Jeśli chcesz wywołać funkcję zwrotną tylko wtedy, gdy zmieni się jedna lub wiele określonych zmiennych, musisz użyć watch() zamiast watchEffect().",
          secondAnswer: 'Co więcej, użycie watch() umożliwia nam również dostęp do poprzedniej wartości obserwowanych zmiennych.I think the easiest way to remember the difference between watch and watchEffect() is to think of watchEffect() like a variant of computed() that doesn’t return a value but triggers side-effects.'
      },
    ],
  },
  getters: {
    removeSpaces (state) {
      return state.vueQuestions.split(/\s/).join('');
    }
  },

  mutations: {
    randomVueQuestion(state) {
      state.vueQuestions.sort(() => {
        return Math.round(Math.random()) - 0.5;
      });
    },
  },
  actions: {
    vueQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomVueQuestion");
      }, 5000);
    },
    randomVueQuestion(context) {
      context.commit("randomVueQuestion");
    },
  },
};
