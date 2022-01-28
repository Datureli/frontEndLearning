export default {
  namespaced: true,

  state: {
    htmlQuestions: [
      {
        question: `Czym jest Html?`,

        answer: `HTML (Hypertext Markup Language) to język znaczników służący do prezentacji treści na stronach internetowych, który jest oparty o hiperłącza łączące poszczególne dokumenty pomiędzy sobą. Przeglądarki internetowe jednoznacznie interpretują kod HTML i na jego bazie przedstawiają treść końcowym użytkownikom.`,
      },
      {
        question: `Czym jest string interpolation?`,

        answer: `HTML (Hypertext Markup Language) to język znaczników służący do prezentacji treści na stronach internetowych, który jest oparty o hiperłącza łączące poszczególne dokumenty pomiędzy sobą. Przeglądarki internetowe jednoznacznie interpretują kod HTML i na jego bazie przedstawiają treść końcowym użytkownikom.`,
      },
      {
        question: "jak wstawić ikonę obok adresu strony www?",

        answer: `Polecenie to pozwala dodać ikonkę (favicon.ico), która będzie widoczna w przeglądarce przy adresie naszej strony. Typowy rozmiar ikony to 16x16 pikseli. W systemie Windows jest dodatkowa możliwość umieszczenia skrótu na pulpicie - wtedy przydatna może być ikona o rozmiarach 32x32. Format *.ico pozwala zapisać dwie wersje rozmiaru w jednym pliku. Niektóre przeglądarki - nie MSIE 6 - pozwalając również używać innych formatów graficznych, takich jak np. PNG.`,
        secondAnswer: `<head>
              <link rel="shortcut icon" href="adres ikony">
            </head>`,
      },

      {
        question: "Czym jest tag blockquote?",
        answer:
          "Tag blockquote określa treść cytowaną ze źródła zewnętrznego (gazeta, praca naukowa itp.",
        secondAnswer: `<blockquote cite="http://developer.mozilla.org">
              <p>To jest cytat z Mozilla Developer Center.</p>
                </blockquote>`,
      },
      {
        question: "Czy tagi i elementy w html to to samo?",
        answer:
          "Nie.Elementy w html są definiowane poprzez starting tag,mogą zawierać jakiś kontent wewnątrz i tag zamykający.Przykład: <h1>Heading</h1> to element html natomiast <h1>jakiś kontent</h1> to tag zamykajacy",
      },
      {
        question: "Czym są tagi i atrybuty w html?",
        answer:
          "tagi to podstawowy komponent w html który definiuje jak dany kontent będzie ustruktyryzowany/formatowany,natomiast atrybuty są używane wraz  ztagami html by zdefiniować charakterystyke elementu",
      },
      {
        question: "Czym są void elements?",
        answer:
          "Są to takie elementy html które nie posiadają tagu zamykającego.Przykładowo: </br>,<img>,<hr />",
      },
      {
        question: "Czym jest Html?",
        answer: `Jest to znacznik, który określa znaczenie elementu.
               Głównie do celów dostępności (ang. accessibility). Jest częścią specyfikacji ARIA. Został też dodany do HTML5.`,
      },
      {
        question: "Co to jest W3C?",
        answer: `Konsorcjum zajmuje się przede wszystkim dbaniem o prawidłowy rozwój sieci. Opracowuje standardy tworzenia protokołów http, standardy tworzenia stron w języku HTML, XHTML, standardy CSS, XML, DOM oraz wiele innych.`,
      },
      {
        question: "Czym jest tag picture?",
        answer: `Tag picture zapewnia programistom stron internetowych większą elastyczność w określaniu zasobów obrazu. Zamiast jednego obrazu skalowanego w górę lub w dół to, w zależności od rozmiaru viewportu, można dobrać wiele obrazów tak, żeby dla każdej rozdzielczości ładnie wypełnić okno przeglądarki.`,
        secondAnswer:
          "Element <picture> ma dwa różne tagi: jeden lub więcej tagów <source> oraz jeden tag <img>.Tag <source> ma następujące właściwości:srcset (wymagany): określa URL obrazu do wyświetlenia media: akceptuje wszelkie prawidłowe media query, które normalnie byłyby ustawione w CSS      rozmiary: definiuje pojedynczy deskryptor szerokości, media query z deskryptorem szerokości lub rozdzieloną przecinkami listę media query z deskryptorem szerokości type: określa typ MIME",
        thirdPartOfAnswer:
          "Przeglądarka użyje wartości atrybutów, aby załadować najbardziej dopasowany obraz. Tag <img> służy do zapewnienia kompatybilności wstecznej, jeśli przeglądarka nie obsługuje tagu <picture>",
      },
      {
        question: "Czym jest Web Socket?",
        answer:
          "Web sockets to technologia następnej generacji do dwukierunkowej komunikacji dla aplikacji internetowych, która działa na jednym gnieździe i jest wystawiona za pomocą interfejsu napisanego w JavaScript dla przeglądarek zgodnych z HTML5,Po uzyskaniu połączenia gniazda z serwerem WWW, możesz wysyłać dane z przeglądarki do serwera po wywołaniu metody send() oraz odbierać dane z serwera dzięki obsłudze zdarzenia onmessage",
      },
      {
        question: "Czym jest tag <article>?",
        answer:
          "Tag <article> określa niezależną i osobną treść. Najczęściej  używa się go na blogach. ",
      },
      {
        question: "Objaśnij semantyczny html",
        answer:
          "Semantyczny HTML to kod napisany za pomocą tagów które mają określone znaczenie i mogą być odpowiednio interpretowane przez przeglądarkę i developera. Dla odróżnienia tagi które nie są semantyczne są obojętne tzn. nie mówią wprost nic na temat swojej zawartości.Kluczowymi kwestiami stosowania semantycznego html jest accessibility oraz SEO",
        secondAnswer:
          "Tagi nie-semantyczne,Do tej grupy należy np. bardzo popularny <div> </div> lub <span> </span>Tagi semantyczne:",
      },

      {
        question: "to czego służy znacznik <pre>?",
        answer:
          "Wprowadza tekst preformatowany, czyli napisany czcionką monotypiczną (o stałej szerokości znaku), który uwzględnia dodatkowe spacje, tabulację i znaki końca linii (nie trzeba stosować znaczników <br>) oraz nie jest automatycznie zawijany. Dzięki niemu możesz np. wkleić na stronę WWW tekst, wprost ze zwykłego edytora, bez stosowania dodatkowych znaczników (niestety informacje dotyczące formatowania zostaną pominięte). Należy jednak przy tym pamiętać, aby tekst nie zawierał znaków: " <
          " oraz " >
          " (w zamian używaj: &lt; i &gt;).",
        thirdPartOfAnswer: "",
      },
      {
        question: "Do czego służy znacznik Main?",
        answer:
          "Tag <main> określa główną treść dokumentu. Może to ułatwić korzystanie ze skrótów klawiszowych, przybliżaniu w przeglądarkach mobilnych i przy innych czynnościach. W dokumencie musi znajdować się jeden element <main>. Element <main> nie może być zagnieżdżony w żadnym z tych elementów: <article>, <aside>, <footer>, <header> lub <nav>.",
        secondAnswer: "",
      },
      {
        question: "Do czego służy znacznik nav?",
        answer:
          "Tag <nav> definiuje zestaw linków nawigacji. W tagu nav powinny się znaleźć podstawowe linki służące do nawigacji, a nie wszystkie linki na stronie.",
        secondAnswer: "",
      },
      {
        question: "Do czego służy znacznik footer?",
        answer:
          "Tag footer definiuje stopkę dokumentu lub sekcji i powinien zawierać informacje o stronie, która go zawiera. Ten tag zwykle zawiera informacje o autorze, prawach autorskich, dane kontaktowe, mapę witryny, powrót do góry oraz linki do powiązanych dokumentów,",
        secondAnswer: "",
      },
      {
        question: "Do czego służy znacznik header?",
        answer:
          "Tag <header> reprezentuje kontener na treść wprowadzającą lub zestaw linków nawigacyjnych. Zazwyczaj zawiera logo, linki nawigacyjne lub nagłówki.",
        secondAnswer: "",
      },
      {
        question: "Czym jest accessibility?(dostępność)",
        answer:
          "Accessibility (pl. dostępność) to tworzenie aplikacji w sposób który jest łatwy do interpretacji dla przeglądarki i/lub specjalnych urządzeń przystosowanych przez osoby niepełnosprawne. Po prostu przeglądarka wie kiedy ma do czynienia z obrazkiem, nawigacją czy artykułem.",
        secondAnswer: "",
      },
      {
        question: "Na czym polega semantyczny Html?",
        answer: "Znacznik Main służy do umieszczania głównej części strony",
        secondAnswer: "",
      },
    ],
  },

  mutations: {
    htmlQuestionLoop(state) {
      setInterval(() => {
        state.htmlQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }, 1000);
    },
    randomHtmlQuestion(state) {
      state.htmlQuestions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    }
  },
    actions: {
      htmlQuestionLoop(context) {
        context.commit("htmlQuestionLoop");
      },
      randomHtmlQuestion(context) {
        context.commit("randomHtmlQuestion");
      },
    },
  }
