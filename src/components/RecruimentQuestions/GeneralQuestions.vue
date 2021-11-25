<template>
  <v-carousel class="mx-auto">
    <v-carousel-item v-for="(generalItem, index) in generalItems" :key="index">
      <v-sheet :cssItems="cssItem" height="300" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle
              class="text--primary text-h4 text-wrap "
              v-text="generalItem.question"
            ></v-list-item-subtitle>

            <v-list-item-subtitle
              class="text-h5 text-wrap"
              v-text="generalItem.answer"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      generalItems: [
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
    };
  },
};
</script>
