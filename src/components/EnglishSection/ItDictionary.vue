<template>
  <div>
    <button @click="fetchDictionaryData">Pobierz dane ze słownika</button>
    <div v-if="dictionaryData">
      <h2>Słownik angielskiego</h2>
      <ul>
        <li v-for="entry in dictionaryData" :key="entry.word">
          <strong>{{ entry.word }}</strong>: {{ entry.definition }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Brak danych ze słownika</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dictionaryData: null,
    };
  },
  methods: {
    fetchDictionaryData() {
      fetch('https://api.dictionary.com/dictionary')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Błąd podczas pobierania danych ze słownika');
          }
          return response.json();
        })
        .then((data) => {
          this.dictionaryData = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
