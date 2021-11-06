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
            v-text="javascriptItems.secondAnswer"
          ></v-list-item-subtitle>
                 <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 3"
            v-text="javascriptItems.thirdPartOfAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-pagination
        style="position: absolute; bottom: 30%; right:35%"
        v-model="page"
        :length="3"
      ></v-pagination>
      <v-btn @click="disableAnswers">Disable answers</v-btn>
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
  methods: {
    disableAnswers() {
      this.disable = !this.disable
    }
  },
  data() {
    return {
      disable: true,
      javascriptItems: [
        {
          answerNumbers: 2,
          question: "Jakie zadeklarować zmienną w javascript?",
          answer:
            "Aby zadeklarować zmienną, powinniśmy posłużyć się jednym ze słów kluczowych.Do stworzenia zmiennej w JavaScript przez lata używało się słowa kluczowego var.Wraz z ewolucją javascriptu.Wraz z pojawieniem się ES6 (ECMAScript 2015) wprowadzono nowe sposoby deklaracji zmiennych za pomocą słów kluczowych let i const.",
          secondAnswer:
            "wielu programistów zaleca stosować już const i let. Dzięki nim nasze skrypty stają się nie tylko bardziej optymalne pod względem zarządzania pamięcią, ale i potencjalnie unikamy niektórych problematycznych sytuacji.Pod zmienne możemy podstawić dowolne wartości jakie będziemy chcieli",
            thirdPartOfAnswer:  'Nazwy zmiennych i stałych które deklarujemy nie mogą być byle jakie. Istnieją pewne zasady których musimy się trzymać. I tak:wielkość liter ma znaczenie. Zmienna myTXT to nie to samo co mytxt,nazwa zmiennej nie może zaczynać się od cyfry,,nazwa zmiennej nie może zawierać spacji, kropki, przecinka ani myślnika (można natomiast używać podkreślenia),nazwą zmiennej nie może być słowo kluczowe zarezerwowane przez JavaScript'
        },

        {
          question: "Jaka jest różnica między var,let a const?",
          answer:
            "Pierwsza i najważniejsza różnica między let/const a var to zasięg zmiennych.W przypadku let/const zmienne mają zasięg blokowy, co w skrócie oznacza od klamry do klamry.Zmienne deklarowane za pomocą var mają natomiast zasięg funkcyjny, czyli ich zasięg określa ciało funkcji.",


        },
      ],
    };
  },
};
</script>
