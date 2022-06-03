export default {
  namespaced: true,

  state: {
    generalQuestions: [
      {
        question: "Czym jest ShadowDOM?",
        answer:
          "Domyślnie, przeglądarki nie prezentują Shadow DOM w narzędziach dla programistów, ale po zmianie ustawienia „Show user agent Shadow DOM” można go podejrzeć w specjalnym elemencie #shadow-root:",
        secondAnswer:
          "Shadow DOM pozwala stworzyć pod-drzewo DOM z dodatkowymi elementami DOM określanymi jako custom components albo Web Components. Zaletą wykorzystywania Shadow DOM i tworzenia za jego pomocą własnych komponentów jest niezależność i izolacja komponentów od klasycznego DOM. W praktyce daje nam to niezależność od dodanego stylu CSS czy wykonywanego kodu JS w ramach strony internetowej.",
      },
      {
        question: "Czym jest useStrict?",
        answer:
          "Use strict to zakres reguł, które muszą zostać przestrzegane w kodzie. Dzięki temu każdy programista pracujący na kodzie, który oparty jest o ten mechanizm, musi podobnie tworzyć oprogramowanie, aby nie powstawały błędy. Na przykład deklarując zmienną bez kluczowego słowa var, zadziała dla kodu, który nie ma mechanizmu use strict, jeżeli spróbujemy uruchomić kod, w którym mamy deklarację zmiennej bez słowa kluczowego var i z użyciem mechanizmu use strict wtedy aplikacja zgłosi błąd",
        secondAnswer:
          "Deklaracja use strict obejmuję wszystko, co znajduję się poniżej. Jeżeli stworzymy kod powyżej, to mechanizm nie będzie sprawdzać kodu powyżej use strict.Aby mieć możliwość, wymuszenia na programistach pewnych reguł w kodzie, bądź chcemy zachować spójność kodu w całej aplikacji. Warto wspomnieć, że dzięki use strict zapobiegamy takim przypadkom jak: Wyłapuje pewne typowe błędy, wpadki programisty i rzuca wyjątkiem. Zapobiega lub wyrzuca błędy, gdy podejmowane są względnie „niebezpieczne” działania (takie jak uzyskanie dostępu do obiektu globalnego). Wyłącza funkcje, które są mylące lub źle przemyślane.",
        thirdPartOfAnswer:
          "Najlepiej, gdy pracujemy nad dużym projektem, wtedy ilość programistów jest spora, jak również rotacja między nimi występuje w różnych ilościach. Mechanizm use strict pozwala na nałożenie pewnych reguł w JavaScript, dzięki którym kod będzie spójny i nie będzie powielać błędów.",
      },
      {
        question: "Czym jest defaultProps?",
        answer:
          "defaultProps pozwala nam na ustawienie propsów,ustawienie wartości domyślnej dla propsów",
        secondAnswer: "",
      },
      {
        question: "Czym jest izomorfizm",
        answer:
          "Aplikacja izomorficzna to taka, która dzieli prawie cały swój kod między serwerem i klientem.",
      },
      {
        question: "Czym jest docker?",
        answer:
          "Docker to platforma Open Source służąca do tworzenia i wdrażania aplikacji kontenerowych oraz zarządzania nimi. Umożliwia programistom pakowanie aplikacji w kontenery — standardowe wykonywalne komponenty łączące kod źródłowy aplikacji z zależnościami i bibliotekami systemu operacyjnego wymaganymi do uruchomienia tego kodu w dowolnym środowisku.  Kontenery upraszczają dostarczanie rozproszonych aplikacji i stają się coraz popularniejsze w miarę jak organizacje coraz częściej tworzą rozwiązania z myślą o chmurze i wykorzystują hybrydowe środowiska",
        secondAnswer: "Programiści mogą tworzyć kontenery bez użycia platformy Docker, ale dzięki niej tworzenie i wdrażanie kontenerów oraz zarządzanie nimi jest łatwiejsze, prostsze i bezpieczniejsze. Platforma Docker to zasadniczo zestaw narzędzi, który umożliwia programistom tworzenie, wdrażanie, uruchamianie, aktualizowanie i zatrzymywanie kontenerów przy użyciu prostych komend oraz automatyzowanie pracy za pomocą jednego interfejsu API.",
      },
      {
        question: "Czym jest domena?",
        answer:
          "Domena (adres internetowy) to unikalna nazwa w Internecie, pod którą można umieścić serwis WWW, czy też założyć konta email.Aby Twoja strona WWW była dostępna w Internecie, oprócz domeny potrzebujesz jeszcze serwera WWW  na który będzie wskazywać Twoja unikalna nazwa.",
        secondAnswer:
          "Domeny opierają się na systemie DNS, czyli Domain Name System. Jest to sieć rozproszonych po świecie serwerów. Dzięki DNS możemy używać zrozumiałych nazw witryn zamiast skomplikowanych adresów IP.Każdą z domen obsługują przynajmniej dwa serwery DNS, aby w przypadku awarii jednego z nich uniknąć sytuacji przestoju w działaniu strony internetowej. Do najważniejszych serwerów należy trzynaście tzw. root servers.",
      },
      {
        question: "Jak działa DNS?",
        answer:
          "DNS (Domain Name System) to protokół, którego główna funkcja polega na tłumaczeniu łatwych do zapamiętania przez człowieka nazw domen na zrozumiałe dla komputerów dane liczbowe.",
        secondAnswer:
          "Działanie systemu DNS przebiega zgodnie z następującymi etapami:1. Użytkownik wpisuje w polu adresu przeglądarki określoną nazwę domeny, np. https://www.netia.pl/pl/.2. System za pośrednictwem przeglądarki nawiązuje komunikację z lokalnym serwerem DNS, przesyłając prośbę o przetłumaczenie nazwy domeny na adres IP.3. Lokalny serwer przesyła zapytanie o numer IP do jednego z 13 głównych serwerów na świecie (roor-servers).4. Serwer główny przekazuje informację na temat lokalizacji (adresu IP) serwera, na którym przechowywane są strony internetowe z określoną końcówką domeny – w tym przypadku .pl.5. Serwer DNS dostarcza w informacji zwrotnej do komputera użytkownika (do przeglądarki stron internetowych) numer odpowiadający konkretnej domenie.6. Komputer nawiązuje połączenie z adresem IP, co umożliwia wyświetlenie zawartości strony www.Wszystko dzieje się w bardzo krótkim czasie, dlatego działanie serwera DNS jest dla nas niezauważalne.",
        thirdPartOfAnswer:
          "Serwer DNS zawiera bazę danych o hierarchicznej formie, w której znajdują się domeny najwyższego poziomu (TLD) oraz drugiego poziomu.  Domeny TLD dzielą się na krajowe oraz funkcjonalne. Każda z domen krajowych jest zakończona kropką oraz znajdującymi się za nią dwoma znakami",
      },
      {
        question: "Co wpływa na szybkość odpowiedzi serwera DNS?",
        answer:
          "Szybkość wczytywania się stron internetowych na komputerze w dużym stopniu zależy od czasu, w jakim serwer DNS odnajdzie adres IP odpowiadający danej domenie. Istotnym czynnikiem wpływającym na czas odpowiedzi jest odległość komputera od docelowego serwera.Na opóźnienie w komunikacji, oprócz sporej odległości, może również wpłynąć skomplikowana struktura strony www. Sporo współczesnych witryn zawiera liczne odwołania do innych stron – np. serwisów społecznościowych czy kanałów reklamowych. W takim przypadku zanim możliwe będzie załadowanie strony, serwer będzie musiał przetłumaczyć adresy wielu domen. Zamiana serwerów DNS na szybsze znacząco przyśpiesza wczytywanie się witryn, pomimo identycznej przepustowości łącza.",
      },
      {
        question: "Jakie są rodzaje zapytań oraz serwerów DNS",
        answer:
          "Najbardziej ogólny podział rozróżnia serwery domeny głównej oraz serwery autorytatywne:• Serwery domeny głównej (typu root) to 13 DNS-ów, które są rozmieszczone na całym świecie – komputer użytkownika nawiązuje połączenie z tym spośród nich, który znajduje się najbliżej.    • Serwery autorytatywne to natomiast lokalne serwery (zwykle główny i alternatywny), które przechowują aktualne dane na temat komputerów w danej domenie.",
        secondAnswer:
          "Autorytatywne serwery DNS można następnie podzielić na: • DNS Master Server – główny serwer autorytatywny domeny. Przechowywane są w nim informacje dotyczące jej konfiguracji. Serwer Master przesyła dane do serwerów typu slave.     • DNS Slave Server – wtórny serwer, który automatycznie pobiera dane zapisywane w serwerze DNS Master po każdej aktualizacji zawartości domeny. Zapisywane są na nim kopie informacji, dzięki czemu może być używany jako serwer zapasowy, alternatywny wobec głównego. Rodzaje zapytań DNS dzielą się na:          • Rekurencyjne – wymuszają na serwerze odnalezienie informacji na temat domeny lub przesłanie powiadomienia o błędzie. Jeżeli odpytywany serwer nie jest w stanie udzielić odpowiedzi na zapytanie, wtedy przekazuje takie polecenie do innych serwerów DNS.     • Iteracyjne – nie wymuszają na serwerze łączenia się z innymi serwerami, jeżeli ten nie zna adresu IP domeny. W takim przypadku wskazują jedynie najlepszą odpowiedź, jaką w danym momencie dysponują – odnosi się ona do adresów serwerów autorytatywnych danej domeny.",
      },
      {
        question: "Czym jest HTTP?",
        answer:
          "Http to skrót od wyrażenia Hypertext Transfer Protocol, czyli protokół umożliwiający przesyłanie danych dla sieci internetowej. Odpowiada on za komunikację pomiędzy klientem (przeglądarką) a serwerem, na którym przechowywane są wszystkie pliki tworzące witrynę internetową. Komunikacja w ramach protokołu http opiera się na dość prostym procesie wysyłania danych pomiędzy klientem a serwerem. Klient wysyła zapytanie, na co serwer odpowiada poprzez przesłanie tych danych zainteresowanemu. ",
        secondAnswer:
          "Co jest charakterystyczne dla protokołu http? Po pierwsze nie przechowuje on uprzednio przesłanych danych. Oznacza to, że muszą być pobierane z serwera przy każdorazowym wejściu na stronę, co opóźnia cały proces, choć jednocześnie pozwala uniknąć obciążania serwerów.Ponadto http nie definiuje, w jaki sposób informacje są transmitowane z serwera do przeglądarki, a więc stwarza ryzyko przechwycenia wrażliwych informacji. ",
        thirdPartOfAnswer: "",
      },
      {
        question: "Czym jest HTTPS?",
        answer:
          "defaultProps pozwala nam na ustawienie propsów,ustawienie wartości domyślnej dla propsów",
        secondAnswer:
          "Każdy właściciel witryny internetowej może przejść z adresu z przedrostkiem http na ten z https na początku. Wiąże się to z koniecznością wdrożenia certyfikatu szyfrującego SSL",
      },
      {
        question: "Jak działają kontenery?",
        answer:
          "Używanie kontenerów jest możliwe dzięki funkcjom izolowania procesów i wirtualizacji wbudowanym w jądro systemu Linux.te funkcje — np. grupy kontroli (cgroups) służące do przydzielania zasobów do procesów oraz przestrzenie nazw służące do ograniczania dostępu procesów do innych zasobów lub obszarów systemu albo wglądu w te zasoby lub obszary — pozwalają wielu komponentom aplikacji na współużytkowanie zasobów jednej instancji systemu operacyjnego hosta w sposób podobny do tego, w jaki hiperwizor pozwala wielu maszynom wirtualnym na współużytkowanie procesora, pamięci i innych zasobów pojedynczego serwera sprzętowego.",
        secondAnswer:
          "Dzięki temu technologia kontenerów oferuje wszystkie funkcje i korzyści maszyn wirtualnych — w tym izolację aplikacji, ekonomiczną skalowalność i możliwość likwidacji",
      },
      
      {
        question: "Czym jest Solid?",
        answer:
          "S.O.L.I.D. to akronim, który wymyślił Robert C. Martin. Uncle Bob (taki ma pseudonim) jest programistą. Ma sporo doświadczenia, przez wielu uważany jest za swego rodzaju autorytet.Akronim ten zbiera zestaw wytycznych. Wytyczne te stosuje się podczas pisania programów w sposób obiektowy. Samo słówko solid można przetłumaczyć jako solidny, konkretny, mocny.",
        secondAnswer:
          "S jak Samodzielny.S pochodzi od Single Responsibility Principle. W oryginalnym wydaniu autor mówi o tym, że klasa powinna mieć wyłącznie jeden powód do zmiany. Wytyczna ta sprowadza się do tego, że dana klasa powinna mieć jeden główny cel. Jedną główną odpowiedzialność. Jedną funkcjonalność, którą realizuje.",
        thirdPartOfAnswer:
          "O jak Otwarty O pochodzi od Open/Closed Principle. W tym miejscu Uncle Bob zwraca uwagę na to aby kod, który tworzymy był “możliwy do rozszerzania i zamknięty na modyfikacje”. Sprowadza się do do świadomego użycia kompozycji, dziedziczenia czy modyfikatorów dostępu.L pochodzi od Liskov Substitution Principle. W przypadku tej wytycznej Twój kod powinien współpracować poprawnie z klasą, jak i wszystkimi jej podklasami. Innymi słowy jeśli zależysz od jakiegoś interfejsu to wszystkie jego implementacje powinny poprawnie działać z Twoją klasą/metodą.I pochodzi od Interface Segregation Principle. Wytyczna ta mówi o tym, abyś rozdzielał interfejs klasy. Interfejs ten powinien być odpowiednio zdefiniowany. Chodzi tu o aby inny fragment kodu, który używa Twojej klasy używał wyłącznie podzbioru metod, który jest w tamtym przypadku istotny. W oryginale wytyczna ta mówi o tym, ze klienty nie powinny być zmuszane do wprowadzania zależności od interfejsów, których nie używają.D pochodzi od Dependency Inversion Principle. Wytyczna ta mówi, że wysokopoziomowe klasy nie powinny zależeć od niskopoziomowych detali. Zależność ta powinna być odwrócona poprzez wprowadzenie dodatkowych elementów. Mówi się tu o dodatkowych warstwach abstrakcji, które pozwalają na zmianę kierunku takiej zależności.",
      },
      {
        question: "https a Google – czy szyfrowanie wpływa na pozycjonowanie?",
        answer:
          " Algorytmy biorą pod uwagę takie czynniki jak wiarygodność i jakość domeny, a to ma związek również z zapewnieniem użytkownikom bezpieczeństwa. Oznacza to, że wdrożenie protokołu https może mieć pozytywny wpływ na pozycjonowanie witryny.",
        secondAnswer: "",
      },
      {
        question: "Czym jest CORS?",
        answer:
          "CORS to skrót od Cross-Origin Resource Sharing, czyli mechanizmu pozwalającego wysyłać żądania HTTP z jednej strony na drugą z pominięciem mechanizmów bezpieczeństwa w przeglądarkach. CORS wykorzystuje nagłówek, w którym zdefiniować można „bezpieczne” adresy i wysłać żądanie, które nie zostanie zablokowane. zapewnia nam on możliwość bezpiecznej wymiany danych pomiędzy stronami które charakteryzuje inny Origin.",
        secondAnswer: "",
      },
      {
        question: "Czym jest XMLHttpRequest?",
        answer:
          "Jest to żądanie umożliwiająca asynchroniczną komunikację pomiędzy klientem a serwerem. Pozwala na wysyłanie danych do serwera w tle, żądań pobrania danych z serwera i otrzymania danych z serwera oraz na aktualizowanie danych bez konieczności odświeżania całej strony.",
        secondAnswer: "",
      },
      {
        question: "Czym jest plik manifestu w HTML5?",
        answer:
          "Plik manifestu to plik zawierający listy zasobów, które mają być zcachowane. Dzięki temu można świadomie wskazać konkretne elementy w taki sposób, aby przełożyło się to na szybsze ładowanie aplikacji bądź – np. gdy jakiś element musi być często odświeżany – również to zasygnalizować. Wyróżnia się trzy rodzaje (sekcje) obiektów w plikach manifestu: te, które mają być zcachowane (CACHE Manifest), te, które zawsze mają być pobrane (Network), pliki awaryjne, które mają być zcachowane w razie, gdyby aplikacja padła (Fallback).",
        secondAnswer: "",
      },
      {
        question: "Czym jest zasada jednej odpowiedzialności?",
        answer:
          "zasada mówiąca, że nigdy nie powinno być więcej niż jednego powodu do istnienia klasy bądź metody",
        secondAnswer: "",
      },
      {
        question: "Czym jest SOP?",
        answer:
          " zapewnia nam on możliwość bezpiecznej wymiany danych pomiędzy stronami które charakteryzuje inny Origin.",
        secondAnswer: "",
      },
      {
        question: "Czym są crawlery?",
        answer:
          "  Są to specjalne aplikacje (boty), które mają za zadanie prześledzić, a następnie ustalić zawartość strony internetowej. To właśnie dzięki nim, gdy udostępniamy link na Facebooku, oprócz adresu URL pojawia się tytuł, opis oraz zdjęcie, np. z logo serwisu. Na podobnej zasadzie działają crawlery Google. Skanują stronę i ustalają, czy treść tam zawarta jest wartościowa i jak wysoko w wynikach wyszukiwania powinna się znaleźć. Tutaj właśnie leży sedno problemu - crawlery Facebooka w ogóle nie radzą sobie ze stronami typu SPA. Natomiast Google radzi sobie, ale nie najlepiej.",
        secondAnswer: "",
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
        secondAnswer: "",
      },
      {
        question: "Czym jest Content security Policy?",
        answer:
          " Content Security Policy (CSP) ito dodatkowa warstwa ochrony, która pozwala na wykrywanie i odpieranie niektórych typów ataków, w tym Cross Site Scripting (XSS) oraz ataków wprowadzania danych.Te ataki są używane czynności takich jak: wykradanie danych, uszkodzenia strony, dystrybucja złośliwego oprogramowania.      ",
        secondAnswer: "",
      },
      {
        question:
          "Jaka jest różnica pomiędzy display: none i visibility: hidden?",
        answer:
          " Oba atrybuty służą do ukrywania elementów na stronie. W praktyce działają one jednak inaczej. O ile atrybut visibility: hidden faktycznie jedynie ukrywa element i tag jest renderowany i zostanie dla nie niego zarezerwowane widoczne miejsce, tak w przypadku display: none w ogóle nie zostanie on wyświetlony na stronie, ani nie pojawi się na niego miejsce, choć cały czas będzie można z nim wchodzić w interkacje przez DOM.",
        secondAnswer: "",
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
        question: "Co robimy z kodem zanim wrzucimy go na produkcje?",
        answer:
          "Najpierw przeprowadzamy code review, a następnie testy, aby upewnić się, że wszystko działa jak należy.",
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
        question: "Czym są module bundlers?",
        answer:
          "są to narzędzia, które biorą plik lub pliki JavaScriptowe wraz z ich zależnościami i łączą je w najczęściej jeden lub kilka plików wynikowych, często stosując przy tym różne optymalizacje, np:",
        secondQuestion:
          "konkatenacja – łączenie wielu plików w jeden, żeby ograniczyć ilość requestów,minifikacja – pozbycie się zbędnych znaków z kodu, aby zmniejszyć jego wagę,skracanie nazw zmiennych,code-splitting – dzielenie kodu na kilka plików wynikowych, które są wczytywane na żądanie tylko w tych miejscach aplikacji, w których są potrzebne,tree-shaking – pozbywanie się nieużywanych części kodu – przydatne np. kiedy korzystamy tylko z kilku funkcji biblioteki jQuery, a nie chcemy włączać całej, sporo ważącej biblioteki do naszego kodu wynikowego.",
      },
    ],
  },

  mutations: {
    randomGeneralQuestion(state) {
      state.generalQuestions.sort(() => ~~Math.random() - 0.5);
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
