export default {
  namespaced: true,

  state: {
    gitQuestions: [
      {
        question: "czym jest git?",
        answer:
          "Git to rozproszony system kontroli wersji.Służy on więc do zarządzania historią kodu źródłowego.Rozproszony system kontroli wersji cechuje się tym, że w przeciwieństwie do scentralizowanych systemów kontroli wersji (CVCS – Centralized Version Control Systems), nie jest potrzebny centralny serwer. Git, a także inne DVCS, mogą być używane całkowicie lokalnie, bez żadnego bytu centralnego. Z kolei same systemy kontroli wersji to narzędzia rozwiązujące kilka istotnych problemów: ",
        secondAnswer: `pozwala na jednoczesną pracę na tym samym kodzie przez kilka osób, 
                umożliwia transferowanie i łączenie zmian z różnych branchy w jednym projekcie,
                pozwala na pracę offline we własnym repozytorium,
                jest szybki i wydajny.`,
      },
      {
        question: "Czym jest commit?",
        answer:
          "Commit – ostateczne zatwierdzenie tymczasowo dokonanych zmian.Kiedy zatwierdzasz zmiany w Gicie, ten zapisuje obiekt zmian (commit), który z kolei zawiera wskaźnik na migawkę zawartości, która w danej chwili znajduje się w poczekalni,  ",
      },
      {
        question: "Co umożliwia nam system kontroli wersji?",
        answer:
          "Przede wszystkim systemy kontroli wersji umożliwiają to co sama nazwa wskazuje, czyli wersjonowanie projektu. Nie mam tu na myśli jednak wersjonowania rozumianego jako oznaczenie oprogramowania na przykład numerem wersji. Mam tu na myśli możliwość prześledzenia każdej zmiany, która zaistniała w projekcie. Oznacza to również możliwość cofnięcia się do dowolnego poprzedniego stanu projektu. ",
        secondAnswer:
          "System kontroli wersji pomaga dokumentować zmiany w projekcie. W Gicie, podstawowym bytem jest commit, którego elementem składowym jest opis. Na opis może składać się zarówno informacja co zostało zmienione, ale może zawierać też cel tej zmiany. Bardzo zachęcam do zapoznania się z poradnikiem jak pisać dobre opisy commitów, bo wbrew pozorom nie jest to łatwe zadanie.",
        thirdPartOfAnswer:
          "Dzięki VCS możliwa jest praca nad kilkoma rzeczami jednocześnie i niezależnie od siebie. Do tego celu został stworzony mechanizm gałęzi (branchy). Gałęzie jednocześnie zwiększają wygodę pracy nad projektem w zespołach. Mechanizm gałęzi pozwala na pracę wielu programistów nad tym samym kodem bez przeszkadzania sobie nawzajem.",
      },
      {
        question: "Jak działa polecenie git checkout?",
        answer:
          " dzięki niemu możemy przechodzić między branchami. Można z jego pomocą stworzyć nowy branch oraz można poruszać się pomiędzy commitami w historii repozytorium.",
      },
      {
        question: "Czym jest gałąź(branch)?",
        answer:
          "W watchEffect nie musimy informować o dacie,wie jakiej reaktywnej informacji używamy,automatycznie zwraca uwagę na zmiany,no old value",
      },
      {
        question: "Czym jest bare repository?",
        answer:
          "Przy inicjalizacji repozytorium za pomocą polecenia git init można skorzystać z flagi --bare. W konsekwencji takie repozytorium zostanie „nagim” repozytorium, czyli niezawierającym faktycznych kopii plików / kodu źródłowego a jedynie historię zmian. Tego typu repozytioria mogą służyć jako repozytoria przechowywane na serwerze i pełnić rolę przekaźników do udostępniania i pobierania zmian.",
      },
      {
        question: "Jak można wyświetlić historię zmian w Gicie?",
        answer:
          "Podstawowym poleceniem do wyświetlania historii zmian jest polecenie git log  Można do tego celu posłużyć się również poleceniem git shortlog, które w przejrzystej formie wyświetli listę kontrybutorów wraz z commitami.",
        secondAnswer: "",
      },
      {
        question: "Jak można skopiować commit na inną gałąź?",
        answer:
          "Do kopiowania commitów i dodawania ich na inne gałęzie służy polecenie git cherry-pick sha_commita. Wykonanie tego polecenia spowoduje kopię commita z podaną referencją i dodaniem go do aktywnej gałęzi. Referencję do commita możemy uzyskać za pomocą polecenia git log, którego dotyczyło jedno z poprzednich pytań.",
        secondAnswer: "",
      },
      {
        question: "Jak utowrzyć nową gałąź? Jak zmienić aktywną gałąź?",
        answer:
          "git branch nazwa_brancha – utwórz nową gałąź.    git checkout nazwa_brancha – zmiana aktywnej gałęzi.    git checkout -b nazwa_brancha – utworzenie oraz zmiana aktywnej gałęzi.",
        secondAnswer: "",
      },
      {
        question: "11. Opisz stany w jakich może znajdować się zmiana w Gicie.",
        answer:
          "Wyróżniamy trzy stany w jakich może znajdować się zmiana w repozytorium. Pierwszym stanem jest stan modified. W tym stanie są domyślnie wszystkie modyfikacje poczynione od ostatniego commita. Drugim stanem jest stan staged. Aby zmiana znalazła się w tym stanie, należy skorzystać z polecenia git add i wybrać zmiany. Przy poleceniu git commit pod uwagę brane są tylko zmiany będące w stanie staged. Ostatnim stanem jest stan commited, czyli stan w którym zmiana została zapisana w repozytorium. Przy commitowaniu możliwe jest pominięcie stanu staged poprzez skorzystanie z flagi -a przy wywołaniu polecenia git commit.",
        secondAnswer: "",
      },
      {
        question: "Czym jest konflikt w gicie?",
        answer:
          "Konflikt w Git może zaistnieć w następującej sytuacji:Programista A tworzy branch feature i wprowadza na nim zmiany w istniejącym już wcześniej pliku.W międzyczasie programista B na branchu master wprowadza zmiany.Programista A kończy pracę na branchu feature, pushuje wprowadzone zmiany i przełącza się na mastera.Programista A chce zmerge’ować mastera z branchem feature… … i w tym momencie mamy konflikt. Programista B edytował ten sam plik, co programista A i system kontroli wersji nie wie, która wersja jest poprawna.W tym momencie przed programistą A stoi zadanie na wybraniu poprawnej wersji. Brzmi to skomplikowanie, ale w praktyce wystarczy skasować niechciany kod a zostawić właściwy… i gotowe!",
        secondAnswer: "",
      },
      {
        question: "Czym jest squash commitów?",
        answer:
          "Squash commitów jest scaleniem kilku commitów w jeden. Na przykład, w serwisie GitHub takie zachowanie można zdefiniować w momencie scalania pull requestów. W takim przypadku wszystkie commity ze scalanego pull requesta zostaną połączone w jeden, a następnie scalone z gałęzią docelową. W Gicie można taki rezultat uzyskać dzięki poleceniu git rebase. ",
        secondAnswer: "",
      },
      {
        question: "Do czego służy Git LFS?",
        answer:
          "Git nie jest najlepszy miejscem do przechowywania dużych plików, czy plików binarnych tj. obrazy, filmy czy pliki audio. W tym celu powstało narzędzie o nazwie Git LFS (Large File System). Dzięki temu, w repozytorium nie są przechowywane pliki a jedynie wskaźniki (referencje) do nich. Typy plików, przechowywanych przez Git LFS można zdefiniować w pliku .gitattributes. Przykładowo, chcąc wykorzystać Git LFS do plików z formatem JPG należy zdefiniować następującą regułę: git lfs track jpg",
        secondAnswer: "",
      },
      {
        question: "Jak sprawdzić stan plików?",
        answer:
          "Podstawowe narzędzie używane do sprawdzenia stanu plików to polecenie git status. ",
        secondAnswer: "",
      },
      {
        question: "Różnice między github a gitlab?",
        answer:
          "Poziomy uwierzytelnienia: GitLab może ustawiać i modyfikować uprawnienia dla różnych współpracowników w zależności od ich roli. W przypadku GitHub możesz zdecydować, kto ma prawa do odczytu i zapisu w repozytorium, ale jest to bardziej ograniczone.Mieszkanie: Chociaż obie platformy pozwalają na hostowanie treści projektów na samych platformach, w przypadku GitLab może również pozwolić na samodzielne hostowanie repozytoriów, co w niektórych przypadkach może być zaletą. GitHub dodał również tę funkcję, ale tylko z niektórymi płatnymi planami.",
        secondAnswer:
          "Import i eksport: GitLab zawiera bardzo szczegółowe informacje o tym, jak importować projekty, aby przenieść je z jednej platformy na drugą, taką jak GitHub, Bitbucket, lub przenieść je do GitLab. Ponadto, jeśli chodzi o eksport, GitLab oferuje bardzo solidną pracę. W przypadku GitHub szczegółowa dokumentacja nie jest dostarczana, chociaż GitHub Importer może być używany jako narzędzie, chociaż może być nieco bardziej restrykcyjny, jeśli chodzi o eksport.",
      },
      {
        question: "Jak sprawdzić stan plików?",
        answer:
          "Podstawowe narzędzie używane do sprawdzenia stanu plików to polecenie git status. ",
        secondAnswer: "",
      },
      {
        question: "Czym się różni git fetch od git pull?",
        answer:
          "Polecenie git fetch jedynie pobiera dane o zmianach ze zdalnego repozytorium. Polecenie git pull oprócz pobrania zmian ze zddalnego repozytorium podejmuje próbę scalenia ich (merge) z aktywną gałęzią. Podczas scalania może wystąpić konflikt",
        secondAnswer: "",
      },
      {
        question: "Do czego służy polecenie git commit –amend?",
        answer:
          "Polecenie git commit --amend pozwala na modyfikację ostatniego commita w repozytorium. Jest to szczególnie przydatne w sytuacji gdy jakiś plik lub zmiana podczas tworzenia commita zostaną pominięte lub w przypadku błędnego commit message.,   Warto pamiętać, że nie powinno się korzystać z tego polecenia po wysłaniu commita do repozytorium zdalnego! Polecenie to modyfikuje historię Gita i jego wywołanie może w konsekwencji utrudnić pracę innym osobom pracującym z tym samym repozytorium.",
        secondAnswer: "",
      },
      {
        question: "Co to jest gitflow?",
        answer:
          "Git Flow został przedstawiony w 2010 roku i był jednym z pierwszych sposobów ustandaryzowania pracy z gitem.W przypadku Git Flow, mamy do czynienia z tzw. releasami funkcjonalności, nad którymi pracowaliśmy w ostatni czasie. Tak więc nasza aplikacja raz na jakiś czas zostaje uzupełniona o kilka mniejszych bądź jakiś jeden bardziej znaczący feature. Release taki może powstawać przykładowo podczas jednego dwutygodniowego sprintu (korzystając tutaj z terminologii Scrum).",
        secondAnswer:
          "Pierwsza rzecz, którą należy zrobić, aby wdrożyć model Git Flow, to odpowiednio uporządkować gałęzie w swoim repozytorium. W tym przypadku będziemy operować na pięciu rodzajach branchy:master – produkcyjna wersja aplikacji. Do tego brancha będziemy mergować tylko te zmiany, które już zostały wydane na produkcję oraz krytyczne hotfixy.hotfix – jedyna gałąź bazująca ma masterze. To właśnie ona służy do szybkiego naprawiania krytycznych błędów występujących na produkcji.    release – na tym branchu przygotowywany jest release kolejnej wersji aplikacji. To właśnie wersja aplikacji z tego brancha trafia na produkcję.  develop – gałąź ta jest „nieoficjalnym” masterem podczas pracy nad releasem. Z tego brancha programiści tworzą swoje gałęzie robocze i do niego mergują (rebase-ują) swoją pracę. Gdy praca nad wszystkimi funkcjonalnościami w danym releasie jest gotowa, branch ten jest mergowany do gałęzi „release”.  gałęzie robocze (features) – na tych gałęziach pracujemy na co dzień i tworzymy nowe funkcjonalności.",
      },
    ],
  },

  mutations: {
    randomGitQuestion(state) {
      state.gitQuestions.sort(() => ~~Math.random() - 0.5);
    },
  },
  actions: {
    gitQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomGitQuestion");
      }, 5000);
    },
    randomGitQuestion(context) {
      context.commit("randomGitQuestion");
    },
  },
};
