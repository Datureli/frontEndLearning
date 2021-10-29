<template>
  <v-carousel @change="page = 1" class="mx-auto">
    <v-carousel-item v-for="(cssItem, index) in cssItems" :key="index">
      <v-sheet
        :cssItems="cssItem"
        height="330"
        style="-webkit-box-shadow: inset 1px 0px 47px 3px rgba(66, 68, 90, 1);
-moz-box-shadow: inset 1px 0px 47px 3px rgba(66, 68, 90, 1);
box-shadow: inset 1px 0px 47px 3px rgba(66, 68, 90, 1);"
        tile
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle
              class="text--primary text-h4 text-wrap "
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
      </v-sheet>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="3"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
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
