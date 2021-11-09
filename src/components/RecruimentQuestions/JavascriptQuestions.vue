<template>
  <v-carousel @change="page = 1">
    <v-carousel-item
      v-for="(javascriptItems, index) in javascriptItems"
      :key="index"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary  text-h4 text-wrap "
            v-text="javascriptItems.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="javascriptItems.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 2"
            v-show="disable"
            v-text="javascriptItems.secondAnswer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="javascriptItems.thirdPartOfAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="d-flex">
        <v-pagination
          style="position: absolute; bottom: 30%; right:35%"
          v-model="page"
          :length="3"
        ></v-pagination>
        <v-btn
          style="position: absolute; bottom: 30%; right:5%"
          @click="disableAnswers"
          >Disable answers</v-btn
        >
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    disable: {
      get: function() {
        return this.$store.state.disable;
      },
    },
  },
  methods: {
    disableAnswers() {
      this.$store.commit("disable");
    },
  },
  data() {
    return {
      javascriptItems: [
        {
          question: "Jakie zadeklarować zmienną w javascript?",
          answer:
            "Aby zadeklarować zmienną, powinniśmy posłużyć się jednym ze słów kluczowych.Do stworzenia zmiennej w JavaScript przez lata używało się słowa kluczowego var.Wraz z ewolucją javascriptu.Wraz z pojawieniem się ES6 (ECMAScript 2015) wprowadzono nowe sposoby deklaracji zmiennych za pomocą słów kluczowych let i const.",
          secondAnswer:
            "wielu programistów zaleca stosować już const i let. Dzięki nim nasze skrypty stają się nie tylko bardziej optymalne pod względem zarządzania pamięcią, ale i potencjalnie unikamy niektórych problematycznych sytuacji.Pod zmienne możemy podstawić dowolne wartości jakie będziemy chcieli",
          thirdPartOfAnswer:
            "Nazwy zmiennych i stałych które deklarujemy nie mogą być byle jakie. Istnieją pewne zasady których musimy się trzymać. I tak:wielkość liter ma znaczenie. Zmienna myTXT to nie to samo co mytxt,nazwa zmiennej nie może zaczynać się od cyfry,,nazwa zmiennej nie może zawierać spacji, kropki, przecinka ani myślnika (można natomiast używać podkreślenia),nazwą zmiennej nie może być słowo kluczowe zarezerwowane przez JavaScript",
        },

        {
          question: "Jaka jest różnica między var,let a const?",
          answer:
            "Pierwsza i najważniejsza różnica między let/const a var to zasięg zmiennych.W przypadku let/const zmienne mają zasięg blokowy, co w skrócie oznacza od klamry do klamry.Zmienne deklarowane za pomocą var mają natomiast zasięg funkcyjny, czyli ich zasięg określa ciało funkcji.Ostatnią różnicą - dość mało znaną - jest to, że deklarując zmienną globalną var (poza ciałem funkcji), dodawana jest ona jako właściwość obiektu window. W przypadku let nic takiego się nie dzieje:",
        },
        {
          question: "Czym jest temporal dead zone?",
          answer:
            "Miejsce przed deklaracją zmiennej let/const zwie się temporal dead zone, bo nie możemy odwoływać się do zmiennej, której jeszcze nie zadeklarowaliśmy. Dzięki takiemu zabiegowi nasz kod staje się bardziej logiczny - najpierw tworzymy wszystkie klocki (zmienne, funkcje), a dopiero potem ich używamy.",
        },
        {
          question: "Czym jest Hoisting??",
          answer:
            "Kolejna różnica między starszą deklaracją var a jej młodszymi braćmi to tak zwany hoisting (windowanie).JavaScript lubi pomagać programiście. Jednym z takich przypadków pomocy jest niewidoczne dla programisty wynoszenie deklaracji na początek kodu. I tak na początek kodu wynoszone są deklaracje takie jak var / let/ const / function / class. Różnica jest w sposobie takiego wynoszenia.",
        },
        {
          question: "opisz inkrementacje i dekrementacje",
          answer:
            "Operatory inkrementacji i dekrementacji, które mogą występować przed zmienną lub po zmiennej.Gdy występuje przed zmienną, zwiększenie jej wartości nastąpi w danej instrukcji. Jeżeli występuje po zmiennej, zwiększona wartość wystąpi dopiero w kolejnej instrukcji",
        },
        {
          question: "Opisz operatory porównania",
          answer:
            "Operatory logiczne stosuje się w instrukcjach warunkowych. Służą one do porównywania lewej strony równania do prawej, w wyniku której zawsze zwracana jest true/false.",
        },
        {
          question: "Opisz warunki if,else-if or else",
          answer:
            "Powyżej w listingach używałem instrukcji if, która wykonuje dany kod tylko w przypadku, gdy w nawiasach wynikiem będzie prawda.Zwróć tylko uwagę, że przy każdej instrukcji if (w tym else if) musimy podać warunek, natomiast else zawsze jest bez warunku.",
        },
        {
          question: "Czym jest ternary operator?",
          answer:
            "Operator warunkowy (tak zwany ternary operator), to tak naprawdę skrócona wersja warunku if:",
        },
        {
          question: "Czym jest instrukcja switch?",
          answer:
            "Instrukcja switch jest kolejnym sposobem tworzenia warunków - tym razem na zasadzie przyrównania wyniku do konkretnych wartości.Każdy przypadek kończy się słowem break, które kończy wykonywanie instrukcji switch.Jeżeli pominiemy to słowo, wtedy nawet przy pomyślnym przyrównaniu zostaną wykonane kolejne sprawdzenia, co często może powodować błędy.Dodatkowo instrukcja switch ma specjalny przypadek default który będzie wybierany, gdy wszystkie inne przypadki będą błędne (odpowiednik else w instrukcji if).Warto zaznaczyć, że instrukcja switch nie służy do testowania warunków, a do przyrównywania zmiennej do wartości:",
        },
        {
          question: "Omów pętle for",
          answer:
            "Operator warunkowy (tak zwany ternary operator), to tak naprawdę skrócona wersja warunku if:",
          secondAnswer:
            "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
        },
        {
          question: "Omów pętle while",
          answer:
            "OZauważ, że w pętli tego typu nie definiujemy ani początkowego licznika, ani nie definiujemy zmiany licznika. Musimy te rzeczy zrobić ręcznie.Pętlę while zazwyczaj stosuje się w sytuacjach, kiedy nie wiemy dokładnie, ile iteracji (powtórzeń) ma się wykonać. Wyobraź sobie, że chcesz wygenerować unikalny numer ID albo jakąś liczbę. Generujesz więc daną rzecz, następnie sprawdzasz czy wynik pasuje do założeń. Jak nie pasuje, generujesz dalej. I tak do skutku aż trafisz.",
          secondAnswer:
            "while (wyrażenie_sprawdzające_zakończenie_pętli) {  ...fragment kodu który będzie powtarzany...}",
        },
        {
          question: "Opisz typy danych w javascript",
          answer:
            "W JavaScript dane możemy podzielić na dwie grupy: typy proste oraz złożone.Typy prymitywne:Number,string,bigInt,boolean,undefined,null,symbol a złożone:Object (w tym Array, Map i Set).Kolejną charakterystyczną cechą rozróżniającą typy prymitywne od obiektów jest to, że te pierwsze w przeciwieństwie do obiektów są niemutowalne. Mutowalnymi określamy takie dane, którym w czasie ich istnienia możemy zmieniać części składowe:",
          secondAnswer:
            "for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych){kod który zostanie wykonany pewną ilość razy}",
        },
      ],
    };
  },
};
</script>
