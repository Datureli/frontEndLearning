export default {
    namespaced: true,
  
    state: {
        generalQuestions: [
            {
              question: "Czym jest ShadowDOM?",
              answer:
                "Domyślnie, przeglądarki nie prezentują Shadow DOM w narzędziach dla programistów, ale po zmianie ustawienia „Show user agent Shadow DOM” można go podejrzeć w specjalnym elemencie #shadow-root:",
              secondAnswer: "Shadow DOM pozwala stworzyć pod-drzewo DOM z dodatkowymi elementami DOM określanymi jako custom components albo Web Components. Zaletą wykorzystywania Shadow DOM i tworzenia za jego pomocą własnych komponentów jest niezależność i izolacja komponentów od klasycznego DOM. W praktyce daje nam to niezależność od dodanego stylu CSS czy wykonywanego kodu JS w ramach strony internetowej.",
            },
            {
              question: "Czym jest useStrict?",
              answer:
                "Use strict to zakres reguł, które muszą zostać przestrzegane w kodzie. Dzięki temu każdy programista pracujący na kodzie, który oparty jest o ten mechanizm, musi podobnie tworzyć oprogramowanie, aby nie powstawały błędy. Na przykład deklarując zmienną bez kluczowego słowa var, zadziała dla kodu, który nie ma mechanizmu use strict, jeżeli spróbujemy uruchomić kod, w którym mamy deklarację zmiennej bez słowa kluczowego var i z użyciem mechanizmu use strict wtedy aplikacja zgłosi błąd",
              secondAnswer: "Deklaracja use strict obejmuję wszystko, co znajduję się poniżej. Jeżeli stworzymy kod powyżej, to mechanizm nie będzie sprawdzać kodu powyżej use strict.Aby mieć możliwość, wymuszenia na programistach pewnych reguł w kodzie, bądź chcemy zachować spójność kodu w całej aplikacji. Warto wspomnieć, że dzięki use strict zapobiegamy takim przypadkom jak: Wyłapuje pewne typowe błędy, wpadki programisty i rzuca wyjątkiem. Zapobiega lub wyrzuca błędy, gdy podejmowane są względnie „niebezpieczne” działania (takie jak uzyskanie dostępu do obiektu globalnego). Wyłącza funkcje, które są mylące lub źle przemyślane.",
              thirdPartOfAnswer: 'Najlepiej, gdy pracujemy nad dużym projektem, wtedy ilość programistów jest spora, jak również rotacja między nimi występuje w różnych ilościach. Mechanizm use strict pozwala na nałożenie pewnych reguł w JavaScript, dzięki którym kod będzie spójny i nie będzie powielać błędów.'
            },
            {
              question: "Czym jest defaultProps?",
              answer:
                "defaultProps pozwala nam na ustawienie propsów,ustawienie wartości domyślnej dla propsów",
              secondAnswer: "",
            },
            {
              question: "Czym jest domena?",
              answer:
                "Domena (adres internetowy) to unikalna nazwa w Internecie, pod którą można umieścić serwis WWW, czy też założyć konta email.Aby Twoja strona WWW była dostępna w Internecie, oprócz domeny potrzebujesz jeszcze serwera WWW (dla plików strony WWW), na który będzie wskazywać Twoja unikalna nazwa.",
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
              secondAnswer: "",
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
              secondAnswer: "Co jest charakterystyczne dla protokołu http? Po pierwsze nie przechowuje on uprzednio przesłanych danych. Oznacza to, że muszą być pobierane z serwera przy każdorazowym wejściu na stronę, co opóźnia cały proces, choć jednocześnie pozwala uniknąć obciążania serwerów.Ponadto http nie definiuje, w jaki sposób informacje są transmitowane z serwera do przeglądarki, a więc stwarza ryzyko przechwycenia wrażliwych informacji. ",
              thirdPartOfAnswer: ''
            },
            {
              question: "Czym jest HTTPS?",
              answer:
                "defaultProps pozwala nam na ustawienie propsów,ustawienie wartości domyślnej dla propsów",
              secondAnswer: "Każdy właściciel witryny internetowej może przejść z adresu z przedrostkiem http na ten z https na początku. Wiąże się to z koniecznością wdrożenia certyfikatu szyfrującego SSL",
            },   {
              question: "https a Google – czy szyfrowanie wpływa na pozycjonowanie?",
              answer:
                " Algorytmy biorą pod uwagę takie czynniki jak wiarygodność i jakość domeny, a to ma związek również z zapewnieniem użytkownikom bezpieczeństwa. Oznacza to, że wdrożenie protokołu https może mieć pozytywny wpływ na pozycjonowanie witryny.",
              secondAnswer: "",
            },   {
              question: "Czym jest CORS?",
              answer:
                " zapewnia nam on możliwość bezpiecznej wymiany danych pomiędzy stronami które charakteryzuje inny Origin.",
              secondAnswer: "",
            },
            {
              question: "Czym jest SOP?",
              answer:
                " zapewnia nam on możliwość bezpiecznej wymiany danych pomiędzy stronami które charakteryzuje inny Origin.",
              secondAnswer: "",
            },
            {
              question: "Czym jest Content security Policy?",
              answer:
                " Content Security Policy (CSP) ito dodatkowa warstwa ochrony, która pozwala na wykrywanie i odpieranie niektórych typów ataków, w tym Cross Site Scripting (XSS) oraz ataków wprowadzania danych.Te ataki są używane czynności takich jak: wykradanie danych, uszkodzenia strony, dystrybucja złośliwego oprogramowania.      ",
              secondAnswer: "",
            },
            {
              question: `Czym jest Event bobbling?`,
              answer:
                ` Jest to propagacja elementu do samej góry.Zawsze idzie z dołu do góry`,
              secondAnswer: ``,
            },
            {
              question: "Czym jest i jak działa przeglądarka",
              answer:
                "Przeglądarka internetowa jest programem komputerowym, którego głównym celem jest wyświetlanie stron internetowych.",
              secondAnswer: "Pierwsze co robi przeglądarka to zdobycie adresu IP dla domenyJak już przeglądarka pobierze ten dokument to zaczyna go interpretować, czyli analizować jego treść. Kiedy dojdzie do lini z <title> to zrozumie, że jest to tytuł strony i umieści tekst Najlepsza strona w zakładce.Później natrafi na tekst Witam i po prostu wyświetli go.Ciekawiej robi się gdy dojdziemy do lini zawierającej img>. Przeglądarka rozumie, że <img> oznacza obrazek. A skoro obrazek to trzeba go pobrać i wyświetlić.",
              thirdPartOfAnswer: 'Pewnie się zastanawiasz skąd ma go pobrać? Otóż podobnie jak wcześniej z dokumentem html tak i teraz połączy się z komputerem (serwerem), którego adres IP już zna i poprosi grzecznie o przesłanie pliku o nazwie fotka.jpg.Serwer ponownie odpowie na jej prośbę tym razem przesyłając obrazek. W zależności jak duży jest to obrazek, pobieranie może potrwać bardzo krótko - tak że nawet nie zauważysz - lub trochę dłużej (np. 4 sekundy).Interpretacja dokumentu kończy się na lini zawierającej </html>, co oznacza koniec dokumentu html.przeglądarka jest programem komputerowym przeglądarka łączy się z innym komputerem (serwerem) w celu pobrania dokumentu html przeglądarka interpretuje zawartość pobranego dokumentu html i na jego podstawie wyświetla stronę jeśli dokument html zawiera odniesienia do innych plików (np. obrazki, video, javascript, css) to przeglądarka ponownie łączy się z serwerem , pobiera je, a następnie wyświetla (obrazek, video) lub wykonuje (javascript, css)'
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
                  "esponsive web design (RWD) to technika projektowania strony www tak, aby jej wygląd i układ dostosowywał się automatycznie do rozmiaru okna przeglądarki, na której jest wyświetlany np. przeglądarki, smartfonów czy tabletów. Strona tworzona w takiej technice jest uniwersalna i wyświetla się dobrze zarówno na dużych ekranach, jak i na smartfonach czy tabletach.",
              },
                      {
                question: "Opisz, na czym polega wstrzykiwanie zależności i wzorzec Dependency Injection.",
                answer:
                  "Podstawową zasadą działania Dependency Injection jest posiadanie serwisu, który zajmuje się uzupełnianiem potrzebnych zależności. Sam pomysł Wstrzykiwania Zależności można zrealizować na wiele różnych sposobów. Omówmy po krótce kilka z nich2:",
              },
                   {
                question: "Opowiedz coś o sobie",
                answer:
                  "To według kandydatów jedno z najtrudniejszych pytań. Przez to, że jest bardzo ogólne, to bardzo często zastanawiamy, “Co autor chce wiedzieć?” – aby gładko wybrnąć z odpowiedzią na to. Pytanie to warto podzielić na 3 części: – kilka słów o swoim dotychczasowym doświadczeniu zawodowym – dlaczego chcesz zostać programistą/programistką? – jakie są Twoje zainteresowania.",
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
                question: 'Czym jest pair programming?',
                answer: 'Pair programming, czyli programowanie w parach, polega na jednoczesnej pracy dwóch programistów nad jednym kodem.jeden z nich jest “kierowcą”, a drugi “pasażerem” lub „nawigatorem”Kierowca odpowiada za pisanie kodu, a pasażer przygląda się, zadaje pytania, dodaje pomysły i niekiedy naprowadza kierowcę. W tej technice często po pewnym czasie następuje zamiana roli..'
              },
                      {
                question: 'Czym są module bundlers?',
                answer: 'są to narzędzia, które biorą plik lub pliki JavaScriptowe wraz z ich zależnościami i łączą je w najczęściej jeden lub kilka plików wynikowych, często stosując przy tym różne optymalizacje, np:',
                secondQuestion: 'konkatenacja – łączenie wielu plików w jeden, żeby ograniczyć ilość requestów,minifikacja – pozbycie się zbędnych znaków z kodu, aby zmniejszyć jego wagę,skracanie nazw zmiennych,code-splitting – dzielenie kodu na kilka plików wynikowych, które są wczytywane na żądanie tylko w tych miejscach aplikacji, w których są potrzebne,tree-shaking – pozbywanie się nieużywanych części kodu – przydatne np. kiedy korzystamy tylko z kilku funkcji biblioteki jQuery, a nie chcemy włączać całej, sporo ważącej biblioteki do naszego kodu wynikowego.'
              }
          ],
    },
  
    mutations: {
      generalQuestionLoop(state) {
        setInterval(() => {
          state.generalQuestions.sort(function() {
            return Math.round(Math.random()) - 0.5;
          });
        }, 1000);
      },
      randomGeneralQuestion(state) {
        state.generalQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }
    },
      actions: {
        generalQuestionLoop(context) {
          context.commit("generalQuestionLoop");
        },
        randomGeneralQuestion(context) {
          context.commit("randomGeneralQuestion");
        },
      },
    }
  