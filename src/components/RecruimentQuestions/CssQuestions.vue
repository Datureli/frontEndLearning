<template>
  <v-carousel @change="page = 1">
    <v-carousel-item v-for="(cssItem, index) in cssItems" :key="index">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary  text-h4 text-wrap "
            v-text="cssItem.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 1"
            v-text="cssItem.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 2"
            v-text="cssItem.secondAnswer"
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
  methods: {
    sortedArray() {
      return this.arrays.sort((a, b) => a.name - b.name);
    },
  },
  data() {
    return {
      cssPage: this.page,
      cssItems: [
        {
          answerNumbers: 2,
          question: "Rozwiń i opisz skrót BEM",
          answer:
            "Nazwa BEM pochodzi od angielskiego: “Block Element Modifier”.Opiera się ono na podziale elementów na stronie na:bloki - na przykład formularz albo menu,elementy - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu,modyfikatory - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu",
          secondAnswer:
            "W BEM istnieje pewna konwencja nazewnictwa klas CSS. Ogólne zasady tego nazewnictwa przedstawiam poniżej:.block - pierwsze słowo w nazwie oznacza, że klasa dotyczy danego bloku,elementy - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu,modyfikatory - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu",
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
