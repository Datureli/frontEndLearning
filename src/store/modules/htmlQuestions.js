export default {
  namespaced: true,

  state: {
    htmlQuestions: [
      {
        question: `Czym jest Html?`,
        
        answer: `HTML (Hypertext Markup Language) to język znaczników służący do prezentacji treści na stronach internetowych,który jest oparty o hiperłącza łączące poszczególne dokumenty pomiędzy sobą.Przeglądarki internetowe jednoznacznie interpretują kod HTML i na jego bazie przedstawiają treść końcowym użytkownikom.`,
      },
      {
        question: `Czym jest string interpolation?`,

        answer: `
        Interpolacja ciągów JavaScript to proces osadzania wyrażenia w części ciągu.Literał szablonu służy do osadzania wyrażeń. Za pomocą interpolacji można dodawać do ciągu wartości, takie jak zmienne i obliczenia matematyczne.`,
      },
      {
        question: `jak wstawić ikonę obok adresu www?`,

        answer: `Polecenie to pozwala dodać ikonkę (favicon.ico), która będzie widoczna w przeglądarce przy adresie naszej strony.ico pozwala zapisać dwie wersje rozmiaru w jednym pliku. Niektóre przeglądarki - nie MSIE 6 - pozwalając również używać innych formatów graficznych, takich jak np. PNG.`,
      },

      {
        question: `Czym jest tag blockquote?`,
        answer:
          `Tag blockquote określa treść cytowaną ze źródła zewnętrznego (gazeta, praca naukowa itp.`,
      },
      {
        question: `Czym jest innerHtml?`,
        answer:
          `Właściwość innerHTML umożliwia odczyt i ustawianie html, jaki jest we wnętrzu danego elementu:`,
      },
      {
        question: `Czym jest html canvas?`,
        answer:
          `element języka HTML wprowadzony w HTML 5 pozwalający na dynamiczne, skryptowe renderowanie kształtów i obrazów bitmapowych. Dzięki wprowadzeniu obiektu canvas możliwe stało się tworzenie dynamicznych dwu i trójwymiarowych animacji czy gier działających w przeglądarkach bez dodatkowych wtyczek.`,
      },
      {
        question: `Które przeglądarki wspierają HTML5?`,
        answer:
          `Ostatnie wersje Safari, Google Chrome, Mozilla Firefox oraz Opera – wszystkie wspierają wiele funkcjonalności HTML5. Internet Explorer od wersji 9.0 również wspiera niektóre z funkcjonalności.Mobilne przeglądarki internetowe, które zostały zainstalowane na urządzeniach jak iPhone, iPad oraz Android doskonale wpierają HTML5.`,
      },
      {
        question: "Czym jest twarda spacja & nbspHtml?",
        answer:
          "jak chcemy użyć więcej niż jednej spacji,możemy tego dokonać poprzez dodanie znaku specjalnego.Znak specjalny to odpowiednik znaku wprowadzanego z klawiatury (np. spacji) posiadający specjalny zapis html. Każdy znak specjalny zaczyna się od znaku & (ampersand) i kończy się średnikiem.Znak specjalny niełamliwej spacji to &nbsp; (non-breaking space).W zasadzie jedynym prawidłowym zastosowaniem tego specjalnego znaku jest zapobieżenie rozdzielenia wyrazów przy przenoszeniu do następnej linii",
      },
      {
        question: "Co to jest div?",
        answer:
          "Jest rodzajem pojemnika na treść. Nie ma on żadnego wpływu na treść ani układ graficzny, dopóki nie zostanie ostylizowany z użyciem CSS.",
      },
      {
        question: "Czym jest label?",
        answer:
          "Element definiuje etykietę dla pola formularza, po kliknięciu której uaktywnia się przypisane jej pole.",
      },
      {
        question:
          "Czy HTML jest wstecznie kompatybilny ze starszymi przeglądarkami?",
        answer:
          "Tak! HTML5 został zaprojektowany tak, aby w miarę możliwości, być kompatybilny ze starszymi przeglądarkami.Nowe funkcjonalności opierają się na tych istniejących i pozwalają na wyświetlenie awaryjnej zawartości dla starszych przeglądarek.",
      },
      {
        question: "Wymień niektóre z nowych funkcji HTML5.",
        answer:
          "nowe elementy składni,header,footer oraz section,Forms 2.0 – ulepszenie formularzy internetowych, został przedstawiony nowy atrybut - input,WebSocket następna generacja dwukierunkowej komunikacji dla aplikacji internetowych,Server-Sent Event, HTML5 wprowadza zdarzenia, które przechodzą z serwera WWW do przeglądarki internetowej,Canvas – obsługuje dwuwymiarową powierzchnię rysunkową, które może zostać oprogramowana przy użyciu JavaScript;",
        secondAnswer:
          "Audio & Video – od teraz można umieszczać nagrania audio oraz filmy video na stronach internetowych bez uciekania się do wtyczek firm trzecich; Geolocation – od teraz użytkownicy mogą zdecydować czy chcą podzielić się fizyczną lokalizacją z aplikacją internetową; Microdata – pozwala na tworzenie swoich własnych słowników poza językiem HTML5, które pozwalają na rozszerzenie strony internetowej przy użyciu niestandardowej semantyki; Drag & drop – od teraz można przeciągać i opuszczać elementy z jednego miejsca do drugiego w obrębie tej samej strony internetowej.",
        thirdPartOfAnswer:
          "Persistent Local Storage – przy użyciu tej funkcjonalności aplikacje webowe mogą przechowywać dane lokalnie bez użycia przeglądarki użytkownika. Wcześniej dane te musiały być przechowywane w ciasteczkach, włączając w to każde pojedyncze żądanie. Lokalne przechowywanie pamięci jest bezpieczniejsze, pozwala na przechowywanie większej ilości danych bez negatywnego wpływu na wydajność strony internetowej;",
      },
      {
        question: "Czy tagi i elementy w html to to samo?",
        answer:
          "Nie, elementy w html są definiowane poprzez początkowy tag,mogą zawierać jakiś kontent wewnątrz i tag zamykający.Przykład: <h1>Heading</h1> to element html natomiast <h1>jakiś kontent</h1> to tag zamykajacy",
      },
      {
        question: "Czym są tagi i atrybuty w html?",
        answer:
          "Tagi to podstawowy komponent w html który definiuje jak dany kontent będzie ustruktyryzowany/formatowany,natomiast atrybuty są używane wraz ztagami html by zdefiniować charakterystyke elementu",
      },
      {
        question: "Jaki jest cel używania sekcji ‘section’ w HTML5?",
        answer:
          "Znacznik ten reprezentuje rozdział dokumentu lub sekcję aplikacji. Może być użyty razem ze znacznikami h1-h6, które wskazują na strukturę dokumentu.",
      },
      {
        question: "Czym są void elements?",
        answer: `Są to takie elementy html które nie posiadają tagu zamykającego.Przykładowo:br,img,hr`,
      },
      {
        question: "Co to jest W3C?",
        answer: `Konsorcjum zajmuje się przede wszystkim dbaniem o prawidłowy rozwój sieci. Opracowuje standardy tworzenia protokołów http, standardy tworzenia stron w języku HTML, XHTML, standardy CSS, XML, DOM oraz wiele innych.`,
      },
      {
        question: "Czym jest tag picture?",
        answer: `Tag picture zapewnia programistom stron internetowych większą elastyczność w określaniu zasobów obrazu. Zamiast jednego obrazu skalowanego w górę lub w dół to, w zależności od rozmiaru viewportu, można dobrać wiele obrazów tak, żeby dla każdej rozdzielczości ładnie wypełnić okno przeglądarki.`,
        secondAnswer:
          "Element picture ma dwa różne tagi: jeden lub więcej tagów source oraz jeden tag img.Tag source ma następujące właściwości:srcset (wymagany): określa URL obrazu do wyświetlenia, media: akceptuje wszelkie prawidłowe media query, które normalnie byłyby ustawione w CSS,rozmiary: definiuje pojedynczy deskryptor szerokości, media query z deskryptorem szerokości lub rozdzieloną przecinkami listę media query z deskryptorem szerokości type: określa typ MIME",
      },
      {
        question: "Czym jest Web Socket?",
        answer:
          "Web sockets to technologia następnej generacji do dwukierunkowej komunikacji dla aplikacji internetowych, która działa na jednym gnieździe i jest wystawiona za pomocą interfejsu napisanego w JavaScript dla przeglądarek zgodnych z HTML5,Po uzyskaniu połączenia gniazda z serwerem WWW, możesz wysyłać dane z przeglądarki do serwera po wywołaniu metody send() oraz odbierać dane z serwera dzięki obsłudze zdarzenia onmessage",
      },
      {
        question: "Czym jest tag article?",
        answer:
          "Tag article określa niezależną i osobną treść. Najczęściej  używa się go na blogach.",
      },
      {
        question: "Objaśnij semantyczny html",
        answer:
          "Semantyczny HTML to kod napisany za pomocą tagów które mają określone znaczenie i mogą być odpowiednio interpretowane przez przeglądarkę i developera. Dla odróżnienia tagi które nie są semantyczne są obojętne tzn. nie mówią wprost nic na temat swojej zawartości.Kluczowymi kwestiami stosowania semantycznego html jest accessibility oraz SEO.Do grupy tagów nie semantycznych należy div lub span.",
      },

      {
        question: "to czego służy znacznik pre?",
        answer:
          "Wprowadza tekst preformatowany, czyli napisany czcionką monotypiczną (o stałej szerokości znaku), który uwzględnia dodatkowe spacje, tabulację i znaki końca linii (nie trzeba stosować znaczników <br>) oraz nie jest automatycznie zawijany. Dzięki niemu możesz np. wkleić na stronę WWW tekst, wprost ze zwykłego edytora, bez stosowania dodatkowych znaczników (niestety informacje dotyczące formatowania zostaną pominięte).",
      },
      {
        question: "Do czego służy znacznik Main?",
        answer:
          "Tag main określa główną treść dokumentu.Może to ułatwić korzystanie ze skrótów klawiszowych, przybliżaniu w przeglądarkach mobilnych i przy innych czynnościach.W dokumencie musi znajdować się jeden element main.Element main nie może być zagnieżdżony w żadnym z tych elementów: article, aside, footer, header lub nav.",
      },
      {
        question: "Do czego służy znacznik nav?",
        answer:
          "Tag nav definiuje zestaw linków nawigacji. W tagu nav powinny się znaleźć podstawowe linki służące do nawigacji, a nie wszystkie linki na stronie.",
      },
      {
        question: "Jaki jest cel używania sekcji aside w HTML5?",
        answer:
          "Znacznik ten reprezentuje fragment zawartości, która jest tylko nieznacznie związana z resztą strony.",
      },
      {
        question: "Czym są atrybuty niestandardowe w HTML5?",
        answer:
          "Atrybuty niestandardowe rozpoczynają się od data- i będą nazywane na podstawie twoich preferencji.Składa się z dwóch atrybutów, data-subject oraz data-level.Użytkownik będzie mógł pobrać wartości tych atrybutów używając JavaScript lub CSS w podobny sposób jak w przypadku korzystania ze standardowych atrybutów.",
      },
      {
        question: "Do czego służy znacznik footer?",
        answer:
          "Tag footer definiuje stopkę dokumentu lub sekcji i powinien zawierać informacje o stronie, która go zawiera.Ten tag zwykle zawiera informacje o autorze, prawach autorskich,dane kontaktowe, mapę witryny,powrót do góry oraz linki do powiązanych dokumentów,",
      },
      {
        question: "Czym jest Web Forms 2.0?",
        answer:
          "Jest to rozszerzenie funkcji formularzy z HTML4. Elementy formularza oraz atrybuty w HTML5 wprowadzają większy zakres semantyki niż miało to miejsce w HTML4 oraz usuwają potrzebę pisania długich skryptów oraz stylowania elementów, które było wymagane w HTML4.",
      },
      {
        question: "Do czego służy znacznik header?",
        answer:
          "Tag header reprezentuje kontener na treść wprowadzającą lub zestaw linków nawigacyjnych. Zazwyczaj zawiera logo, linki nawigacyjne lub nagłówki.",
      },
      {
        question: " Co masz na myśli mówiąc o przechowywaniu sesji w HTML5?",
        answer:
          "HTML5 przedstawił nowy atrybut sessionStorage , który może być wykorzystywany przez strony aby dodawać dane do sesji i będzie dostępny dla każdej strony otwartej w tym oknie, tj. jak tylko zamkniesz okno sesja będzie pusta.",
      },
      {
        question: "Czym jest accessibility?(dostępność)",
        answer:
          "Accessibility to tworzenie aplikacji w sposób który jest łatwy do interpretacji dla przeglądarki i/lub specjalnych urządzeń przystosowanych przez osoby niepełnosprawne. Po prostu przeglądarka wie kiedy ma do czynienia z obrazkiem, nawigacją czy artykułem.",
      },
      {
        question: "Jakie są wady ciasteczek?",
        answer:
          "Ciasteczka mają następujące wady: ciasteczka są dołączone do każdego żądania HTTP a tym samym prowadzą do spowolnienia aplikacji internetowej przez przekazywanie tych samych danych; ciasteczka są dołączone do każdego żądania HTTP a tym samym wysyłamy nieszyfrowane dane przez internet; ciasteczka są ograniczone do około 4KB. Liczba ta nie wystarczy do przechowywania wszystkich niezbędnych danych.",
      },
    ],
  },

  mutations: {
    randomHtmlQuestion(state) {
      state.htmlQuestions.sort(() => Math.floor( Math.random() - 0.5));
    },
  },
  actions: {
    htmlQuestionLoop(context) {
      setInterval(() => {
        if (state.timeToNextQuestion < 0) {
          context.commit("randomHtmlQuestion");
        }
      }, 5000);
    },
    randomHtmlQuestion(context) {
      context.commit("randomHtmlQuestion");
    },
  },
};
