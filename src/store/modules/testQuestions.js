export default {
  namespaced: true,

  state: {
    testQuestions: [
      {
        question: "Po co testujemy aplikacje?",
        answer: `
          Testowanie aplikacji ma na celu sprawdzenie poprawności działania oprogramowania, identyfikację potencjalnych błędów oraz zbieranie informacji na temat jego jakości. Gdy testy wykryją nieprawidłowości, umożliwiają programistom poprawienie błędów przed wdrożeniem aplikacji. Testy pomagają również zapewnić, że aplikacja spełnia określone wymagania funkcjonalne i jakościowe, co przekłada się na lepsze doświadczenia użytkowników oraz zwiększa stabilność i niezawodność oprogramowania w czasie eksploatacji.`,
      },
      {
        question: "Co to jest równoważnikowa metoda testowania?",
        answer: `Metoda równoważnikowa w testowaniu oprogramowania to technika projektowania testów, która dzieli przestrzeń wejściową programu na grupy równoważnych klas. Każda klasa jest testowana na podstawie tych samych kryteriów, a celem tej metody jest zminimalizowanie liczby testów, jednocześnie zapewniając, że każda klasa równoważności zostanie poddana przynajmniej jednemu testowi.

        Przykładem może być sytuacja, w której dane wejściowe są wymagane w postaci liczb całkowitych, a zakres akceptowalnych wartości to od 1 do 100. Metoda równoważnikowa podzieliłaby przestrzeń wejściową na grupy, takie jak:
        
        Wartości poniżej 1
        Wartości od 1 do 100
        Wartości powyżej 100
        Następnie wystarczy przetestować jedną wartość z każdej klasy równoważności, aby upewnić się, że program poprawnie obsługuje całą klasę. Dzięki temu metoda ta pozwala oszczędzać czas i zasoby przy jednoczesnym zapewnieniu skutecznego pokrycia różnych przypadków testowych.`,
      },
      {
        question: "Czym jest testowanie?",
        answer:
          "Testowanie to proces oceny oprogramowania w celu zidentyfikowania różnic między oczekiwanym a rzeczywistym stanem produktu oraz sprawdzenia, czy spełnia ono określone wymagania. Testowanie ma na celu poprawę jakości oprogramowania, zapewnienie jego niezawodności, zgodności z wymaganiami i zminimalizowanie ryzyka wystąpienia błędów podczas eksploatacji.",
      },
      {
        question: "pozytywne i negatywne przypadki testowe?",
        answer: `Pozytywne przypadki testowe sprawdzają, czy oprogramowanie działa zgodnie z wymaganiami i jak reaguje na pozytywne dane wejściowe. Celem tych testów jest upewnienie się, że oprogramowanie działa poprawnie w normalnych warunkach. Negatywne przypadki testowe sprawdzają, jak oprogramowanie reaguje na negatywne dane wejściowe lub nieoczekiwane sytuacje. Celem tych testów jest upewnienie się, że oprogramowanie jest odpornie na błędy i że może poprawnie radzić sobie z trudnymi sytuacjami. Ważne jest, aby uwzględniać zarówno pozytywne, jak i negatywne przypadki testowe w procesie testowania oprogramowania, aby upewnić się, że oprogramowanie działa poprawnie w każdych warunkach.`,
      },
      {
        question: "Czym jest testowanie dynamiczne?",
        answer:
          "Testowanie dynamiczne to rodzaj testowania oprogramowania, które polega na wykonaniu kodu programu w celu oceny jego zachowania w różnych warunkach. Proces ten obejmuje uruchamianie aplikacji i przeprowadzanie testów na żywo, co pozwala na ocenę rzeczywistego zachowania oprogramowania podczas jego działania.",
      },
      {
        question: "Wymień przykłady testów dynamicznych?",
        answer: `Testowanie jednostkowe Skupia się na testowaniu poszczególnych komponentów (jednostek) kodu źródłowego w izolacji. 
        Testowanie integracyjne Ocena interakcji między różnymi jednostkami kodu. Testowanie integracyjne sprawdza, czy poszczególne komponenty współpracują ze sobą poprawnie.
          
          Testowanie systemowe Sprawdza kompletny system pod kątem zgodności z wymaganiami i spełnienia oczekiwań użytkownika. Testy systemowe oceniają, czy cała aplikacja działa zgodnie z oczekiwaniami w różnych scenariuszach.
          
          Testowanie akceptacyjne Ocena gotowego produktu pod kątem akceptacji przez użytkownika końcowego. Testy akceptacyjne sprawdzają, czy produkt spełnia wymagania biznesowe i jest gotowy do wdrożenia.`,
      },
      {
        question: "Czym jest piramida testów?",
        answer: `Piramida testów to model hierarchii różnych typów testów w ramach procesu testowania. Piramida ma na celu zrównoważenie ilości testów w zależności od ich kosztu, czasu wykonania i stabilności. Na niższym poziomie piramidy znajdują się testy, które są tańsze, szybsze i bardziej stabilne, dlatego powinno ich być wykonanych większa ilość. Na szczycie piramidy znajdują się testy, które są bardziej czasochłonne, mniej stabilne i wymagają większego zaangażowania ludzkiego, dlatego są one mniej liczne. Dzięki temu, piramida testów umożliwia efektywne zarządzanie procesem testowania, zapewniając odpowiednią jakość oprogramowania przy optymalnym wykorzystaniu zasobów. 
          `,
      },
      {
        question: "Częstotliwość w piramidzie testów",
        answer: `Testy jednostkowe sprawdzają indywidualne jednostki kodu, takie jak funkcje, metody, czy klasy. Częstotliwość: Bardzo często.
        Cel: Zapewnienie, że pojedyncze elementy kodu działają zgodnie z oczekiwaniami.
        Testy integracyjne:
        sprawdzają współpracę między różnymi jednostkami kodu, a także integrację zewnętrznych zależności.
        Częstotliwość: Regularnie, ale mniej często niż testy jednostkowe.
        Cel: Upewnienie się, że komponenty działają poprawnie współpracując ze sobą.
        Testy systemowe
        oceniają kompletną funkcjonalność systemu w kontekście zdefiniowanych wymagań.
        Częstotliwość: Mniej często niż testy integracyjne.
        Cel: Zweryfikowanie, czy cały system działa zgodnie z oczekiwaniami.
        Testy akceptacyjne:
        sprawdzają, czy oprogramowanie spełnia oczekiwania użytkowników końcowych.
        Częstotliwość: Najrzadziej, zazwyczaj przed wdrożeniem.
        Cel: Potwierdzenie gotowości oprogramowania do dostarczenia klientowi.`,
      },
      {
        question: "Jaka jest różnica pomiędzy firmware, a software?",
        answer:
          "Firmware: Jest to rodzaj oprogramowania, które jest wbudowane bezpośrednio w urządzenie sprzętowe, zazwyczaj na stałe. Często jest przechowywane w pamięci nieulotnej, takiej jak pamięć flash. To ogólny termin obejmujący aplikacje, systemy operacyjne, sterowniki i inne programy komputerowe. Oprogramowanie jest zazwyczaj przechowywane na dyskach twardych, pamięciach RAM lub innych nośnikach danych.",
      },
      {
        question: "Czym są testy migawek ( snapshot testing )?",
        answer: `testy migawkowe nie mają na celu bezpośredniego sprawdzenia poprawnego zachowania aplikacji. Mają one wiele form, ale zazwyczaj odnoszą się do weryfikacji względem wcześniej wykonanych zrzutów danych, zrzutów ekranów, zamrożonych plików dyskowych itp.Bazują one na porównaniu wyników, konfrontując aktualne dane (obrazy) wyjściowe z zapisanym wcześniej poprawnym wzorcem tych danych (obrazów), ale bez sprawdzania, czy zachowanie aplikacji generujące aktualny rezultat było poprawne.`,
      },
      {
        question: "Jakie metody testowania znałeś i stosowałeś w swojej pracy?",
        answer:
          "Testowanie funkcjonalne: Skupia się na weryfikacji, czy oprogramowanie spełnia określone wymagania funkcjonalne. Testy funkcjonalne sprawdzają, czy aplikacja działa zgodnie z oczekiwaniami, czy wykonuje określone akcje i generuje poprawne wyniki. Testowanie akceptacyjne: Wykonywane przez użytkowników końcowych lub interesariuszy w celu sprawdzenia, czy oprogramowanie spełnia ich wymagania, oczekiwania i standardy. Celem jest potwierdzenie, czy system jest gotowy do wdrożenia.",
      },
      {
        question:
          "Jakie są różnice między testowaniem manualnym a automatycznym",
        answer:
          "Testy manualne Wykonywane są przez testerów, którzy ręcznie uruchamiają testy, wykonują kroki testowe i obserwują rezultaty, wymagają interakcji człowieka, który podejmuje decyzje i ocenia wyniki testów. Natomiast testy automatyczne wykorzystują narzędzia i skrypty do automatyzacji procesu testowania.Testy są pisane jako skrypty, które wykonują określone czynności i sprawdzają oczekiwane wyniki. Wykonują testy szybciej i bardziej powtarzalnie niż testowanie manualne.",
      },
      {
        question: "Czym są historyjki użytkownika",
        answer: `
          Historie użytkownika są techniką stosowaną w zarządzaniu projektami i rozwijaniu oprogramowania. Służą do opisywania funkcji lub wymagań z perspektywy użytkownika końcowego. Historyjki użytkownika pomagają zrozumieć, jak użytkownicy będą korzystać z systemu, Określenie, kto jest użytkownikiem końcowym danego systemu lub funkcji. Może to być klient, pracownik, czy inna grupa interesariuszy.
          
          Cel: Opis, co użytkownik chce osiągnąć, korzystając z danego systemu lub funkcji. Często jest to przedstawione jako zdanie opisujące cel w prosty sposób.
          
          Opis: Szczegółowy opis, jak użytkownik przechodzi przez interakcję z systemem, aby osiągnąć swój cel. Może zawierać kroki, warunki brzegowe, a także ewentualne problemy lub błędy, z którymi użytkownik może się spotkać.
          
          Wartość Biznesowa: Wskazanie, dlaczego ta historia użytkownika ma wartość dla biznesu. Jakie cele biznesowe lub korzyści przyniesie jej realizacja.`,
      },
      {
        question: "Kiedy należy skończyć testować oprogramowanie?",
        answer:
          "Wystarczające pokrycie wymagań: Testy zostały wykonane w wystarczającym stopniu, aby pokryć co najmniej 95% wszystkich ustalonych wymagań. Zagęszczenie defektów: Liczba defektów przypisanych do poszczególnych wymagań jest na akceptowalnie niskim poziomie. Na przykład, nie więcej niż 5 defektów przypisanych do każdego z rozdziału wymagań.Koszt: Testowanie trwa już od pewnego czasu, a dalsze testy generowałyby nieproporcjonalne koszty w porównaniu do oczekiwanych korzyści. Ramy czasowe: Testowanie jest zaplanowane na określony okres, na przykład 3 miesiące, i nie można go przekroczyć ze względu na ustalone ograniczenia czasowe projektu.",
      },
      {
        question: "Czym jest testowanie Nie-funkcjonalne?",
        answer:
          "To rodzaj testowania oprogramowania, które ocenia aspekty jakościowe systemu, które nie są związane bezpośrednio z jego funkcjonalnością. Obejmuje ono różne cechy i charakterystyki systemu, które wpływają na jego wydajność, niezawodność, bezpieczeństwo, skalowalność, użyteczność i inne aspekty. kilka głównych obszarów testowania nie-funkcjonalnego: Wydajność,Bezpieczeństwo,,Dostępność,Niezawodność (Reliability Testing):,Użyteczność (Usability Testing): ,Testy Obciążeniowe (Stress Testing):Testowanie Kompatybilności z Wydajnością (Performance Compatibility Testing): Sprawdza, czy system zachowuje się zgodnie z oczekiwaniami w różnych środowiskach, konfiguracjach sprzętowych i sieciowych.",
      },
      {
        question:
          "Co zrobić gdy nie jesteśmy pewni czy mamy do czynienia z błędem?",
        answer:
          "Zawsze warto poszukać jakiś twardych dowodów na które możemy się powołać przy zgłaszaniu błędu. Można zasięgnąc wiedzy u programistów, project/product managera, product ownera i innych. Często bywa tak, że zastana sytuacja jest nie do zaakceptowania, np. oprogramowanie/strona www otwiera się minutę bądź dłużej ale nie znajdziemy w wymaganiach informacji o czasie potrzebnym na otwarcie. Zawsze można zgłosić defekt powołując się na użytkownika ze zdrowym rozsądkiem.",
      },
      {
        question: "Jak postępować z informacją, że u mnie działa?",
        answer:
          "Dobrze jest upewnić się, czy programista reprodukuje defekt na tym samym środowisku i postępuje dokładnie krok po kroku z naszymi instrukcjami. Byćmoże jest jakas nieznaczna różnica która ma wpływ na ostateczny rezultat. Zdarza się też, że programiści nie używają wersji instalacyjnej oprogramowania, ale budują je z kodu. Niezależnie od tego, o ile to oczywiście możliwe, dobrze jest testować na środowisku które jest jaknajbardziej zbliżone do tego w którym pracuje klient.",
      },
      {
        question:
          "Jak wykryć bugi związane z wolnym połączeniem internetowym?",
        answer:
          `Testowanie w warunkach z ograniczonym pasmem: Symulowanie wolnego połączenia internetowego podczas testów może być pomocne w wykryciu problemów z responsywnością i wydajnością aplikacji. Istnieją narzędzia, które pozwalają na symulację różnych prędkości łącza internetowego, co umożliwia zrozumienie zachowania aplikacji w warunkach ograniczonego pasma.
          Monitorowanie czasów odpowiedzi: Podczas testowania aplikacji z wolnym połączeniem warto monitorować czasy odpowiedzi na żądania HTTP i odpowiedzi z serwera. Długie czasy odpowiedzi mogą wskazywać na potencjalne problemy z wydajnością lub nieoptymalizowanym kodem.
          Testowanie aplikacji offline: Warto sprawdzić, czy aplikacja zachowuje się poprawnie, gdy połączenie internetowe jest całkowicie wyłączone lub bardzo wolne. Niektóre aplikacje muszą działać w trybie offline, więc ważne jest, aby upewnić się, że wszystkie funkcje są nadal dostępne i działają poprawnie.
          Testowanie zachowania aplikacji podczas utraty połączenia: Podczas korzystania z aplikacji z wolnym połączeniem internetowym, warto zwrócić uwagę na to, jak aplikacja reaguje na utratę połączenia i próbuje ponownie się połączyć. Wszelkie nieprawidłowości w zachowaniu się aplikacji podczas tego procesu mogą wskazywać na potencjalne problemy.`,
      },
      {
        question: "Czym jest testowanie statyczne?",
        answer: `
          Testowanie statyczne to rodzaj testowania oprogramowania, które odbywa się bez konieczności uruchamiania programu. Testowanie statyczne ma na celu identyfikację problemów we wczesnych fazach cyklu życia projektu, zanim kod zostanie uruchomiony.  `,
      },
      {
        question: "Wymień strategie testowania?",
        answer: `Black box testing - Testuje funkcjonalność oprogramowania bez zaglądania w wewnętrzną strukturę kodu. White box testing testuje wewnętrzną strukturę kodu i logikę oprogramowania.Unit testing testuje indywidualne jednostki lub komponenty oprogramowania, aby upewnić się, że działają zgodnie z zamierzeniem.
          
          Integration testing testuje integrację różnych komponentów oprogramowania, aby upewnić się, że współpracują jako system.
          
          Functional testing testuje funkcjonalne wymagania oprogramowania, aby upewnić się, że są spełnione.
          
          System testing testuje kompletny system oprogramowania, aby upewnić się, że spełnia określone wymagania.
          
          Acceptance testing testuje oprogramowanie, aby upewnić się, że spełnia oczekiwania klienta lub użytkownika końcowego.
          
          Regression testing testuje oprogramowanie po dokonaniu zmian lub modyfikacji, aby upewnić się, że zmiany nie wprowadziły nowych błędów.
          
          Performance testing testuje oprogramowanie, aby określić jego cechy wydajnościowe, takie jak szybkość, skalowalność i stabilność.
          
          Security testing testuje oprogramowanie w celu zidentyfikowania podatności i zapewnienia, że spełnia wymagania dotyczące bezpieczeństwa.`,
      },
      {
        question: "Jakie są cele testowania?",
        answer:
          "zapobieganie defektom poprzez dokonywanie oceny produktów pracy, takich jak: wymagania, historyjki użytkownika, projekt i kod, weryfikacja, czy zostały spełnione wszystkie wymagania, sprawdzanie, czy przedmiot testów jest kompletny i walidowanie, czy działa zgodnie z oczekiwaniami użytkowników i innych interesariuszy, budowanie zaufania do poziomu jakości przedmiotu testów, wykrywanie defektów i awarii, a tym samym zmniejszenie poziomu ryzyka związanego z niedostateczną jakością oprogramowania, dostarczanie interesariuszom informacji niezbędnych do podejmowania świadomych decyzji.",
      },
      {
        question: "Opisz działanie funkcji expect",
        answer:
          "Jej głównym zadaniem jest tworzenie obiektu, na którym można wywoływać różne metody asercji, pozwalające na sprawdzenie, czy określone warunki są spełnione w trakcie testowania. ",
      },
      {
        question: "Różnica pomiędzy testowaniem a debugowaniem",
        answer:
          "Celem testowania jest sprawdzenie, czy oprogramowanie spełnia określone wymagania i czy działa poprawnie. Testy mają na celu zapewnienie, że aplikacja wykonuje się zgodnie z oczekiwaniami. Celem debugowania jest identyfikacja, lokalizacja i naprawa błędów w kodzie. Testowanie: Jest wykonywane przed wdrożeniem aplikacji lub jej części Debugowanie: Zachodzi po wykryciu problemu, czy to podczas testowania, czy w trakcie użytkowania aplikacji. Debugowanie ma miejsce po wystąpieniu błędu w celu zrozumienia jego źródła i skorygowania. Wynikiem testowania jest ocena jakości oprogramowania, identyfikacja ewentualnych błędów i potwierdzenie, czy spełnia ono określone wymagania. Debugowanie: Wynikiem debugowania jest poprawa i naprawa błędów w kodzie.",
      },
      {
        question: "Dlaczego testowanie jest niezbędne?",
        answer:
          "Testowanie pozwala zweryfikować, czy oprogramowanie spełnia określone wymagania i standardy jakości. Umożliwia wczesne wykrywanie błędów i problemów w oprogramowaniu. Dobre pokrycie testami daje pewność, że oprogramowanie działa poprawnie w różnych warunkach i sytuacjach. To zwiększa zaufanie użytkowników do produktu. Testowanie ułatwia zarządzanie zmianami w oprogramowaniu. Przy wprowadzaniu nowych funkcji lub modyfikacjach testy pomagają sprawdzić, czy istniejące funkcjonalności nie zostały naruszone. Testy wydajnościowe pozwalają zidentyfikować obszary, które mogą wymagać optymalizacji. To kluczowe dla zapewnienia, że oprogramowanie działa sprawnie nawet przy dużej liczbie użytkowników.",
      },
      {
        question: "Czym jest framework Jest",
        answer: `
          Jest to popularny framework do testowania aplikacji w języku JavaScript i TypeScript. Framework automatycznie znajduje i wykonuje testy, co eliminuje potrzebę konfiguracji ręcznej. Jest umożliwia tworzenie "snapshotów" komponentów, które są zapisywane i porównywane z wynikami kolejnych testów, ułatwiając wychwycenie nieoczekiwanych zmian. Jest obsługuje testy asynchroniczne poprzez ułatwienie pracy z funkcjami zwrotnymi, obietnicami i asynchronicznymi funkcjami. Zapewnia narzędzia do prostego mockowania funkcji, co umożliwia izolowanie testowanych fragmentów kodu.`,
      },
      {
        question: "Czym jest mockowanie",
        answer: `Mockowanie to technika stosowana w testowaniu oprogramowania, w której tworzone są sztuczne obiekty lub moduły, aby zasymulować rzeczywiste obiekty lub funkcje w systemie. Mocki są używane do testowania interakcji między różnymi komponentami oprogramowania, a także do izolowania jednostek testujących od zależności zewnętrznych.`,
      },
      {
        question: "Jaka jest różnica między błędem,bugiem i awarią",
        answer: `Błąd (defect): Błąd to ogólny termin odnoszący się do każdego rodzaju nieprawidłowości lub problemu w oprogramowaniu, który powoduje niewłaściwe działanie aplikacji. Może to być wynik niepoprawnej implementacji funkcji, niewłaściwego przetwarzania danych lub błędnej logiki programu. Błąd może być odkryty przez programistę podczas testowania, przez użytkownika w trakcie użytkowania aplikacji lub nawet po długim czasie od uruchomienia.
        Bug: Termin "bug" jest często używany zamiennie z "błędem", ale niekiedy ma nieco węższe znaczenie. Bug odnosi się do błędu w oprogramowaniu, który został zidentyfikowany przez użytkownika lub testerów. Pochodzenie tego słowa sięga czasów, gdy fizyczne usterki w urządzeniach elektronicznych były czasami spowodowane owadami (bugami) wpadającymi do maszyny i zakłócającymi jej działanie. Bug może być odkryty w trakcie testów, po wdrożeniu produktu lub nawet po dostarczeniu go do użytkowników.
        Awaria (failure): Awaria występuje, gdy oprogramowanie lub system przestaje działać zgodnie z oczekiwaniami użytkownika lub specyfikacją. Może to być wynik błędu w kodzie, niewłaściwej konfiguracji, problemu sprzętowego lub innego czynnika. Awaria może prowadzić do niedostępności systemu, utraty danych lub innych negatywnych konsekwencji. Awaria jest bardziej zaawansowanym etapem niż sama obserwacja błędu lub bugu - jest to faktyczne zauważenie problemu w działaniu systemu przez użytkowników lub administratorów..`,
      },
      {
        question: "Wymień siedem zasad testowania",
        answer:
          "Testowanie ujawnia usterki, ale nie może dowieść ich braku Testowanie może wykazać obecność defektów, ale nie może dowieść, że oprogramowanie jest od nich wolne. Tym samym testowanie zmniejsza prawdopodobieństwo, że w oprogramowaniu pozostaną niewykryte defekty, ale sam fakt niewykrycia defektów nie stanowi dowodu poprawności oprogramowania. Testowanie gruntowne jest niemożliwe Przetestowanie wszystkiego jest możliwe tylko w najprostszych przypadkach.Wczesne testowanie oszczędza czas i pieniądze",
      },
      {
        question: "Z jakich powodów mogą powstawać błędy?",
        answer:
          "Pomyłki mogą pojawiać się z wielu powodów, takich jak: presja czasu; • omylność człowieka, brak doświadczenia lub niedostateczne umiejętności uczestników projektu, problemy związane z wymianą informacji między uczestnikami projektu (w tym nieporozumienia dotyczące rozumienia wymagań i dokumentacji projektowej), złożoność kodu, projektu, architektury, rozwiązywanego problemu lub wykorzystywanej technologii, nieporozumienia dotyczące interfejsów wewnątrz systemu i między systemami, zwłaszcza w przypadku dużej liczby tych systemów; • stosowanie nowych, nieznanych technologii.",
      },
      {
        question: "Pomyłki, defekty i awarie",
        answer:
          "Na skutek pomyłki (błędu) człowieka w kodzie oprogramowania lub w innym związanym z nim produkciepracy może powstać defekt. Pomyłka skutkująca wprowadzeniem defektu w jednym produkcie pracy może spowodować błąd skutkujący wprowadzeniem defektu winnym, powiązanym produkcie pracy. Przykładem takiej sytuacji jest pomyłka popełniona podczaspozyskiwania wymagań, która może prowadzić do defektu   w wymaganiach, co spowoduje pomyłkę programisty skutkującą wprowadzeniem defektu w kodzie.Wykonanie kodu zawierającego defekt może spowodować awarię, ale nie musi dziać się tak        ",
      },
      {
        question: "Kiedy automatyzować testy?",
        answer:
          "Automatyzację testu warto rozważyć, gdy test jest powtarzalny, zachowanie przetestowanej funkcji rzadko ulega zmianom, jego wykonanie wymaga czasu od ludzkiego testera, obejmuje skomplikowane obliczenia i służy potwierdzeniu, że nowe zmiany nie wpływają negatywnie na istniejącą funkcjonalność.",
      },
      {
        question: "W jakich sytuacjach unikasz testów automatycznych?",
        answer:
          "programowanie lub testowana funkcjonalność ulega częstym zmianom. Oznacza to konieczność częstego aktualizowania testów automatycznych, aby pozostały one aktualne. W rezultacie testy mogą szybko stać się przestarzałe i przestawać być przydatne. Testowanie eksploracyjne również nie jest odpowiednie do automatyzacji. Ludzki tester może znacznie bardziej dogłębnie zbadać oprogramowanie niż komputer.",
      },
      {
        question: "Po co nam cross-browser testing?",
        answer: `
          Testowanie cross-browserowe jest niezbędne, ponieważ użytkownicy korzystają z aplikacji internetowych na różnych przeglądarkach, platformach i urządzeniach. Ponieważ nie masz kontroli nad preferencjami użytkowników, zapewnienie spójności działania aplikacji internetowej na różnych przeglądarkach staje się kluczowe. Testowanie cross-browserowe pozwala zweryfikować, czy Twoja aplikacja działa sprawnie na różnych platformach i urządzeniach, nawet gdy korzysta się z różnych wersji popularnych przeglądarek internetowych. To zapewnia lepsze doświadczenia użytkownika i pomaga zidentyfikować oraz rozwiązać problemy z zgodnością, które mogą wystąpić w różnych środowiskach przeglądania..`,
      },
      {
        question: "paradoks pestycydów",
        answer:
          "Ciągłe powtarzanie tych samych testów prowadzi do sytuacji, w której przestają one w pewnym momencie wykrywać nowe defekty. Aby móc wykrywać nowe defekty, może być konieczne zmodyfikowanie dotychczasowych testów i danych testowych, a także napisanie nowych testów. Niezmieniane testy tracą z czasem zdolność do wykrywania defektów, podobnie jak pestycydy po pewnym czasie nie są zdolne do eliminowania szkodników. W niektórych przypadkach — takich jak automatyczne testowanie regresji — paradoks pestycydów może być korzystny, ponieważ pozwala potwierdzić, że liczba defektów związanych z regresją jest niewielka",
      },
      {
        question: "Wynik fałszywie pozytywny w testowaniu",
        answer:
          "Nie wszystkie nieoczekiwane wyniki testów oznaczają awarie. Wynik fałszywie pozytywny może być,między innymi, skutkiem błędów związanych z wykonaniem testów, defektów w danych testowych,środowisku testowym, w innych testaliach itp. Podobne problemy mogą być przyczyną sytuacjiodwrotnej – wyniku fałszywie negatywnego, czyli sytuacji, w której testy nie wykrywają defektu, którypowinny wykryć. Wyniki fałszywie pozytywne są raportowane jako defekty, których w rzeczywistości nie ma",
      },
      {
        question: "Jakie są dobre praktyki w testach automatycznych?",
        answer:
          "Wybieraj testy do automatyzacji na podstawie ich powtarzalności, krytyczności i stabilności funkcji. Nie wszystko trzeba automatyzować, więc skup się na kluczowych obszarach.Zapisuj wyniki testów automatycznych w bazie błędów, aby umożliwić łatwe śledzenie postępu, identyfikowanie problemów i szybkie reagowanie na defekty.W miarę jak projekt rozwija się, dostosuj testy automatyczne do zmian w funkcjonalności i wymaganiach. Regularne aktualizacje pomagają utrzymać zgodność testów z aktualnym stanem oprogramowania.Regularnie monitoruj wyniki testów automatycznych. Analizuj wyniki, identyfikuj trendów i podejmuj działania korygujące w przypadku pojawienia się problemów.",
      },
      {
        question: "Jak połączyć jest z typescriptem?",
        answer:
          "Są dwa sposoby na integrację Jesta z Typescriptem, jeden sprawdza typy, drugi korzysta z wygenerowanych plików js. My oczywiście chcemy sprawdzać typy, więc użyjemy ts-jest!",
      },
      {
        question: "Czym jest Docker?",
        answer:
          "Docker pozwala nam na uruchamianie dowolnych aplikacji w wyizolowanym środowisku. Zajmuje przy tym niewiele zasobów (w porównaniu np. do maszyny wirtualnej). ",
      },
      {
        question: "Czym jest stub?",
        answer:
          `
          Stub w kontekście testowania to prosta implementacja lub symulacja fragmentu kodu lub interfejsu, która zwraca z góry zdefiniowane wartości lub zachowania. Stuby są używane podczas testowania jednostkowego do zastępowania zależności, które nie są istotne dla testowanego kodu. Na przykład, w testowaniu jednostkowym funkcji, która pobiera dane z bazy danych, można użyć stuba do zwracania sztucznie utworzonych danych zamiast rzeczywistych danych z bazy danych. Jest to przydatne, gdy chcemy izolować testowany kod od zewnętrznych zależności, co pozwala na bardziej precyzyjne i niezawodne testowanie.:`,
      },
      {
        question: "czym jest Flake Detection?",
        answer: `"Flake detection" odnosi się do procesu identyfikowania "flake'ów" w kontekście testowania oprogramowania. Flake to termin używany, gdy testy automatyczne są niestabilne i dają różne wyniki podczas różnych uruchomień, pomimo braku zmian w kodzie lub funkcjonalności aplikacji. Flake detection jest praktyką mającą na celu identyfikację testów, które są podatne na flakiness, czyli te, które nie zawsze kończą się tym samym wynikiem przy każdym uruchomieniu. Flake'y mogą powodować problemy w procesie ciągłej integracji i dostawy (CI/CD), ponieważ utrudniają wiarygodne monitorowanie jakości kodu i automatycznego wdrażania.
          
          Aby wykryć flake'y, organizacje stosują różne strategie, takie jak:
          
          Powtarzalność testów: Testy powinny być powtarzalne, co oznacza, że powinny dawać te same wyniki przy wielokrotnym uruchomieniu. Jeśli testy są niestabilne, warto zidentyfikować czynniki wpływające na tę niestabilność.
          
          Analiza wyników: Regularna analiza wyników testów pozwala zidentyfikować te, które są podatne na flakiness. Warto zbadać przypadki testowe, które zwracają różne wyniki w różnych sytuacjach.
          
          Debugowanie testów: Wdrażanie mechanizmów debugowania dla testów automatycznych może pomóc w zidentyfikowaniu problemów i źródeł flakiness.
          
          Automatyczne ponowne uruchamianie: W niektórych przypadkach organizacje decydują się automatycznie ponownie uruchamiać testy, które zakończą się niepowodzeniem. Jeśli testy są flakiness, to ponowne uruchamianie może pomóc w uzyskaniu poprawnych wyników.
          
          Znalezienie i rozwiązanie flake'ów jest kluczowym krokiem w utrzymaniu stabilnych i efektywnych procesów testowania automatycznego.`,
      },
      {
        question: "Wymień zalety cypressa?",
        answer:
          "Automatic Waiting, Flake Detection, Network Traffic Control, Screenshots and Videos, Debuggability, real time reloard, ).",
      },
      {
        question: "Jaka jest roznica miedzy retestem a regresją?",
        answer:
          "Retest to ponowne przeprowadzenie testów ktore wykazały błąd, natomaist regresja jest przetestowanie poprzednich funkcjonalonosci w celu potwierdzenia ze caly system nie zawiera nowych błędów w przypadku gdyby ktos implementowal nową funkcjonalność",
      },
      {
        question:
          "Jakie są fazy testowania związane z cyklem życia testowania oprogramowania?",
        answer:
          "Cykl życia oprogramowania: Okres czasu rozpoczynający się kiedy pojawił się pomysł na oprogramowanie i kończący się gdy oprogramowanie nie jest już dostępne do użytku. Zazwyczaj cykl życia oprogramowania zawiera fazę koncepcji, fazę wymagań, fazę projektowania, fazę implementacji, fazę testów, fazę instalacji i zastępowania, fazę wykorzystania produkcyjnego i pielęgnowania oraz czasami, fazę wycofania. Uwaga: te fazy mogą na siebie zachodzić lub mogą być wykonywane iteracyjnie.",
      },
      {
        question: "Czym jest Mocha",
        answer:
          "Mocha to framework testowy JavaScript, który koncentruje się na elastyczności. Ze względu na tę elastyczność pozwala wybierać różne biblioteki, aby spełnić inne wspólne funkcje, takie jak szpiegowanie (np. Sinon) i asercje (np. Chai). Inną unikalną cechą Mocha jest to, że oprócz Node.js może również wykonywać testy w przeglądarce.",
      },
      {
        question: "Czym jest component testing?",
        answer:
          `Testowanie komponentów to proces testowania pojedynczych komponentów interfejsu użytkownika (UI) aplikacji. Component testing koncentruje się na testowaniu zachowania i funkcjonalności poszczególnych komponentów.omponenty są testowane w izolacji od innych komponentów i często od całości aplikacji. Testy skupiają się na weryfikacji działania pojedynczego komponentu niezależnie od innych części systemu. Dzięki izolacji i skoncentrowaniu się na pojedynczych komponentach, testy komponentów ułatwiają diagnozowanie i naprawianie błędów w interfejsie użytkownika.Testy komponentów mogą być reużywalne dla różnych części aplikacji, co pozwala zaoszczędzić czas i wysiłek przy tworzeniu testów dla różnych scenariuszy użycia.`,
      },
      {
        question: "Różnice pomiędzy weryfikacją a walidacją?",
        answer: `Weryfikacja dotyczy sprawdzenia czy produkt został zbudowany poprawnie zgodnie z określonymi specyfikacjami, podczas gdy walidacja dotyczy potwierdzenia czy produkt spełnia rzeczywiste potrzeby użytkowników i czy jest użyteczny oraz skuteczny w rozwiązaniu problemów.`,
      },
      {
        question: "Czym jest headless testing?",
        answer:
          "Headless testing to rodzaj testowania oprogramowania, w którym testy są wykonywane bez interfejsu graficznego (GUI). W tradycyjnym podejściu testowania, aplikacja jest uruchamiana w pełnym środowisku, a testy interakcji z nią są wykonywane poprzez manipulację GUI. Natomiast w headless testing, aplikacja jest uruchamiana w tle, bez wyświetlania interfejsu graficznego, a testy są wykonywane bezpośrednio na poziomie backendu lub za pomocą interfejsów programistycznych (API).",
      },
  
      {
        question: "Od czego zależy response time w api?",
        answer: `Obciążenie serwera: Im większe obciążenie serwera, tym dłuższy czas odpowiedzi. Wysokie obciążenie może prowadzić do opóźnień w obsłudze żądań.

        Wydajność infrastruktury: Jakość i wydajność sprzętu, na którym uruchomiony jest serwer API, mogą wpływać na czas odpowiedzi. Szybkie dyski SSD, dużo pamięci RAM i moc obliczeniowa mają wpływ na wydajność.

        Optymalizacja kodu: Efektywny, zoptymalizowany kod serwera API może skrócić czas odpowiedzi. Optymalizacje obejmują zoptymalizowane zapytania do bazy danych, minimalizację obliczeń i odpowiednie cache'owanie.

        Szerokość pasma: Dla API dostępnego publicznie, szerokość pasma internetowego jest kluczowym czynnikiem. Ograniczenia przepustowości mogą wpływać na czas odpowiedzi.

        Lokalizacja geograficzna: Odległość między klientem a serwerem API może wpływać na czas odpowiedzi. Serwery CDN (Content Delivery Network) mogą pomóc w minimalizacji tego wpływu.

        Optymalizacja zapytań: Efektywne wykorzystanie zapytań, minimalizacja przesyłanych danych i stosowanie odpowiednich indeksów w bazie danych mogą przyspieszyć odpowiedzi API.

        Cache'owanie: Używanie mechanizmów cache'owania, takich jak CDN lub lokalne pamięci podręczne, może skrócić czas odpowiedzi poprzez dostarczenie wcześniej zapisanych wyników.

        Protokół komunikacyjny: Wybór protokołu komunikacyjnego, takiego jak HTTP/1.1, HTTP/2, czy HTTP/3, może wpływać na wydajność i czas odpowiedzi.

        Zabezpieczenia: Skomplikowane mechanizmy bezpieczeństwa, takie jak autentykacja i autoryzacja, mogą wprowadzać dodatkowe opóźnienia w czasie odpowiedzi.

        Przetwarzanie równoległe: Wykorzystanie przetwarzania równoległego, asynchronicznego przetwarzania i mikrousług może wpływać na efektywność obsługi wielu żądań jednocześnie.`,
      },
      {
        question: "Czym są testy integracji?",
        answer:
          "Test integracji to rodzaj testowania oprogramowania, który ma na celu sprawdzenie poprawności współpracy pomiędzy różnymi komponentami lub modułami systemu. Podczas testu integracji, różne elementy systemu są łączone i testowane jako całość, aby upewnić się, że poprawnie komunikują się ze sobą, wymieniają informacje i współdziałają zgodnie z oczekiwaniami.",
      },
      {
        question: "Modele cyklu życia oprogramowania?",
        answer:
          "Model cyklu życia oprogramowania opisuje rodzaje czynności wykonywanych na poszczególnych etapach projektu wytwarzania oprogramowania oraz powiązania logiczne i chronologiczne między tymi czynnościami. Istnieje wiele różnych modeli cyklu życia oprogramowania, a każdy z nich wymaga  innego podejścia do testowania",
      },
      {
        question: "Czym są wartości brzegowe?",
        answer:
          "W analizie i ustalaniu wartości brzegowych wykonuje się to w celu zaprojektowania testu, który skupia się bezpośrednio na krawędziach przedziału (warunku), ponieważ są to miejsca szczególnie narażone na błędy. Przykładowo, jeśli aplikacja zawiera filtr, który używa zakresu dat do zawężenia prezentowanych wyników (np. wyszukiwania), wartości brzegowe mogą być istotne. Załóżmy, że filtr oferuje opcje wyszukiwania takie jak bieżący miesiąc, bieżący rok i poprzedni rok. Tester może skupić się na wartościach brzegowych, eliminując konieczność wprowadzania każdej możliwej daty. Analiza wartości brzegowych obejmuje maksymalne i minimalne wartości, które są używane w decyzyjnych warunkach filtra, co pozwala zoptymalizować proces testowania.",
      },
      {
        question: "kiedy nie automatyzować?",
        answer:
          "Automatyzacji testów nie zaleca się przede wszystkim w przypadku testów negatywnych lub awaryjnych. W sytuacjach, gdy konieczne jest analityczne myślenie testerów, a testy negatywne są zbyt złożone, aby jednoznacznie określić wynik pozytywny lub negatywny, automatyzacja może być mniej skuteczna i trudniejsza do osiągnięcia pożądanych rezultatów.",
      },
      {
        question: "tablica deccyzycja?",
        answer:
          `Tablica decyzyjna, nazywana także tablicą decyzyjną decyzji (ang. decision table), to narzędzie używane w analizie systemów, zarządzaniu projektem oraz testowaniu oprogramowania. Służy do zapisania wszystkich możliwych kombinacji warunków i działań, co ułatwia zrozumienie logiki decyzyjnej systemu.Podstawowe elementy tablicy decyzyjnej to:

          Warunki: Są to czynniki lub zdarzenia, które mogą mieć wpływ na podejmowanie decyzji. Warunki mogą być spełnione (true) lub niespełnione (false).
          Działania: Są to akcje, które zostaną wykonane w zależności od spełnienia określonych warunków. Działania mogą być różne w zależności od kombinacji warunków.
          Kombinacje warunków: Tablica decyzyjna zawiera wszystkie możliwe kombinacje warunków, które mogą wystąpić w systemie.
          Działania decyzyjne: Są to wyniki lub akcje podejmowane na podstawie spełnienia określonych warunków. Każda kombinacja warunków ma przypisaną akcję decyzyjną.
          Tablica decyzyjna jest szczególnie przydatna w przypadku systemów, w których istnieje wiele warunków i możliwych działań, co sprawia, że analiza logiki decyzyjnej byłaby trudna w tradycyjny sposób. Używając tablicy decyzyjnej, można łatwo zidentyfikować wszystkie przypadki testowe i zapewnić, że wszystkie możliwe kombinacje warunków są sprawdzane.`,
      },
      {
        question: "Czym jest request i response",
        answer:
          `Request (żądanie): Jest to komunikat wysłany przez klienta do serwera, zawierający zazwyczaj informacje na temat tego, czego klient oczekuje od serwera. Żądanie może zawierać różne rodzaje danych, w zależności od rodzaju zapytania i protokołu komunikacyjnego używanego w danym systemie. Na przykład, w przypadku przeglądarki internetowej, kiedy wpisujesz adres URL i naciskasz Enter, twoja przeglądarka wysyła żądanie do serwera internetowego, prosząc o dostęp do strony internetowej.
          Response (odpowiedź): Jest to komunikat wysłany przez serwer do klienta w odpowiedzi na otrzymane żądanie. Odpowiedź zawiera zazwyczaj odpowiednie dane lub informacje, na które klient czekał. Odpowiedź może zawierać różne rodzaje danych, takie jak treść strony internetowej, plik do pobrania, komunikat o błędzie, itp. Na przykład, gdy wysyłasz żądanie o dostęp do strony internetowej, serwer odpowiada przeglądarce zwracając HTML, CSS, JavaScript i inne zasoby, które są potrzebne do wyświetlenia strony w przeglądarce.`,
      },
      {
        question: "Rodzaje odpowiedzi http",
        answer:
          "1xx (Informacyjne): Odpowiedzi informacyjne to informacje tylko dla klienta i oznaczają, że żądanie zostało przyjęte i serwer nadal przetwarza je. 2xx (Sukces): Odpowiedzi sukcesu oznaczają, że żądanie klienta zostało przyjęte i zrozumiane oraz zostało pomyślnie zrealizowane. 3xx (Przekierowanie): Odpowiedzi przekierowania informują klienta, że powinien on wykonać dodatkowe działania w celu ukończenia żądania. 4xx (Błąd klienta): Odpowiedzi błędów klienta informują, że żądanie klienta było błędne lub nie może zostać zrealizowane przez serwer. 5xx (Błąd serwera): Odpowiedzi błędów serwera informują, że serwer napotkał błąd lub nie jest w stanie zrealizować poprawnie żądania klienta.",
      },
      {
        question: "Czym jest json web token",
        answer:
          `
          JSON Web Token to otwarty standard (RFC 7519) definiujący kompaktowy i samowystarczalny sposób reprezentacji informacji między stronami w formie obiektów JSON. JWT może być używany do bezpiecznej transmisji informacji między dwoma stronami jako obiekt JSON. Składa się z trzech części: nagłówka (header), dane (payload) i podpis (signature).JWT jest często używany do autoryzacji i uwierzytelniania użytkowników w aplikacjach internetowych. Po zalogowaniu użytkownik otrzymuje JWT, który jest następnie dołączany do każdego żądania HTTP jako nagłówek Authorization. Serwer następnie weryfikuje poprawność tokenu i na jego podstawie podejmuje decyzję o udzieleniu dostępu do zasobów. JWT są również wykorzystywane do przesyłania informacji o uwierzytelnieniu użytkownika między mikroserwisami w architekturze opartej na usługach.`,
      },
      {
        question: "Czym jest flaky tests",
        answer: `To termin używany w kontekście testowania oprogramowania, aby opisać testy, które nie zawsze przechodzą lub nie przechodzą zawsze zgodnie z oczekiwaniami. Flaky tests są uważane za problematyczne, ponieważ utrudniają pewność co do stabilności aplikacji i mogą prowadzić do błędnych raportów o jakości oprogramowania. Przyczyny flaky tests mogą być różne, takie jak:
        Stan zewnętrzny: Testy, które zależą od stanu zewnętrznego, takiego jak baza danych, zasoby sieciowe mogą być flaky, gdy te zasoby są niestabilne lub zmieniają się.
        Zależności między testami: Jeśli testy zależą od siebie nawzajem, zmiany w jednym teście mogą wpływać na wyniki innych testów.
        Asynchroniczność: Testy, które zawierają asynchroniczne operacje, takie jak żądania do API lub oczekiwanie na animacje, mogą być flaky, jeśli nie są odpowiednio zarządzane.
          
          Nieprzewidywalne czynniki zewnętrzne: Niektóre testy mogą być spowodowane przez nieprzewidywalne czynniki zewnętrzne, takie jak opóźnienia w sieci, problemy z infrastrukturą testową.
          
          Rozwiązanie problemu flaky tests może obejmować:
          
          Izolacja testów: Upewnij się, że testy są od siebie niezależne, aby zmiany w jednym teście nie wpływały na inne.
          
          Stabilne środowisko testowe: Zapewnij, że środowisko testowe jest stabilne i zawsze dostępne dla testów.
          
          Odpowiednie zarządzanie asynchronicznością: Skorzystaj z funkcji, które pozwalają na synchronizację testów z asynchronicznymi operacjami.
          
          Regularne sprawdzanie i utrzymanie testów: Regularnie sprawdzaj testy pod kątem flaky behavior i aktualizuj je w miarę potrzeb.
          
          Rozwiązanie problemu flaky tests jest kluczowe dla utrzymania zaufania do procesu testowania i jakości oprogramowania.`,
      },
      {
        question: "Czym są testy Uat?",
        answer:
          "Testy akceptacyjne są rodzajem testów oprogramowania, które są przeprowadzane, aby sprawdzić, czy system lub aplikacja spełnia wymagania i oczekiwania użytkowników. Jest to końcowy etap testowania przed wdrożeniem systemu lub aplikacji do użytku przez rzeczywistych użytkowników.Celem testów UAT jest zapewnienie, że system działa zgodnie z oczekiwaniami użytkowników i spełnia określone kryteria akceptacji. Testy te są zazwyczaj przeprowadzane przez rzeczywistych użytkowników, którzy mają wiedzę i doświadczenie w korzystaniu z systemu lub aplikacji w kontekście swojej pracy lub działalności.",
      },
      {
        question: "Scenariusze w których testy automatyzujące są konieczne",
        answer:
          "Porównanie dwóch obrazów piksel po pikselu.Porównanie dwóch arkuszy kalkulacyjnych zawierających tysiące wierszy i kolumn.Testowanie aplikacji pod obciążeniem 100 000 użytkowników.Testy wydajności.Testowanie aplikacji w różnych przeglądarkach i równolegle w różnych systemach operacyjnych.",
      },
      {
        question: "Czym są testy regresji?",
        answer:
          "Testy regresji to rodzaj testów oprogramowania, które mają na celu sprawdzenie, czy wprowadzone zmiany w systemie nie powodują powstania nowych błędów ani nie naruszają istniejącej funkcjonalności. Są one wykonywane po wprowadzeniu modyfikacji lub poprawek w oprogramowaniu, takich jak nowe funkcje, poprawki defektów, zmiany w konfiguracji lub aktualizacje. Głównym celem testów regresji jest minimalizacja ryzyka wprowadzenia błędów lub defektów w systemie podczas modyfikacji. Choć zmiana może dotyczyć tylko określonych części kodu, istnieje możliwość, że wpłynie ona na inne obszary lub istniejące funkcje, które wcześniej działały poprawnie. Testy regresji pomagają wychwycić takie problemy, zapewniając, że istniejące funkcje są nadal sprawne po wprowadzeniu zmian.",
      },
      {
        question: "czym jest testowanie automatyczne",
        answer:
          "Testowanie automatyczne to technika testowania oprogramowania służąca do testowania i porównywania rzeczywistych wyników z oczekiwanymi.Koszty automatyzacji są początkowo naprawdę wyższe. Obejmuje koszt narzędzia, następnie koszt zasobu testującego automatyzację i jego szkolenie.Ale kiedy skrypty są gotowe, można je wykonywać setki razy wielokrotnie z tą samą dokładnością i dość szybko. Pozwoli to zaoszczędzić wiele godzin ręcznego testowania.",
      },
      {
        question: "Czym jest BDD i TDD. Omów te dwa pojęcia",
        answer:
          "TDD (Test-Driven Development) jest podejściem do tworzenia oprogramowania, w którym główną ideą jest w pierwszej kolejności pisanie testów do nieistniejącej funkcjonalności, a dopiero potem napisanie kodu implementującego tę funkcjonalność. BDD (Behavior-Driven Development) to podejście będące rozwinięciem TDD. Testy pisane z wykorzystaniem składni języka naturalnego (np. zdań w języku angielskim), które wyrażają zachowanie i oczekiwane rezultaty. Kryteria akceptacyjne są pisane w formie scenariuszy i korzystają ze słów kluczowych Given (początkowy warunek), When (opis występującego zdarzenia) oraz Then (oczekiwany rezultat).",
      },
      {
        question: "Jakie są rodzaje testów",
        answer:
          "Testy funkcjonalne (czarnoskrzynkowe) analizują zewnętrzne zachowanie oprogramowania, traktując je jak czarną skrzynkę, Testy niefunkcjonalne - określają parametry oprogramowania takie jak: wydajność, użyteczność, zdolność do pracy na różnych platformach, Testy białoskrzynkowe (strukturalne) - testy te mogą być oparte na architekturze systemu lub kodzie źródłowym aplikacji. Bazują na budowie wewnętrznej, która jest zwykle „ukryta” przed użytkownikiem końcowym, Testy regresji - ponowne przetestowanie programu po dokonaniu w nim modyfikacji, w celu sprawdzenia, że w wyniku zmian nie powstały nowe defekty lub nie ujawniły się istniejące wcześniej.",
      },
      {
        question: "Czym są testy jednostkowe?",
        answer:
          "Testy jednostkowe to zbiór testów, które weryfikują, czy jednostka kodu (np. metoda, klasa, serwis) działa zgodnie z oczekiwaniami. Testy te uruchamiane są w izolacji, co oznacza, że nie jesteśmy w żaden sposób związani z innymi elementami systemu. Testy jednostkowe są nieodłącznym elementem wytwarzania oprogramowania w podejściu TDD ",
      },
      {
        question: "Jakie informacje powinny się znaleźć w zgłoszeniu defektu?",
        answer:
          "Szczegóły zgłoszenia często zależą od narzędzia lub od przyjętego podejścia w danej organizacji. Można jednak wskazać kilka elementów, które zwykle są niezbędne do zreprodukowania i naprawienia defektu. nazwa/tytuł (często ze wskazaniem jakiego obszaru lub jakiej aplikacji dotyczy defekt) kroki do zreprodukowania  aktualny oraz oczekiwany rezultat wersja oprogramowania/branch informacja o środowisku informacja, czy występuje na innym (wyższym) środowisku data i czas wystąpienia zrzut ekranu lub film",
      },
      {
        question: "Czym są testy end-to-end?",
        answer:
          "Testy end-to-end to rodzaj testów funkcjonalnych, które sprawdzają, czy cały system działa zgodnie z oczekiwaniami, a także czy różne jego części (komponenty, funkcje) współpracują ze sobą poprawnie. Te testy symulują rzeczywiste scenariusze użytkownika, sprawdzając, czy aplikacja działa poprawnie od początku do końca, jakby była używana przez końcowego użytkownika.",
      },
      {
        question: "Czym jest dług techniczny?",
        answer: `Długi techniczny to metafora używana w branży IT, oznaczająca zobowiązania techniczne wynikające z wyborów projektowych, decyzji programistycznych czy innych działań, które wymagają późniejszego rozwiązania lub poprawy.szybkość implementacji kosztem jakości: Czasami, aby spełnić krótkoterminowe cele projektowe, programiści mogą zdecydować się na szybkie, ale mniej zrównoważone rozwiązania.Brak dokumentacji: Zaniedbanie dokumentacji kodu i projektu może prowadzić do długu technicznego.
          
          Zaniedbanie testów: Pominięcie lub niewystarczająca ilość testów jednostkowych i testów integracyjnych może prowadzić do powstawania błędów, które są trudniejsze do zidentyfikowania i naprawienia w przyszłości.
          
          Nieefektywne rozwiązania: Wybieranie łatwiejszych, ale mniej efektywnych rozwiązań technologicznych może prowadzić do utworzenia długu technicznego.
          
          Brak aktualizacji technologicznych: Nieprzeprowadzanie regularnych aktualizacji technologicznych i utrzymanie przestarzałych bibliotek czy narzędzi może prowadzić do zaległości technicznych. Dług techniczny ma tendencję do narastania, a jego zaniedbywanie może prowadzić do problemów w dłuższej perspektywie. Dlatego ważne jest, aby zespoły programistyczne regularnie przeglądały i zarządzały długiem technicznym.`,
      },
      {
        question: "Jakie są cele testów?",
        answer:
          "Wśród głównych celów testowania wymienić należy znajdowanie błędów oraz zapobieganie defektom. Rzetelnie przeprowadzony proces testowania wpływa pozytywnie na jakość wytworzonego oprogramowania oraz dostarcza deweloperom informacji niezbędnych do dalszego rozwoju produktu.",
      },
      {
        question: "Jakie są sposoby deploymentu?",
        answer: `Lokalny Deployment: Oprogramowanie jest wdrożone i uruchamiane na jednym komputerze lub lokalnej sieci.
        Deployment Wewnętrzny:
        Oprogramowanie jest wdrożone na serwerach znajdujących się w fizycznych lokalizacjach firmy lub organizacji. Organizacje mają pełną kontrolę nad infrastrukturą.
        Deployment w Chmurze:
        
        Oprogramowanie jest wdrożone w chmurze, co oznacza, że działa na infrastrukturze chmurowej dostarczanej przez dostawcę usług chmurowych. To podejście umożliwia skalowalność, elastyczność i dostępność.
        Hybrid Deployment (Hybrydowy Deployment):
        
        Kombinuje lokalne i chmurowe elementy, umożliwiając organizacjom elastyczność w wyborze, które usługi są utrzymywane w chmurze, a które w lokalnej infrastrukturze.
        Staging Deployment (Deployment na Etapie Testowym):
        
        Wdrożenie w środowisku testowym (staging) przed przeniesieniem na środowisko produkcyjne. Pozwala to na przetestowanie i debugowanie aplikacji w kontrolowanym środowisku przed dostarczeniem jej użytkownikom końcowym.
        Rolling Deployment:
        
        Wprowadzanie aktualizacji lub nowej wersji oprogramowania, stopniowo zastępując stare wersje. Minimalizuje to ewentualne problemy, gdy tylko część systemu jest zaktualizowana w danym czasie.
        Blue-Green Deployment:
        
        Wersje aplikacji (Blue i Green) są utrzymywane równocześnie. Ruch użytkowników jest kierowany do jednej z wersji. Gdy nowa wersja jest gotowa, ruch może być przełączany między wersjami.
        Canary Deployment:
        
        Nowa wersja oprogramowania jest stopniowo wdrażana na niewielką grupę użytkowników przed pełnym wdrożeniem. Pozwala to na wcześniejsze wykrycie potencjalnych problemów.
        Zero-Downtime Deployment:
        
        Wprowadzanie zmian bez przerwy w działaniu aplikacji. Minimalizuje to wpływ na dostępność systemu dla użytkowników końcowych.
        Feature Toggle Deployment:
        
        Nowe funkcje są wprowadzane, ale są ukrywane lub dezaktywowane dla użytkowników. Funkcje są aktywowane lub dezaktywowane zdalnie, co pozwala na kontrolę nad ich wdrażaniem.`,
      },
      {
        question: "Od czego zależy ryzyko projektowe i co się na nie składa?",
        answer: `Złożoność projektu: Im bardziej skomplikowany projekt, tym większe ryzyko związane z jego realizacją.Długość trwania projektu: Dłuższe projekty są bardziej podatne na zmiany warunków zewnętrznych, takie jak zmiany w technologii, strategii biznesowej czy rynek konkurencyjny.Zaawansowanie technologiczne: Korzystanie z nowoczesnych, ale nieznanych technologii może zwiększyć ryzyko projektu. Jednocześnie, technologie przestarzałe mogą być trudne do utrzymania, co również wpływa na ryzyko.Dostępność zasobów: Brak dostępu do odpowiednich zasobów, takich jak wykwalifikowana kadra, sprzęt czy oprogramowanie, może zwiększyć ryzyko projektu.Zmiany w zakresie projektu: Częste zmiany w zakresie projektu, zwłaszcza w trakcie jego realizacji, mogą prowadzić do niezamierzonych konsekwencji i zwiększać ryzyko opóźnień oraz niepowodzeń.Brak planu zarządzania ryzykiem: Projekt bez adekwatnego planu zarządzania ryzykiem jest bardziej podatny na nieoczekiwane trudności.Elementy składające się na zarządzanie ryzykiem projektowym obejmują:

          Identyfikacja ryzyka: Rozpoznawanie potencjalnych zagrożeń i szans związanych z projektem.
          
          Analiza ryzyka: Ocena wpływu i prawdopodobieństwa wystąpienia każdego ryzyka oraz jego konsekwencji.
          
          Planowanie odpowiedzi na ryzyko: Określenie strategii zarządzania ryzykiem, czyli planu działania w przypadku wystąpienia konkretnego zagrożenia.
          
          Monitorowanie i kontrola ryzyka: Śledzenie zmian w projekcie i skutków ryzyka oraz dostosowywanie planu zarządzania ryzykiem w miarę potrzeb.`,
      },
      {
        question: "Co to są testy wydajnościowe",
        answer:
          "Są to testy przeprowadzane w celu oceny czy nasza aplikacja spełnia wymagania dokumentacji w zakresie możliwego jej obciążenia. Celem przeprowadzenia takich testów będzie weryfikacja czy nasza aplikacja działa dobrze pod danych obciążeniem. Przy weryfikacji wydajności aplikacji koniecznie trzeba zwrócić uwagę na czasy odpowiedzi aplikacji, czas reakcji, niezawodność, wykorzystanie zasobów czy jej skalowalność. Celem takich testów jest znalezienie tzw. wąskich gardeł. ",
      },
      {
        question: "Czym są wąskie gardła",
        answer:
          "W kontekście informatyki i technologii, termin wąskie gardło odnosi się do punktu lub komponentu w systemie, który ogranicza ogólną wydajność lub przepustowość systemu. To jest miejsce, które działa najwolniej w porównaniu do innych elementów systemu, co wpływa na ogólną wydajność systemu.",
      },
      {
        question: "Czym jes wzorzec AAA",
        answer: `Odnosi się do trzech kluczowych faz, które często występują w strukturze testów jednostkowych.
        Arrange: W tej fazie przygotowujesz wszystkie niezbędne warunki i dane dla testu. To obejmuje inicjalizację obiektów, ustawienie danych wejściowych i inne przygotowania.
        Act: W tej fazie wykonujesz właściwą operację lub akcję, którą chcesz przetestować. To jest część, w której występuje główne wykonanie testu.
        Assert: W tej fazie sprawdzasz, czy wyniki działania testu są zgodne z oczekiwaniami. Jeśli wyniki są zgodne z oczekiwaniami, test jest uznawany za udany;`,
        code: `// Test dla funkcji dodawania
        test('Addition function should return correct sum', () => {
          // Arrange
          const a = 3;
          const b = 5;
        
          // Act
          const result = add(a, b);
        
          // Assert
          expect(result).toBe(8);
        });
        `
      },
      {
        question: "czym jest FIRST?",
        answer: `FIRST to skrót od pięciu zasad, które są zalecane w podejściu do pisania dobrych testów jednostkowych. Fast: Testy jednostkowe powinny być szybkie w wykonaniu.  Isolated/Independent: Każdy test jednostkowy powinien być niezależny od innych testów. Wynik jednego testu nie powinien wpływać na wyniki innych testów.
        Repeatable: Testy jednostkowe powinny dawać te same wyniki za każdym razem, gdy są uruchamiane. To oznacza, że nie powinny zależeć od zewnętrznych czynników, takich jak stan bazy danych czy sieć.
        Self-Validating: Wynik powinien być łatwy do zinterpretowania. Nie powinno być konieczne ręczne sprawdzanie rezultatów testów. Wynik powinien być automatycznie oceniany jako sukces lub porażka.
        Timely: powinny być pisane na tyle wcześnie, aby programiści mogli je uruchamiać regularnie podczas procesu rozwoju.`,
      },
      {
        question: "soap vs rest?",
        answer:
          "Rest ze względu na swój mały rozmiar wymaga mniejszej przepustowości łącza niż soap. Co więcej, dla takiej samej ilości danych wymaga mniejszej mocy obliczeniowej. Dzięki temu działa szybciej, nawet o kilkadziesiąt procent. Wydajność różni się także ze względu na cacheowanie wywołań API, które, w przeciwieństwie do SOAP, umożliwia REST.REST Dzięki niemu dane można wymieniać w formacie JSON, XML, HTML, YAML, a także jako zwykły tekst. SOAP umożliwia komunikację tylko przy użyciu XML. Jednak dostępny jest dla zdecydowanie większej ilości protokołów niż REST, który uwzględnia jedynie HTTP. Tak więc SOAP wykorzystasz łącznie z SMTP, UDP i oczywiście z HTTP.  ",
      },
      {
        question: "Statusy Odpowiedzi HTTP",
        answer:
          "Statusy odpowiedzi HTTP to nic innego jak informacja wysłana nam przez serwer HTTP do aplikacji klienta. Kody odpowiedzi protokołu HTTP dzielimy na kilka kategorii. Kody informacyjne 1XX, kody powodzenia 2XX, kody przekierowań 3XX, kody błędu aplikacji klienta 4XX, oraz kody błędu serwera HTTP  5XX.401	Unauthorized	Nieautoryzowany dostęp - żądanie zasobu, który wymaga uwierzytelniania.",
      },
      {
        question: "Wymień typy testów wydajnościowych",
        answer:
          `Testy obciążeniowe - sprawdzają zdolność aplikacji do obsługi oczekiwanego ruchu użytkowników.
          Testy stresowe - badają zachowanie aplikacji pod znacznym obciążeniem, np. w czasie Black Friday.
          Testy wytrzymałościowe - oceniają zdolność oprogramowania do wytrzymywania długotrwałego obciążenia.
          Testy szczytowe - sprawdzają reakcję aplikacji na nagłe duże skoki obciążenia.
          Testy skalowalności - badają zachowanie aplikacji pod względem zwiększonego ruchu i skalowalności.`,
      },
      {
        question: "Czym są testy dymne?",
        answer:
          "Testy dymne, zwane również testami dymnymi lub testami wdychanymi (ang. smoke tests), są rodzajem testów funkcjonalnych, które służą do szybkiego sprawdzenia podstawowej funkcjonalności aplikacji lub systemu po wprowadzeniu zmian lub przed wdrożeniem na środowisko produkcyjne.",
      },
      {
        question: "Co oznacza skrót tdd?",
        answer:
          "Test-Driven Development jest sposobem czy podejściem do tworzenia oprogramowania w którym główną ideą jest stworzenie w pierwszej kolejności testów dla zaplanowanych funkcjonalności a następnie stworzenie kodu i implementacja tych funkcjonalności. ",
      },
      {
        question: "Co oznacza skrót bdd?",
        answer:
          "BDD czyli Behavior-Driven Development to podejście będące rozwinięciem TDD. Są to testy tworzone z wykorzystaniem składni danego języka, które wyrażają jakieś zachowanie oraz oczekiwane określone rezultaty. Takie testy tworzymy w formie scenariuszy i korzystają ze słów kluczowych w postaci:  Given warunek początkowy  When opis tego co będzie wykonywane  Then – oczekiwany rezultat  Zaletą tworzenia tego typu testów jest to, że są one zrozumiałe, również dla osób nietechnicznych. Tak sformułowane przypadki mogą stanowić dobrą podstawę zachowania aplikacji przy tworzeniu dokumentacji.",
      },
      {
        question: "Czy możliwe jest wykonanie kompletnego testu systemu?",
        answer:
          "Testowanie kompletne, zwane też gruntownym, nie jest możliwe do wykonania. Ilość kombinacji dla każdej zmiennej jest praktycznie nieograniczona. Dodatkową przeszkodą do wykonania takiego zadania jest fakt, iż oprogramowanie zwykle działa na wielu urządzeniach w różnych konfiguracjach. To tym bardziej utrudnia kompleksowość działań.",
      },
      {
        question: "Jakie są korzyści z testowania automatycznego?",
        answer:
          "Płynna obsługa powtarzających się przypadków testowych, pomoc w testowaniu dużej matrycy testowej, możliwość wykonywania testów równoległych, zwiększona dokładność, poprzez minimalizację błędów generowane przez człowieka, a także oszczędność czasu i pieniędzy.",
      },
      {
        question: "Czym są przypadki testowe?",
        answer:
          "Przypadki testowe to dokumentacja opisująca szczegółowo kroki do wykonania w celu przetestowania określonej funkcjonalności, elementu lub przypadku użycia systemu. Każdy przypadek testowy jest zaplanowany w taki sposób, aby pokryć różne scenariusze i warunki, a jego celem jest zweryfikowanie, czy dany element spełnia określone wymagania.",
          code: `
          Oto prosty przykład przypadku testowego dla funkcji logowania na stronie internetowej:
          Nazwa testu: Logowanie użytkownika

          Warunki wstępne: Użytkownik jest na stronie logowania.

          Kroki testowe:

          Wpisz nazwę użytkownika "example_user" w pole tekstowe "Nazwa użytkownika".
          Wpisz hasło "example_password" w pole tekstowe "Hasło".
          Kliknij przycisk "Zaloguj się".
          Oczekiwane rezultaty:

          Po wykonaniu kroków 1-3, użytkownik powinien być przekierowany do strony głównej aplikacji.
          Na stronie głównej powinien być widoczny komunikat powitalny dla użytkownika "example_user".
`
      },
      {
        question: "Czym są scenariusze testowe?",
        answer: `
          Scenariusz testowy to opis sekwencji kroków, działań lub zdarzeń, które mają być wykonane podczas testowania określonego przypadku użycia lub funkcjonalności systemu. W przeciwieństwie do pojedynczego przypadku testowego, który jest bardziej skoncentrowany na konkretnych krokach testowych i oczekiwanych rezultatach, scenariusz testowy obejmuje szerszy zakres i może obejmować kilka przypadków testowych. Ogólnie rzecz biorąc, scenariusz testowy opisuje interakcje użytkownika z systemem lub zachowanie systemu w konkretnej sytuacji. Jest to bardziej ogólna i elastyczna forma dokumentacji testowej, która może obejmować różne przypadki testowe, warunki i ścieżki.`,
      },
      {
        question: "Czym jest mockowanie?",
        answer:
          "Mock to obiekt, którego używa się zamiast rzeczywistej implementacji w trakcie testów jednostkowych. Pozwala on na określenie jakich interakcji spodziewamy się w trakcie testów. Następnie można sprawdzić czy spodziewane interakcje rzeczywiście wystąpiły.",
      },
      {
        question: "Czym jest planowanie testów?",
        answer: `
          Planowanie testów to kluczowy etap w procesie testowania oprogramowania, który pomaga ustalić zakres, cele, strategie i zasoby niezbędne do skutecznego przeprowadzenia testów. Poniżej znajdziesz kluczowe elementy planowania testów`,
        code: `Zakres testów:

          Określenie funkcji i modułów, które będą testowane.
          Wybór poziomu testów (np. testy jednostkowe, integracyjne, systemowe, akceptacyjne).
          Cele testów:
          
          Określenie celów testów, czyli oczekiwanych rezultatów i stanu systemu po zakończeniu testów.
          Strategia testowania:
          
          Wybór strategii testowania, czyli ogólnego podejścia do przeprowadzania testów (np. testowanie czarnej skrzynki, białej skrzynki, testy obciążeniowe).
          Określenie, czy testy będą przeprowadzane manualnie, automatycznie czy w połączeniu obu metod.
          Zasoby:
          
          Przypisanie zasobów ludzkich, sprzętowych i programowych do wykonania testów.
          Określenie odpowiedzialności członków zespołu testowego.
          Harmonogram:
          
          Opracowanie planu testów, obejmującego daty rozpoczęcia i zakończenia poszczególnych etapów testów.
          Zidentyfikowanie kluczowych terminów i kamieni milowych.
          Środowisko testowe:
          
          Zaplanowanie środowiska testowego, w tym infrastruktury sprzętowej, oprogramowania, baz danych, konfiguracji.
          Przypadki testowe:
          
          Tworzenie konkretnych przypadków testowych w oparciu o cele testów i zakres testów.
          Dane testowe:
          
          Przygotowanie danych testowych potrzebnych do przeprowadzenia testów.
          Raportowanie:
          
          Określenie, jakie raporty będą generowane podczas testów i kto będzie za nie odpowiedzialny.
          Zarządzanie ryzykiem:
          
          Identyfikacja potencjalnych ryzyk związanych z testami i opracowanie strategii ich zarządzania.
          Akceptacja interesariuszy:
          
          Zatwierdzenie planu testów przez interesariuszy projektu.
          Metryki testów:
          
          Określenie metryk, które będą używane do oceny postępu i skuteczności testów.`,
      },
      {
        question: "Testy białoskrzynkowe a czarnoskrzynkowe",
        answer:
          "Testy czarnoskrzynkowe bazują na specyfikacji, bez wnikania w kod programu. Dotyczą one widocznego zachowania aplikacji, a nie implementacji, do której wglądu nie ma użytkownik końcowy.Testy białoskrzynkowe wymagają analizy struktury aplikacji lub systemu. Dzięki takiemu rodzajowi testów określić stopień, w jakim dany element został przetestowany. Testy te mają na celu jak najlepsze pokrycie różnych ścieżek programu.",
      },
      {
        question: "Testy funkcjonalne a niefunkcjonalne",
        answer:
          "Funkcjonalności to nic innego jak czynności wykonywane przez aplikacje. Testy funkcjonalne analizują zewnętrzne zachowanie oprogramowania, traktując je jako czarną skrzynkę.Testy niefunkcjonalne skupiają się na charakterystyce działania aplikacji i obejmują: testy wydajności, użyteczności, niezawodności, bezpieczeństwa oraz testy możliwości pracy na różnych platformach.",
      },
      {
        question: "Czym są lokatory",
        answer:
          "Lokatory są często wykorzystywanymi narzędziami w testach automatycznych interfejsu użytkownika. Służą do odnajdywania i identyfikowania elementów interfejsu użytkownika, takich jak przyciski, pola tekstowe czy linki, na podstawie ich atrybutów lub położenia na stronie. Istnieją różne rodzaje lokatorów, zależnie od używanej technologii i narzędzi automatyzacji testów. Oto kilka przykładów najczęściej spotykanych rodzajów lokatorów:",
      },
      {
        question: "Rodzaje testowania niefunkcjonalnego",
        answer:
          "testy wydajności, bezpieczeństwa, kompatybilności, użyteczności, dostepnosci,przeciążeniowe, obciążeniowe, skalowalności",
      },
      {
        question: "czym jest komunikacja po CDP w playwright",
        answer:
          "Komunikacja po CDP (Chrome DevTools Protocol) w Playwright odnosi się do sposobu, w jaki Playwright komunikuje się z przeglądarką internetową poprzez interfejs programistyczny Chrome DevTools Protocol. CDP umożliwia programistom interakcję z przeglądarką oraz kontrolę nad jej zachowaniem i funkcjonalnościami.Poprzez CDP, Playwright może wykonywać różnorodne operacje, takie jak nawigacja po stronach internetowych, wykonanie akcji użytkownika (np. kliknięcie, wpisanie tekstu), pobieranie informacji o stronie (np. elementy DOM, atrybuty) oraz monitorowanie zdarzeń i sieci. ",
      },
      {
        question:
          "Czym się różni playwright od od bibliotek takich jak Cypress czy Selenium",
        answer:
          "Playwright obsługuje wiele przeglądarek, w tym Chromium, Firefox i WebKit, co pozwala na testowanie aplikacji na różnych silnikach renderujących. Playwright oferuje interfejsy API dla różnych języków programowania, takich jak JavaScript, TypeScript, Python, C# i Java, co umożliwia pisanie testów w ich ulubionym języku. Playwright został zaprojektowany z myślą o obsłudze asynchroniczności,Playwright umożliwia emulację urządzeń mobilnych, co jest przydatne podczas testowania responsywności aplikacji na różnych urządzeniach.laywright automatycznie zarządza procesami przeglądarki, co eliminuje potrzebę ręcznego uruchamiania i zamykania przeglądarek podczas testowania.Wsparcie dla testów równoległych: Playwright obsługuje testy równoległe, co pozwala na szybsze wykonywanie testów w środowiskach CI/CD.",
      },
      {
        question:
          "Jakie są znane integracje Playwright do testów niefuncjonalnych",
        answer:
          "Playwright może być łatwo zintegrowany z popularnymi narzędziami do CI/CD, takimi jak Jenkins, CircleCI, Travis CI, GitLab CI/CD czy GitHub Actions, może być wykorzystany do automatyzacji testów wydajnościowych, a wyniki tych testów mogą być monitorowane i analizowane za pomocą narzędzi takich jak New Relic, Datadog, czy Dynatrace, również używany do automatyzacji testów bezpieczeństwa aplikacji, a wyniki tych testów mogą być analizowane za pomocą narzędzi do testowania penetracyjnego, takich jak OWASP ZAP, Burp Suite czy NessusIntegracja z narzędziami do monitorowania frontendu: Playwright może być wykorzystany do automatyzacji testów interfejsu użytkownika (UI), a wyniki tych testów mogą być monitorowane i analizowane za pomocą narzędzi do monitorowania frontendu, takich jak Sentry, Raygun czy Rollbar.Integracja z narzędziami do testowania API: Chociaż Playwright jest głównie przeznaczony do testowania interfejsu użytkownika, może być również używany do testowania API za pomocą odpowiednich bibliotek do wysyłania żądań HTTP, takich jak Axios czy Superagent.",
      },
      {
        question:
          "Wyjaśnienie, jak zarządzać timeoutami i jakie mogą być konsekwencje niewłaściwych ustawień.",
        answer:
          `zewnętrznych zasobów, takich jak bazy danych, API lub usługi sieciowe. Zarządzanie nimi może mieć istotny wpływ na wydajność i stabilność Twojej aplikacji. Oto kilka wyjaśnień dotyczących zarządzania timeoutami i potencjalnych konsekwencji niewłaściwych ustawień:Timeout to maksymalny czas oczekiwania na odpowiedź od zewnętrznego zasobu. Jeśli odpowiedź nie zostanie otrzymana w określonym czasie, operacja jest przerywana, a może zostać wygenerowany błąd. Konsekwencje niewłaściwych ustawień timeoutów:
          Opóźnienia w działaniu aplikacji: Zbyt długi timeout może powodować opóźnienia w działaniu aplikacji, szczególnie gdy zasób zewnętrzny nie odpowiada w oczekiwanym czasie.
          Zwolnienie zasobów: Zbyt długi timeout może skutkować zajęciem zasobów przez operacje oczekujące na odpowiedź, co może prowadzić do wycieku pamięci lub braku dostępnych zasobów.
          Brak reakcji: Zbyt krótki timeout może skutkować przerywaniem operacji, nawet gdy zasób zewnętrzny jest nadal aktywny, co może prowadzić do błędów i niekompletnych operacji.`,
      },
      {
        question:
          "Na czym polega dynamiczne czekanie, jak to wiąże się z webFirstAssertions",
        answer:
          `Dynamiczne czekanie to strategia oczekiwania na określone zdarzenie lub stan elementu na stronie internetowej przed wykonaniem kolejnych akcji w teście automatycznym. WebFirstAssertions to podejście, które zakłada, że w testach automatycznych należy najpierw przeprowadzić asercję dotyczącą obiektu na stronie internetowej, zanim wykonamy jakiekolwiek inne akcje. Oznacza to, że przed kliknięciem, wprowadzeniem tekstu czy nawigacją po stronie, należy upewnić się, że oczekiwany element jest obecny i znajduje się w oczekiwanym stanie.`,
      },
      {
        question:
          "Zalety i wady stosowania np. dataTestID, filtrowania i zagnieżdżenia lokatorów",
        answer:
          "Playwright umożliwia łatwe odnajdywanie elementów na stronie internetowej poprzez atrybuty data-test-id, co może ułatwić tworzenie testów automatycznych.Playwright oferuje różne metody lokalizowania elementów na stronie, co daje elastyczność w wyborze najlepszej strategii lokalizacji dla danej sytuacji.",
      },
      {
        question:
          "Czym jest zestaw testowy",
        answer:
          "Zestaw testowy to zbiorowy termin używany w dziedzinie testowania oprogramowania, który odnosi się do kompletnego zestawu testów, procedur i danych potrzebnych do przeprowadzenia testów na określonym systemie lub aplikacji. Zestaw testowy zawiera wszystkie elementy niezbędne do przeprowadzenia testów, w tym przypadki testowe, scenariusze testowe, dane testowe, narzędzia testowe oraz wszelkie inne zasoby potrzebne do przeprowadzenia testów.",
      },
      {
        question:
          "Zarządzanie sesją, różnice między logowaniem GUI a API, pliki sesji, tokeny",
        answer:
          "W przypadku logowania przez interfejs graficzny użytkownika, użytkownik dostarcza swoje dane uwierzytelniające poprzez formularz na stronie internetowej.Dane uwierzytelniające są przesyłane do serwera, który sprawdza ich poprawność, a następnie tworzy sesję dla użytkownika. Sesja jest zazwyczaj identyfikowana przez unikalny identyfikator sesji, który jest przechowywany w pliku cookie lub przesyłany w nagłówku HTTP. Logowanie przez interfejs programistyczny aplikacji zazwyczaj polega na przesyłaniu danych uwierzytelniających w formie żądania HTTP, zwykle w formacie JSON lub XML. Pliki sesji są często używane w logowaniu przez interfejs graficzny użytkownika. Tokeny są powszechnie używane w logowaniu przez interfejs programistyczny aplikacji.",
      },
      {
        question: "Testy obciążeniowe vs przeciążeniowe",
        answer:
          "Testy obciążeniowe oceniają wydajność systemu w warunkach normalnego obciążenia, podczas gdy testy przeciążeniowe oceniają zachowanie systemu w warunkach skrajnego obciążenia, które mogą prowadzić do awarii lub degradacji wydajności. ",
      },
      {
        question: "Opisz wzorzec wrapper pattern",
        answer:
          `Wzorzec Wrapper (inaczej nazywany Adapter lub Decorator) jest strukturalnym wzorcem projektowym, który pozwala na dodanie nowej funkcjonalności do istniejącego obiektu poprzez opakowanie go w nowy obiekt, który implementuje tę funkcjonalność. Ten wzorzec jest szczególnie przydatny, gdy chcemy zmodyfikować zachowanie istniejącego obiektu bez konieczności zmiany jego struktury.`,
      },
      {
        question: "Wyjaśnij na czym polega cykl życia błędu",
        answer:
          "Cykl życia błędu zaczyna się od etapu zgłoszenia przez testera. Wówczas otrzymuje on status nowy. W kolejnym kroku jest on przydzielany do dewelopera, który zajmie się jego naprawą. Na czas wprowadzania niezbędnych zmian, błąd otrzymuje status „w realizacji”. Po zakończeniu prac niezbędna jest ponowna weryfikacja błędu, wówczas jego status zmienia się na „do weryfikacji”. Dopiero po weryfikacji i stwierdzeniu, że defekt został naprawiony, cykl dobiega końca, a zgłoszenie otrzymuje status „zamknięte”.",
      },
      {
        question: "Czym jest page object model?",
        answer: `
          Page Object Model to wzorzec projektowania stosowany w testowaniu, zwłaszcza w testowaniu automatycznym interfejsów użytkownika. POM pomaga zorganizować i utrzymać kod testów, szczególnie gdy mamy do czynienia z aplikacjami webowymi.Podstawowe elementy Page Object Model to:
          Klasy Stron: Każda strona w aplikacji ma swoją dedykowaną klasę, która zawiera elementy interfejsu użytkownika (np. pola tekstowe, przyciski) oraz metody do interakcji z tymi elementami.
          
          Klasy Testów: Klasy, które zawierają testy. Testy używają metod i elementów z klas Page Object.
          
          Test Data (Dane Testowe): Wartości, które są używane w testach, zazwyczaj przechowywane w osobnej warstwie, aby było łatwo je zmieniać w razie potrzeby.Oto dwie główne korzyści z korzystania z Modelu Obiektu Strony (Page Object Model):

          Możliwość Ponownego Użycia Kodu (Code Reusability):
          Główną korzyścią z użycia Modelu Obiektu Strony jest możliwość ponownego użycia kodu. Ponieważ używamy różnych klas do oddzielnego reprezentowania stron, zamiast używać zduplikowanych lokalizatorów i metod, możemy używać lokalizatorów i metod odpowiedniej klasy dla strony w różnych rodzajach scenariuszy testowych, po prostu tworząc obiekt klasy strony w klasie testowej lub importując klasę do klasy testowej.
          
          Łatwość Utrzymania Kodu:
          Tworząc Model Obiektu Strony, tworzymy oddzielną warstwę dla stron, dzięki czemu możemy oddzielić metody i lokalizatory związane z daną stroną od scenariuszy testowych, które znajdują się w warstwie testowej. W ten sposób możemy utrzymywać kod związany z przepływem testowym w warstwie testowej, a cały kod związany z lokalizatorami i metodami może być utrzymywany przez warstwę Modelu Obiektu Strony.`,
      },
      {
        question: `Jakie są korzyści z zastosowania metodyki testów zwanej "Behavior-Driven Development`,
        answer:
          "BDD integruje praktyki programowania, testowania i analizy wymagań, poprawiając komunikację między zespołem programistycznym a zespołem testowym oraz zespołem biznesowym.",
      },
      {
        question: `Jakie są trzy rodzaje testów wydajności?`,
        answer:
          "Rodzaje testów wydajności to testy obciążeniowe, testy wydajnościowe i testy skalowalności.",
      },
      {
        question: `Czym różni się testowanie jednostkowe od testowania integracyjnego?`,
        answer:
          "Testowanie jednostkowe skupia się na testowaniu pojedynczych komponentów, podczas gdy testowanie integracyjne sprawdza, czy te komponenty współpracują ze sobą poprawnie jako całość.",
      },
      {
        question: `Jak przygotować środowisko testowe?`,
        answer: `Przygotowanie środowiska do testów może różnić się w zależności od rodzaju testów (manualnych czy automatycznych) oraz technologii, którą używasz.Zainstaluj Niezbędne Narzędzia:
        Dla testów automatycznych: Zainstaluj frameworki do testowania oraz odpowiednie biblioteki i narzędzia zależne od języka programowania,Skonfiguruj Środowisko Deweloperskie:
        Utwórz lokalne lub zdalne środowisko deweloperskie, które będzie reprezentować produkcję.
        Skonfiguruj bazę danych do testów, uwzględniając migracje i dane testowe.
        3. Instalacja i Konfiguracja Przeglądarek:
        Jeśli testujesz interfejs użytkownika, upewnij się, że masz zainstalowane przeglądarki, których zamierzasz używać.
        Dla testów automatycznych interfejsu użytkownika, zainstaluj i skonfiguruj odpowiednie sterowniki (np. chromedriver).
       Zarządzanie Zależnościami:
        Skonfiguruj managera zależności, jeśli korzystasz z jakichś narzędzi zewnętrznych.
        5. Skonfiguruj Narzędzia Do Continuous Integration (CI):
        Utwórz skrypty do automatycznej kompilacji, testowania i wdrażania kodu.
        Zintegruj swoje repozytorium z platformą CI (np. Jenkins, Travis CI, GitLab CI).
        6. Testowanie API:
        Skonfiguruj środowisko do testowania interfejsów API, uwzględniając autoryzację, tokeny dostępu itp.
        7. Zarządzanie Testowymi Danymi:
        Przygotuj dane testowe, które będą używane w trakcie testów.
        Skonfiguruj środowisko tak, aby można było łatwo przywrócić bazę danych do stanu początkowego.
        8. Testy Bezpieczeństwa (opcjonalnie):
        Przeprowadź testy bezpieczeństwa, jeśli są one istotne dla Twojej aplikacji.
        9. Dokumentacja:
        Stwórz dokumentację dotyczącą konfiguracji środowiska testowego i procesu testowania.
        10. Monitorowanie i Raportowanie:
        Skonfiguruj mechanizmy monitorowania testów i raportowania wyników.
        Pamiętaj, że powyższe kroki są ogólne, a konieczne kroki mogą się różnić w zależności od konkretnej technologii i narzędzi używanych w projekcie.`,
      },
      {
        question: `Skąd wiemy, że aktualne zachowanie oprogramowania jest poprawne czy jest to błąd?`,
        answer:
          `Oczekiwania użytkownika: Jeśli zachowanie oprogramowania spełnia oczekiwania użytkownika, jest to poprawne. W przeciwnym razie może to wskazywać na błąd.
          Wymagania funkcjonalne: Zachowanie oprogramowania powinno być zgodne z określonymi wymaganiami i specyfikacją. Niezgodność może wskazywać na błąd.
          Normy i standardy: Oprogramowanie powinno przestrzegać odpowiednich norm i standardów. Niezgodność może wskazywać na błąd.
          Stabilność i spójność: Poprawne oprogramowanie działa stabilnie i spójnie w różnych sytuacjach. Niż stabilność lub spójność mogą wskazywać na błąd.
          Testowanie i weryfikacja: Oprogramowanie powinno być przetestowane i zweryfikowane przed wdrożeniem. Jeśli testy potwierdzają poprawność, jest to dobre. Być może ze względu na swoje doświadczenie i znajomość oprogramowania to tester określa co jest dobre a co nie Często w projektach agile dokumentacja jest na tyle uboga, że np. obecność na codziennych stand-upach to główne źródło wiedzy o aktualnych zmianach w oprogramowaniu.`,
      },
      {
        question: `Na co nalezy zwrócić uwagę przy zgłaszaniu błędu?`,
        answer:
          "Jest to tytuł, kroki do zreprodukowania, aktualny rezultat, wersja oprogramowania, oczekiwne zachowanie, zrzuty ekranu. Warto tutaj wskazać na konfigurację środowiska na jakim występuje błąd, czy próbowaliśmy go zreprodukować w innym środowisku, być może na innej wersji językowej oraz na dokładną wersję oprogramowania z możliwym zrzutem ekranu albo filmem.",
      },
    ],
  },

  mutations: {
    randomTestQuestion(state) {
      state.testQuestions.sort(() => Math.floor(Math.random() - 0.5));
    },
  },
  actions: {
    testQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomTestQuestion");
      }, 5000);
    },

    randomTestQuestion(context) {
      context.commit("randomTestQuestion");
    },
  },
};
