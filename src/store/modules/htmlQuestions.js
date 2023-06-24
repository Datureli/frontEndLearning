export default {
  namespaced: true,

  state: {
    htmlQuestions: [
      {
        question: `Czym jest Html?`,
        answer: `HTML (Hypertext Markup Language) to język znaczników służący do strukturyzowania i prezentacji treści na stronach internetowych. Jest podstawowym językiem używanym do tworzenia stron internetowych. Kod HTML składa się z różnych znaczników, które definiują strukturę dokumentu, włączając w to nagłówki, paragrafy, linki, obrazy i wiele innych elementów. Przeglądarki internetowe interpretują kod HTML i renderują go, aby przedstawić treść i układ strony użytkownikom.`,
      },
      {
        question: `Czym jest string interpolation?`,
        answer: `nterpolacja ciągów w JavaScript to proces osadzania wyrażenia wewnątrz części ciągu tekstowego. W JavaScript możemy używać literałów szablonu (template literals) do osadzania wyrażeń wewnątrz ciągów. Dzięki temu możemy łatwo dodawać wartości, takie jak zmienne i obliczenia matematyczne, do ciągów tekstowych. Interpolacja ciągów znacznie ułatwia tworzenie czytelnych i dynamicznych ciągów w JavaScript.`,
      },
      {
        question: `jak wstawić ikonę obok adresu www?`,

        answer: `Aby dodać ikonę obok adresu URL, umieść plik ikony o nazwie "favicon.ico" w katalogu głównym witryny i dodaj poniższy tag link w sekcji <head> w kodzie HTML:`,
      },
      {
        question: `Strony statyczne vs dynamiczne?`,
        answer: `Strony statyczne i dynamiczne różnią się sposobem generowania i dostarczania treści na stronach internetowych.Strony statyczne są tworzone z wykorzystaniem prostych plików HTML i zasobów, które są przechowywane na serwerze i dostarczane bez żadnej dodatkowej logiki. Zwykle są to proste strony, które nie zmieniają się często. Zaletą stron statycznych jest ich szybkość i prostota, ponieważ nie wymagają przetwarzania danych po stronie serwera podczas wyświetlania.Strony dynamiczne są generowane dynamicznie po stronie serwera lub klienta za pomocą skryptów, takich jak PHP, Ruby, Python, JavaScript itp. Przed dostarczeniem strony do użytkownika, serwer przetwarza żądania, pobiera dane z bazy danych, przeprowadza obliczenia i generuje treść HTML. Strony dynamiczne mogą dostarczać bardziej interaktywne i personalizowane treści, ponieważ mogą reagować na dane użytkownika i zmienne warunki.`,
      },

      {
        question: `Czym jest tag blockquote?`,
        answer: `Tag <blockquote> w HTML służy do oznaczania treści cytowanej ze źródła zewnętrznego, takiego jak gazeta, praca naukowa lub inny dokument. Jest używany do wyróżnienia fragmentów tekstu, które są cytowane lub powielane z innych źródeł.`,
      },
      {
        question: `Jaka jest różnica między tagiem div a span?`,
        answer: `Różnica między tagiem <div> a <span> dotyczy ich domyślnego zachowania w wyświetlaniu oraz ich roli semantycznej.Div jest elementem blokowym, co oznacza, że jest traktowany jako oddzielny blok na stronie. Domyślnie zajmuje całą dostępną szerokość na stronie i powoduje przejście do nowej linii. Jest często używany do grupowania elementów i tworzenia sekcji na stronie. Możemy również zastosować do niego style CSS, aby dostosować jego wygląd i układ.Span, z kolei, jest elementem liniowym. Nie powoduje automatycznego przejścia do nowej linii i nie zajmuje całej szerokości dostępnej przestrzeni. Jest często używany do wyróżniania lub stylizowania fragmentów tekstu wewnątrz innych elementów. Może być również stosowany jako kontener dla innych elementów inline.`,
      },
      {
        question: `Czym jest innerHtml?`,
        answer: `Właściwość innerHTML jest właściwością dostępną w języku JavaScript, która umożliwia odczyt i ustawianie zawartości HTML znajdującej się wewnątrz danego elementu.Poprzez użycie właściwości innerHTML można odczytać całą zawartość HTML znajdującą się wewnątrz danego elementu jako tekst.`,
      },
      {
        question: `rodzaje list w html`,
        answer: `Wyróżniamy listę uporządkowaną - Ol, która wyświetla elementy listy w sposób uporządkowany czyli numeryczny lub alfabetyczny. Lista nieuporządkowana - UL to lista która wyświetla elementy w sposób nieuporządkowany w formacie pubktowym lub dowolnym innym formacie. Lista definicji - dl, porządkuje elementy w taki sposób, w jaki są ułożone w słowniku.`,
      },
      {
        question: `Do czego służą metatagi?`,
        answer: `Metatagi w HTML są używane przez programistów do przekazywania informacji o stronie internetowej przeglądarce lub wyszukiwarkom. Przez to, że są umieszczone w sekcji <head> dokumentu HTML, nie są one wyświetlane bezpośrednio na stronie dla użytkowników, ale dostarczają istotnych danych o stronie dla przeglądarek, narzędzi wyszukiwania i innych aplikacji.Metatag <title>: Określa tytuł strony, który jest wyświetlany na pasku tytułu przeglądarki i w wynikach wyszukiwania.Metatag <meta charset>: Określa zestaw znaków używanych w dokumencie HTML.Metatag <meta name="description">: Opisuje zawartość strony, który jest często wykorzystywany przez wyszukiwarki jako krótki opis wyświetlany w wynikach wyszukiwania.Metatag <meta name="keywords">: Określa słowa kluczowe związane ze stroną, które mogą pomóc wyszukiwarkom w indeksowaniu i kategoryzacji treści.`,
      },
      {
        question: `Jak sprawdzić wydajność swojego kodu?`,
        answer: `Narzędzie Google PageSpeed Insights: Jest to narzędzie dostarczane przez Google, które analizuje wydajność strony internetowej na urządzeniach mobilnych i komputerach. Po wprowadzeniu adresu URL strony, narzędzie generuje raport z zaleceniami dotyczącymi optymalizacji strony pod kątem szybkości ładowania i innych czynników wydajnościowych.

        Przeglądarka Chrome: Przeglądarka Chrome oferuje wbudowane narzędzia do analizy wydajności strony. Można z nich skorzystać, otwierając konsolę dewelopera i przejść do zakładki "Audits" lub "Performance". W zakładce "Audits" można przeprowadzić automatyczną kontrolę wydajności i otrzymać zalecenia dotyczące optymalizacji. Natomiast w zakładce "Performance" można nagrywać i analizować działanie strony w celu identyfikacji problematycznych obszarów i zoptymalizowania ich.
        
        W3C validator: W3C validator to narzędzie online do sprawdzania poprawności kodu HTML i CSS. Może pomóc w identyfikacji błędów składniowych, niezgodności i potencjalnych problemów, które mogą wpływać na wydajność strony.
        
        Can I use (caniuse.com): Jest to witryna internetowa, która umożliwia sprawdzenie zgodności funkcji, właściwości CSS i innych technologii webowych z różnymi przeglądarkami internetowymi. Można szybko sprawdzić, czy używane funkcje są obsługiwane przez docelowe przeglądarki i ewentualnie dostosować kod w zależności od potrzeb..`,
      },
      {
        question: `Jakie są sposoby na zmniejszenie czasu ładowania strony?`,
        answer: `Optymalizacja obrazów i plików multimedialnych: Zdjęcia i filmy są często głównymi czynnikami wpływającymi na czas ładowania strony. Można zastosować różne techniki optymalizacji, takie jak kompresja, skalowanie, wybór odpowiedniego formatu pliku i używanie zaawansowanych technik dostarczania obrazów, takich jak lazy loading (opóźnione ładowanie) czy responsive images (obrazki responsywne). Dzięki temu można zmniejszyć rozmiar plików i przyspieszyć ładowanie strony.

        Minifikacja i kompresja plików: Minifikacja polega na usunięciu zbędnych białych znaków, komentarzy i niepotrzebnych znaczników z kodu źródłowego, co zmniejsza jego rozmiar. Kompresja natomiast polega na zmniejszeniu rozmiaru plików poprzez zastosowanie algorytmów takich jak GZIP. Minifikacja i kompresja dotyczą głównie plików CSS i JavaScript. Dzięki temu można zmniejszyć rozmiar plików i przyspieszyć ich pobieranie przez przeglądarkę.
        
        Optymalizacja plików blokujących renderowanie: Pliki blokujące renderowanie, takie jak skrypty JavaScript i arkusze stylów CSS, mogą spowolnić ładowanie strony. Ważne jest umieszczenie ich w odpowiednich miejscach i zastosowanie technik, takich jak asynchroniczne lub odroczone ładowanie, aby nie blokować procesu renderowania strony. Można przenieść skrypty z nagłówka do stopki strony lub stosować atrybuty asynchroniczne lub defer w tagach skryptów, aby przyspieszyć renderowanie treści.
        
        Caching (buforowanie): Wykorzystanie mechanizmu cache pozwala przeglądarce na przechowywanie zasobów strony, takich jak obrazy, style CSS i skrypty JavaScript, na lokalnym dysku użytkownika. Dzięki temu, gdy użytkownik ponownie odwiedzi stronę, nie musi pobierać wszystkich plików od nowa, co przyspiesza ładowanie. Można ustawić odpowiednie nagłówki cache dla plików na serwerze lub skorzystać z narzędzi do zarządzania cache.
        
        Redukcja ilości zapytań HTTP: Każde zapytanie HTTP do serwera wpływa na czas ładowania strony. Dlatego warto zredukować liczbę zapytań, łącząc pliki CSS i JavaScript w jednym pliku (concatenation) lub stosując techniki takie jak bundling czy tree shaking.`,
      },
      {
        question: `Czym jest html canvas?`,
        answer: `HTML canvas to element języka HTML wprowadzony w HTML5, który umożliwia dynamiczne i skryptowe renderowanie kształtów oraz obrazów bitmapowych. Dzięki wprowadzeniu obiektu canvas stało się możliwe tworzenie interaktywnych animacji, grafik dwu i trójwymiarowych oraz gier, które działają w przeglądarkach bez konieczności instalowania dodatkowych wtyczek.`,
      },
      {
        question: `Czym jest atrybut srcset?`,
        answer: `Atrybut srcset jest używany w elementach <img> oraz <source> w HTML. Atrybut ten umożliwia określenie adresu obrazka, który ma być wyświetlany przez dany element w zależności od określonej sytuacji.Jeśli używamy atrybutu srcset w elemencie <img>, możemy określić kilka różnych wariantów obrazka wraz z odpowiadającymi im adresami URL. Przeglądarka może następnie wybrać i wyświetlić odpowiednią wersję obrazka w zależności od rozdzielczości ekranu, dostępnej przepustowości sieci lub innych czynników.`,
      },
      {
        question: "Czym jest tag time?",
        answer:
          "Tag time w HTML służy do oznaczania daty i godziny. Może być używany do wyświetlania czytelnych dla człowieka dat i godzin na stronie. Pozwala także na kodowanie dat i godzin w sposób zrozumiały dla maszyn, co umożliwia przeglądarkom i wyszukiwarkom lepsze rozpoznawanie i obsługę tych informacji.",
      },
      {
        question: "Czym jest twarda spacja & nbspHtml?",
        answer:
          "jTwarda spacja (&nbsp;) w HTML to specjalny znak, który reprezentuje niełamliwą spację. Kiedy chcemy wstawiać więcej niż jedną spację między słowami lub elementami na stronie, możemy użyć twardych spacji.",
      },
      {
        question: "Co to jest div?",
        answer:
          "Jest rodzajem pojemnika na treść. Nie ma on żadnego wpływu na treść ani układ graficzny, dopóki nie zostanie ostylizowany z użyciem CSS.",
      },
      {
        question: "Czym jest label?",
        answer:
          "Tag label w HTML służy do definiowania etykiety dla pola formularza. Jest to element, który jest powiązany z określonym polem formularza i umożliwia aktywowanie tego pola poprzez kliknięcie na etykietę",
      },
      {
        question: "Wymień niektóre z nowych funkcji HTML5.",
        answer:
          "Nowe elementy semantyczne: HTML5 wprowadza wiele nowych elementów, takich jak <header>, <footer>, <section>, które mają na celu lepsze definiowanie struktury i znaczenia poszczególnych sekcji strony.  Obsługa multimediów: HTML5 wprowadza wsparcie dla elementów multimedialnych, takich jak <audio> i <video>, umożliwiających osadzanie i odtwarzanie dźwięku i wideo bez konieczności korzystania z wtyczek zewnętrznych. Przeciągnij i upuść (drag and drop): HTML5 wprowadza natywne wsparcie dla funkcji przeciągania i upuszczania elementów na stronie, umożliwiając interakcję użytkownika poprzez przeciąganie i upuszczanie elementów na stronie. Ulepszone formularze: HTML5 wprowadza nowe atrybuty i typy pól formularza, umożliwiające bardziej zaawansowane walidacje danych, obsługę daty, czasu, lokalizacji itp. WebSocket: Jest to technologia, która umożliwia dwukierunkową komunikację w czasie rzeczywistym między przeglądarką a serwerem, co pozwala na interaktywne aplikacje internetowe. Server-Sent Events: HTML5 wprowadza zdarzenia serwerowe (Server-Sent Events), które umożliwiają serwerowi przesyłanie strumieniowych danych do przeglądarki w czasie rzeczywistym. Canvas: Element <canvas> umożliwia programistom tworzenie interaktywnych grafik i animacji dwuwymiarowych za pomocą języka JavaScript. Persistent Local Storage: HTML5 wprowadza mechanizm przechowywania danych lokalnie w przeglądarce, który pozwala aplikacjom webowym przechowywać dane poza pamięcią podręczną przeglądarki, nawet po zamknięciu strony.",
      },
      {
        question: "Czy tagi i elementy w html to to samo?",
        answer:
          "Tagi HTML to znaczniki używane do oznaczania różnych elementów i struktur w kodzie HTML. Przykładem tagu może być <h1>, który oznacza nagłówek pierwszego poziomu. Tagi mają swoje nazwy, zazwyczaj są otwierane <tag> i zamykane </tag>, a treść znajduje się między nimi.  Elementy HTML to pełne konstrukcje, które składają się z otwierającego tagu, treści (tekstu lub innych elementów) oraz zamykającego tagu. Na przykład <h1>Heading</h1> jest elementem HTML, gdzie <h1> to otwierający tag, 'Heading' to treść, a </h1> to zamykający tag.",
      },
      {
        question: "Czym są tagi i atrybuty w html?",
        answer:
          "Tagi to podstawowy komponent w html który definiuje jak dany kontent będzie ustruktyryzowany,natomiast atrybuty są używane wraz z tagami html by zdefiniować charakterystyke elementu.",
      },
      {
        question: "Jaki jest cel używania sekcji section w HTML5?",
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
        answer: `Tag picture zapewnia programistom stron internetowych większą elastyczność w określaniu zasobów obrazu. Zamiast jednego obrazu skalowanego w górę lub w dół to, w zależności od rozmiaru viewportu, można dobrać wiele obrazów tak, żeby dla każdej rozdzielczości ładnie wypełnić okno przeglądarki."Element picture ma dwa różne tagi: jeden lub więcej tagów source oraz jeden tag img.`,
      },
      {
        question: "Czym jest Web Socket?",
        answer:
          "Web sockets to technologia następnej generacji do dwukierunkowej komunikacji dla aplikacji internetowych, która działa na jednym gnieździe i jest wystawiona za pomocą interfejsu napisanego w JavaScript dla przeglądarek zgodnych z HTML5, Po uzyskaniu połączenia gniazda z serwerem WWW, możesz wysyłać dane z przeglądarki do serwera po wywołaniu metody send() oraz odbierać dane z serwera dzięki obsłudze zdarzenia onmessage",
      },
      {
        question: "Czym jest tag article?",
        answer:
          "Tag article określa niezależną i osobną treść. Najczęściej  używa się go na blogach.",
      },
      {
        question: "Objaśnij semantyczny html",
        answer:
          "Semantyczny HTML to kod napisany za pomocą tagów które mają określone znaczenie i mogą być odpowiednio interpretowane przez przeglądarkę i developera. Dla odróżnienia tagi które nie są semantyczne są obojętne tzn. nie mówią wprost nic na temat swojej zawartości.Kluczowymi kwestiami stosowania semantycznego html jest accessibility oraz seo. Do grupy tagów nie semantycznych należy div lub span.",
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
          "Atrybuty niestandardowe rozpoczynają się od data- i będą nazywane na podstawie twoich preferencji. Składa się z dwóch atrybutów, data-subject oraz data-level. Użytkownik będzie mógł pobrać wartości tych atrybutów używając JavaScript lub css w podobny sposób jak w przypadku korzystania ze standardowych atrybutów.",
      },
      {
        question: "Do czego służy znacznik footer?",
        answer:
          "Tag footer definiuje stopkę dokumentu lub sekcji i powinien zawierać informacje o stronie, która go zawiera. Ten tag zwykle zawiera informacje o autorze, prawach autorskich, dane kontaktowe, mapę witryny,powrót do góry oraz linki do powiązanych dokumentów,",
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
        question: "przechowywanie sesji w HTML5?",
        answer:
          "HTML5 przedstawił nowy atrybut sessionStorage , który może być wykorzystywany przez strony aby dodawać dane do sesji i będzie dostępny dla każdej strony otwartej w tym oknie, tj. jak tylko zamkniesz okno sesja będzie pusta.",
      },
      {
        question: "Czym jest accessibility?(dostępność)",
        answer:
          "Accessibility to tworzenie aplikacji w sposób który jest łatwy do interpretacji dla przeglądarki lub specjalnych urządzeń przystosowanych przez osoby niepełnosprawne. Po prostu przeglądarka wie kiedy ma do czynienia z obrazkiem, nawigacją czy artykułem.",
      },
      {
        question: "Jakie są wady ciasteczek?",
        answer:
          "Ciasteczka są dołączone do każdego żądania HTTP a tym samym prowadzą do spowolnienia aplikacji internetowej przez przekazywanie tych samych danych; ciasteczka są dołączone do każdego żądania HTTP a tym samym wysyłamy nieszyfrowane dane przez internet; ciasteczka są ograniczone do około 4KB. Liczba ta nie wystarczy do przechowywania wszystkich niezbędnych danych.",
      },
    ],
  },

  mutations: {
    randomHtmlQuestion(state) {
      state.htmlQuestions.sort(() => Math.floor(Math.random() - 0.5));
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
