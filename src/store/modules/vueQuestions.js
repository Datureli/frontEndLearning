export default {
  namespaced: true,

  state: {
    vueQuestions: [
      {
        question: "Czym jest Vuex?",
        answer:
          "Vuex to wzorzec zarządzania stanem + biblioteka dla aplikacji Vue.js.Dzięki Vuex możemy przechowywać stan naszej aplikacji Vue w centralnej lokalizacji. Pozwala nam pobierać i ustawiać stan współdzielenia oraz automatycznie propagować wszelkie zmiany dokonane we wspólnym stanie do wszystkich komponentów.",
      },
      {
        question: "Czym jest created hook",
        answer:
          "Jest to pierwszy hook który działa w naszym komponencie. Wywoływany synchronicznie po utworzeniu instancji.Na tym etapie instancja zakończyła przetwarzanie opcji,co oznacza,że skonfigurowano obserwację danych, obliczono właściwości, metody, wywołania zwrotne watch / event. Jednak faza montażu nie została rozpoczęta, a właściwość $ el nie będzie jeszcze dostępna.W odróżnieniu od innych hooks,creation hook działą również podczas server-side renderingu.Nie posiada dostępu do dom ani docelowego elemntu montażowego",
      },
      {
        question: "Czym jest mounted hook",
        answer:
          "Jest najczęściej wywoływanym hookiem.Używany go jeżeli potrzebujemy dostępu lub potrzebujemy zmodyfikować DOM naszego komponentu natychmiastowo przed lub po pierwszym wyrenderowaniu.Nie działa podczas renderowania po stronie serwera.Nie należy używać mounted hooks jeżeli potrzebujemy fetchować nasze dane komponentu podczas inicjalizacji. Wywoływana po zamontowaniu instancji, w której el jest zastępowany przez nowo utworzoną maszynę vm. $ El.",
      },
      {
        question: "Czym są komponenty?",
        answer:
          "Komponenty są to instancje Vue, dzięki którym możemy wielokrotnie wykorzystywać te same części kodu w uniwersalny sposób. Unikamy w ten sposób powtarzania się, czyli przestrzegamy zasady DRY. Dzięki temu aplikacja wygląda czysto i przejrzyście, a w przypadku błędów nie musimy poprawiać ich w wielu miejscach.W komponencie template jest podmieniany w realnym drzewie DOM za każdym razem, kiedy użyjemy komponentu. Komponenty można zagnieżdżać wewnątrz siebie budując jednocześnie bardziej zaawansowane struktury szablonów. ",
      },
      {
        question: "Jakie są zalety Vue.js?",
        answer:
          "Vue js posiada niski próg wejścia.Framework jest lekki,waży tylko 18-23 kb,virtual DOM,data binding,komponentyAnimation/Transition. Jest oparty na komponentach oraz jednostronnym przepływie danych, i podobnie do Angulara posiada proste szablony z dobrą składnią. Vue nie potrzebuje konfiguracji środowiska,Posiada bardzo szczegołową dokumentacje",
      },
      {
        question: "Czym jest composition api?",
        answer:
          "Composition API to nowa struktura do budowania komponentów Vue, wprowadzona w wersji 3 w celu poprawy czytelności kodu i ponownego wykorzystania. Pozwala na pisanie komponentów w sposób oparty na funkcjach.",
      },
      {
        question: "Jaka jest różnica między vue a nuxt?",
        answer:
          "Nuxt.js i Vue.js obsługują logikę w różny sposób.Główna różnica polega na tym,że vue zawsze działa po stronie klienta,nuxt nie.Nuxt używa plików cookie w pamięci lokalnej — ponieważ są one zawsze dostępne.Z Vue nie mamy tego rodzaju problemów, ponieważ zawsze działa po stronie klienta.Nuxt generuje własny router w oparciu o strukturę folderów, podczas gdy w przypadku vue należy to zrobić ręcznie.Automatycznie generowane zalety routera polegają na tym, że łatwiej i szybciej go utworzyć. Po prostu tworzysz katalog i pliki, a Nuxt wykonuje całą pracę.",
      },
      {
        question: "Czym są komponenty funkcyjne",
        answer:
          "Komponenty funkcyjne cechuje prostota, zwięzłość i przewidywalność. Nie musimy przejmować się stanem ani innymi funkcjonalnościami, dodającymi zbędną złożoność.Komponenty pozbawione stanu są świetnym sposobem na redukowanie złożoności aplikacji.W komponentach funkcyjnych otrzymuje 2 parametry: funkcję callback zwracającą VNode oraz obiekt context.W komponentach funkcyjnych nie występuja life hooki",
      },
      {
        question: "Czym są mixiny?",
        answer:
          "mixiny to funkcje które pozwalają nam na reużywalność kodu pomiędzy komponentami w vue. Jest to objekt javascript który może zawierać każdą opcję jaką zawiera komponent.Mixiny są pisane w odrebnym pliku i mogą być dzielone pomiędzy komponentami",
      },
      {
        question: "Do czego nam plik main.js w vue?",
        answer:
          "W pliku main.js dzieją się trzy zasadnicze rzeczy, na które warto zwrócić uwagę:Tworzona jest instancja Vue.Renderowanie komponentu najwyższego poziomu przeniesione zostaje do App.vue.Instancja Vue zostaje powiązana z elementem #app znajdującym się w pliku index.html.",
      },
      {
        question: "Czym jest vue-cli?",
        answer:
          "Aplikacja konsolowa oparta o node.js, dzięki której będziemy w stanie zarządzać naszą aplikacją z poziomu terminala. Aby zainstalować vue-cli musimy posiadać node.js oraz npm/yarn.",
      },
      {
        question: "Czym jest composition functions?",
        answer:
          "Composition functions to narzędzie stosowane w programowaniu w celu wyciągnięcia logiki z komponentów i umożliwienia korzystania z niej w dowolnym miejscu aplikacji. Pozwalają one na wyciągnięcie reaktywnego stanu oraz funkcjonalności poza komponent. Są odpowiednikami mixinów stosowanych w Options API. Drugie rozwiązanie to korzystanie z destrukturyzacji w komponentach. Dzięki destrukturyzacji, unikamy konfliktów nazw właściwości i jesteśmy w stanie wyciągnąć tylko interesujące nas dane i funkcje. Zwracane właściwości można zabezpieczyć jako read-only, co zapobiega mutacji bezpośrednio zmieniającej ich wartość. W ten sposób możemy wprowadzić takie same zasady działania jak przy mutacjach w Vuexie",
      },
      {
        question: "Czym jest vue?",
        answer:
          "Vue.js to progresywny, open-source framework JavaScript, który został zaprojektowany z myślą o tworzeniu dynamicznych interfejsów użytkownika. Dzięki swojej łatwości w użyciu i integracji z innymi bibliotekami, Vue.js umożliwia szybkie i wydajne budowanie zaawansowanych aplikacji internetowych. Framework oparty jest na wzorcu projektowym Flux, co pozwala na efektywną organizację kodu i zarządzanie stanem aplikacji.",
      },
      {
        question: "Czym jest atrybut ref w Vue.js",
        answer:
          "Atrybut ref w Vue.js pozwala na przypisanie referencji ID do komponentu dziecka i uzyskanie bezpośredniego dostępu do jego instancji w JavaScript. Dzięki temu możemy skutecznie komunikować się między komponentami rodzica i dziecka oraz korzystać z funkcjonalności koponentu dziecka wewnątrz komponentu rodzica. Atrybut ref jest jednym z konceptów propsów i zdarzeń, które umożliwiają komunikację między komponentami w Vue.js.",
      },
      {
        question: "Wyjaśnij cykl żymcia w Vue",
        answer:
          "Cykl życia Vue to proces instancji Vue, w którym uruchamiane są określone funkcje, przechodzące przez proces tworzenia i aktualizowania drzewa DOM. Dzięki cyklowi życia Vue możemy śledzić etapy tworzenia, aktualizowania i usuwania komponentów. Wszystkie etapy cyklu życia posiadają dostęp do 'this' przypisanego do instancji, dzięki czemu możemy uzyskać dostęp do danych, obliczanych wartości oraz metod.Cykl życia Vue składa się z czterech głównych zdarzeń (oraz 8 głównych punktów zaczepienia): Tworzenie - uruchamia się przy tworzeniu komponentu; Montaż - uruchamia się, gdy komponent zostaje zamontowany w drzewie DOM; Aktualizacje - uruchamia się, gdy modyfikowane są dane reaktywne; Zniszczenie - uruchamia się tuż przed usunięciem komponentu.",
      },
      {
        question: "Jak w Vue.js stworzyć dwukierunkowe powiązanie danych (two-way binding)?",
        answer:
          "W Vue.js do stworzenia dwukierunkowego powiązania danych używamy dyrektywy v-model. Pozwala ona na przypisanie danych lub modelu do elementu DOM, a także na przypisanie elementu DOM do modelu. Warto jednak pamiętać, że v-model ignoruje wartości początkowe, wybrane lub zaznaczone atrybuty na elementach formularza, dlatego zawsze należy używać danych instancji Vue jako źródła prawdy.",
      },
      {
        question: "Jak działają layouts w Nuxt.js?",
        answer:
          "W aplikacjach opartych na Vue.js istnieje zazwyczaj plik App.vue, który stanowi główne opakowanie dla wszystkich komponentów. W przypadku Nuxt.js, używane są tzw. układy (layouts), gdzie każdy z nich służy jako indywidualne opakowanie dla komponentów aplikacji. Dzięki temu można łatwo ustawić globalne style CSS, wykorzystać różne biblioteki UI, systemy projektowania, metatagi itp. dla poszczególnych stron. Domyślnie każda strona w Nuxt.js korzysta z układu o nazwie default.vue.",
      },
      {
        question: "Czym są sloty?",
        answer:
          "Sloty to mechanizm, który umożliwia tworzenie wielokrotnego użytku dla komponentów. Pozwalają one na wstawienie lub zmianę treści komponentu dziecka, który jest zaimportowany do komponentu rodzica. Sloty pozwalają na ułatwienie stosowania reguły DRY (Don't Repeat Yourself), czyli zasady unikania powtarzania się kodu. W Vue.js sloty możemy rozumieć jako miejsce, w które możemy wstawić nową treść lub pozostawić domyślnie zadeklarowaną treść.",
      },
      {
        question: "Czym są scoped slots?",
        answer:
          "Scoped slots są rozwinięciem standardowych slotów w Vue.js, pozwalając na przekazywanie danych z komponentów podrzędnych do komponentów nadrzędnych poprzez sloty. W przeciwieństwie do standardowych slotów, scoped slots umożliwiają dostęp do właściwości komponentów dziecka w zawartości slot, dzięki czemu można przekazywać różne wartości i wykorzystywać je w kodzie rodzica. Scoped slots są szczególnie przydatne w sytuacjach, gdy chcemy umieścić w slotach niestandardową logikę lub przekazać do rodzica niestandardowe dane.",
      },
      {
        question: "Jaka jest różnica między slotami a slotami w zakresie (scoped slots)?",
        answer:
          "Slot to miejsce w komponencie, gdzie możemy wstrzyknąć treść przekazaną od rodzica. Zwykły slot działa poprzez przekazanie treści od rodzica do komponentu podrzędnego, a następnie kompilację tej treści w kontekście rodzica. Nie można wtedy korzystać z właściwości komponentów podrzędnych w tej treści. Natomiast slot w zakresie (scoped slot) umożliwia przekazywanie danych z komponentów podrzędnych do zakresu nadrzędnego, co umożliwia korzystanie z tych danych w treści slotu.",
      },
      {
        question: "Jakie są główne foldery i pliki w strukturze projektu w Nuxt.js?",
        answer:
          "assets - miejsce, w którym możemy przechowywać nieprzetworzone pliki, takie jak np. less czy sass. Nuxt.js wspiera wiele różnych preprocesorów i to jest dobre miejsce na trzymanie ich źródeł components - folder zawierający fundament działania Vue.js, a więc wszystkie nasze reużywalne komponenty.layouts i pages - tutaj znajdują się główne szablony naszego frontendu. Każda strona obsługiwana przez routing znajduje się w katalogu pages i jest opakowana przez główny szablon z katalogu layouts. Szablony te służą głównie do ustandaryzowania pewnych elementów na frontendzie dla wielu stron, takich jak wspólny nagłówek i stopka czy jednolite menu na każdej podstronie.middleware i plugins - jak sama nazwy wskazują, są to miejsca, w których przechowujemy kod, który wpływa na działanie naszej aplikacji w taki sposób, że rozszerza lub dodaje pewne mechanizmy lub modyfikuje zachowanie.server - tutaj znajduje się kod, który uruchamiany jest po stronie serwera. W przypadku Nuxt.js jest to konfiguracja instancji serwera Express. static - to miejsce, w którym znajdują się wszystkie pliki statyczne, takie jak js, css, img, fonts, itp. Co ważne, wszystkie pliki z tego katalogu są automatycznie udostępnione na świat. Możemy sobie wyobrazić je jako globalny rejestr, gdzie poszczególne elementy/komponenty naszego frontendu mają dostęp i mogą go odczytywać lub zmodyfikować jego stan podczas życia aplikacji, aby współdzielić pewne informacje.nuxt.config.js - główny plik z konfiguracją aplikacji Nuxt.js. .env - plik z konfiguracją naszej aplikacji."
      },
      {
        question: "Cykl życia w composition api",
        answer:
          "W Vue 3, musimy zaimportować haki cyklu życia do naszego projektu, zanim będziemy mogli ich użyć. Ma to pomóc w utrzymaniu jak najmniejszych projektów. Oto lista haków cyklu życia w Composition API:,onBeforeMount - wywołane przed rozpoczęciem montażuonMounted - wywoływane, gdy komponent jest montowanyonBeforeUpdate - wywoływana, gdy reaktywne dane ulegają zmianie i przed ponownym renderowaniemonUpdated - wywołana po ponownym renderowaniuonBeforeUnmount - wywołana przed zniszczeniem instancji VueonUnmounted - wywoływana po zniszczeniu instancjionActivated - wywoływane, gdy aktywny jest komponentonDeactivated - wywoływana, gdy utrzymywany przy życiu komponent jest dezaktywowanyonErrorCaptured - wywoływana, gdy zostanie przechwycony błąd z komponentu potomnego."
      },

      {
        question: "Czym jest one-way data flow?",
        answer:
          "One-way data flow oznacza, że dane przepływają tylko w jednym kierunku, zwykle od komponentu rodzica do komponentu dziecka za pośrednictwem propsów. Komponent dziecka nie może bezpośrednio modyfikować tych danych, co zapobiega nieprzewidywalnym zmianom stanu. Jeśli komponent dziecka musi wpłynąć na dane, musi to zrobić poprzez emisję zdarzeń (events) lub wywołanie metody z komponentu rodzica za pomocą funkcji zwrotnej (callback). To podejście ułatwia śledzenie przepływu danych w aplikacji i pomaga w wykrywaniu błędów w logice biznesowej.",
      },
      {
        question: " Jak korzystać z obsługi zdarzeń (event handlers) w Vue.js?",
        answer:
          "Aby korzystać z obsługi zdarzeń w Vue.js, należy w szablonie (template) elementu dodać atrybut @nazwa-zdarzenia, gdzie ' np nazwa-zdarzenia' np <button @click='myMethod'>Kliknij mnie!</button> to nazwa zdarzenia, na które chcemy zareagować. Następnie, jako wartość atrybutu podajemy nazwę metody, która ma zostać wywołana w momencie wystąpienia zdarzenia. Na przykład: W powyższym przykładzie metoda myMethod zostanie wywołana po kliknięciu na przycisk. Warto zauważyć, że do metody przekazywany jest obiekt event, który zawiera informacje o zdarzeniu. W obsłudze zdarzeń w Vue.js można również korzystać z specjalnej zmiennej $event, która zawiera szczegóły zdarzenia. Na przykład:W powyższym przykładzie metoda myMethod zostanie wywołana po wciśnięciu klawisza na klawiaturze. Do metody przekazywany jest obiekt event, który w tym przypadku zawiera informacje o wciśniętym klawiszu.",
      },
      {
        question: "Jakie są ograniczenia wykrywania zmian w obiektach?",
        answer:
        "Framework Vue nie jest w stanie wykryć zmian w obiekcie podczas dodawania lub usuwania jego właściwości. Aby zmusić framework do wykrycia zmian w obiekcie, należy użyć metody Vue.set() lub Vue.delete().",
      },
      {
        question: "Dlaczego używamy atrybutu klucza w dyrektywie v-for?",
        answer:
          "Aby zapewnić identyfikację każdego elementu w iteracji v-for oraz umożliwić Vue ponowne użycie i zmianę kolejności istniejących elementów, należy podać unikalny atrybut klucza dla każdego elementu. Atrybut klucza pozwala Vue na śledzenie tożsamości każdego węzła i tworzenie unikalnych powiązań między nimi. Zaleca się, aby kluczem był unikalny identyfikator dla każdego przedmiotu, a wartością klucza powinien być ciąg lub wartość liczbową, a nie obiekt lub tablica. Aby powiązać nasz klucz z identyfikatorem każdego przedmiotu, używamy dyrektywy v-bind.",
      },
      {
        question: "jaka jest różnica między v-show i v-if?",
        answer:
          " Dyrektywa v-if renderuje element do DOM tylko wtedy, gdy wyrażenie jest true, natomiast dyrektywa v-show renderuje wszystkie elementy do DOM i używa właściwości CSS display, aby pokazać lub ukryć elementy na podstawie wyrażenia. Oznacza to, że dyrektywa v-show zawsze utrzymuje element w drzewie DOM, ale czasami tylko go ukrywa. Dyrektywa v-else nie działa wraz z v-show.Dyrektywa v-if ma wyższe koszty przełączania między widocznym i niewidocznym stanem elementu, podczas gdy dyrektywa v-show ma wyższe początkowe koszty renderowania, ponieważ wszystkie elementy są renderowane i ukryte na początku. Dlatego dyrektywa v-show jest bardziej wydajna, jeśli elementy są często włączane i wyłączane, a dyrektywa v-if jest bardziej wydajna w przypadku początkowego renderowania elementów. Warto również zauważyć, że dyrektywa v-if obsługuje element <template>, podczas gdy v-show nie.",
      },
      {
        question: "Czym jest atrybut key?",
        answer:
          "Każdy element powinien mieć przypisany atrybut key z identyfikatorem w postaci stringu lub wartości numerycznej.Pozwala to Vue lepiej śledzić zmiany na liście i poprawić wydajność.Atrybut key to podpowiedz dla algorytmu virtual DOM.Vue wykorzystuje algorytm, który minimalizuje ruch elementów i próbuje ponownie wykorzystać elementy tego samego typu. z atrybutem „key” elementy zostaną uporządkowane, a elementy bez klucza zostaną zniszczone.",
      },
      {
        question:
          "Podaj różnicę między one-way-data flow a two-way data binding",
        answer:
          "W przepływie jednostronnym (one-way data flow), dane przesyłane są z modelu do widoku, ale nie odwrotnie. To znaczy, że po wprowadzeniu zmian w modelu, widok nie aktualizuje się automatycznie. Aby zaktualizować widok, konieczne jest ręczne zaktualizowanie widoku.W przypadku dwukierunkowej wiązania danych (two-way data binding), zmiany dokonywane w modelu są automatycznie propagowane do widoku i na odwrót. Oznacza to, że zmiany w widoku są natychmiastowo odzwierciedlane w modelu, a zmiany w modelu są natychmiastowo odzwierciedlane w widoku.rzykłady użycia przepływu jednostronnego w Vue to np. dyrektywa v-bind, która łączy wartość atrybutu z modelem. Przykład użycia dwukierunkowego wiązania danych to dyrektywa v-model, która umożliwia bezpośrednie powiązanie pola formularza z wartością w modelu.",
      },
      {
        question: "opisz beforeCreate",
        answer:
          "BeforeCreate to jedna z tzw. 'hook functions' (funkcji hook), która jest wywoływana podczas inicjalizacji komponentu w Vue.js. Jest to moment, gdy Vue tworzy instancję komponentu, ale jeszcze nie ma dostępu do danych i metod, które zostały zdefiniowane wewnątrz komponentu.W tym momencie można wykonać pewne czynności, które nie wymagają jeszcze dostępu do danych czy metod komponentu, np. inicjalizować połączenie z API lub wykonywać jakieś obliczenia. Jednakże, przed beforeCreate nie ma dostępu do reaktywnych danych, więc nie można jeszcze manipulować stanem komponentu.Po beforeCreate Vue inicjuje dane i podłącza eventy do komponentu, a następnie uruchamia kolejną hook function - created.",
      },
      {
        question: "Jaka jest różnica między Vue2 a Vue3?",
        answer:
          "Vue 3 jest o wiele bardziej wydajne w porównaniu do swojej poprzedniej wersji. Mówimy tutaj o rozmiarze gotowej aplikacji Vue, która jest do 41% lżejsza dzięki użyciu techniki tree-shaking, początkowym renderowaniu, które jest do 55% szybsze, aktualizacjach, które są aż o 133% szybsze oraz o 54% mniejszym zużyciu pamięci.Twórcy Vue.js zaproponowali w nowym wydaniu dwie funkcje dla Single-File Components: script setup oraz style vars.Vue 3.0 zapewnia również lepszą integrację z językiem TypeScript.W Vue 3 można łatwiej zarządzać globalnym stanem aplikacji dzięki nowej funkcji zwaną provide i inject.Vue 3 wprowadza nową funkcję zwaną teleport, która pozwala na dynamiczne renderowanie elementów w innym miejscu w drzewie DOM.W Vue 3 zrezygnowano z tzw. 'silent failure' - w przypadku błędów w kodzie framework nie wypisuje już warningów, tylko rzuca wyjątkami.W Vue 3 zmieniła się struktura kodu frameworka i wykorzystywane są nowe technologie (np. TypeScript, Proxy API) co ułatwia dalszy rozwój i utrzymanie projektu.",
      },
      {
        question: "Co to są gettery?",
        answer:
          "Getter to w JavaScript jest funkcja, która służy do pobierania (get) wartości z obiektu. Gettery pozwalają na dostęp do wartości prywatnych z innych części kodu, bez bezpośredniego manipulowania nimi.W kontekście frameworka Vue, gettery są często używane do uzyskiwania wartości właściwości z obiektów reaktywnych. Gettery są automatycznie generowane przez system reaktywności Vue i pozwalają na dostęp do wartości właściwości, które są reaktywnie śledzone.",
      },
      {
        question: "Czemu nie powinniśmy używać v-if razem z v-for?",
        answer:
          "Problem z jednoczesnym użyciem v-if i v-for polega na tym, że v-if ma wyższy priorytet niż v-for, co może prowadzić do nieoczekiwanych wyników. Jeśli warunek v-if jest fałszywy, v-for nie zostanie wykonane, co może prowadzić do nieprawidłowych wyników.W takim przypadku, zamiast użycia v-if z v-for, można użyć dyrektywy v-show. Dyrektywa v-show ukrywa element, jeśli warunek jest fałszywy, ale element nadal jest renderowany i uwzględniany w pętli v-for.",
      },
      {
        question: "Czym jest updated hook?",
        answer:
          "updated jest jednym z lifecycle hooków Vue.js, który jest wywoływany zaraz po tym, jak komponent został zaktualizowany i nowy wirtualny DOM został przerysowany na rzeczywistym DOM.Jest to użyteczne, gdy chcemy wykonać pewne operacje po aktualizacji widoku, na przykład gdy musimy zaktualizować wartości w rzeczywistym DOM lub wykonać pewne operacje na elementach DOM, które zostały zaktualizowane.",
      },
      {
        question: "opisz created hook",
        answer:
          "created jest jednym z lifecycle hooków Vue.js, który jest wywoływany zaraz po utworzeniu instancji komponentu, ale przed utworzeniem wirtualnego DOM i zamontowaniem komponentu do rzeczywistego DOM.W tym momencie instancja komponentu została już utworzona i ma dostęp do reaktywnych danych i eventów, które zostały zadeklarowane w definicji komponentu, ale drzewo DOM jeszcze nie zostało utworzone.Możemy w tym hooku wykonać pewne operacje, takie jak inicjowanie wartości danych lub zapisywanie wartości początkowych. Jednakże, nie możemy jeszcze manipulować drzewem DOM, ponieważ nasz komponent nie został zamontowany. Właściwość $el również nie jest jeszcze dostępna w tym momencie.",
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
        question: "Czym różni się computed od methods?",
        answer:
          "różnica polega na tym, że właściwości computed są buforowane na podstawie ich reaktywnych zależności. Właściwość computed zmieni się tylko wtedy gdy niektóre z jego reaktywnych elementów ulegną zmianie",
      },
      {
        question: "Czym jest beforeUpdate hook?",
        answer:
          "Uruchamia się podczas gdy data w naszym komponencie ulega zmianie oraz cykl update się rozpoczyna,zaraz przed tym DOM jest patched oraz rerenderowany.Używamy go jeżeli potrzebujemy dostać się do new state w jakiejkolwiek reactive data naszego komponentu zanim zostanie wyrenderowany.Podczas wywołania tego hooka dom komponentu zostanie zaktualizowany więc możemy wykonywać operacje na drzewie dom.Należy jednak pamiętam ,że w większości przypadków powinieneś unikać zmiany state podczas uzywania tego hooka.Aby dokonać zmian lepiej jest użyć właściwości computed lub watcher.",
      },
      {
        question: "Czym jest beforeDestroy hook?",
        answer:
          "Jest uruchamiany zaraz przed zniszczeniem komponentu.Komponent nadal będzie istniał i będzie funkcjonalny.Używamy go gdy chcemy wyczyścić eventy lub reaktywność.Na ten moment instancja jest w pełni funkcjonalna.Nie jest renderowany po stronie serwera",
      },
      {
        question: "Jakie modyfikatory zdarzeń udostępnia vue?",
        answer:
          "Normalnie JavaScript udostępnia event.preventDefault() lub event.stopPropagation() wewnątrz modułów obsługi zdarzeń.Możesz użyć metod dostarczanych przez vue, ale te metody są przeznaczone do logiki danych, a nie do obsługi zdarzeń DOM. Vue udostępnia poniżej modyfikatory zdarzeń dla v-on, a te modyfikatory są przyrostkami dyrektywy oznaczonymi kropką.stop .prevent .capture .self .once .passive",
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
          "Ref może przyjmować jako argumenty prymitywy tak samo jak Obiekty, podczas gdy reactive może przyjmować jako argumenty tylko Obiekty.Aby wyświetlić dane poprzez ref musimy się do nich dostać poprzez dodanie .value, dzięki funkcji reactive możesz uzyskać do niej bezpośredni dostęp.za pomocą ref możesz zastąpić całą instancję obiektu, ale korzystając z reactive nie możesz",
      },
      {
        question: "Czym jest beforeEnter?",
        answer:
          "the route you want to go to — to the one you come from — from callback to call when you are done — next",
      },
      {
        question: "Czym jest toRefs?",
        answer:
          "Konwertuje reaktywny obiekt na zwykły obiekt, w którym każda właściwość wynikowego obiektu jest odnośnikiem wskazującym na odpowiednią właściwość oryginalnego obiektu. Każdy indywidualny ref jest tworzony za pomocą toRef.. Zamiast tego musimy użyć funkcji toRefs, która pozwoli nam wypakować właściwości nie tracąc reaktywności.",
      },
      {
        question: "Jak uzywać propsów w composition api?",
        answer:
          "Aby uzyskać dostęp do propsów w setup function,musimy przekazać go jako argument.Nadal obowiązuje tu zasada braku destrukturyzacji,ponieważ jeśli to zrobimy, stracimy reaktywność.",
      },
      {
        question: "Co to są composables?",
        answer:
          "to funkcja, która wykorzystuje interfejs Vue Composition API do hermetyzacji i ponownego użycia logiki stanowej.Budując aplikacje frontendowe, często mamy potrzebę ponownego wykorzystania logiki do typowych zadań.jego funkcja formatująca hermetyzuje logikę bezstanową: pobiera dane wejściowe i natychmiast zwraca oczekiwane dane wyjściowe.",
      },
      {
        question: "dlaczego powinniśmy unikać używania this wewnątrz setup?",
        answer:
          "Ponieważ this nie będzie odnosić się do komponentu.Setup() jest wywoływany przed właściwością data,computed,methods więc nie będą dostępne wewnątrz naszej instacji setup",
      },
      {
        question: "Wymień wady i zalety mixinów",
        answer:
          "Mixiny umożliwiają nam współdzielenie logiki między komponentami.Kawałki zdefiniowane w mixinach mogą być używane w komponencie tak, jakby były zdefiniowane w samym komponencie. Używanie więcej niż jednego mixinu na raz w tym samym komponencie może spowodować, że komponent będzie trudny do zrozumienia i użycia.Bardziej praktycznym problemem, który może wystąpić podczas używania mixinów w Vue, jest kolizja nazw, co ma miejsce, gdy używa się dwóch lub więcej mixinów deklarujących nazwy.",
      },
      {
        question: "Czym jest atrybut ref?",
        answer:
          "ref pozwala nam uczynić dowolną zmienną reaktywną.Ref bierze argument i zwraca go owiniętego w obiekt z wartością,może być później użyty aby uzyskać dostęp lub zmutować wartość reaktywnej zmiennej.W innych słowach ref wytwarza reaktywną referencje dla naszej wartości.",
      },
      
      {
        question: "Czym jest multi root template?",
        answer:
          "W vue 2 mogliśmy mieć tylko jeden główny element wewnątrz template.W vue 3 uległo to zmianie dzięki funkcji fragmens,dzięki temu nie musimy więcej posiadać tylko jednego głównego elementu.",
      },
      {
        question: "Czym jest setup w composition api?",
        answer:
          "Composition api wprowadza opcję setup, która jest uruchamiana przed każdym przechwyceniem cyklu życia.Setup zostanie uruchomiony przed utworzeniem komponentu, gdy właściwości zostaną rozwiązane i będą gotowe do użycia.Funkcja setup() przyjmuje dwa argumenty: pierwszy to props a drugi context.kontekst jest normalnym obiektem JS i nie jest reaktywny.Code inside <script setup> will execute every time an instance of the component is created, and anything declared inside the <script setup> context will be accessible in the <template>. We no longer need to give the template access to the data by returning it from inside the setup() hook.",
      },
      {
        question: "Czym są filtry?",
        answer:
          "Filtry są używane do formatownia tekstu w naszej aplikacji.Są używane wraz z interpolacją v-bind.",
      },
      {
        question: "props w composition api?",
        answer:
          "Metoda setup przyjmuje dwa parametry: props i context. Wszystkie zbindowane właściwości mamy dostępne poprzez obiekt props. Ważnym jest, że nie możemy zdestrukturyzować argumentu props, ponieważ utracimy wtedy reaktywność. Zamiast tego musimy użyć funkcji toRefs, która pozwoli nam wypakować właściwości nie tracąc reaktywności.",
      },
      {
        question: "jakie są zalety nuxt.js?",
        answer:
          "Obsługa modelu SSR, czyli możemy tworzyć kod, który działa zarówno po stronie serwera, jak i klienta, co ma ogromne znaczenie dla SEO.Obsługa modelu strony statycznej, a więc możemy stworzyć czystą stronę w html dla wszystkich naszych zaprogramowanych reguł routingu.Domyślna obsługa i konfiguracja dla wielu bibliotek interfejsu graficznego",
        secondAnswer:
          "Ustrukturyzowana budowa – nie musimy zastanawiać się, gdzie dany element powinien się znaleźć w strukturze katalogów.Pełna obsługa routingu, wielojęzyczności, kontroli dostępu, middlewares.Pełna obsługa kompilacji ES6/ES7/ES8 – nie musimy wchodzić w szczegóły znajomości takich narzędzi, jak Webpack czy Babel i martwić się o to, czy nasz kod zadziała na wszystkich przeglądarkach.Dostępny analizator wygenerowanego kodu naszej aplikacji – w przejrzysty sposób obrazuje jak poszczególne moduły wpływają na rozmiar wynikowego kodu css oraz js.",
      },
      {
        question: "Czym jest nuxt?",
        answer:
          "Nuxt.js jest to framework wykorzystujący Vue.js, który dodaje możliwość tworzenia aplikacji w oparciu o model SPA (ang. Single Page Application), SSR (ang. Server Side Rendering) lub statycznych plików html.Nuxt od razu konfiguruje Webpack w taki sposób, aby serwer developerski kompilował zmiany na bieżąco. Oznacza to, że aby zobaczyć zmiany wystarczy zapisać edytowany plik. Nie trzeba natomiast kompilować aplikacji od nowa za każdym razem, tak jak w “czystym” Vue.",
      },
      {
        question: "Wyjaśnij reaktywność w composition api?",
        answer:
          "Wartości zadeklarowane w setup nie są domyślnie reaktywne.W setup, aby odzwierciedlić zmiany, musisz upewnić się, że wartość jest reaktywna, używając opcji Ref lub Reactive.Słowo kluczowe „this” nie jest dostępne w setup. W Options API słowo kluczowe „this” odnosi się do komponentu, ale w Composition API „this” będzie niezdefiniowane.Ponieważ setup jest wywoływana przed jakimkolwiek innym przechwyceniem cyklu życia, „this” nie będzie odwołaniem do bieżącej aktywnej instancji i dlatego nie będzie zachowywać się jak w innych opcjach.",
      },
      {
        question: "Czym jest Destroy hook?",
        answer:
          "Destroyed — Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed. Please note that this hook is not called during sever-side rendering.",
      },
      {
        question: "Czym jest virtual DOM?",
        answer:
          "virtual dom to obiekt javascript reprezentujący document object model(dom) Wirtualny DOM to reprezentacja oryginalnego DOM HTML w formie drzewa w pamięci i aktualizowana bez wpływu na oryginalny DOM.Dzięki temu redukujemy koszt aktualizacji prawdziwego dom.Wirtualny dom oferuje nam możliwość kontrolowania w którym momencie virtual dom ma być wyrenderowany.Oferuje również możliwość polepszenia wydajności naszych aplikacji internetowych poprzez zmniejszenie ilosci aktualizacji dla dom",
      },
      {
        question: "Wymień funkcjonalności w Vue",
        answer:
          " virtual DOM, Komponenty: używane do tworzenia niestandardowych elementów wielokrotnego użytku w aplikacjach VueJS.  Templates: VueJS zapewnia szablony oparte na HTML, które wiążą DOM z danymi instancji Vue.Routing - Nawigacja między stronami odbywa się za pomocą vue-router Niewielka waga: VueJS jest lekką biblioteką w porównaniu do innych frameworków.",
      },
      {
        question: "Jak działa Vue?",
        answer:
          "Zasadniczą czynnością, jaką musimy wykonać na samym początku jest powiązanie obiektu Vue z konkretnym elementem DOM w naszym dokumencie. Instancja Vue musi wiedzieć, w jakim zakresie ma działać i trzeba to wyraźnie zdefiniować. Robimy to poprzez podanie nazwy selectora właściwości el obiektu, którego przekazujemy jako argument konstruktora Vue().Dzięki temu każde dziecko zdefiniowanego elementu będzie obserwowane i przetwarzane jako wirtualne drzewo DOM (Virtual DOM).",
        secondAnswer:
          "Właściwość data zawiera pola, których będziemy używać do przechowywania naszych danych, methods przetrzymuje definicje metod dostępnych w zasięgu instancji. Metody kryjące się w computed to wartości obliczane dynamicznie. Definiujemy je jako metody, jednakże w momencie ich użycia korzystamy z nich jak ze zwykłego pola (Vue oblicza je automatycznie).",
        thirdPartOfAnswer:
          "Ważną kwestią jest sposób odwoływania się do jednej z powyższych właściwości, który odbywa się pośrednictwem referencji this. Jest to możliwe dzięki temu, że Vue łączy wszystkie właściwości z główną instancją obiektu, co daje do nich bezpośredni dostęp.",
      },
      {
        question: "Czym są dyrektywy?",
        answer:
          "Dyrektywy są specjalnymi atrybutami znajdującymi swoje zastosowanie w szablonach.Poprzedzane są prefiksem v-, na przykład: v-if, v-else, v-for, v-model, v-bind. Warto pamiętać, że wiele z nich posiada aliasy, które mogą być używane zamiennie.",
      },
      {
        question: "Opisz dyrektywe v-on",
        answer:
          "Pozwala na wiązanie event listenerów do wybranych elementów DOM.",
      },
      {
        question: "Opisz dyrektywe v-for",
        answer: "Wbudowana dyrektywa v-for pozwala nam przechodzić przez elementy w tablicy lub obiekcie. Możesz wykonać iterację na każdym elemencie w tablicy lub obiekcie. Pozwala na wykonanie pętli na powiązanym elemencie DOM. Dyrektywa v-for wymaga określonej składni na wzór item in items. Gdzie items oznacza nasze dane a słowo item jest aliasem dla każdego iterowanego elementu",
      },
      {
        question: "Czym jest x-templates",
        answer:
          "Oprócz zwykłych szablonów i szablonów wbudowanych, możesz również definiować szablony za pomocą elementu skryptu typu text/x-template, a następnie odwołując się do szablonu za pomocą identyfikatora.",
      },
      {
        question: "Czym jest tag keep-alive?",
        answer:
          "to abstrakcyjny komponent używany do zachowania stanu komponentu lub uniknięcia ponownego renderowania.Gdy owiniesz tag wokół komponentu dynamicznego, buforuje on instancje nieaktywnego komponentu bez ich niszczenia.",
      },
      {
        question: "Opisz dyrektywe v-bind",
        answer: "Pozwala na wiązanie wyrażeń do atrybutów elementów DOM. Jednak v-bind wiąże dane tylko w jeden sposób. Oznacza to, że możemy przekazać dane do komponentu, ale jeśli wpiszemy nasze dane wejściowe - nasza pierwotna wartość nie zostanie zmieniona. Może się to wydawać niewielką różnicą, ale oznacza to, że nasze dane mogą nie być zsynchronizowane z tym, co faktycznie znajduje się na danych wejściowych, które mają modelować. Zawsze chcemy mieć pewność, że nasz stan jest zgodny z naszymi danymi - dlatego należy zachować ostrożność przy wyborze między v-modelem a v-bind.",
      },
      {
        question: "Opisz dyrektywe v-model",
        answer:
          "Pozwala na wiązanie elementów DOM takich jak na przykład input do pól obiektu data. jeśli zmienią się nasze dane, zmienią się też nasze dane wejściowe, a jeśli zmienią się nasze dane wejściowe, zmienią się też nasze dane. v-model zignoruje wartość początkową, sprawdzone lub wybrane atrybuty znajdujące się na dowolnych elementach formularza. Dlatego zawsze używa danych instancji Vue jako źródła prawdy. ",
      },
      {
        question: "Jakie są obsługiwane modyfikatory w v-model?",
        answer:
          "Dyrektywa v-model obsługuje trzy modyfikatory.lazy: Domyślnie v-model synchronizuje dane wejściowe z danymi po każdym zdarzeniu wejściowym. Możesz dodać modyfikator lazy, aby zamiast tego synchronizować zdarzenia po zmianie.number: Jeśli chcesz, aby dane wprowadzane przez użytkownika były automatycznie umieszczane jako liczba.3.trim: jeśli chcesz, aby białe znaki z danych wprowadzonych przez użytkownika były przycinane automatycznie.",
      },

      {
        question: "co to jest flux?",
        answer:
          "Flux to wzorzec projektowy stworzony do ujednolicenia przepływu danych w aplikacjach.Posiada trzy części: dispatch, store i view.View to część w której użytkownik komunikuje się z aplikacją.Store to w dużym uproszczeniu obiekt z stanem aplikacji.Dispatcher to centralna część fluxa z której wysłamy prośby o zmianę stanu aplikacji.Przede wszystkim aktualizacja danych na frontcie, szczególnie gdy jest zbudowany z komponentów, wymaga ciągłej wymiany informacji między nimi. Łatwo wpaść w dwie bardzo głębokie dziury związane z aktualizacjami: kaskada update'ów (propagacja danych) oraz piekiełko eventowe, gdzie każda zmiana odpala parę trudnych do śledzenia eventów. Flux rozwiązuje ten problem.",
      },
      {
        question: "Jak composition api zmniejsza koszty pamięci",
        answer:
          "Kod napisany w Composition API i script setup jest bardziej wydajny i przyjazny dla minifikacji niż odpowiednik Options API.Dzieje się tak, ponieważ szablon w komponencie script setup jest kompilowany jako funkcja wbudowana w ten sam zakres kodu script setup. W przeciwieństwie do dostępu do właściwości z tego, skompilowany kod szablonu może bezpośrednio uzyskiwać dostęp do zmiennych zadeklarowanych wewnątrz ustawienia skryptu, bez pośrednika między nimi. Prowadzi to również do lepszej minifikacji, ponieważ wszystkie nazwy zmiennych można bezpiecznie skrócić.",
      },
      {
        question: "Na czym polega reaktywność w vue",
        answer:
          "Wszystkie właściwości zdefiniowane w instancji vue są reaktywne.Oznacza to,że jeżeli zajdzie jakaś zmiana to komponent automatycznie się zaktualizuje. Podczas inicjalizacji wszystkie właściwości są konwertowane do getterów oraz setterów, dzięki temu vue wie kiedy należy dokonać aktualizacji. Vue nie może wykryć, kiedy element tablicy jest modyfikowany za pomocą indeksu. Tutaj również należy użyć Vue.set.",
      },
      {
        question: "Czym jest single file component?",
        answer:
          "Jest to plik z rozszerzeniem vue zawierającym komponent vue.W przeciwieństwie do stndardowego podziału plików na style,szkielet oraz logike w odrębnych plikach,w single file component wszystko znajduje się w jednym pliku.",
      },
      {
        question: "Co to jest rejestracja globalna w komponentach?",
        answer:
          "Komponenty zarejestrowane globalnie mogą być użyte w szablonie dowolnej głównej instancji Vue (nowej Vue) utworzonej po rejestracji.",
      },
      {
        question: "Opisz walidacje dostępne dla propsów",
        answer:
          "Vue zapewnia walidacje, takie jak typy, wymagane pola(required), wartości domyślne(default) wraz z niestandardowymi walidacjami.",
      },
      {
        question: "Co to są dyrektywy niestandardowe?",
        answer:
          "Dyrektywy niestandardowe to małe polecenia, które można dołączyć do elementów DOM. Są one poprzedzone v-, aby poinformować bibliotekę, że używasz specjalnego fragmentu znaczników i aby zachować spójność składni. Są one zazwyczaj przydatne, jeśli potrzebujesz niskopoziomowego dostępu do elementu HTML, aby kontrolować pewne zachowanie.",
      },
      {
        question: "Co to jest router i jakie są jego funkcje?",
        answer:
          "Vue Router to oficjalna biblioteka routingu dla aplikacji jednostronicowych zaprojektowana do użytku z frameworkiem Vue.js.Zagnieżdżone mapowanie trasy/widoku Modułowa, oparta na komponentach konfiguracja routera Parametry trasy, zapytanie, symbole wieloznaczne.Szczegółowa kontrola nawigacji Linki z automatycznymi aktywnymi klasami CSS Tryb historii HTML5 lub tryb skrótu z automatycznym przywracaniem w IE9 Przywróć pozycję przewijania po powrocie do trybu historii",
      },
      {
        question:
          "Jaka jest różnica między rejestracją lokalną a globalną w systemie modułowym?",
        answer:
          "W przypadku rejestracji lokalnej należy utworzyć każdy komponent w folderze components (opcjonalne, ale zalecane) i zaimportować je do sekcji komponentów innego pliku komponentu.W rejestracji globalnej musisz wyeksportować wszystkie komponenty wspólne lub podstawowe w osobnym pliku.",
      },
      {
        question: "Wyjaśnij na czym polega przepływ danych w vue",
        answer:
          "Vue używa one-way data flow.Dane są przekazywane do komponentu dziecka z komponentu rodzica za pomocą właściwości props. Gdy komponent rodzica aktualizuje wartość propsów, jest ona automatycznie aktualizowana w komponencie dziecka.Nie powinno się dokonywać mutacji wewnątrz komponentu dziecka. Komponent dziecka może komunikować się  z rodzicem za pomocą słowa emit.",
      },
      {
        question: "Wymień najczęstszą przyczynę wycieków pamięci w aplikacjach Vue.js i sposoby ich rozwiązania.",
        answer:
          "Wycieki pamięci w aplikacjach Vue.js często wynikają z używania zewnętrznych bibliotek, które tworzą własne instancje i/lub manipulują DOM.Dyrektywa v-if i router Vue niszczą instancje komponentów Vue; jednak czyszczenie po dowolnej bibliotece innej firmy powinno być wykonywane ręcznie w haku cyklu życia beforeDestroy().Załóżmy na przykład, że wewnątrz naszego komponentu używamy fikcyjnej biblioteki PowerGraph.js. Tworzy instancję wykresu, która wyświetla niektóre dane na stronie:Musimy wywołać metodę destroy() instancji grafu, jeśli jest dostarczona, lub zaimplementować własną metodę czyszczenia:Jeśli czyszczenie nie zostanie wykonane, zanim nasz komponent zostanie zniszczony, ta pamięć nigdy nie zostanie zwolniona. Stąd wyciek pamięci.",
      },
      {
        question: "Czym jest instancja vue?",
        answer:
          "Każda aplikacja Vue działa, tworząc nową instancję Vue z funkcją Vue. Ogólnie zmienna vm (skrót od ViewModel) służy do odwoływania się do instancji Vue. Możesz utworzyć instancję vue jak poniżej, var vm = new vue",
      },
      {
        question: "How do you achieve conditional group of elements?",
        answer:
          "Możesz uzyskać warunkową grupę elementów (przełączanie wielu elementów na raz) przez zastosowanie dyrektywy v-if na elemencie <template>, który działa jako niewidoczny wrapper (bez renderowania) dla grupy elementów.",
      },
      {
        question: "Jak ponownie wykorzystujesz elementy z kluczowym atrybutem?",
        answer:
          "Vue zawsze stara się renderować elementy tak wydajnie, jak to tylko możliwe. Dlatego stara się ponownie wykorzystać elementy, zamiast budować je od zera. Ale to zachowanie może powodować problemy w kilku scenariuszach.   Na przykład, jeśli spróbujesz wyrenderować ten sam element wejściowy w blokach v-if i v-else, to zachowa on poprzednią wartość, jak poniżej,Możemy oddzielić oba elementy wejściowe, stosując atrybut klucza jak poniżej,",
      },
      {
        question: "Różnica między script a script setup",
        answer:
          "Kod wewnątrz jest kompilowany jako zawartość funkcji setup() komponentu. Oznacza to, że w przeciwieństwie do normalnego skryptu, który jest wykonywany tylko raz, gdy komponent jest importowany po raz pierwszy, kod wewnątrz ustawienia skryptu będzie wykonywany za każdym razem, gdy tworzona jest instancja komponentu.",
      },
      {
        question:
          "Jak komunikować się z komponentu dziecka to komponentu rodzica?",
        answer:
          "Jeśli chcesz, aby dziecko chciało ponownie komunikować się z rodzicem, wyemituj zdarzenie od dziecka za pomocą obiektu $emit do rodzica,",
      },
      {
        question: "Kiedy komponent potrzebuje pojedynczego elementu głównego?",
        answer:
          " W Vue 2 każdy komponent musi mieć jeden element główny,gdy szablon ma więcej niż jeden element. W takim przypadku musisz owinąć elementy elementem nadrzędnym.W przeciwnym razie wystąpi błąd, mówiący, że Szablon komponentu powinien zawierać dokładnie jeden element główny.W vue 3 komponenty mogą mieć wiele węzłów głównych. Ten sposób dodawania wielu węzłów głównych nazywa się fragmentami.",
      },
      {
        question: "Czym jest props?",
        answer:
          "Propsy to niestandardowe atrybuty, które można zarejestrować w komponencie. są używane do przekazywania informacji z komponentu rodzica do komponentu dziecka. Można go zarejestrować w komponencie aby przekazać dane do jednego z komponentów dziecka.Dane w props mogą przepływać tylko jednostronnie,z komponentu rodzica do komponentu dziecka.To oznacza ,że nie jesteśmy w stanie przesłać propsa z komponentu dziecka do rodzica.",
        secondAnswer:
          "Propsy służą tylko do odczytu a to oznacza ,że nie mogą zostać zmodyfikowane przez komponent dziecka ponieważ wartość należy do komponentu rodzica",
      },
      {
        question: "czym jest mapState?",
        answer:
          "życie mapState() pozwala na pobranie i przypisanie do lokalnego scope wartości bezpośrednio z sekcji state w store. W ten sposób otrzymujemy czyste dane – bez żadnych modyfikacji. Ma to duży sens, jeśli są to typy proste – jakaś flaga będąca wartością boolean (true/false), np. flaga „loading” itp.",
      },
      {
        question: "czym jest pinia?",
        answer:
          "Pinia to biblioteka store dla Vue, pozwala na udostępnianie stanu między komponentami / stronami..",
      },
      {
        question: "czym jest mvvm?",
        answer:
          "Wzorzec Model-View-ViewModel, opiera się na wydzieleniu odpowiednich warstw w systemie, w celu podziału zadań oraz zmniejszenia zależności pomiędzy klasami. Mamy więc klasy modelu danych, których zadaniem jest przechowywanie danych właśnie oraz ich ewentualną walidację. Klasy tej warstwy powinny być jak najprostsze pod względem budowy. Pod żadnym pozorem nie mogą odwoływać się do warstwy modelu widoku a tym bardziej do samego widoku.",
      },
      {
        question: "Czym są sunspense components",
        answer:
          "Suspense components to nowa funkcja w vue 3 której ogólną ideą jest umożliwienie komponentom „zawieszenia” renderowania.Gdy wszystkie informacje będą dostępne, js ponownie spróbuje wyrenderować komponent.Aby to osiągnąć Komponent może rzucić Promise w swojej metodzie renderowania.łapie rzuconą Obietnicę i szuka najbliższego Suspensekomponentu na drzewie, które działa jak rodzaj granicy. SuspenseSkładnik bierze element jako fallbackpodpora, która będzie wyświetlana, gdy wszystkie dzieci w jego poddrzewem zawiesinie, bez względu na to gdzie i dlaczego.",
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
          "W watchEffect główna różnica polega na tym, że nie obserwujesz jednej konkretnej wartości reaktywnej, ale każdą reaktywną wartość w funkcji zwrotnej. Hook działa jak computed hook lub computed option, ale zamiast zwracać wartość, używasz jej do wyzwalania efektów ubocznych.Ponieważ po prostu definiujesz funkcję zwrotną i jest ona uruchamiana automatycznie, jeśli zmieni się jedna z reaktywnych zmiennych, których używasz w jej wnętrzu. Ale to zachowanie może być problematyczne. Jeśli chcesz wywołać funkcję zwrotną tylko wtedy, gdy zmieni się jedna lub wiele określonych zmiennych, musisz użyć watch() zamiast watchEffect().",
        secondAnswer:
          "Co więcej, użycie watch() umożliwia nam również dostęp do poprzedniej wartości obserwowanych zmiennych.I think the easiest way to remember the difference between watch and watchEffect() is to think of watchEffect() like a variant of computed() that doesnt return a value but triggers side-effects.",
      },
    ],
  },
  mutations: {
    randomVueQuestion(state) {
      state.vueQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
