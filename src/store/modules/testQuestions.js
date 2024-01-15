export default {
  namespaced: true,

  state: {
    testQuestions: [
      {
        question: "Po co testujemy aplikacje?",
        answer:
          "Testowanie oprogramowania ma na celu sprawdzenie jego poprawnego działania oraz zebranie informacji na jego temat. Gdy testy zakończą się niepowodzeniem, bardzo ważne jest, aby struktura testów jednostkowych zawierała przydatne błędy.Testowanie oprogramowania pozwala ocenić jego jakość i zmniejszyć ryzyko wystąpienia awarii podczas eksploatacji.",
      },
      {
        question: "Czym jest testowanie?",
        answer:
          "Testowanie to proces oceny oprogramowania w celu zapewnienia, że działa ono zgodnie z oczekiwaniami i spełnia określone wymagania. Jest to nieodzowna część cyklu życia projektu programistycznego, pomagająca zidentyfikować błędy, potwierdzić poprawność działania oraz zapewnić, że oprogramowanie spełnia określone standardy jakości.",
      },
      {
        question: "Czym jest testowanie dynamiczne?",
        answer:
          "Testowanie dynamiczne polega na konieczności uruchomienia testowanego modułu lub systemu. Jest to proces, który pozwala na sprawdzenie zachowania i funkcjonalności systemu w czasie rzeczywistym. Przez testowanie dynamiczne można zidentyfikować potencjalne błędy i problemy, które mogą wystąpić podczas działania systemu. Jest to ważna część procesu testowania oprogramowania, umożliwiająca weryfikację, czy system działa zgodnie z oczekiwaniami.",
      },
      {
        question: "Czym jest piramida testów?",
        answer: `Piramida testów to model hierarchii różnych typów testów w ramach procesu testowania oprogramowania. Piramida ma na celu zrównoważenie ilości testów w zależności od ich kosztu, czasu wykonania i stabilności. Na niższym poziomie piramidy znajdują się testy, które są tańsze, szybsze i bardziej stabilne, dlatego powinno ich być wykonanych większa ilość - stanowią one fundament piramidy. Na szczycie piramidy znajdują się testy, które są bardziej czasochłonne, mniej stabilne i wymagają większego zaangażowania ludzkiego, dlatego są one mniej liczne. Dzięki temu, piramida testów umożliwia efektywne zarządzanie procesem testowania, zapewniając odpowiednią jakość oprogramowania przy optymalnym wykorzystaniu zasobów. Testy jednostkowe (Unit Tests):

          Charakterystyka: Testy jednostkowe sprawdzają indywidualne jednostki kodu, takie jak funkcje, metody, czy klasy.
          Częstotliwość: Bardzo często.
          Cel: Zapewnienie, że pojedyncze elementy kodu działają zgodnie z oczekiwaniami.
          Testy integracyjne (Integration Tests):
          
          Charakterystyka: Testy integracyjne sprawdzają współpracę między różnymi jednostkami kodu, a także integrację zewnętrznych zależności.
          Częstotliwość: Regularnie, ale mniej często niż testy jednostkowe.
          Cel: Upewnienie się, że komponenty działają poprawnie współpracując ze sobą.
          Testy systemowe (System Tests):
          
          Charakterystyka: Testy systemowe oceniają kompletną funkcjonalność systemu w kontekście zdefiniowanych wymagań.
          Częstotliwość: Mniej często niż testy integracyjne.
          Cel: Zweryfikowanie, czy cały system działa zgodnie z oczekiwaniami.
          Testy akceptacyjne (Acceptance Tests):
          
          Charakterystyka: Testy akceptacyjne sprawdzają, czy oprogramowanie spełnia oczekiwania użytkowników końcowych.
          Częstotliwość: Najrzadziej, zazwyczaj przed wdrożeniem.
          Cel: Potwierdzenie gotowości oprogramowania do dostarczenia klientowi.
          `,
      },
      {
        question: "Jaka jest różnica pomiędzy firmware, a software?",
        answer:
          "Oprogramowanie (software) odnosi się do ogólnego pojęcia programów komputerowych, które są zainstalowane na urządzeniach i wykonują różnorodne zadania. Są to aplikacje, systemy operacyjne, gry, edytory tekstowe i wiele innych. Oprogramowanie może być zainstalowane, aktualizowane i odinstalowywane przez użytkownika w celu zmiany funkcjonalności urządzenia.Natomiast firmware to specyficzny rodzaj oprogramowania wbudowanego w sprzęt, takiego jak urządzenia elektroniczne, komputery, smartfony, konsolki, routery itp. Firmware jest zwykle zapisane w pamięci stałej urządzenia, na przykład w mikrokontrolerze lub pamięci flash. Często jest to niskopoziomowe oprogramowanie kontrolujące podstawowe funkcje i zachowanie sprzętu. Przykładem firmware'u może być BIOS w komputerze lub firmware w systemie Android w smartfonie.",
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
          "Testy manualne Wykonywane są przez testerów, którzy ręcznie uruchamiają testy, wykonują kroki testowe i obserwują rezultaty, wymagają interakcji człowieka, który podejmuje decyzje i ocenia wyniki testów. Natomiast testy automatyczne wykorzystują narzędzia i skrypty do automatyzacji procesu testowania.Testy są pisane jako skrypty, które wykonują określone czynności i sprawdzają oczekiwane wyniki. Wykonuje testy szybciej i bardziej powtarzalnie niż testowanie manualne.",
      },
      {
        question:
          "Kiedy należy skończyć testować oprogramowanie? Podaj przykłady.",
        answer:
          "Wystarczające pokrycie wymagań: Testy zostały wykonane w wystarczającym stopniu, aby pokryć co najmniej 95% wszystkich ustalonych wymagań. Wszystkie podstawowe funkcje i scenariusze zostały przetestowane zgodnie z planem.Zagęszczenie defektów: Liczba defektów przypisanych do poszczególnych wymagań jest na akceptowalnie niskim poziomie. Na przykład, nie więcej niż 5 defektów przypisanych do każdego z rozdziału wymagań.Koszt: Testowanie trwa już od pewnego czasu, a dalsze testy generowałyby nieproporcjonalne koszty w porównaniu do oczekiwanych korzyści. Na podstawie analizy kosztów i zysków, decyduje się o zakończeniu testowania.Ramy czasowe: Testowanie jest zaplanowane na określony okres, na przykład 3 miesiące, i nie można go przekroczyć ze względu na ustalone ograniczenia czasowe projektu.",
      },
      {
        question: "Czym jest testowanie Nie-funkcjonalne?",
        answer:
          "Oczywiście, testowanie nie funkcjonalne to ważna część procesu testowania oprogramowania. Obejmuje ono sprawdzanie cech i atrybutów oprogramowania, które nie są związane bezpośrednio z jego funkcjonalnością, ale mają wpływ na jakość, wydajność, użyteczność i inne aspekty systemu. ",
      },
      {
        question:
          "Co zrobić gdy nie jesteśmy pewni czy mamy do czynienia z błędem?",
        answer:
          "Zawsze warto poszukać jakiś twardych dowodów na które możemy się powołać przy zgłaszaniu błędu. Można zasięgnąc wiedzy u programistów, project/product managera, product ownera i innych. Często bywa tak, że zastana sytuacja jest nie do zaakceptowania, np. oprogramowanie/strona www otwiera się minutę bądź dłużej ale nie znajdziemy w wymaganiach informacji o czasie potrzebnym na otwarcie. Pamiętajcie wtedy, że zawsze można zgłosić defekt powołując się na użytkownika ze zdrowym rozsądkiem (tzw. 'reasonable end user') który najnormalniej nie będzie czekał.",
      },
      {
        question: "Od czego zależy ryzyko projektowe i co się na nie składa?",
        answer:
          "Trzeba w tym miejscu wymienić wpływ i możliwość wystąpienia błędu. Ocena wpływu to zadanie analityka testów (business value) podczas gdy ocena możliwości wystąpienia błędu to zadanie dla technicznego analityka testów (technical impact). Dobrze jest tu także opisać jak wygląda identyfikacja ryzyk, różnice pomiędzy ryzykiem projektowym, a produktowym i co robimy żeby je zminimalizować.",
      },
      {
        question: "Jak postępować z informacją, że u mnie działa?",
        answer:
          "Dobrze jest upewnić się, czy programista reprodukuje defekt na tym samym środowisku i postępuje dokładnie krok po kroku z naszymi instrukcjami. Byćmoże jest jakas nieznaczna różnica która ma wpływ na ostateczny rezultat. Zdarza się też, że programiści nie używają wersji instalacyjnej oprogramowania, ale budują je z kodu. Niezależnie od tego, o ile to oczywiście możliwe, dobrze jest testować na środowisku które jest jaknajbardziej zbliżone do tego w którym pracuje klient.",
      },
      {
        question: "Czym jest testowanie statyczne?",
        answer:
          "Można również wykonywać testy bez uruchamiania testowanego obiektu – takie testowanie nazywa się testowaniem statycznym, a zatem testowanie obejmuje również przegląd produktów pracy takich jak: wymagania, historyjki użytkownika i kod źródłowy.   ",
      },
      {
        question: "Jakie są cele testowania?",
        answer:
          "zapobieganie defektom poprzez dokonywanie oceny produktów pracy, takich jak: wymagania, historyjki użytkownika, projekt i kod; • weryfikacja, czy zostały spełnione wszystkie wyspecyfikowane wymagania; • sprawdzanie, czy przedmiot testów jest kompletny i walidowanie, czy działa zgodnie z oczekiwaniami użytkowników i innych interesariuszy; • budowanie zaufania do poziomu jakości przedmiotu testów; • wykrywanie defektów i awarii, a tym samym zmniejszenie poziomu ryzyka związanego z niedostateczną jakością oprogramowania; • dostarczanie interesariuszom informacji niezbędnych do podejmowania świadomych decyzji (dotyczących zwłaszcza poziomu jakości przedmiotu testów);",
      },

      {
        question: "Co to są testy jednostkowe?",
        answer:
          "Testy jednostkowe są to testy sprawdzające małe części kodu(funkcje,metody).Każdy test jest niezależny od poprzedniego oraz w jak najmniejszym stopniu opiera się na zewnętrznych zależnościach (wręcz nie powinno ich być!). Test może zakończyć się sukcesem lub porażką (ang. fail).",
        secondAnswer: "",
      },
      {
        question: "Opisz działanie funkcji expect",
        answer:
          "TZwraca ona obiekt z metodami, które umożliwiają wybranie wygodnego operatora logicznego oraz tego co dokładnie będziemy porównywać.",
      },
      {
        question: "różnica pomiędzy testowaniem a debugowaniem",
        answer:
          "Testowanie i debugowanie to dwie różne czynności. Wykonywanie testów pozwala ujawnić awarie, które  są skutkiem defektów w oprogramowaniu, natomiast debugowanie to czynność związana  z wytwarzaniem oprogramowania, która polega na znajdowaniu, analizowaniu i usuwaniu tych  defektów",
      },
      {
        question: "Czym są testy jednostkowe w Vue",
        answer:
          "to zestaw funkcji użytkowych mających na celu uproszczenie testowania komponentów Vue.js. Zapewnia pewne metody montowania i interakcji z komponentami Vue w izolowany sposób.",
      },
      {
        question: "Dlaczego testowanie jest niezbędne?",
        answer:
          "Rygorystyczne testowanie modułów i systemów oraz związanej z nimi dokumentacji może pomóc w zmniejszeniu ryzyka wystąpienia awarii podczas eksploatacji oprogramowania. Wykrycie, a następnie usunięcie defektów, przyczynia się do podniesienia jakości modułów lub systemów. Ponadto testowanie oprogramowania może być niezbędne do spełnienia wymagań wynikających z umów, przepisów prawa bądź norm/standardów branżowych.",
      },
      {
        question: "Czym jest framework Jest",
        answer:
          "Jest to framework testowy JavaScript, który koncentruje się na prostocie. Jedną z jego unikalnych cech jest możliwość robienia migawek testów w celu zapewnienia alternatywnego sposobu weryfikacji jednostek Twojej aplikacji.",
      },
      {
        question: "siedem zasad testowania",
        answer:
          "1. Testowanie ujawnia usterki, ale nie może dowieść ich braku Testowanie może wykazać obecność defektów, ale nie może dowieść, że oprogramowanie jest od nich wolne. Tym samym testowanie zmniejsza prawdopodobieństwo, że w oprogramowaniu pozostaną niewykryte defekty, ale sam fakt niewykrycia defektów nie stanowi dowodu poprawności oprogramowania. Testowanie gruntowne jest niemożliwe   Przetestowanie wszystkiego (tj. wszystkich kombinacji danych wejściowych i warunków wstępnych) jest   możliwe tylko w najprostszych przypadkach. W związku z tym, wysiłki w testowaniu powinny być   ukierunkowane raczej na analizę ryzyka, techniki testowania i priorytetyzację niż dążenie do testowania.3Wczesne testowanie oszczędza czas i pieniądze          ",
      },
      {
        question: "Z jakich powodów mogą powstawać błędy?",
        answer:
          "Pomyłki mogą pojawiać się z wielu powodów, takich jak: presja czasu; • omylność człowieka; • brak doświadczenia lub niedostateczne umiejętności uczestników projektu; • problemy związane z wymianą informacji między uczestnikami projektu (w tym nieporozumienia dotyczące rozumienia wymagań i dokumentacji projektowej); • złożoność kodu, projektu, architektury, rozwiązywanego problemu i/lub wykorzystywanej technologii; • nieporozumienia dotyczące interfejsów wewnątrz systemu i między systemami, zwłaszcza w przypadku dużej liczby tych systemów; • stosowanie nowych, nieznanych technologii.",
      },
      {
        question: "Pomyłki, defekty i awarie",
        answer:
          "Na skutek pomyłki (błędu) człowieka w kodzie oprogramowania lub w innym związanym z nim produkciepracy może powstać defekt (inaczej zwany usterką lub pluskwą). Pomyłka skutkująca wprowadzeniemdefektu w jednym produkcie pracy może spowodować błąd skutkujący wprowadzeniem defektu winnym, powiązanym produkcie pracy. Przykładem takiej sytuacji jest pomyłka popełniona podczaspozyskiwania wymagań, która może prowadzić do defektu   w wymaganiach, co spowoduje pomyłkę programisty skutkującą wprowadzeniem defektu w kodzie.Wykonanie kodu zawierającego defekt może spowodować awarię, ale nie musi dziać się tak        ",
      },
      {
        question: "Jak działają testy jest",
        answer:
          "pierwszym argumentem jest opis testu, kolejnym funkcja w której wywołujemy expect sprawdzającą poprawność wartości.",
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
        question: "Jak połączyć jest z typescriptem?",
        answer:
          "są dwa sposoby na integrację JESTa z Typescriptem, jeden sprawdza typy, drugi korzysta z wygenerowanych plików js. My oczywiście chcemy sprawdzać typy, więc użyjemy ts-jest!",
      },
      {
        question:
          "Jakie są fazy testowania związane z cyklem życia testowania oprogramowania?",
        answer:
          "cykl życia oprogramowania: Okres czasu rozpoczynający się kiedy pojawił się pomysł na oprogramowanie i kończący się gdy oprogramowanie nie jest już dostępne do użytku. Zazwyczaj cykl życia oprogramowania zawiera fazę koncepcji, fazę wymagań, fazę projektowania, fazę implementacji, fazę testów, fazę instalacji i zastępowania, fazę wykorzystania produkcyjnego i pielęgnowania oraz czasami, fazę wycofania. Uwaga: te fazy mogą na siebie zachodzić lub mogą być wykonywane iteracyjnie.",
      },
      {
        question: "Czym jest Mocha",
        answer:
          "Mocha to framework testowy JavaScript, który koncentruje się na elastyczności. Ze względu na tę elastyczność pozwala wybierać różne biblioteki, aby spełnić inne wspólne funkcje, takie jak szpiegowanie (np. Sinon) i asercje (np. Chai). Inną unikalną cechą Mocha jest to, że oprócz Node.js może również wykonywać testy w przeglądarce.",
      },
      {
        question: "Czym jest component testing?",
        answer:
          "Aby przetestować większość komponentów Vue, należy je zamontować na DOM aby w pełni potwierdzić, że działają.W rezultacie stworzono ramy testowania komponentów, aby dać użytkownikom możliwość wykonywania tego w sposób niezawodny, zapewniając jednocześnie udogodnienia specyficzne dla Vue, takie jak integracja z Vuex, routerem Vue i innymi wtyczkami Vue.",
      },
      {
        question: "Różnice pomiędzy weryfikacją a walidacją?",
        answer: `Weryfikacja: Proces oceny produktu pod kątem zgodności z określonymi specyfikacjami i wymaganiami. To sprawdzenie, czy produkt jest zbudowany zgodnie z założeniami projektowymi.
        Walidacja: Proces oceny produktu pod kątem spełnienia rzeczywistych potrzeb użytkownika i czy produkt spełnia zamierzone cele biznesowe. To sprawdzenie, czy zbudowany produkt jest tym, czego rzeczywiście potrzebuje klient.`,
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
          "Model cyklu życia oprogramowania opisuje rodzaje czynności wykonywanych na poszczególnych etapach projektu wytwarzania oprogramowania oraz powiązania logiczne i chronologiczne między tymi  czynnościami. Istnieje wiele różnych modeli cyklu życia oprogramowania, a każdy z nich wymaga  innego podejścia do testowania",
      },
      {
        question: "Czym są smoke testy (testy dymne)?",
        answer:
          "Smoke Testy to wybrany podzbiór wszystkich przypadków testowych, które pokrywają główne funkcjonalności. Selekcja takich testów umożliwia szybką weryfikację, czy kluczowe funkcjonalności programu działają poprawnie – ma to duże znaczenie w automatyzacji.",
      },
      {
        question: "Czym są wartości brzegowe?",
        answer:
          "Analizęi ustalenie wartości brzegowych wykonuje sięw celu zaprojektowania testu celującego bezpośrednio w krawędzie przedziału (warunku) z uwagi na to, że jest to miejsce szczególnie narażone na błędy.Aplikacja zawiera filtr, który używa zakresu dat do zawężenia prezentowanych wyników (wyszukiwanie). Załóżmy, że filtr oferuje opcje wyszukiwania: bieżący miesiąc, bieżący rok, poprzedni rok. Trudno sobie wyobrazić, że tester będzie wprowadzał 059d85d3d9ef86c601f68775a9b1e31c059d85d3d9ef86c601f68775a9b1e31c 132 Testowanie oprogramowania. Podręcznik dla początkujących (generował) co najmniej 365x2 (2 lata — historia) wartości w celu weryfikacji zachowania aplikacji. Bywa, że warunek ilościowy nie jest jedynym i dodatkowo należy zróżnicowaćdane, co zwielokrotniłoby ilośćwierszy. W tym celu należy posłużyćsię analiząwartości brzegowych, tzn. maksymalnymi i minimalnymi wartościami, które  będą wykorzystywane w decyzyjnym warunku filtra.",
      },
      {
        question: "kiedy nie automatyzować?",
        answer:
          "Nie powinniśmy próbować automatyzacji testy negatywne lub awaryjne , ponieważ w przypadku tych testów testerzy muszą myśleć analitycznie, a testy negatywne nie są naprawdę proste, aby dać wynik pozytywny lub negatywny, który może nam pomóc.",
      },
      {
        question: "Czym są testy Uat?",
        answer:
          "Testy UAT (User Acceptance Testing) są rodzajem testów oprogramowania, które są przeprowadzane, aby sprawdzić, czy system lub aplikacja spełnia wymagania i oczekiwania użytkowników. Jest to końcowy etap testowania przed wdrożeniem systemu lub aplikacji do użytku przez rzeczywistych użytkowników.Celem testów UAT jest zapewnienie, że system działa zgodnie z oczekiwaniami użytkowników i spełnia określone kryteria akceptacji. Testy te są zazwyczaj przeprowadzane przez rzeczywistych użytkowników, którzy mają wiedzę i doświadczenie w korzystaniu z systemu lub aplikacji w kontekście swojej pracy lub działalności.",
      },
      {
        question: "Co to jest suma kontrolna?",
        answer:
          "Suma kontrolna (ang. checksum) to liczba wygenerowana na podstawie danych, których poprawnośćma ona potwierdzićw przyszłości.Ów ciąg znaków generuje sięna przyk ład dla plików wymiany danych pomiędzy systemami. Plik z sumąkontrolnąprzekazywany jest wraz ze zbiorem głównym danych. Aplikacja odbierająca (wczytująca) otrzymany plik źródłowy równieżgeneruje sumękontrolnąi porównuje jąz plikiem sumy otrzymanej z zewnętrznego systemu. Jeżeli obie sumy sięzgadzają, to można przyjąć, że dane w trakcie przesyłania nie uległy uszkodzeniu. W przypadku wykrycia niegodności należy przyjąć, że dane uległy przekłamaniu. Specyficznym rodzajem sumy kontrolnej sąliczby kontrolne na przykład w numerze PESEL lub NIP.",
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
        question: "czym jest testowanie automatyzujące",
        answer:
          "Testowanie automatyczne to technika testowania oprogramowania służąca do testowania i porównywania rzeczywistych wyników z oczekiwanymi.Koszty automatyzacji są początkowo naprawdę wyższe. Obejmuje koszt narzędzia, następnie koszt zasobu testującego automatyzację i jego szkolenie.Ale kiedy skrypty są gotowe, można je wykonywać setki razy wielokrotnie z tą samą dokładnością i dość szybko. Pozwoli to zaoszczędzić wiele godzin ręcznego testowania. Tak więc koszt stopniowo maleje i ostatecznie staje się opłacalną metodą Testowanie regresji .",
      },
      {
        question: "Czym jest BDD i TDD. Omów te dwa pojęcia",
        answer:
          "TDD (Test-Driven Development) jest podejściem do tworzenia oprogramowania, w którym główną ideą jest w pierwszej kolejności pisanie testów do nieistniejącej funkcjonalności, a dopiero potem napisanie kodu implementującego tę funkcjonalność. BDD (Behavior-Driven Development) to podejście będące rozwinięciem TDD. Testy pisane z wykorzystaniem składni języka naturalnego (np. zdań w języku angielskim), które wyrażają zachowanie i oczekiwane rezultaty. Kryteria akceptacyjne są pisane w formie scenariuszy i korzystają ze słów kluczowych Given (początkowy warunek), When (opis występującego zdarzenia) oraz Then (oczekiwany rezultat). Dużą zaletą podejścia BDD jest to, że testy zrozumiałe są dla pracowników nietechnicznych. Mogą one również stanowić swego rodzaju dokumentację systemu.",
      },
      {
        question: "Jakie są rodzaje testów",
        answer:
          "Testy funkcjonalne (czarnoskrzynkowe) analizują zewnętrzne zachowanie oprogramowania, traktując je jak czarną skrzynkę, Testy niefunkcjonalne – określają parametry oprogramowania takie jak: wydajność, użyteczność, zdolność do pracy na różnych platformach, Testy białoskrzynkowe (strukturalne) – testy te mogą być oparte na architekturze systemu lub kodzie źródłowym aplikacji. Bazują na budowie wewnętrznej, która jest zwykle „ukryta” przed użytkownikiem końcowym, Testy regresji – ponowne przetestowanie programu po dokonaniu w nim modyfikacji, w celu sprawdzenia, że w wyniku zmian nie powstały nowe defekty lub nie ujawniły się istniejące wcześniej.",
      },
      {
        question: "Czym są i kto tworzy testy jednostkowe?",
        answer:
          "Testy jednostkowe (unit tests) to zbiór testów, które weryfikują, czy jednostka kodu (np. metoda, klasa, serwis) działa zgodnie z oczekiwaniami. Są one zwykle tworzone przez programistów w ramach wytwarzania oprogramowania. Testy te uruchamiane są w izolacji, co oznacza, że nie jesteśmy w żaden sposób związani z innymi elementami systemu. Testy jednostkowe są nieodłącznym elementem wytwarzania oprogramowania w podejściu TDD (Test Driven Development).",
      },
      {
        question: "Jakie informacje powinny się znaleźć w zgłoszeniu defektu?",
        answer:
          "Szczegóły zgłoszenia często zależą od narzędzia (tzw. bugtrackera) lub od przyjętego podejścia w danej organizacji. Można jednak wskazać kilka elementów, które zwykle są niezbędne do zreprodukowania i naprawienia defektu. nazwa/tytuł (często ze wskazaniem jakiego obszaru lub jakiej aplikacji dotyczy defekt) kroki do zreprodukowania  aktualny oraz oczekiwany rezultat wersja oprogramowania/branch informacja o środowisku informacja, czy występuje na innym (wyższym) środowisku data i czas wystąpienia  zrzut ekranu lub film",
      },
      {
        question: "Czym są testy end-to-end?",
        answer:
          "Podczas gdy testy jednostkowe zapewniają programistom pewien stopień pewności, testy jednostkowe i modułowe mają ograniczone możliwości zapewnienia całościowego pokrycia aplikacji po wdrożeniu w środowisku produkcyjnym.W rezultacie testy end-to-end (E2E) zapewniają pokrycie tego, co jest prawdopodobnie najważniejszym aspektem aplikacji: co się dzieje, gdy użytkownicy faktycznie korzystają z twoich aplikacji. Innymi słowy, testy E2E weryfikują wszystkie warstwy w Twojej aplikacji.",
        secondAnswer:
          "obejmuje nie tylko kod frontendu, ale wszystkie powiązane usługi i infrastrukturę backendu, które są bardziej reprezentatywne dla środowiska, w którym będą znajdować się Twoi użytkownicy. Testując, jak działania użytkowników wpływają na Twoją aplikację, testy E2E są często kluczem do większej pewności, czy aplikacja działa poprawnie, czy nie.",
      },
      {
        question: "Wymień kategorie testów",
        answer:
          "Testy jednostkowe - Testy jednostkowe umożliwiają testowanie poszczególnych jednostek kodu.Pisząc dokładne, znaczące testy, zyskujesz pewność, że w miarę tworzenia nowych funkcji lub refaktoryzacji kodu Twoja aplikacja pozostanie funkcjonalna i stabilna.  Celem testów jednostkowych jest zapewnienie programistom zaufania do ich kodu.,testy komponentów,testy end-to-end",
      },
      {
        question: "Jakie są cele testów?",
        answer:
          "Wśród głównych celów testowania wymienić należy znajdowanie błędów oraz zapobieganie defektom.Rzetelnie przeprowadzony proces testowania wpływa pozytywnie na jakość wytworzonego oprogramowania oraz dostarcza deweloperom informacji niezbędnych do dalszego rozwoju produktu.",
      },
      {
        question: "Od czego zależy ryzyko projektowe i co się na nie składa?",
        answer:
          "Trzeba w tym miejscu wymienić wpływ i możliwość wystąpienia błędu. Ocena wpływu to zadanie analityka testów (business value) podczas gdy ocena możliwości wystąpienia błędu to zadanie dla technicznego analityka testów (technical impact). Dobrze jest tu także opisać jak wygląda identyfikacja ryzyk, różnice pomiędzy ryzykiem projektowym, a produktowym i co robimy żeby je zminimalizować.",
      },
      {
        question: "Co to są testy wydajnościowe",
        answer:
          "Są to testy przeprowadzane w celu oceny czy nasza aplikacja spełnia wymagania dokumentacji w zakresie możliwego jej obciążenia. Celem przeprowadzenia takich testów będzie weryfikacja czy nasza aplikacja działa dobrze (w określony sposób) pod danych obciążeniem. Przy weryfikacji wydajności aplikacji koniecznie trzeba zwrócić uwagę na czasy odpowiedzi aplikacji, czas reakcji, niezawodność, wykorzystanie zasobów czy jej skalowalność. Celem takich testów jest znalezienie tzw. „wąskich gardeł”. ",
      },
      {
        question: "Co to jest przypadek testowy?",
        answer:
          "Przypadek testowy to nic innego jak zestaw warunków lub zmiennych, w ramach których tester ustala, czy testowany system spełnia wymagania lub działa poprawnie.",
      },
      {
        question: "czym jest FIRST?",
        answer:
          "Fast oznacza, że uruchomienie testów powinno być szybkie, a dzięki temu informacja zwrotna o wyniku testów jest również przekazana w szybkim czasie.Isolated oznacza, że testy nie powinny zależeć od siebie. Dzięki temu testy można uruchamiać osobno w całym zestawie i zawsze dają te same wyniki.Repeatable oznacza, że testy powinny być powtarzalne w każdych warunkach. Wobec tego powinny one zależeć tyko od kodu, który testują. Self-validating oznacza, że każdy test powinien dać klarowną informację o tym, czy przeszedł pozytywnie czy nie. Jeśli nie przeszedł pozytywnie, to powinien dać informację co się stało oraz dlaczego nie przeszedł.Timely oznacza, żeby testy były pisane razem z nowym kodem, czyli aby były dostarczone na czas. Niedopuszczalna jest sytuacja, że testy powstają po jakimś czasie.   ",
      },
      {
        question: "soap vs rest?",
        answer:
          "Które rozwiązanie jest najbardziej wydajne? Okazuje się, że REST. Ze względu na swój mały rozmiar wymaga mniejszej przepustowości łącza niż SOAP. Co więcej, dla takiej samej ilości danych wymaga mniejszej mocy obliczeniowej. Dzięki temu działa szybciej, nawet o kilkadziesiąt procent, od SOAP. Wydajność różni się także ze względu na cache’owanie wywołań API, które, w przeciwieństwie do SOAP, umożliwia REST.Jeśli zależy Ci na dużej liczbie formatów, powinieneś zdecydować się na REST. Dzięki niemu dane można wymieniać w formacie JSON, XML, HTML, YAML, a także jako zwykły tekst. Daje więc Ci to duże pole manewru.  SOAP umożliwia komunikację tylko przy użyciu XML. Jednak dostępny jest dla zdecydowanie większej ilości protokołów niż REST, który uwzględnia jedynie HTTP. Tak więc SOAP wykorzystasz łącznie z SMTP, UDP i oczywiście z HTTP.  ",
      },
      {
        question: "Statusy Odpowiedzi HTTP",
        answer:
          "Statusy odpowiedzi HTTP to nic innego jak informacja wysłana nam przez serwer HTTP do aplikacji klienta. Kody odpowiedzi protokołu HTTP dzielimy na kilka kategorii. Kody informacyjne 1XX, kody powodzenia 2XX, kody przekierowań 3XX, kody błędu aplikacji klienta 4XX, oraz kody błędu serwera HTTP – 5XX.401	Unauthorized	Nieautoryzowany dostęp – żądanie zasobu, który wymaga uwierzytelniania.",
      },
      {
        question: "Czym jest model V",
        answer:
          "Model V precyzyjnie pokazuje zależności między kolejnymi etapami projektu. Każdy etap projektowania kończy się stworzeniem danych wejściowych dla następnej fazy oraz do korespondującej z nim fazy weryfikacji.",
      },
      {
        question: "Wymień typy testów wydajnościowych",
        answer:
          "Load testing – czyli sprawdzenie zdolności działania aplikacji przy oczekiwanym ruchu użytkowników.  Stress testy – polegają na testowaniu aplikacji przy użyciu obciążenia znacznie większego aniżeli założono w dokumentacji. Celem tego jest weryfikacja jak aplikacja radzi sobie z dużym ruchem i przetwarzaniem danych. Tutaj możemy określić punkty krytyczne aplikacji. W jakim celu – skorzystamy tylko z dwóch słów – Black Friday.   Endurance testing – mają na celu weryfikację i upewnienie się, że oprogramowanie może wytrzymać oczekiwane i określone obciążenie przez długi czas. Spike testy – tym sposobem testujemy sobie reakcję aplikacji na nagłe duże skoki obciążenia generowane przez użytkowników. Przykład – jesteśmy firmą dostarczającą relacje z wydarzeń sportowych – finał Mistrzostw Świata i Polska zdobywa bramkę w finale. Wówczas możemy spodziewać się znacznego (większego niż normalnie ruchu).  Scalability tests – czyli tzw. testy skalowalności. Testy sprawdzające zachowanie aplikacji na zwiększony ruch. Tutaj chcemy wydobyć informację na temat skuteczności aplikacji do zwiększania skali przy zwiększaniu się obciążenia. ",
      },
      {
        question: "Czym są testy dymne?",
        answer:
          "Testy dymne (z ang. smoke tests) to weryfikacja wszystkich kluczowych ścieżek, które potwierdzają, że najważniejsze funkcjonalności aplikacji czy oprogramowania działają prawidłowo. Testy te przebiegają szybko, dając korzyści w postaci niemal natychmiastowej informacji zwrotnej. Można wykonać je ręcznie lub z pomocą zautomatyzowanego narzędzia.",
      },
      {
        question: "Co oznacza skrót tdd?",
        answer:
          "TDD – Test-Driven Development jest sposobem czy podejściem do tworzenia oprogramowania w którym główną ideą jest stworzenie w pierwszej kolejności testów dla zaplanowanych funkcjonalności a następnie stworzenie kodu i implementacja tych funkcjonalności. ",
      },
      {
        question: "Co oznacza skrót bdd?",
        answer:
          "BDD czyli Behavior-Driven Development to podejście będące rozwinięciem TDD. Są to testy tworzone z wykorzystaniem składni danego języka, które wyrażają jakieś zachowanie oraz oczekiwane określone rezultaty. Takie testy tworzymy w formie scenariuszy i korzystają ze słów kluczowych w postaci:  Given – warunek początkowy  When – opis tego co będzie wykonywane  Then – oczekiwany rezultat  Zaletą tworzenia tego typu testów jest to, że są one zrozumiałe, również dla osób nietechnicznych. Tak sformułowane przypadki mogą stanowić dobrą podstawę zachowania aplikacji przy tworzeniu dokumentacji.",
      },
      {
        question: "Czy możliwe jest wykonanie kompletnego testu systemu?",
        answer:
          "Niestety nie. Testowanie kompletne, zwane też gruntownym, nie jest możliwe do wykonania. Ilość kombinacji dla każdej zmiennej jest praktycznie nieograniczona. Dodatkową przeszkodą do wykonania takiego zadania jest fakt, iż oprogramowanie zwykle działa na wielu urządzeniach w różnych konfiguracjach. To tym bardziej utrudnia kompleksowość działań.",
      },
      {
        question: "Jakie są korzyści z testowania automatycznego?",
        answer:
          "Korzyści z testowania automatycznego to płynna obsługa powtarzających się przypadków testowych, pomoc w testowaniu dużej matrycy testowej, możliwość wykonywania testów równoległych, zwiększona dokładność, poprzez minimalizację błędów generowane przez człowieka, a także oszczędność czasu i pieniędzy.",
      },
      {
        question: "Czym są przypadki testowe?",
        answer:
          "Przypadki testowe to dokumentacja opisująca szczegółowo kroki do wykonania w celu przetestowania określonej funkcjonalności, elementu lub przypadku użycia systemu. Każdy przypadek testowy jest zaplanowany w taki sposób, aby pokryć różne scenariusze i warunki, a jego celem jest zweryfikowanie, czy dany element spełnia określone wymagania.",
      },
      {
        question: "Czym są scenariusze testowe?",
        answer: `
          Scenariusz testowy to opis sekwencji kroków, działań lub zdarzeń, które mają być wykonane podczas testowania określonego przypadku użycia lub funkcjonalności systemu. W przeciwieństwie do pojedynczego przypadku testowego, który jest bardziej skoncentrowany na konkretnych krokach testowych i oczekiwanych rezultatach, scenariusz testowy obejmuje szerszy zakres i może obejmować kilka przypadków testowych.
          
          Ogólnie rzecz biorąc, scenariusz testowy opisuje interakcje użytkownika z systemem lub zachowanie systemu w konkretnej sytuacji. Jest to bardziej ogólna i elastyczna forma dokumentacji testowej, która może obejmować różne przypadki testowe, warunki i ścieżki.`,
      },
      {
        question: "Czym jest mockowanie?",
        answer:
          "Mockowanie to technika izolowania obiektów testowych poprzez zastępowanie zależności obiektami, które można kontrolować i sprawdzać.",
      },
      {
        question: "Czym jest planowanie testów?",
        answer: `
          Planowanie testów to kluczowy etap w procesie testowania oprogramowania, który pomaga ustalić zakres, cele, strategie i zasoby niezbędne do skutecznego przeprowadzenia testów. Poniżej znajdziesz kluczowe elementy planowania testów`,
        list: `Zakres testów:

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
        question: "Wyjaśnij na czym polega cykl życia błędu",
        answer:
          "Cykl życia błędu zaczyna się od etapu zgłoszenia przez testera. Wówczas otrzymuje on status nowy. W kolejnym kroku jest on przydzielany do dewelopera, który zajmie się jego naprawą. Na czas wprowadzania niezbędnych zmian, błąd otrzymuje status „w realizacji”. Po zakończeniu prac niezbędna jest ponowna weryfikacja błędu, wówczas jego status zmienia się na „do weryfikacji”. Dopiero po weryfikacji i stwierdzeniu, że defekt został naprawiony, cykl dobiega końca, a zgłoszenie otrzymuje status „zamknięte”. Trzeba jednak pamiętać, że cykl życia błędu może się różnić w zależności od organizacji czy charakteru projektu. Zdarza się, że niektóre z etapów są powtarzane nawet kilka razy, zanim osiągną kolejny",
      },
      {
        question: "Czym jest page object model?",
        answer: `
          Page Object Model (POM) to wzorzec projektowania stosowany w testowaniu oprogramowania, zwłaszcza w testowaniu automatycznym interfejsów użytkownika. W skrócie, POM pomaga zorganizować i utrzymać kod testów, szczególnie gdy mamy do czynienia z aplikacjami webowymi.Podstawowe elementy Page Object Model to:

          Page Classes (Klasy Stron): Każda strona w aplikacji ma swoją dedykowaną klasę, która zawiera elementy interfejsu użytkownika (np. pola tekstowe, przyciski) oraz metody do interakcji z tymi elementami.
          
          Test Classes (Klasy Testów): Klasy, które zawierają testy. Testy używają metod i elementów z klas Page Object.
          
          Test Data (Dane Testowe): Wartości, które są używane w testach, zazwyczaj przechowywane w osobnej warstwie, aby było łatwo je zmieniać w razie potrzeby.`,
      },
      {
        question: `Jakie są korzyści z zastosowania metodyki testów zwanej "Behavior-Driven Development (BDD)`,
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
        answer: `Przygotowanie środowiska do testów może różnić się w zależności od rodzaju testów (manualnych czy automatycznych) oraz technologii, którą używasz. Poniżej znajdziesz ogólne kroki, które mogą pomóc w przygotowaniu środowiska do testowania: 1. Zainstaluj Niezbędne Narzędzia:
        Dla testów automatycznych: Zainstaluj frameworki do testowania (np. Jest, Cypress, Selenium, itp.) oraz odpowiednie biblioteki i narzędzia zależne od języka programowania (np. npm dla JavaScript, pip dla Python).
        2. Skonfiguruj Środowisko Deweloperskie:
        Utwórz lokalne lub zdalne środowisko deweloperskie, które będzie reprezentować produkcję.
        Skonfiguruj bazę danych do testów, uwzględniając migracje i dane testowe.
        3. Instalacja i Konfiguracja Przeglądarek:
        Jeśli testujesz interfejs użytkownika, upewnij się, że masz zainstalowane przeglądarki, których zamierzasz używać (np. Chrome, Firefox).
        Dla testów automatycznych interfejsu użytkownika, zainstaluj i skonfiguruj odpowiednie sterowniki (np. chromedriver).
        4. Zarządzanie Zależnościami:
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
          "Takie pytanie pomaga określić, czy kandydat odwołuje się do jakiejkolwiek dokumentacji. A co jeśli nie mamy oficjalnej dokumentacji? Być może ze względu na swoje doświadczenie i znajomość oprogramowania to tester określa co jest dobre a co nie Często w projektach agile dokumentacja jest na tyle uboga, że np. obecność na codziennych stand-up`ach to główne źródło wiedzy o aktualnych zmianach w oprogramowaniu.",
      },
      {
        question: `Na co nalezy zwrócić uwagę przy zgłaszaniu błędu?`,
        answer:
          " jest to tytuł, kroki do zreprodukowania, aktualny rezultat, wersja oprogramowania itd. Warto tutaj wskazać na konfigurację środowiska na jakim występuje błąd, czy próbowaliśmy go zreprodukować w innym środowisku, byćmoże na innej wersji językowej oraz na dokładną wersję oprogramowania z możliwym zrzutem ekranu albo filmem.",
      },
      {
        question: `Na co nalezy zwrócić uwagę przy zgłaszaniu błędu?`,
        answer:
          " jest to tytuł, kroki do zreprodukowania, aktualny rezultat, wersja oprogramowania itd. Warto tutaj wskazać na konfigurację środowiska na jakim występuje błąd, czy próbowaliśmy go zreprodukować w innym środowisku, byćmoże na innej wersji językowej oraz na dokładną wersję oprogramowania z możliwym zrzutem ekranu albo filmem.",
      },
      {
        question: `jak postępować z informacją, że u mnie działa??`,
        answer:
          "Co zrobimy w takiej sytuacji? Z pewnościa nie pozostawimy bez odpowiedzi:) Dobrze jest upewnić się, czy programista reprodukuje defekt na tym samym środowisku i postępuje dokładnie krok po kroku z naszymi instrukcjami. Byćmoże jest jakas nieznaczna różnica która ma wpływ na ostateczny rezultat. Zdarza się też, że programiści nie używają wersji instalacyjnej oprogramowania, ale budują je z kodu. Niezależnie od tego, o ile to oczywiście możliwe, dobrze jest testować na środowisku które jest jaknajbardziej zbliżone do tego w którym pracuje klient.",
      },
      {
        question: `Jakie wyróżniamy typy testów, czym się różnią?`,
        answer:
          "Często ludzie mylą rodzaje testów z poziomami testów i wymieniają tutaj testy modułowe, integracyjne, systemowe i akceptacyjne. W tym przypadku należy wymienić testy funkcjonalne (co oprogramowanie robi), niefunkcjonalne (jak oprogramowanie to robi), strukturalne (jak robi to co robi) i te związane ze zmianą (retesty + regresja).",
      },
      {
        question: `Od czego zależy ryzyko projektowe i co się na nie składa?`,
        answer:
          "Często ludzie mylą rodzaje testów z poziomami testów i wymieniają tutaj testy modułowe, integracyjne, systemowe i akceptacyjne. W tym przypadku należy wymienić testy funkcjonalne (co oprogramowanie robi), niefunkcjonalne (jak oprogramowanie to robi), strukturalne (jak robi to co robi) i te związane ze zmianą (retesty + regresja).",
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
