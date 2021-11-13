<template>
  <v-carousel>
    <v-carousel-item v-for="(item, index) in items" :key="index">
      <v-sheet height="350" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle
              class="text--primary text-h4 text-wrap "
              v-text="item.question"
            ></v-list-item-subtitle>

            <v-list-item-subtitle
              class="text-h5 text-wrap"
              v-text="item.answer"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        question: "Czym jest Vuex?",
        answer: 'Vuex służy do przechowywania stanów, które są potrzebne wielu komponentom w jednej centralnej lokalizacji.Dzięki Vuex możemy przechowywać stan naszej aplikacji Vue w centralnej lokalizacji.Pozwala nam pobierać i ustawiać stan współdzielenia oraz automatycznie propagować wszelkie zmiany dokonane we wspólnym stanie do wszystkich komponentów.'
      },
      {
        question: "Jakie są zalety Vue.js?",
        answer: 'prostosa - vue js posiada niski próg wejścia.Framework jest również lekki,waży tylko 18-23 kb,Vue js jest szybszym frameworkiem niż Angular czy React',
      },
      {
        question: 'Czym jest composition api?',
        answer: 'Jest to nowe API, które pozwala na pisanie komponentów w sposób oparty na funkcjach.Nowe API umożliwia hermetyzację logiki w tzw. „composition functions” i pozwala używać jej ponownie we wszystkich komponentach.  '
      },
      {
        question: 'Jaka jest różnica między Vue2 a Vue3?',
        answer: 'Vue 3.0 jest o wiele bardziej wydajne w porównaniu do swojej poprzedniej wersji. Mówimy tutaj o rozmiarze gotowej aplikacji Vue, która jest do 41% lżejsza dzięki użyciu techniki tree-shaking, początkowym renderowaniu, które jest do 55% szybsze, aktualizacjach, które są aż o 133% szybsze oraz o 54% mniejszym zużyciu pamięci.Twórcy Vue.js zaproponowali w nowym wydaniu dwie funkcje dla Single-File Components: script setup oraz style vars.Vue 3.0 zapewnia również lepszą integrację z językiem TypeScript.',
      },
      {
          question: 'Co to są gettery?',
          answer: 'to są funkcje które zwracają nam stan'
      },
      {
          question: 'co to jest flux?',
          answer: 'Flux to wzorzec projektowy stworzony do ujednolicenia przepływu danych w aplikacjach, szczególnie tych frontowych. Posiada trzy części: dispatch, store i view.View (ang. widok) to część w której użytkownik komunikuje się z aplikacją.Store to w dużym uproszczeniu obiekt z stanem aplikacji.Dispatcher to centralna część fluxa z której wysłamy prośby o zmianę stanu aplikacji.'
      },
      {
        question: 'Wyjaśnij na czym polega reaktywność w vue',
          answer: 'Wszystkie właściwości zdefiniowane w instancji vue są reaktywne.Oznacza to ,że jeżeli zajdzie jakaś zmiana to komponent automatycznie się zaktualizuje.Podczas inicjalizacji wszystkie właściwości są konwertowane do getterów oraz setterów,dzięki temu vue wie kiedy należy dokonać aktualizacji'
      },
            {
        question: 'Czym jest single file component?',
          answer: 'Jest to plik z rozszerzeniem vue. zawierającym komponent vue.W przeciwieństwie do stndardowego podziału plików na style,szkielet oraz logike w odrębnych plików,w single file component wszystko znajduje się w jednym pliku.'
      },
                 {
        question: 'Wyjaśnij na czym polega przepływ danych w vue',
          answer: 'Vue używa one-way data flow.Dane są przekazywane do komponentu dziecka z komponentu rodzica za pomocą właściwości props'
      },
                     {
        question: 'czym jest mapState?',
          answer: 'życie mapState() pozwala na pobranie i przypisanie do lokalnego scope wartości bezpośrednio z sekcji state w store. W ten sposób otrzymujemy czyste dane – bez żadnych modyfikacji. Ma to duży sens, jeśli są to typy proste – jakaś flaga będąca wartością boolean (true/false), np. flaga „loading” itp.'
      },
                           {
        question: 'Czym są sunspense components',
          answer: 'życie mapState() pozwala na pobranie i przypisanie do lokalnego scope wartości bezpośrednio z sekcji state w store. W ten sposób otrzymujemy czyste dane – bez żadnych modyfikacji. Ma to duży sens, jeśli są to typy proste – jakaś flaga będąca wartością boolean (true/false), np. flaga „loading” itp.'
      },
    ],
  }),
};
</script>
