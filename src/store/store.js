import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    disable: true,
    username: null,
    password: null,
    loginStatus: false,
    cssQuestions: [
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
  },
  mutations: {
    disable: state => state.disable = !state.disable,
  },
  actions: { // store methods
  },
  getters: { //computed
    isUserLogin() {
      if (state.username.length > 0 && state.password.length > 0) {
        state.loginStatus = true;
      }
    },
  }
})

