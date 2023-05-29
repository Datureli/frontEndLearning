export default {
  namespaced: true,

  state: {
    vueQuestions: [
      {
        question: "Czym jest Vuex?",
        answer:
          "Vuex to wzorzec zarządzania stanem + biblioteka dla aplikacji Vue.js. Dzięki Vuex możemy przechowywać stan naszej aplikacji vue w centralnej lokalizacji. Pozwala nam pobierać i ustawiać stan współdzielenia oraz automatycznie propagować wszelkie zmiany dokonane we wspólnym stanie do wszystkich komponentów.",
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
          "Sloty to mechanizm, który umożliwia tworzenie wielokrotnego użytku dla komponentów. Pozwalają one na wstawienie lub zmianę treści komponentu dziecka, który jest zaimportowany do komponentu rodzica. Sloty pozwalają na ułatwienie stosowania reguły DRY czyli zasady unikania powtarzania się kodu. W Vue.js sloty możemy rozumieć jako miejsce, w które możemy wstawić nową treść lub pozostawić domyślnie zadeklarowaną treść.",
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
        question: "Czym są style vars?",
        answer:
        "W Vue.js możemy używać tzw. stylowych zmiennych (style variables) w celu definiowania wartości stylów, które mogą być dynamicznie dostosowywane w zależności od stanu komponentu lub innych czynników. Są one szczególnie przydatne, gdy chcemy zastosować jedną wartość stylu w wielu miejscach w komponencie lub w całej aplikacji.",
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
          "BeforeCreate to jedna z haków życia, która jest wywoływana podczas inicjalizacji komponentu w Vue.js. Jest to moment, gdy Vue tworzy instancję komponentu, ale jeszcze nie ma dostępu do danych i metod, które zostały zdefiniowane wewnątrz komponentu.W tym momencie można wykonać pewne czynności, które nie wymagają jeszcze dostępu do danych czy metod komponentu, np. inicjalizować połączenie z API lub wykonywać jakieś obliczenia. Jednakże, przed beforeCreate nie ma dostępu do reaktywnych danych, więc nie można jeszcze manipulować stanem komponentu.Po beforeCreate Vue inicjuje dane i podłącza eventy do komponentu, a następnie uruchamia kolejną hook function - created.",
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
        question: "Czym jest funkcja teleport?",
        answer:
          "Funkcja teleport w Vue 3 jest używana do renderowania elementu w innym miejscu w drzewie DOM, poza komponentem, w którym jest zdefiniowana. Pozwala to na renderowanie elementów na różnych poziomach drzewa DOM bez konieczności ich umieszczania w komponencie macierzystym. Funkcja teleport jest przydatna, gdy chcesz renderować elementy poza bieżącym komponentem, na przykład na samym końcu strony lub w innym kontenerze.",
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
        question: "W jakim celu używa się metody beforeDestroy hook w Vue.js?",
        answer:
          "beforeDestroy hook to metoda w Vue.js, która jest wywoływana tuż przed zniszczeniem komponentu. W tym momencie komponent jest wciąż funkcjonalny, ale już nie będzie renderowany. Przy użyciu tej metody można wykonać operacje czyszczenia eventów lub reaktywnych obserwatorów, które zostały zainicjowane podczas tworzenia komponentu. Jest to dobry moment, aby zwolnić zasoby lub anulować subskrypcje. W przypadku renderowania na serwerze, ta metoda nie zostanie uruchomiona.",
      },
      {
        question: "Jakie modyfikatory zdarzeń są dostępne w Vue.js i jakie są ich funkcje?",
        answer:
          "W Vue.js mamy możliwość używania modyfikatorów zdarzeń, które są dodatkowymi atrybutami dyrektywy v-on i pozwalają na dostosowanie zachowania zdarzenia. Choć wewnątrz modułów obsługi zdarzeń standardowe metody JavaScript, takie jak event.preventDefault() lub event.stopPropagation() są dostępne, Vue.js udostępnia kilka dodatkowych modyfikatorów zdarzeń. Poniżej przedstawione są modyfikatory zdarzeń dla dyrektywy v-on..stop - zatrzymuje propagację zdarzenia, .prevent - zapobiega domyślnej akcji zdarzenia, .capture - obsługuje zdarzenie w trybie przechwytywania, .self - wywołuje obsługę zdarzenia tylko wtedy, gdy zdarzenie zostało wywołane przez element, na którym dyrektywa jest umieszczona, .once - uruchamia obsługę zdarzenia tylko raz, .passive - określa, że obsługa zdarzenia nie będzie wywoływać metod, które mogą spowolnić przetwarzanie zdarzeń przewijania (scrolling) na urządzeniach dotykowych. Wszystkie te modyfikatory są dostępne jako przyrostki dyrektywy v-on i umożliwiają dostosowanie sposobu działania obsługi zdarzeń.",
      },
      {
        question: "Czym są kluczowe modyfikatory?",
        answer:
          "Kluczowe modyfikatory to specjalne modyfikatory, które są używane z dyrektywą v-on w Vue.js do obsługi zdarzeń klawiatury. Przykładem może być zdarzenie keyup dla konkretnego klawisza, takiego jak Enter. W Vue.js istnieje kilka kluczowych modyfikatorów, które ułatwiają obsługę zdarzeń związanych z klawiaturą. Poniżej przedstawione są niektóre z tych kluczowych modyfikatorów.enter - odpowiada za klawisz Enter, .tab - odpowiada za klawisz Tab,  .delete - odpowiada za klawisze 'Delete' i 'Backspace',  .esc - odpowiada za klawisz Escape,  .space - odpowiada za klawisz spacji,  .up - odpowiada za strzałkę w górę,  .down - odpowiada za strzałkę w dół,  .left - odpowiada za strzałkę w lewo,  .right - odpowiada za strzałkę w prawo.  Kluczowe modyfikatory są przyrostkami dyrektywy v-on i pozwalają na łatwe i wygodne obsługiwanie zdarzeń klawiatury w Vue.js.",
      },
      {
        question: "Co to jest destroyed hook w Vue.js i kiedy jest wywoływany?",
        answer:
          "Destroyed hook w Vue.js jest to hook, który jest wywoływany, gdy komponent został zniszczony i nie istnieje już w drzewie komponentów Vue. W tym momencie nie pozostaje praktycznie nic w komponencie. Wszystkie event listenery i subskrypcje, które zostały utworzone przez komponent, są usuwane, a także wszystkie referencje do elementów DOM, które zostały utworzone przez komponent, są zwalniane z pamięci. Używamy tego hooka, gdy chcemy wyczyścić zasoby, które zostały utworzone przez komponent lub poinformować serwer, że komponent został usunięty. Jest to ostatni hook cyklu życia komponentu w Vue.js i po jego wywołaniu komponent jest usuwany z drzewa komponentów Vue",
      },
      {
        question: "Do czego służą hooki activated i deactivated w Vue.js",
        answer:
          "Activated i deactivated hooks w Vue.js są używane w połączeniu z komponentem <keep-alive> i służą do zarządzania stanem i zachowaniem komponentów podczas przełączania między nimi. Komponenty owinięte w tag <keep-alive> nie są usuwane z drzewa komponentów Vue, gdy użytkownik przechodzi do innego widoku, ale są przechowywane w pamięci, aby umożliwić szybsze przełączanie między nimi w przyszłości. Hook activated jest wywoływany, gdy użytkownik powraca do komponentu, podczas gdy hook deactivated jest wywoływany, gdy użytkownik przechodzi do innego widoku i komponent jest deaktywowany. Możemy użyć tych hooków do wykonywania działań takich jak pobieranie danych dla komponentu, aktualizowanie stanu lub subskrybowanie zdarzeń. Te hooki zachowują się jak created i beforeDestroy, ale umożliwiają nam zachowanie stanu komponentu i uniknięcie konieczności tworzenia go na nowo za każdym razem, gdy użytkownik do niego powraca.",
      },
      {
        question: "Jakie są różnice między ref a reactive w Vue.js?",
        answer:
          "W Vue.js ref i reactive są dwoma różnymi funkcjami służącymi do reaktywnego przetwarzania danych. Ref jest używany do tworzenia reaktywnych referencji do wartości, które mogą być prymitywami lub obiektami, a także do przekazywania danych między komponentami. Reactive natomiast służy do tworzenia reaktywnych obiektów, które mogą zawierać w sobie wiele wartości lub właściwości, ale jako argument przyjmuje tylko obiekty. Aby uzyskać dostęp do wartości przechowywanych w ref, musisz dodać .value, natomiast w reactive można bezpośrednio uzyskać dostęp do właściwości obiektu.Główna różnica między ref a reactive polega na tym, że ref pozwala na reaktywne przetwarzanie zarówno prymitywów, jak i obiektów, podczas gdy reactive działa tylko z obiektami. Ponadto, przy użyciu ref możemy zastąpić całą instancję wartości, podczas gdy w reactive możemy jedynie modyfikować jego właściwości. W praktyce, ref jest częściej używany do przekazywania pojedynczych wartości między komponentami, podczas gdy reactive jest bardziej odpowiedni do zarządzania stanem i danych złożonych obiektów wewnątrz jednego komponentu.",
      },
      {
        question: "Czym jest toRefs?",
        answer:
          "Funkcja toRefs w Vue.js konwertuje reaktywny obiekt na zwykły obiekt, w którym każda właściwość wynikowego obiektu jest odnośnikiem wskazującym na odpowiednią właściwość oryginalnego obiektu. Dzięki temu uzyskujemy dostęp do właściwości obiektu bez konieczności korzystania z .value, co zachowuje reaktywność. Funkcja ta zwraca nowy obiekt zawierający odnośniki do właściwości oryginalnego obiektu, a nie jego kopię.",
      },
      {
        question: "Jak uzywać propsów w composition api?",
        answer:
          "Aby używać propsów w Composition API, musimy przekazać je jako argument do funkcji setup(). Następnie możemy uzyskać do nich dostęp bezpośrednio, używając nazwy propsa. Jest to możliwe dzięki temu, że propsy są już reaktywne i są przekazywane do komponentu przez referencję. Należy jednak pamiętać, że nie powinniśmy destrukturyzować propsów w setup(), ponieważ wtedy tracimy reaktywność. W przypadku destrukturyzacji należy użyć funkcji toRefs(), która pozwala na uzyskanie reaktywnych referencji do każdej właściwości propsa..",
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
          "Mixiny umożliwiają nam współdzielenie logiki między komponentami. Kawałki kodu zdefiniowane w mixinach mogą być używane w komponencie tak, jakby były zdefiniowane w samym komponencie. Używanie więcej niż jednego mixinu w tym samym komponencie może jednak spowodować, że komponent stanie się trudny do zrozumienia i użycia. Bardziej praktycznym problemem, który może wystąpić podczas używania mixinów w Vue.js, jest kolizja nazw, co ma miejsce, gdy dwa lub więcej mixinów deklaruje te same nazwy."
      },
      {
        question: "Czym jest atrybut ref?",
        answer:
          "Atrybut ref w Vue.js pozwala nam uczynić dowolną zmienną reaktywną. Ref bierze argument i zwraca go owiniętego w obiekt z wartością, który może być później użyty do uzyskania dostępu lub zmiany wartości tej reaktywnej zmiennej. Innymi słowy, ref wytwarza reaktywną referencję dla naszej wartości.",
      },
      
      {
        question: "Czym jest multi root template?",
        answer:
          "Multi-root template to funkcja wprowadzona w Vue 3, która pozwala na posiadanie więcej niż jednego głównego elementu wewnątrz template. W Vue 2 mogliśmy mieć tylko jeden główny element wewnątrz template, co wprowadzało pewne ograniczenia. Dzięki funkcji fragments w Vue 3 nie musimy już posiadać tylko jednego głównego elementu.",
      },
      {
        question: "Czym jest setup w composition api?",
        answer:
          "W Vue Composition API, opcja setup jest nowym sposobem na definiowanie logiki komponentu. Jest to funkcja, która jest uruchamiana przed montażem komponentu i przed każdym przechwyceniem cyklu życia. Funkcja setup() przyjmuje dwa argumenty: pierwszy to props, a drugi context. Kontekst jest normalnym obiektem JS i nie jest reaktywny. Kod wewnątrz tagu <script setup> zostanie wykonany za każdym razem, gdy zostanie utworzona instancja komponentu, a wszystko zadeklarowane w kontekście <script setup> będzie dostępne w szablonie. Nie musimy już zwracać danych z funkcji setup() w celu udostępnienia ich w szablonie, ponieważ są one automatycznie reaktywne. Dzięki temu setup pozwala na bardziej modularne i czytelne definiowanie logiki komponentu."
      },
      {
        question: "Czym są filtry?",
        answer:
          "filtry w Vue.js to specjalne funkcje, które pozwalają na formatowanie tekstu przed wyświetleniem go w szablonie. Dzięki nim możemy np. zmienić wielkość liter, dodać separator między cyframi czy sformatować datę. Filtry używane są wraz z interpolacją {{ }} lub dyrektywą v-bind.",
      },
      {
        question: "props w composition api?",
        answer:
          "props w composition api to mechanizm, który pozwala na przekazywanie danych z rodzica do dziecka w komponencie Vue 3. W metodzie setup mamy dostęp do obiektu props, który zawiera wszystkie przekazane właściwości z rodzica. Warto zauważyć, że props są w Vue 3 tylko do odczytu, więc nie możemy bezpośrednio ich mutować w komponencie potomnym. Aby zachować reaktywność, gdy pracujemy z propsami w composition api, nie możemy destrukturyzować argumentu props, ponieważ utracimy wtedy reaktywność. Zamiast tego musimy użyć funkcji toRefs, która pozwoli nam wypakować właściwości nie tracąc reaktywności.",
      },
      {
        question: "jakie są zalety nuxt.js?",
        answer:
        "Nuxt.js oferuje wiele zalet, takich jak obsługa modelu SSR, co pozwala na tworzenie kodu, który działa zarówno po stronie serwera, jak i klienta, co jest istotne dla SEO. Dodatkowo, framework obsługuje model strony statycznej, co pozwala na tworzenie czystej strony w HTML dla wszystkich zaprogramowanych reguł routingu. Nuxt.js ma również domyślną obsługę i konfigurację wielu bibliotek interfejsu graficznego oraz ustrukturyzowaną budowę, dzięki czemu nie musimy martwić się, gdzie dany element powinien się znaleźć w strukturze katalogów.Framework zapewnia również pełną obsługę routingu, wielojęzyczności, kontroli dostępu oraz middlewares. Dodatkowo, Nuxt.js obsługuje kompilację ES6/ES7/ES8, co pozwala na uniknięcie konieczności posiadania szczegółowej znajomości narzędzi takich jak Webpack czy Babel oraz umożliwia działanie kodu na wszystkich przeglądarkach. Framework oferuje także analizator wygenerowanego kodu naszej aplikacji, który w przejrzysty sposób obrazuje, jak poszczególne moduły wpływają na rozmiar wynikowego kodu CSS oraz JS."
      },
      {
        question: "Czym jest framework Nuxt?",
        answer:
          "Nuxt.js to framework wykorzystujący Vue.js, który dodaje możliwość tworzenia aplikacji w oparciu o model SPA (Single Page Application), SSR (Server Side Rendering) lub statycznych plików HTML. Framework ten oferuje wbudowane funkcjonalności, takie jak automatyczna konfiguracja Webpacka, dzięki czemu serwer developerski kompiluje zmiany na bieżąco. Oznacza to, że aby zobaczyć zmiany, wystarczy zapisać edytowany plik, a nie trzeba kompilować aplikacji od nowa za każdym razem, jak w 'czystym' Vue. Nuxt.js pozwala na tworzenie aplikacji, które są wydajne i łatwe w utrzymaniu, ponieważ oferuje wiele wbudowanych funkcjonalności i ułatwień, które przyspieszają i usprawniają pracę programisty.",
      },
      {
        question: "Wyjaśnij reaktywność w composition api?",
        answer:
          "W Composition API wartości zadeklarowane w funkcji setup nie są domyślnie reaktywne, co oznacza, że nie będą automatycznie odświeżać widoku w przypadku ich zmian. Aby uzyskać reaktywność, należy użyć opcji Ref lub Reactive. Warto zauważyć, że słowo kluczowe 'this' nie jest dostępne w setup, a w Options API odnosi się ono do komponentu. W Composition API 'this' nie będzie odwołaniem do bieżącej aktywnej instancji i dlatego nie będzie zachowywać się jak w innych opcjach. Ponieważ setup jest wywoływana przed jakimkolwiek innym przechwyceniem cyklu życia, należy uważać, jak korzysta się z this w setup.",
      },
      {
        question: "Czym jest Destroy hook?",
        answer:
          "Hook Destroy w Vue.js jest jednym z hooków cyklu życia, który jest wywoływany po tym, jak instancja Vue została zniszczona. Kiedy hook ten zostanie wywołany, wszystkie dyrektywy instancji Vue zostaną odłączone, wszystkie słuchacze zdarzeń zostaną usunięte, a wszystkie podrzędne instancje Vue również zostaną zniszczone. Należy zauważyć, że hook Destroy nie jest wywoływany podczas renderowania po stronie serwera.",
      },
      {
        question: "Czym jest virtual DOM?",
        answer:
          "virtual dom to obiekt javascript reprezentujący document object model(dom) Wirtualny DOM to reprezentacja oryginalnego DOM HTML w formie drzewa w pamięci i aktualizowana bez wpływu na oryginalny DOM.Dzięki temu redukujemy koszt aktualizacji prawdziwego dom.Wirtualny dom oferuje nam możliwość kontrolowania w którym momencie virtual dom ma być wyrenderowany.Oferuje również możliwość polepszenia wydajności naszych aplikacji internetowych poprzez zmniejszenie ilosci aktualizacji dla dom",
      },
      {
        question: "Wymień funkcjonalności w Vue",
        answer:
          "Virtual DOM to abstrakcyjna, wirtualna reprezentacja obiektów DOM, czyli drzewa elementów HTML, które istnieje w pamięci przeglądarki. Virtual DOM pozwala na dokonywanie zmian w interfejsie użytkownika, bez bezpośredniej manipulacji na oryginalnym DOM. Zmiany dokonane na Virtual DOM są następnie porównywane z oryginalnym DOM, a następnie zmiany są aktualizowane tylko w tych elementach, które faktycznie się zmieniły. Dzięki temu Virtual DOM pozwala na znaczne przyspieszenie aktualizacji interfejsu użytkownika i poprawę wydajności aplikacji internetowych.",
      },
      {
        question: "Jak działa Vue?",
        answer:
          "Vue działa poprzez powiązanie instancji Vue z konkretnym elementem DOM w naszym dokumencie. Do zdefiniowania zakresu działania instancji Vue wykorzystujemy właściwość el, która przyjmuje selektor określający element, do którego chcemy przypisać instancję Vue. Następnie, każde dziecko zdefiniowanego elementu jest obserwowane i przetwarzane jako wirtualne drzewo DOM (Virtual DOM).Właściwość data zawiera pola, w których przechowujemy dane, a methods przechowuje definicje metod dostępnych w zasięgu instancji. Metody obliczane dynamicznie definiujemy jako właściwości computed. Odwołanie do właściwości odbywa się poprzez referencję this, która łączy wszystkie właściwości z główną instancją obiektu i daje do nich bezpośredni dostęp.",
      },
      {
        question: "Czym są dyrektywy?",
        answer:
          "Dyrektywy w Vue.js to specjalne atrybuty, które możemy dodać do elementów HTML w szablonach, aby uzyskać pewne zachowanie. Dyrektywy poprzedzane są prefiksem v-, na przykład: v-if, v-for, v-model, v-bind. Każda dyrektywa ma swoje unikalne zastosowanie i parametry. Na przykład, v-if pozwala na dynamiczne dodawanie lub usuwanie elementów z drzewa DOM na podstawie wyrażenia logicznego, v-for umożliwia iterowanie po kolekcji danych i generowanie powtarzających się elementów HTML. Warto pamiętać, że wiele dyrektyw posiada również aliasy, które możemy użyć zamiennie.",
      },
      {
        question: "Opisz dyrektywe v-on",
        answer:
          "Dyrektywa v-on pozwala na wiązanie event listenerów do wybranych elementów DOM. Za pomocą dyrektywy v-on możemy reagować na różne zdarzenia wywoływane przez użytkownika, takie jak kliknięcie przycisku, wpisanie tekstu do pola tekstowego itp. Dyrektywa ta jest zwykle używana w połączeniu z argumentem, który określa rodzaj zdarzenia, na które chcemy reagować, na przykład v-on:click lub v-on:input. Warto również pamiętać, że możemy łączyć dyrektywę v-on z wyrażeniami JS, co pozwala na bardziej zaawansowaną logikę obsługi zdarzeń.",
      },
      {
        question: "Opisz dyrektywe v-for",
        answer: "Dyrektywa v-for to wbudowana dyrektywa w Vue.js, która umożliwia iterowanie po elementach w tablicy lub obiekcie i dynamiczne generowanie treści na stronie internetowej. Aby użyć dyrektywy v-for, musimy przekazać do niej źródło danych, np. tablicę lub obiekt, oraz określić nazwę aliasu dla każdego elementu iterowanego w naszym szablonie.W tym przypadku, dla każdego elementu w tablicy 'items', Vue.js wygeneruje element li z tekstem odpowiadającym wartości elementu tablicy. W powyższym przykładzie, alias 'item' odnosi się do każdego elementu w tablicy 'items', a wartość '{{ item }}' wyświetla zawartość tego elementu na stronie internetowej.",
      },
      {
        question: "Czym jest x-templates",
        answer:
          "Element script z atrybutem type='text/x-template' jest wykorzystywany do definicji szablonów, które mogą być wykorzystane w aplikacji Vue. Jest to przydatne, gdy chcemy zaprojektować wielokrotnie używane szablony, które nie są wyświetlane na początku, lecz są renderowane dynamicznie na żądanie. Definicje szablonów w elementach script typu text/x-template są ignorowane przez przeglądarki, więc nie wyświetlają się na stronie, a jedynie są wykorzystywane przez Vue w celu renderowania komponentów. Aby uzyskać dostęp do takiego szablonu w kodzie, należy użyć selektora # i nazwy identyfikatora szablonu, np. #my-template.",
      },
      {
        question: "Opisz dyrektywe v-bind",
        answer: "Dyrektywa v-bind w Vue.js pozwala na wiązanie danych do atrybutów elementów DOM. Jednakże, v-bind wiąże dane tylko w jeden sposób, co oznacza, że możemy przekazać dane do komponentu, ale jeśli zmienimy te dane wejściowe, to nasza pierwotna wartość nie zostanie zmieniona. To może wydawać się niewielką różnicą, ale może spowodować niezgodność danych, co może prowadzić do problemów. Dlatego należy zachować ostrożność przy wyborze między v-bind a innymi dyrektywami, takimi jak v-model.",
      },
      {
        question: "Opisz dyrektywe v-model",
        answer:
          "Dyrektywa v-model to jedna z najczęściej używanych dyrektyw w Vue.js. Pozwala na dwukierunkowe wiązanie danych między elementami formularza w HTML a danymi w obiekcie data w instancji Vue. Oznacza to, że gdy użytkownik wprowadza zmiany w polu formularza, zmieniają się również dane w obiekcie data, a gdy dane w obiekcie data są zmienione programowo, zmiany te są automatycznie propagowane do pól formularza.Dyrektywa v-model jest szczególnie przydatna w przypadku tworzenia formularzy, ponieważ pozwala na łatwe zarządzanie stanem formularza. Jest również często używana do włączania i wyłączania elementów interfejsu użytkownika na podstawie stanu danych.",
      },
      {
        question: "Jakie są obsługiwane modyfikatory w v-model?",
        answer:
          "Jest kilka obsługiwanych modyfikatorów w dyrektywie v-model:.lazy - domyślnie v-model synchronizuje dane wejściowe z danymi po każdym zdarzeniu wejściowym. Możesz dodać modyfikator lazy, aby zamiast tego synchronizować zdarzenia po zmianie. .number - konwertuje dane wejściowe na liczbę. Jeśli chcesz, aby dane wprowadzane przez użytkownika były automatycznie umieszczane jako liczba. .trim - usuwa białe znaki z danych wprowadzonych przez użytkownika na początku i końcu.",
      },

      {
        question: "co to jest flux?",
        answer:
          "Flux to wzorzec architektoniczny, który został stworzony do ujednolicenia przepływu danych w aplikacjach. Pozwala na łatwiejsze zarządzanie stanem aplikacji poprzez wprowadzenie trzech głównych elementów: dispatcher, store i view. Dispatcher jest centralną częścią Fluxa, z której wysyłamy akcje i prośby o zmianę stanu aplikacji. Store to miejsce, w którym przechowywany jest stan aplikacji, a View to elementy interfejsu użytkownika, które są odpowiedzialne za wyświetlanie danych i reagowanie na akcje użytkownika. Flux pozwala na bardziej jednoznaczne i łatwiejsze przepływanie danych w aplikacji, unikając kaskadowych aktualizacji i problemów związanych z eventami.",
      },
      {
        question: "Jak composition api zmniejsza koszty pamięci",
        answer:
          "Kod napisany w Composition API i skrypcie setup jest bardziej wydajny i przyjazny dla minifikacji niż jego odpowiednik w Options API. Dzieje się tak, ponieważ szablon w komponencie script setup jest kompilowany jako funkcja wbudowana w ten sam zakres kodu script setup. Oznacza to, że skompilowany kod szablonu może bezpośrednio uzyskiwać dostęp do zmiennych zadeklarowanych wewnątrz ustawienia skryptu, bez pośrednika między nimi. Ponadto, składnia Composition API pozwala na wykorzystanie bardziej zoptymalizowanych metod deklarowania zmiennych i funkcji, co przekłada się na mniejsze użycie pamięci. W przypadku Options API, zmienne są deklarowane jako właściwości obiektu, co może prowadzić do niepotrzebnego tworzenia dodatkowych obiektów i zwiększenia użycia pamięci .Lepsza wydajność i mniejsze użycie pamięci mają również pozytywny wpływ na minifikację kodu. Wszystkie nazwy zmiennych mogą być bezpiecznie skrócone, co przekłada się na jeszcze mniejszy rozmiar pliku i szybsze ładowanie strony.",
      },
      {
        question: "Jaka jest różnica w reaktywności dla vue 2 i 3",
        answer: 'Vue 2 używał Object.defineProperty do monitorowania zmian w obiektach i właściwościach. W Vue 3 został wprowadzony Proxy, który oferuje bardziej efektywny sposób monitorowania zmian. Proxy pozwala na dynamiczną interakcję z obiektami i dostarcza więcej możliwości manipulacji i śledzenia zmian.W Vue 2 reaktywność na poziomie tablic była ograniczona. Trzeba było korzystać z dedykowanych metod, takich jak $set, aby dokonać reaktywnej zmiany w tablicy. Vue 3 wprowadził nowe metody tablicowe, takie jak push, pop, splice itp., które są reaktywne i automatycznie odzwierciedlają zmiany w widoku. W Vue 2, globalny stan aplikacji był trudny do zarządzania i aktualizacji. W Vue 3, dzięki wprowadzeniu funkcji reactive i ref, globalny stan może być łatwiej tworzony i zarządzany, co ułatwia współdzielenie danych między komponentami.'
      },
      {
        question: "Na czym polega reaktywność w vue",
        answer:
          "Wszystkie właściwości zdefiniowane w instancji vue są reaktywne.Oznacza to,że jeżeli zajdzie jakaś zmiana to komponent automatycznie się zaktualizuje. Podczas inicjalizacji wszystkie właściwości są konwertowane do getterów oraz setterów, dzięki temu vue wie kiedy należy dokonać aktualizacji. Vue nie może wykryć, kiedy element tablicy jest modyfikowany za pomocą indeksu. Tutaj również należy użyć Vue.set.",
      },
      {
        question: "Czym jest single file component?",
        answer:
          "Single file component to plik o rozszerzeniu .vue zawierający całość komponentu Vue, czyli zarówno kod JavaScript, jak i HTML oraz style CSS. W odróżnieniu od tradycyjnego podejścia, gdzie poszczególne elementy znajdują się w oddzielnych plikach, single file component pozwala na przechowywanie wszystkich informacji w jednym pliku, co ułatwia zarządzanie i utrzymanie kodu",
      },
      {
        question: "Co to jest rejestracja globalna w komponentach?",
        answer:
          "Rejestracja globalna w komponentach polega na zarejestrowaniu komponentu w instancji Vue tak, aby mógł być używany w dowolnym miejscu w aplikacji. Po zarejestrowaniu globalnym, komponent jest dostępny w szablonie każdej nowej instancji Vue utworzonej po rejestracji. Aby zarejestrować komponent globalnie, można użyć metody Vue.component().",
      },
      {
        question: "Opisz walidacje dostępne dla propsów",
        answer:
          "Vue zapewnia walidacje, takie jak typy, wymagane pola(required), wartości domyślne(default) wraz z niestandardowymi walidacjami.",
      },
      {
        question: "Co to są dyrektywy niestandardowe?",
        answer:
          "Dyrektywy niestandardowe to polecenia, które możemy dodać do elementów DOM w celu wpływania na ich zachowanie lub stylowanie. Aby oznaczyć dyrektywę jako niestandardową, musimy dodać przedrostek 'v-' do nazwy dyrektywy. W celu zastosowania dyrektywy do elementu możemy użyć jej nazwy w atrybucie elementu, np. v-my-custom-directive. Dyrektywy niestandardowe są często używane w celu manipulacji DOM lub dostosowywania zachowania komponentów Vue."
      },
      {
        question: "Co to jest router i jakie są jego funkcje?",
        answer:
          "Router jest oficjalną biblioteką routingu dla aplikacji jednostronicowych, która została zaprojektowana do użytku z frameworkiem Vue.js. Jego główną funkcją jest obsługa nawigacji między różnymi widokami aplikacji bez konieczności odświeżania strony. Biblioteka ta pozwala na zdefiniowanie tras/widoków aplikacji, zagnieżdżone mapowanie tras, konfigurację routera opartą na komponentach oraz kontrolę nawigacji przy użyciu parametrów trasy, zapytań oraz symboli wieloznacznych. Oprócz tego Vue Router oferuje linki z automatycznymi aktywnymi klasami CSS, tryb historii HTML5 lub tryb skrótu z automatycznym przywracaniem w IE9 oraz przywracanie pozycji przewijania po powrocie do trybu historii.",
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
          "w architekturze Vue stosowany jest przepływ danych jednokierunkowy (one-way data flow). Dane są przekazywane z komponentu rodzica do komponentu potomnego poprzez propsy - właściwości przekazywane do komponentu potomnego z komponentu rodzica. Gdy wartość propsów w komponencie rodzica zostaje zaktualizowana, ta sama wartość zostaje automatycznie zaktualizowana w komponencie potomnym.W komponencie potomnym nie powinno się mutować danych propsów, ponieważ nie powinno się zmieniać stanu komponentu potomnego bezpośrednio. Jeśli chcemy zmienić wartość propsa w komponencie potomnym, powinniśmy skorzystać z mechanizmu zdarzeń emitowanych przez komponent potomny za pomocą metody emit(), a następnie przechwycić je w komponencie rodzica za pomocą słowa kluczowego v-on. Taki sposób komunikacji między komponentami nazywa się także 'emitowanie zdarzeń' lub 'emit-and-catch '",
      },
      {
        question: "Wymień najczęstszą przyczynę wycieków pamięci w aplikacjach Vue.js i sposoby ich rozwiązania.",
        answer:
          "Wycieki pamięci w aplikacjach Vue.js często wynikają z używania zewnętrznych bibliotek, które tworzą własne instancje i/lub manipulują DOM.Dyrektywa v-if i router Vue niszczą instancje komponentów Vue; jednak czyszczenie po dowolnej bibliotece innej firmy powinno być wykonywane ręcznie w haku cyklu życia beforeDestroy().Załóżmy na przykład, że wewnątrz naszego komponentu używamy fikcyjnej biblioteki PowerGraph.js. Tworzy instancję wykresu, która wyświetla niektóre dane na stronie:Musimy wywołać metodę destroy() instancji grafu, jeśli jest dostarczona, lub zaimplementować własną metodę czyszczenia:Jeśli czyszczenie nie zostanie wykonane, zanim nasz komponent zostanie zniszczony, ta pamięć nigdy nie zostanie zwolniona. Stąd wyciek pamięci.",
      },
      {
        question: "Czym jest instancja vue?",
        answer:
          "Instancja Vue to obiekt, który reprezentuje część aplikacji Vue, a konkretnie jeden komponent. Instancja Vue jest tworzona za pomocą konstruktora Vue i pozwala na określenie danych, metod, obserwatorów i wiele innych właściwości i funkcji, które składają się na logikę komponentu. Każdy komponent w aplikacji Vue jest reprezentowany przez swoją własną instancję Vue. Dlatego, tworząc instancję Vue, powinniśmy wskazać, którego komponentu to instancja jest reprezentacją. Przykładowo, możemy stworzyć instancję Vue, aby reprezentować główny komponent naszej aplikacji, jak również możemy stworzyć wiele instancji Vue, aby reprezentować wiele komponentów.",
      },
      {
        question: "Jak ponownie wykorzystujesz elementy z kluczowym atrybutem?",
        answer:
          "Vue zawsze stara się renderować elementy w jak najbardziej wydajny sposób. Dlatego próbuje ponownie wykorzystać elementy, zamiast tworzyć je od nowa. Jednak takie zachowanie może prowadzić do problemów w niektórych scenariuszach. Aby temu zapobiec, można użyć atrybutu klucza (key attribute), który pozwala na uniknięcie problemów związanych z ponownym wykorzystywaniem elementów. Na przykład, jeśli spróbujemy wyrenderować ten sam element input w blokach v-if i v-else, to wartość zostanie zachowana",
      },
      {
        question: "Różnica między script a script setup",
        answer:
          "Składnia script setup to nowa funkcjonalność wprowadzona w Vue 3. Kod wewnątrz jest kompilowany jako zawartość funkcji setup() komponentu. Oznacza to, że w przeciwieństwie do normalnego skryptu, który jest wykonywany tylko raz, gdy komponent jest importowany po raz pierwszy, kod wewnątrz setup() będzie wykonywany za każdym razem, gdy tworzona jest instancja komponentu. Funkcja setup() ma na celu uproszczenie kodu i zapewnienie lepszej wydajności, ponieważ umożliwia łatwe i bezpośrednie importowanie właściwości i metod z komponentu, a także zapewnia automatyczne zarządzanie reaktywnością.",
      },
      {
        question:
          "Jak komunikować się z komponentu dziecka to komponentu rodzica?",
        answer:
          "eśli chcesz przekazać informacje z komponentu dziecka do komponentu rodzica, możesz użyć metody $emit, która wysyła zdarzenie do rodzica. Aby to zrobić, musisz wpierw zdefiniować zdarzenie w komponencie dziecka, a następnie wywołać metodę $emit, podając nazwę zdarzenia i opcjonalnie przekazując dane. W rodzicu musisz zarejestrować obsługę zdarzenia, korzystając z atrybutu v-on lub @ i podając nazwę zdarzenia i funkcję obsługi. Funkcja obsługi zostanie wywołana, gdy dziecko wyemituje zdarzenie, a dane przekazane za pomocą $emit będą przekazane do funkcji obsługi jako argumenty. Ogólnie rzecz biorąc, aby skutecznie komunikować się między komponentami dziecka i rodzica w Vue.js, musisz zrozumieć, jak działa system zdarzeń i jak korzystać z metod $emit i atrybutu v-on lub @. Ważne jest również, aby wybrać odpowiednie nazwy zdarzeń i upewnić się, że przekazywane dane są zgodne z oczekiwaniami.",
      },
      {
        question: "Czym jest props?",
        answer:
          "Propsy to niestandardowe atrybuty, które można zarejestrować w komponencie. Służą do przekazywania informacji z komponentu rodzica do komponentu dziecka. Propsy można zarejestrować w komponencie, aby przekazać dane do jednego z komponentów dziecka. Dane w propsach mogą przepływać tylko jednostronnie - z komponentu rodzica do komponentu dziecka. Oznacza to, że nie jest możliwe przekazywanie propsów z komponentu dziecka do rodzica. Propsy są tylko do odczytu, co oznacza, że nie mogą zostać zmodyfikowane przez komponent dziecka, ponieważ wartość należy do komponentu rodzica.",
      },
      {
        question: "czym jest mapState?",
        answer:
          "mapState() to funkcja, która pozwala na pobranie i przypisanie wartości bezpośrednio z sekcji state w store do lokalnego scope. W ten sposób otrzymujemy czyste dane - bez żadnych modyfikacji. Ma to duży sens, szczególnie w przypadku prostych typów, takich jak flaga boolean, np. flaga 'loading' itp. Użycie funkcji mapState() upraszcza proces dostępu do danych w store i ułatwia ich użycie w komponentach. Pozwala nam na dostęp i przypisanie wartości stanu w sposób bardziej deklaratywny, bez konieczności martwienia się o szczegóły implementacyjne Vuex store.",
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
          "W Vue 3 dodano funkcjonalność Suspense, która ma podobną ideę - umożliwienie komponentom 'zawieszenia' renderowania, gdy potrzebne dane są jeszcze ładowane. Komponent Suspense służy jako rodzaj granicy, który otacza inne komponenty, a jeśli te zawieszają się na ładowaniu danych, Suspense wyświetla fallback element lub komponent.W Vue 3, aby osiągnąć to zachowanie, możemy użyć dyrektywy v-wait lub komponentu Suspense. Gdy komponent zawiesi się na ładowaniu, dyrektywa lub komponent wyświetlą fallback treść, a gdy dane będą gotowe, komponent zostanie wyrenderowany z właściwą treścią.",
      },
      {
        question: "Jaka jest różnica między composition api a option api?",
        answer:
          "W Vue.js, Option API to tradycyjny sposób tworzenia komponentów, który jest obecny już od pierwszej wersji frameworka. Polega on na definiowaniu opcji (options) w obiekcie komponentu, takich jak data, methods, computed itp. W tym podejściu, kod komponentu jest zorganizowany w różnych metodach, a dane i metody są definiowane na jednym poziomie.Composition API to nowszy sposób tworzenia komponentów w Vue.js 3, który został wprowadzony w celu poprawy czytelności i łatwości w utrzymaniu kodu w większych projektach. W Composition API, logika komponentu jest zorganizowana w funkcji setup, która zawiera całą logikę kodu. Funkcja ta może zawierać różne hooki (hook functions), takie jak reactive, computed, watch, ref i wiele innych, które umożliwiają organizowanie kodu w bardziej logiczny sposób..Jedną z zalet Composition API jest możliwość wykorzystywania tych samych hooków w wielu komponentach, co znacząco zwiększa ich reużywalność. Dzięki temu unika się również problemów z Mixinami, które były stosowane w Option API w celu uzyskania podobnej funkcjonalności.Podsumowując, Composition API to nowszy sposób tworzenia komponentów w Vue.js 3, który umożliwia bardziej elastyczne i logiczne organizowanie kodu, a także zwiększa jego czytelność i reużywalność w większych projektach.",
      },
      {
        question: "Jaka jest różnica między watch a watchEffect",
        answer:
          "óżnica między watch a watchEffect polega na tym, że watch() pozwala na obserwację konkretnej reaktywnej wartości lub listy wartości i wywołuje funkcję zwrotną tylko wtedy, gdy któraś z nich się zmieni. Daje nam to kontrolę nad tym, co dokładnie obserwujemy.Z drugiej strony, watchEffect() obserwuje każdą reaktywną wartość w funkcji zwrotnej i wywołuje ją automatycznie, gdy któraś z nich ulegnie zmianie. Nie potrzebuje ona dodatkowej konfiguracji, co sprawia, że jest łatwiejsza w użyciu, ale może prowadzić do niepotrzebnego renderowania, jeśli nie jest używana ostrożniePodsumowując, watch() daje nam większą kontrolę nad tym, co obserwujemy, a watchEffect() jest łatwiejszy w użyciu, ale może prowadzić do niepotrzebnego renderowania.",
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
