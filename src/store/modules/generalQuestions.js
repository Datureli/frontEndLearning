export default {
  namespaced: true,

  state: {
    generalQuestions: [
      {
        question: "Czym jest ShadowDOM?",
        answer:
          "Domyślnie, przeglądarki nie prezentują Shadow DOM w narzędziach dla programistów.Shadow DOM pozwala stworzyć pod-drzewo DOM z dodatkowymi elementami DOM określanymi jako custom components albo Web Components.Zaletą wykorzystywania Shadow DOM i tworzenia za jego pomocą własnych komponentów jest niezależność i izolacja komponentów od klasycznego DOM. W praktyce daje nam to niezależność od dodanego stylu CSS czy wykonywanego kodu JS w ramach strony internetowej.",
      },
      {
        question: "Czym jest useStrict?",
        answer:
          "Use strict to zakres reguł, które muszą zostać przestrzegane w kodzie. Dzięki temu każdy programista pracujący na kodzie, który oparty jest o ten mechanizm, musi podobnie tworzyć oprogramowanie, aby nie powstawały błędy. Na przykład deklarując zmienną bez kluczowego słowa var, zadziała dla kodu, który nie ma mechanizmu use strict, jeżeli spróbujemy uruchomić kod, w którym mamy deklarację zmiennej bez słowa kluczowego var i z użyciem mechanizmu use strict wtedy aplikacja zgłosi błąd.Dzięki use stricts:Wyłapujemy pewne typowe błędy,wpadki programisty,zwracam nam błąd gdy podejmowanie są działa uznane za niebezpieczne. Mechanizm use strict pozwala na nałożenie pewnych reguł w JavaScript, dzięki którym kod będzie spójny i nie będzie powielać błędów.",
      },
      {
        question: "Opisz generatory stron statycznych",
        answer:
          "Skupiają się na jednym zadaniu: stworzeniu plików HTML/CSS/JS przetwarzając dynamiczną zawartość na wynik będący stroną statyczną. Wszystko bez budowy architektury serwerowej.",
      },
      {
        question: "Czym jest headless?",
        answer:
          "Oznacza działanie lub pracę systemu, aplikacji lub urządzenia bez interfejsu użytkownika (UI) lub ekranu. Jest to podejście, w którym aplikacja lub urządzenie działa w tle, bez potrzeby wyświetlania graficznego interfejsu.Headless jest szczególnie przydatny w automatyzacji, przetwarzaniu danych i dostarczaniu treści na różne platformy. Dzięki temu podejściu można zwiększyć elastyczność i skalowalność systemów oraz zintegrować je z innymi aplikacjami i usługami.",
      },
      {
        question: "Czym jest izomorfizm",
        answer:
          "Aplikacja izomorficzna to taka, która dzieli prawie cały swój kod między serwerem i klientem.",
      },
      {
        question: "Czym jest docker?",
        answer:
          "Docker to platforma Open Source służąca do tworzenia i wdrażania aplikacji kontenerowych oraz zarządzania nimi. Umożliwia programistom pakowanie aplikacji w kontenery — standardowe wykonywalne komponenty łączące kod źródłowy aplikacji z zależnościami i bibliotekami systemu operacyjnego wymaganymi do uruchomienia tego kodu w dowolnym środowisku. Kontenery upraszczają dostarczanie rozproszonych aplikacji i stają się coraz popularniejsze w miarę jak organizacje coraz częściej tworzą rozwiązania z myślą o chmurze i wykorzystują hybrydowe środowiska",
      },
      {
        question: "Czym jest domena?",
        answer:
          "Domena (adres internetowy) to unikalna nazwa w Internecie, pod którą można umieścić serwis www. Aby strona www była dostępna w internecie, potrzebujemy serwera na który będzie wskazywać nasza unikalna nazwa. Domeny opierają się na systemie DNS, czyli Domain Name System. Jest to sieć rozproszonych po świecie serwerów. Dzięki DNS możemy używać zrozumiałych nazw witryn zamiast skomplikowanych adresów IP. Każdą z domen obsługują przynajmniej dwa serwery DNS, aby w przypadku awarii jednego z nich uniknąć sytuacji przestoju w działaniu strony internetowej.",
      },
      {
        question: "Jak działa DNS?",
        answer:
          "DNS (Domain Name System) to protokół, którego główna funkcja polega na tłumaczeniu łatwych do zapamiętania przez człowieka nazw domen na zrozumiałe dla komputerów dane liczbowe. Działanie systemu DNS przebiega zgodnie z następującymi etapami. Użytkownik wpisuje w polu adresu przeglądarki określoną nazwę domeny, system za pośrednictwem przeglądarki nawiązuje komunikację z lokalnym serwerem DNS, przesyłając prośbę o przetłumaczenie nazwy domeny na adres IP.Lokalny serwer przesyła zapytanie o numer IP do jednego z 13 głównych serwerów na świecie. Serwer główny przekazuje informację na temat lokalizacji (adresu IP) serwera, na którym przechowywane są strony internetowe z określoną końcówką domenyerwer DNS dostarcza w informacji zwrotnej do komputera użytkownika (do przeglądarki stron internetowych) numer odpowiadający konkretnej domenie.6. Komputer nawiązuje połączenie z adresem IP, co umożliwia wyświetlenie zawartości strony www.Wszystko dzieje się w bardzo krótkim czasie, dlatego działanie serwera DNS jest dla nas niezauważalne.",
      },
      {
        question: "Co wpływa na szybkość odpowiedzi serwera DNS?",
        answer:
          "Szybkość wczytywania się stron internetowych na komputerze w dużym stopniu zależy od czasu, w jakim serwer DNS odnajdzie adres IP odpowiadający danej domenie. Istotnym czynnikiem wpływającym na czas odpowiedzi jest odległość komputera od docelowego serwera.Na opóźnienie w komunikacji, oprócz sporej odległości, może również wpłynąć skomplikowana struktura strony www. Sporo współczesnych witryn zawiera liczne odwołania do innych stron – np. serwisów społecznościowych czy kanałów reklamowych. W takim przypadku zanim możliwe będzie załadowanie strony, serwer będzie musiał przetłumaczyć adresy wielu domen. Zamiana serwerów DNS na szybsze znacząco przyśpiesza wczytywanie się witryn, pomimo identycznej przepustowości łącza.",
      },
      {
        question: "Jakie są rodzaje zapytań oraz serwerów DNS",
        answer:
          "Najbardziej ogólny podział rozróżnia serwery domeny głównej oraz serwery autorytatywne: Serwery domeny głównej (typu root) to 13 DNS-ów, które są rozmieszczone na całym świecie – komputer użytkownika nawiązuje połączenie z tym spośród nich, który znajduje się najbliżej.Serwery autorytatywne to natomiast lokalne serwery (zwykle główny i alternatywny), które przechowują aktualne dane na temat komputerów w danej domenie.",
      },
      {
        question: "Czym jest HTTP?",
        answer:
          "Http to skrót od wyrażenia Hypertext Transfer Protocol, czyli protokół umożliwiający przesyłanie danych dla sieci internetowej. Odpowiada on za komunikację pomiędzy klientem (przeglądarką) a serwerem, na którym przechowywane są wszystkie pliki tworzące witrynę internetową. Komunikacja w ramach protokołu http opiera się na dość prostym procesie wysyłania danych pomiędzy klientem a serwerem. Klient wysyła zapytanie, na co serwer odpowiada poprzez przesłanie tych danych.Http nie przechowuje wcześniej przesłanych danych,oznacza to ,że muszą być pobierane za każdym razem przy wejściu na stronę.",
      },
      {
        question: "Czym jest HTTPS?",
        answer:
          "Każdy właściciel witryny internetowej może przejść z adresu z przedrostkiem http na ten z https na początku. Wiąże się to z koniecznością wdrożenia certyfikatu szyfrującego SSL",
      },
      {
        question: "Jak działają kontenery?",
        answer:
          "Używanie kontenerów jest możliwe dzięki funkcjom izolowania procesów i wirtualizacji wbudowanym w jądro systemu Linux.te funkcje — np. grupy kontroli (cgroups) służące do przydzielania zasobów do procesów oraz przestrzenie nazw służące do ograniczania dostępu procesów do innych zasobów lub obszarów systemu albo wglądu w te zasoby lub obszary — pozwalają wielu komponentom aplikacji na współużytkowanie zasobów jednej instancji systemu operacyjnego hosta w sposób podobny do tego, w jaki hiperwizor pozwala wielu maszynom wirtualnym na współużytkowanie procesora, pamięci i innych zasobów pojedynczego serwera sprzętowego.",
      },
      {
        question: "Czym jest stos?",
        answer:
          "Koncepcyjnie stos jest strukturądanych, którąmożna po prostu opisaćjako listęLIFO – „last in, first out” (ostatnie na wejściu, pierwsze na wyjściu). Pozwala na dwie główne operacje: odłożenie jakichś danych na wierzch stosu („push”) i zdjęcie jakichś danych z wierzchu stosu („pop”),",
      },
      {
        question: "Czym jest odpytywanie http (HTTP Polling)?",
        answer:
          "Klient wysyła do serwera powtarzające się żądania i sprawdza, czy jest jakaś wiadomość do odebrania. Nie jest to zbyt wydajne. Zużywamy niepotrzebnie dużo zasobów, kolejnym problemem jest liczba nieudanych żądań.",
      },
      {
        question: "Czym jest Long-Polling?",
        answer:
          "Long Polling polega na wysłaniu żądania HTTP do serwera, a następnie utrzymaniu otwartego połączenia, aby umożliwić serwerowi odpowiedź w późniejszym terminie (o czym decyduje serwer).Mimo że Long Polling działa, jest ona bardzo droga pod względem użycia procesora, pamięci i przepustowości (blokujemy zasoby, utrzymując połączenie aktywnym",
      },
      {
        question: "Czym jest Solid?",
        answer:
          "Solid to akronim, który wymyślił Robert C. Martin. Wytyczne te stosuje się podczas pisania programów w sposób obiektowy.S pochodzi od Single Responsibility Principle.Oznacza to ,że klasa powinna mieć wyłącznie jeden powód do zmiany,jeden główny cel,jedną odpowiedzialność.O pochodzi od Open/Closed Principle - aby kod, który tworzymy był “możliwy do rozszerzania i zamknięty na modyfikacje”.L pochodzi od Liskov Substitution Principle - kod powinien współpracować poprawnie z klasą, jak i wszystkimi jej podklasami. Innymi słowy jeśli zależysz od jakiegoś interfejsu to wszystkie jego implementacje powinny poprawnie działać z Twoją klasą/metodą.I pochodzi od Interface Segregation Principle. Wytyczna ta mówi o tym, abyś rozdzielał interfejs klasy.W oryginale wytyczna ta mówi o tym, ze klienty nie powinny być zmuszane do wprowadzania zależności od interfejsów, których nie używają.D pochodzi od Dependency Inversion Principle.Wytyczna ta mówi, że wysokopoziomowe klasy nie powinny zależeć od niskopoziomowych detali. ",
      },
      {
        question: "https a Google – czy szyfrowanie wpływa na pozycjonowanie?",
        answer:
          "Algorytmy biorą pod uwagę takie czynniki jak wiarygodność i jakość domeny, a to ma związek również z zapewnieniem użytkownikom bezpieczeństwa. Oznacza to, że wdrożenie protokołu https może mieć pozytywny wpływ na pozycjonowanie witryny.",
      },
      {
        question: "Czym jest CORS?",
        answer:
          "CORS to skrót od Cross-Origin Resource Sharing, czyli mechanizmu pozwalającego wysyłać żądania HTTP z jednej strony na drugą z pominięciem mechanizmów bezpieczeństwa w przeglądarkach. CORS wykorzystuje nagłówek, w którym zdefiniować można „bezpieczne” adresy i wysłać żądanie, które nie zostanie zablokowane. zapewnia nam on możliwość bezpiecznej wymiany danych pomiędzy stronami które charakteryzuje inny Origin.",
      },
      {
        question: "Czym jest XMLHttpRequest?",
        answer:
          "Jest to żądanie umożliwiająca asynchroniczną komunikację pomiędzy klientem a serwerem. Pozwala na wysyłanie danych do serwera w tle, żądań pobrania danych z serwera i otrzymania danych z serwera oraz na aktualizowanie danych bez konieczności odświeżania całej strony.",
      },
      {
        question: "Czym jest plik manifestu w HTML5?",
        answer:
          "Plik manifestu to plik zawierający listy zasobów, które mają być zcachowane. Dzięki temu można świadomie wskazać konkretne elementy w taki sposób, aby przełożyło się to na szybsze ładowanie aplikacji bądź – np. gdy jakiś element musi być często odświeżany – również to zasygnalizować. Wyróżnia się trzy rodzaje (sekcje) obiektów w plikach manifestu: te, które mają być zcachowane (CACHE Manifest), te, które zawsze mają być pobrane (Network), pliki awaryjne, które mają być zcachowane w razie, gdyby aplikacja padła (Fallback).",
      },
      {
        question: "Czym jest zasada jednej odpowiedzialności?",
        answer:
          "zasada mówiąca, że nigdy nie powinno być więcej niż jednego powodu do istnienia klasy bądź metody",
      },
      {
        question: "Czym jest SOP?",
        answer:
          " zapewnia nam on możliwość bezpiecznej wymiany danych pomiędzy stronami które charakteryzuje inny Origin.",
      },
      {
        question: "Czym są crawlery?",
        answer:
          "  Są to specjalne aplikacje (boty), które mają za zadanie prześledzić, a następnie ustalić zawartość strony internetowej. To właśnie dzięki nim, gdy udostępniamy link na Facebooku, oprócz adresu URL pojawia się tytuł, opis oraz zdjęcie, np. z logo serwisu. Na podobnej zasadzie działają crawlery Google. Skanują stronę i ustalają, czy treść tam zawarta jest wartościowa i jak wysoko w wynikach wyszukiwania powinna się znaleźć. Tutaj właśnie leży sedno problemu - crawlery Facebooka w ogóle nie radzą sobie ze stronami typu SPA. Natomiast Google radzi sobie, ale nie najlepiej.",
      },
      {
        question: "Jakie są zalety i wady SPA?",
        answer:
          "Największą zaletą Single Page Application jest jej szybkość działania. W porównaniu do tradycyjnej witryny internetowej użytkownik ma możliwość bardziej “płynnego” poruszania się po stronie. Kolejnymi zaletami są: wygoda dla użytkownika (UX) oraz generowanie mniejszego obciążenia dla serwera. To rozwiązanie wspaniale sprawdzi się dla stron, które mogą być pobierane również w formie aplikacji mobilnej.",
        secondAnswer:
          "Zawarta jest wartościowa i jak wysoko w wynikach wyszukiwania powinna się znaleźć. Tutaj właśnie leży sedno problemu - crawlery Facebooka w ogóle nie radzą sobie ze stronami typu SPA. Natomiast Google radzi sobie, ale nie najlepiej.latego osiągnięcie wysokich wyników w wyszukiwarce Google przy SPA może być bardzo trudne. Nie twierdzimy, że nie jest to możliwe, ponieważ istnieją sposoby na rozwiązanie tego problemu, jednak to, co stosunkowo łatwo osiągnąć na “zwykłej” stronie internetowej, tutaj będzie sprawiać problemy.",
      },
      {
        question: "Jak działają strony SPA?",
        answer:
          "W przypadku stron typu SPA sytuacja wygląda zupełnie inaczej. Kiedy po raz pierwszy odwiedzamy daną stronę, serwer wysyła nam minimalną ilość kodu HTML oraz kod JS. W tej sytuacji to nasza przeglądarka ma za zadanie, na podstawie przesłanych plików, wygenerować odpowiedni plik HTML, który zostanie wyświetlony nam w postaci strony internetowej. Jeśli chcemy przejść na inną podstronę w obrębie tego samego serwisu, nie musimy już wysyłać kolejnego żądania do serwera, ponieważ wszystko, co jest nam potrzebne do wygenerowania pozostałych podstron, zostało już pobrane przez naszą przeglądarkę. To bardzo ważne, ponieważ teraz klikając, np. w odnośnik do innej podstrony, treść zostanie dynamicznie zmieniona bez konieczności ponownego załadowania całości.",
        secondAnswer:
          "Single Page Application swoim działaniem bardziej przypominają aplikacje natywne niż tradycyjne strony internetowe. Dzięki wykorzystaniu tych pierwszych znacząco zmniejszamy obciążenie serwera, co nie jest bez znaczenia szczególnie w przypadku stron o dużym natężeniu ruchu.",
      },
      {
        question: "Jak działają tradycyjne strony internetowe?",
        answer:
          "radycyjne strony internetowe działają w schemacie żądanie (request) - odpowiedź (response). Oznacza to, że za każdym razem kiedy chcemy odwiedzić stronę, wysyłamy żądanie do serwera. Ten natomiast przetwarza nasze żądanie, sprawdzając np. czy jesteśmy zalogowanym użytkownikiem, jakie przesłaliśmy pliki cookies, itp. Na tej podstawie decyduje, jaka treść powinna zostać nam wyświetlona. Krótko ujmując, serwer wykonuje całą masę pracy, aby na końcu w odpowiedzi wysłać nam kod HTML (oraz oczywiście CSS i JS), który nasza przeglądarka wyświetli jako stronę. Chcąc przejść do innej podstrony - np. z droptica.pl na droptica.pl/case-studies - cała operacja wykonywana jest ponownie. Serwer przetwarza żądanie, decyduje, jaka treść powinna być wyświetlona, generuje i zwraca kod HTML. Dzieje się tak za każdym razem, kiedy chcemy wyświetlić kolejne podstrony.",
      },
      {
        question: "Czym jest Content security Policy?",
        answer:
          " Content Security Policy (CSP) ito dodatkowa warstwa ochrony, która pozwala na wykrywanie i odpieranie niektórych typów ataków, w tym Cross Site Scripting (XSS) oraz ataków wprowadzania danych.Te ataki są używane czynności takich jak: wykradanie danych, uszkodzenia strony, dystrybucja złośliwego oprogramowania.      ",
      },
      {
        question:
          "Jaka jest różnica pomiędzy display: none i visibility: hidden?",
        answer:
          " Oba atrybuty służą do ukrywania elementów na stronie. W praktyce działają one jednak inaczej. O ile atrybut visibility: hidden faktycznie jedynie ukrywa element i tag jest renderowany i zostanie dla nie niego zarezerwowane widoczne miejsce, tak w przypadku display: none w ogóle nie zostanie on wyświetlony na stronie, ani nie pojawi się na niego miejsce, choć cały czas będzie można z nim wchodzić w interkacje przez DOM.",
      },
      {
        question: `Czym jest Event bobbling?`,
        answer: ` Jest to propagacja elementu do samej góry.Zawsze idzie z dołu do góry`,
      },
      {
        question: `Czym są service workery?`,
        answer: `Service Worker pozwala nam na rozszerzenie funkcjonalności naszej aplikacji o pewne funkcje, które dostępne są w natywnych aplikacjach mobilnych. Przykładami mogą być umożliwienie pracy w trybie offline oraz push notyfikacje na ekranie urządzenia użytkownika naszej aplikacji`,
      },
      {
        question: `Czym jest pwa?`,
        answer: `PWA to skrót od wyrazów Progressive Web App (tłumacząc na język polski: Progresywna Aplikacja Internetowa). Jej celem jest zapewnienie najwyższej jakości odbioru stron internetowych przez wszystkie systemy operacyjne, a także bez względu na jakość połączenia z internetem. Po wejściu na stronę typu PWA, zawartość aplikacji zapisywana jest w pamięci urządzenia. Dzięki zapisanym danym,  ponowne wejście na stronę PWA może odbyć się również w trybie offline. To stanowi przewagę stron PWA nad innymi rodzajami stron internetowych.
        Dlaczego funkcja pobierania aplikacji PWA jest ważna? Dzięki temu użytkownik twojej strony, po ściągnięciu jej na smartfon, będzie mógł otworzyć ją w trybie offline. To oznacza, że będzie mógł przeglądać zawartość strony nawet podczas podróży pociągiem czy samolotem.`,
      },
      {
        question: `Jak działa renderowanie po stronie klienta?`,
        answer: `Kiedy programiści mówią o renderowaniu po stronie klienta, mają na myśli renderowanie treści w przeglądarce za pomocą JavaScript. Więc zamiast pobierać całą zawartość z samego dokumentu HTML, otrzymujesz podstawowy dokument HTML z plikiem JavaScript, który wyrenderuje resztę witryny za pomocą przeglądarki`,
        secondAnswer: `Inną rzeczą, o której należy pamiętać, jest to, że Twoja witryna/aplikacja nie będzie mogła się załadować, dopóki WSZYSTKIE JavaScript nie zostanie pobrane do przeglądarki. Ma to sens, ponieważ zawiera wszystkie potrzebne treści. Jeśli Twoi użytkownicy korzystają z wolnego połączenia internetowego, początkowy czas ładowania może się nieco wydłużyć.`,
      },
      {
        question: `renderowanie po stronie serwera vs renderowanie po stronie klienta?`,
        answer: ` renderowanie po stronie serwera jest świetne dla SEO. Twoje treści są obecne, zanim je otrzymasz, więc wyszukiwarki mogą je indeksować i indeksować. Coś, co nie jest tak z renderowaniem po stronie klienta. Przynajmniej nie po prostu.`,
        secondAnswer: `Poniżej znajduje się krótkie zestawienie zalet i wad dla każdego podejścia:Server-side pros:
        Search engines can crawl the site for better SEO.
        The initial page load is faster.
        Great for static sites.Server-side cons:
        Frequent server requests.
        An overall slow page rendering.
        Full page reloads.
        Non-rich site interactions.Client-side pros:
        Rich site interactions
        Fast website rendering after the initial load.
        Great for web applications.
        Robust selection of JavaScript libraries.Client-side cons:
        Low SEO if not implemented correctly.
        Initial load might require more time.
        In most cases, requires an external library.`,
      },
      {
        question: `Jak działa renderowanie po stronie servera?`,
        answer: `Renderowanie po stronie serwera to najczęstsza metoda wyświetlania informacji na ekranie. Działa poprzez konwersję plików HTML na serwerze na użyteczne informacje dla przeglądarki.`,
        secondAnswer: `Za każdym razem, gdy odwiedzasz witrynę, Twoja przeglądarka wysyła zapytanie do serwera, na którym znajduje się zawartość witryny. Żądanie zwykle zajmuje tylko kilka milisekund, ale ostatecznie zależy to od wielu czynników:Twoja prędkość internetu
        lokalizacja serwera
        ilu użytkowników próbuje uzyskać dostęp do witryny?
        i jak zoptymalizowana jest strona internetowa, żeby wymienić tylko kilka`,
        thirdPartOfAnswer:
          "Po zakończeniu przetwarzania żądania przeglądarka odzyskuje w pełni wyrenderowany kod HTML i wyświetla go na ekranie. Jeśli następnie zdecydujesz się odwiedzić inną stronę w witrynie, Twoja przeglądarka ponownie zażąda nowych informacji. Nastąpi to za każdym razem, gdy odwiedzasz stronę, której Twoja przeglądarka nie ma wersji w pamięci podręcznej.",
      },
      {
        question: `Jaka jest definicja funkcji wyższego rzędu?`,
        answer: ` Funkcja wyższego rzędu to funkcja, która przyjmuje inne funkcje jako parametry lub też taka, której wynik również jest funkcją. Przykładowa funkcja wyższego rzędu to map służąca do zwracania listy z wynikami funkcji dla wszystkich elementów z danej listy.

        Tradycyjnie do zebranych na temat rozmowy kwalifikacyjnej na stanowisko Frontend Developera dołączamy przydatne linki, z którymi warto zapoznać się w trakcie przygotowań:`,
        secondAnswer: ``,
      },
      {
        question: `Czym są preprocesory?`,
        answer: `Preprocesory w CSS, takie jak SASS czy LESS, to narzędzia rozszerzające możliwości CSS. CSS zapisywany jest pierwotnie do pliku najczęściej o rozszerzeniu SCSS, a następnie „kompilowany ”do pliku CSS. Preprocesory pozwalają na daleko idącą automatyzację pracy nad stylami, umożliwiają stosowanie dobrych praktyk, automatycznie implementując DRY, a nawet można dzięki nim stosować w CSS-ie logikę. `,
        secondAnswer: ``,
      },
      {
        question: `Jakie są różnice między kodem synchronicznym a asynchronicznym?`,
        answer: `W przypadku kodu synchronicznego mamy do czynienia z sytuacją, gdzie zadania są wykonywane po kolei, jedno na raz i jedno po drugim. Przeciwieństwem jest kod asynchroniczny, który pozwala na realizację wielu zadań równolegle. W przypadku frontendu i JavaScript można definiować funkcje asynchroniczne async, jak i używać obietnic, `,
        secondAnswer: ``,
      },
      {
        question: `Czym jest yagni?`,
        answer: `zasada pochodząca z programowania ekstremalnego, kładąca nacisk na wysokie ryzyko tworzenia kodu zanim będzie potrzebny.Często zdarza się, że tworzony jest kod na wszelki wypadek, nawet gdy nie jest potrzebny w danym momencie. Może się później okazać że nasza ocena co do użyteczności kodu lub jego działania była błędna i funkcja będzie wymagała refaktoryzacji lub całkowitego usunięcia. Dlatego zalecane jest stosowanie zasady YAGNI, czyli odkładanie pisania kodu na później, wtedy gdy będzie naprawdę potrzebny.`,
        secondAnswer: ``,
      },
      {
        question: "Czym jest i jak działa przeglądarka",
        answer:
          "Przeglądarka internetowa jest programem komputerowym, którego głównym celem jest wyświetlanie stron internetowych.",
        secondAnswer:
          "Pierwsze co robi przeglądarka to zdobycie adresu IP dla domenyJak już przeglądarka pobierze ten dokument to zaczyna go interpretować, czyli analizować jego treść. Kiedy dojdzie do lini z <title> to zrozumie, że jest to tytuł strony i umieści tekst w zakładce.Później natrafi na tekst Witam i po prostu wyświetli go.Ciekawiej robi się gdy dojdziemy do lini zawierającej img>. Przeglądarka rozumie, że <img> oznacza obrazek. A skoro obrazek to trzeba go pobrać i wyświetlić.",
        thirdPartOfAnswer:
          " skąd ma go pobrać? Otóż podobnie jak wcześniej z dokumentem html tak i teraz połączy się z komputerem (serwerem), którego adres IP już zna i poprosi grzecznie o przesłanie pliku o nazwie fotka.jpg.Serwer ponownie odpowie na jej prośbę tym razem przesyłając obrazek. W zależności jak duży jest to obrazek, pobieranie może potrwać bardzo krótko  - lub trochę dłużej.Interpretacja dokumentu kończy się na lini zawierającej </html>, co oznacza koniec dokumentu html.przeglądarka jest programem komputerowym.",
      },
      {
        question: "Co to jest DRY?",
        answer:
          "Dont repeat yourself - Reguła stosowana podczas pisania kodu,która zaleca unikanie powtórzeń w kodzie,np unikanie wklejania tych samych fragmentów kodu w wielu miejscach,należy unikać wszystkich powtórzeń czynności robionych przez programistów",
      },
      {
        question: "Co to jest CDN?",
        answer:
          "CDNy są to usługi, które udostępniają developerom możliwość korzystania z zasobów takich jak biblioteki, frameworki czy zdjęcia bez konieczności dołączania dodatkowych plików do naszego katalogu z projektem.",
      },
      {
        question: "Czym jest localStorage?",
        answer:
          "Local Storage (lokalne przechowywanie danych) to mechanizm dostępny w przeglądarkach internetowych, który umożliwia przechowywanie danych na poziomie klienta, czyli bez konieczności komunikacji z serwerem. Jest to rodzaj pamięci, która jest dostępna dla strony internetowej nawet po zamknięciu i ponownym otwarciu przeglądarki.Local Storage pozwala na przechowywanie danych w postaci klucza i wartości. Można w nim przechowywać różnego rodzaju dane, takie jak tekst, liczby, obiekty JavaScript, tablice itp. Dane są przechowywane w przeglądarce w postaci ciągu tekstowego, a lokalne przechowywanie danych jest specyficzne dla każdej domeny, na której działa strona internetowa.Kluczową cechą local storage jest to, że dane są trwałe i nie wygasają po zamknięciu przeglądarki. Mogą być wykorzystywane do przechowywania ustawień użytkownika, stanu aplikacji, preferencji, danych sesji i innych informacji, które mają być dostępne dla strony internetowej nawet po ponownym otwarciu przeglądark",
      },
      {
        question: "Co robimy z kodem zanim wrzucimy go na produkcje?",
        answer:
          "Najpierw przeprowadzamy code review, a następnie testy, aby upewnić się, że wszystko działa jak należy.",
      },
      {
        question: "Czym jest stos wywołań?",
        answer:
          "Za każdym razem, gdy program wywołuje funkcję, do stosu wywołań jest dodawany wpis. Gdy aplikacja staje się złożona i funkcje są wielokrotnie wywoływane w obrębie innych funkcji, stos wywołań reprezentuje ślad wywołań funkcji.",
      },
      {
        question: "Czym jest Rwd?",
        answer:
          "Responsive web design to technika projektowania strony www tak, aby jej wygląd i układ dostosowywał się automatycznie do rozmiaru okna przeglądarki, na której jest wyświetlany np. przeglądarki, smartfonów czy tabletów. Strona tworzona w takiej technice jest uniwersalna i wyświetla się dobrze zarówno na dużych ekranach, jak i na smartfonach czy tabletach.",
      },
      {
        question:
          "Opisz, na czym polega wstrzykiwanie zależności i wzorzec Dependency Injection.",
        answer:
          "Podstawową zasadą działania Dependency Injection jest posiadanie serwisu, który zajmuje się uzupełnianiem potrzebnych zależności. Sam pomysł Wstrzykiwania Zależności można zrealizować na wiele różnych sposobów. Omówmy po krótce kilka z nich2:",
      },
      {
        question: "Opowiedz coś o sobie",
        answer:
          "To według kandydatów jedno z najtrudniejszych pytań. Przez to, że jest bardzo ogólne, to bardzo często zastanawiamy, “Co autor chce wiedzieć?” – aby gładko wybrnąć z odpowiedzią na to. Pytanie to warto podzielić na 3 części: – kilka słów o swoim dotychczasowym doświadczeniu zawodowym – dlaczego chcesz zostać programistą/programistką? – jakie są Twoje zainteresowania.",
      },
      {
        question: "Czym są eventy server-sent?",
        answer:
          "Server-sent events to API pozwalające na przekazywanie żądań w relacji serwer-klient, przy czym jako klienta należy rozumieć jako aplikację. API, w odróżnieniu od WebSocketów, pozwala na jednokierunkowe przesyłanie wiadomości, najczęściej komunikatów o konkretnych wydarzeniach, np. zmianach na backendzie lub statusie (końcu) przetwarzania danych elementów.",
      },
      {
        question: "Jak dziala websocket?",
        answer:
          "WebSockets nie wymaga wysyłania żądania w celu udzielenia odpowiedzi. Pozwalają na dwukierunkowy przepływ danych, więc wystarczy “nasłuchiwać” danych. Możesz po prostu “słuchać” serwera, który wyśle Ci wiadomość, gdy będzie dostępna.",
      },
      {
        question: "Czym się różni prettier od eslint",
        answer:
          "Prettier zajmie się formatowaniem Twojego kodu, ESLint zadba o Twój styl kodu.",
      },
      {
        question: "Opowiedz coś o swoim ostatnim projekcie",
        answer:
          "To pytanie, choć z pozoru odwołuje się do Twoich emocji, należy rozpatrywać w nieco bardziej konkretnych kategoriach. Nie rozwódź się nad tym, jak bardzo ciężko było Ci dokończyć ten projekt oraz jakie szczęście Cię ogarnęło po jego zakończeniu. Zamiast tego przygotuj sobie taki opis projektu, który będzie zawierał najważniejsze elementy: – kilka zdań o tym, czym jest ten projekt, jak działa, jakie ma rozwiązania i funkcjonalności, – podkresl rolę, ktorą odegrałeś w projekcie, dodaj kilka zdań o przebiegu jego realizacji, na jakie problemy trafiłeś i jak je rozwiązałeś, – nie może zabraknąć opisu stacka technologicznego, i wyjaśnienia, dlaczego użyłeś określonych narzędzi, języków i frameworków.",
      },
      {
        question: "Co to jest Webpack?",
        answer:
          "Webpack jest to “module bundler” co oznacza, że potrafi on spakować wiele różnych typów zasobów do jednego wynikowego zasobu. Na przykład jeśli posiadamy w naszym projekcie wiele modułów , webpack potrafi przekształcić je i zminifikować. Następnie wszystko razem umieścić w jednym pliku *.js. Zaletą takiego rozwiązania jest na pewno wydajność: jeden plik do pobrania z serwera to jedno do niego zapytanie.",
      },
      {
        question: "Preferujesz pracę w grupie czy samodzielną??",
        answer:
          "Pytanie podchwytliwe, bo na pierwszy rzut oka wydaje się, że aby dobrze wypaść na rozmowie, należy podkreślić, że praca w grupie jest Twoją mocną stroną. Otóż, niekoniecznie 🙂 Dla rekrutera jest istotne zarówno to, czy odnajdujesz się we współpracy z zespołem, jak i to, czy jesteś w stanie udźwignąć odpowiedzialność związaną z samodzielnym “dowiezieniem” tematu. Zatem najbezpieczniej wspomnieć (oczywiście jeśli to prawda!), że ani jedno, ani drugie nie sprawia Ci problemu i potrafisz się odnaleźć w obu przypadkach, choć generalnie wolisz….(i tu wybierz odpowiednie).",
      },
      {
        question: "Czym jest pair programming?",
        answer:
          "Pair programming, czyli programowanie w parach, polega na jednoczesnej pracy dwóch programistów nad jednym kodem.jeden z nich jest “kierowcą”, a drugi “pasażerem” lub „nawigatorem”Kierowca odpowiada za pisanie kodu, a pasażer przygląda się, zadaje pytania, dodaje pomysły i niekiedy naprowadza kierowcę. W tej technice często po pewnym czasie następuje zamiana roli..",
      },
      {
        question: "Ajax vs async/await?",
        answer:
          "Choć w JavaScript wprowadzono asynchroniczne operacje za pomocą składni async/await, technologia AJAX nadal jest użyteczna i znajduje zastosowanie w wielu scenariuszach.Starsze przeglądarki mogą nie obsługiwać składni async/await lub innych nowych funkcji JavaScript. AJAX jest bardziej wszechstronny i może być stosowany na różnych przeglądarkach, nawet tych starszych.Integracja z zewnętrznymi API: AJAX jest powszechnie stosowany do komunikacji z zewnętrznymi API, takimi jak REST lub GraphQL, które zwracają dane w formacie JSON lub XML. Składnia async/await jest przydatna w obsłudze odpowiedzi z takich API, ale sam mechanizm AJAX nadal jest używany do wysyłania żądań do tych API. Dynamiczne ładowanie treści: AJAX jest często używany do dynamicznego ładowania treści na stronie, na przykład po kliknięciu przycisku lub przewinięciu strony. Możliwość asynchronicznego pobierania treści bez konieczności przeładowywania całej strony jest nadal wartościowa i wygodna.  Wysyłanie formularzy: AJAX jest często stosowany do asynchronicznego wysyłania formularzy bez konieczności odświeżania strony. Dzięki temu użytkownicy mogą przesyłać dane na serwer bez przerywania swojego doświadczenia na stronie. Dostęp do innych zasobów: AJAX pozwala na pobieranie innych zasobów, takich jak pliki obrazów, style CSS czy skrypty JavaScript, asynchronicznie. Może być używany do dynamicznego ładowania tych zasobów w trakcie interakcji użytkownika.",
      },
      {
        question: "Dlaczego zainteresowałeś się programowaniem?",
        answer:
          "Programowanie oferuje ogromne pole do nauki i rozwoju. Świat technologii jest dynamiczny i zawsze pojawiają się nowe narzędzia, języki i technologie, które można poznać i opanować. Jestem podekscytowany możliwościami ciągłego rozwoju zawodowego w tej dziedzinie.Kolejnym powodem jest fakt, że programowanie jest niezwykle wszechstronne. Może być wykorzystywane we wszelkiego rodzaju branżach i dziedzinach, od aplikacji internetowych po sztuczną inteligencję i analizę danych. To oznacza, że mogę realizować różnorodne projekty i mieć wpływ na różne obszary życia.",
      },
      {
        question: "Czym są module bundlers?",
        answer:
          "Są to narzędzia, które biorą plik lub pliki JavaScriptowe wraz z ich zależnościami i łączą je w najczęściej jeden lub kilka plików wynikowych, często stosując przy tym różne optymalizacje jak konkatenacja - czyli łączenie wielu plików w jeden,minifikacja- pozbycie się zbędnych znaków z kodu aby zmniejszyć jego wagę,code-spliting-dzielenie kodu na kilka plików wyniokowych,three shaking- pozbywanie się nieużywanych części kodu.",
      },
      {
        question: "Czym jest Jamstack?",
        answer:
          "JAMstack to podejście architektoniczne do budowy stron internetowych i aplikacji internetowych. Nazwa 'JAMstack' jest akronimem od JavaScript, APIs, oraz Markup (znaczniki). JAMstack wykorzystuje prezentację statyczną stron internetowych, a większość logiki biznesowej przenosi na stronę klienta oraz wykorzystuje zewnętrzne API do pobierania danych i wykonywania innych operacji.Prezentacja statyczna: Strony internetowe JAMstack są generowane statycznie podczas fazy budowy (build time) i dostarczane jako zestaw plików statycznych. Nie ma potrzeby generowania stron dynamicznie na serwerze za każdym razem, gdy użytkownik odwiedza stronę. Dzięki temu strony są szybkie, łatwe w cache'owaniu i skalowalne.  JavaScript na stronie klienta: Logika aplikacji, w tym interakcje użytkownika, jest obsługiwana za pomocą JavaScriptu na stronie klienta. Frameworki JavaScript, takie jak React, Vue.js czy Angular, są często wykorzystywane do tworzenia interaktywnych interfejsów użytkownika.    Użycie zewnętrznych API: JAMstack korzysta z zewnętrznych API do pobierania danych i wykonania różnych operacji, takich jak obsługa płatności, wysyłanie powiadomień itp. API dostarczają dynamiczne dane, które są wykorzystywane przez stronę klienta.    Szybkość i skalowalność: Dzięki statycznym plikom i cache'owaniu, strony JAMstack są bardzo szybkie i efektywne pod względem wydajności. Ponadto, skalowanie jest prostsze, ponieważ nie ma potrzeby obsługiwać dynamicznych zapytań na serwerze.  Bezpieczeństwo: Wykorzystanie prezentacji statycznej oraz oddzielenie logiki biznesowej na stronę klienta sprawia, że JAMstack jest bardziej odporny na ataki typowe dla stron dynamicznych.",
      },
      {
        question: "Czym jest scrum?",
        answer:
          "Scrum jest metodyką zarządzania projektem, która została opracowana w celu zwiększenia efektywności i elastyczności w procesie tworzenia oprogramowania. Jest często stosowana w branży IT, ale może być również stosowana w innych dziedzinach, w których istnieje potrzeba elastycznego podejścia do zarządzania projektem.Proces Scrum składa się z krótkich iteracji nazywanych sprintami, które zwykle trwają od jednego do czterech tygodni. Każdy sprint rozpoczyna się od planowania, podczas którego zespół decyduje, jakie zadania zostaną wykonane. Następnie zespół pracuje nad wykonaniem tych zadań przez cały czas trwania sprintu. Codziennie odbywa się spotkanie zwane Daily Scrum, na którym członkowie zespołu dzielą się informacjami o postępie i planach na kolejny dzień. Po zakończeniu sprintu odbywa się retrospektywa, na której zespół ocenia swoją pracę i identyfikuje obszary do poprawy.",
      },
    ],
  },

  mutations: {
    randomGeneralQuestion(state) {
      state.generalQuestions.sort(() => Math.floor(Math.random() - 0.5));
    },
  },
  actions: {
    generalQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomGeneralQuestion");
      }, 5000);
    },
    randomGeneralQuestion(context) {
      context.commit("randomGeneralQuestion");
    },
  },
};
