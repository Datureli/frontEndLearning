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
                secondAnswer: 'System kontroli wersji pomaga dokumentować zmiany w projekcie. W Gicie, podstawowym bytem jest commit, którego elementem składowym jest opis. Na opis może składać się zarówno informacja co zostało zmienione, ale może zawierać też cel tej zmiany. Bardzo zachęcam do zapoznania się z poradnikiem jak pisać dobre opisy commitów, bo wbrew pozorom nie jest to łatwe zadanie.',
                thirdPartOfAnswer: 'Dzięki VCS możliwa jest praca nad kilkoma rzeczami jednocześnie i niezależnie od siebie. Do tego celu został stworzony mechanizm gałęzi (branchy). Gałęzie jednocześnie zwiększają wygodę pracy nad projektem w zespołach. Mechanizm gałęzi pozwala na pracę wielu programistów nad tym samym kodem bez przeszkadzania sobie nawzajem.'
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
              question: "Jak sprawdzić stan plików?", 
              answer:
                "Podstawowe narzędzie używane do sprawdzenia stanu plików to polecenie git status. ",
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
      gitQuestionLoop(state) {
        setInterval(() => {
          state.gitQuestions.sort(function() {
            return Math.round(Math.random()) - 0.5;
          });
        }, 1000);
      },
      randomGitQuestion(state) {
        state.gitQuestions.sort(function() {
          return Math.round(Math.random()) - 0.5;
        });
      }
    },
      actions: {
        gitQuestionLoop(context) {
          context.commit("gitQuestionLoop");
        },
        randomGitQuestion(context) {
          context.commit("randomGitQuestion");
        },
      },
    }
  