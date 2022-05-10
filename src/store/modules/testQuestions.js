export default {
  namespaced: true,

  state: {
    testQuestions: [
      {
        question: "Po co testujemy aplikacje?",
        answer:
          "Testowanie oprogramowania ma na celu sprawdzenie jego poprawnego działania oraz zebranie informacji na jego temat.Gdy testy zakończą się niepowodzeniem, bardzo ważne jest, aby struktura testów jednostkowych zawierała przydatne błędy.Testowanie oprogramowania pozwala ocenić jego jakość i zmniejszyć ryzyko wystąpienia awarii podczas  eksploatacji.",
      },
      {
        question: "Czym jest testowanie?",
        answer:
          "testowanie oprogramowania to proces obejmujący czynności, które wykraczają poza samo wykonywanie testów.W skład procesu testowego wchodzą również takie czynności jak: planowanie,  analiza, monitorowanie testów i nadzór nad testami, projektowanie i implementacja testów,  raportowanie o postępie i wynikach testów oraz dokonywanie oceny jakości przedmiotu testów. ",
      },
      {
        question: "Czym jest testowanie dynamiczne?",
        answer:
          "Testowanie może wymagać uruchomienia testowanego modułu lub systemu – mamy wtedy do  czynienia z tzw. testowaniem dynamicznym ",
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
    ],
  },

  mutations: {
    randomTestQuestion(state) {
      state.testQuestions.sort(() => {
        return Math.round(Math.random()) - 0.5;
      });
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
