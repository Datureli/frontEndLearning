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
          question: "Co to jest Webpack?",
          answer:
            "Webpack jest to “module bundler” co oznacza, że potrafi on spakować wiele różnych typów zasobów do jednego wynikowego zasobu. Na przykład jeśli posiadamy w naszym projekcie wiele modułów , webpack potrafi przekształcić je i zminifikować. Następnie wszystko razem umieścić w jednym pliku *.js. Zaletą takiego rozwiązania jest na pewno wydajność: jeden plik do pobrania z serwera to jedno do niego zapytanie.",
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
