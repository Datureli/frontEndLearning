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
            v-text="javascriptItems.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 2"
            v-text="javascriptItems.secondAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-pagination
        style="position: absolute; bottom: 30%; right:35%"
        v-model="page"
        :length="3"
      ></v-pagination>
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
  data() {
    return {
      javascriptItems: [
        {
          answerNumbers: 2,
          question: "Jakie zadeklarować zmienną w javascript?",
          answer:
            "Aby zadeklarować zmienną, powinniśmy posłużyć się jednym ze słów kluczowych.Do stworzenia zmiennej w JavaScript przez lata używało się słowa kluczowego var.Wraz z ewolucją javascriptu.Wraz z pojawieniem się ES6 (ECMAScript 2015) wprowadzono nowe sposoby deklaracji zmiennych za pomocą słów kluczowych let i const.",
          secondAnswer:
            "wielu programistów zaleca stosować już const i let. Dzięki nim nasze skrypty stają się nie tylko bardziej optymalne pod względem zarządzania pamięcią, ale i potencjalnie unikamy niektórych problematycznych sytuacji",
        },
        {
          answerNumbers: 1,
          question: "Czym jest Css sprites?",
          answer:
            "To technika pozwalająca na łączenie wielu mniejszych obrazów, wykorzystywanych na stronie www, w jeden większy plik, który przy odpowiedniej pomocy styli CSS pozwoli zaoszczędzić nam pasmo serwera oraz czas ładowania się strony,",
        },
      ],
    };
  },
};
</script>
