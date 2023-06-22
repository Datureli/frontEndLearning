<template>
  <div>
    <v-card
      max-width="750"
      max-height="300"
      height="100%"
      class="text-h6 text-left mx-auto pa-7"
      color="orange"
    >
      <v-tooltip bottom>
        <template #activator="{ on }">
          <div
            v-for="englishSentence in [activeSentence]"
            :key="englishSentence.id"
            v-on="on"
          >
            {{ englishSentence.englishVersionOfSentence }}
          </div>
        </template>
        <span>{{ activeSentence.polishVersionOfSentence }}</span>
      </v-tooltip>
    </v-card>
    <v-btn class="mt-1" @click="randomSentence">random</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    randomSentence() {
      this.englishSentences.sort(() => Math.random() - 0.5);
      this.activeSentence = this.englishSentences[0];
    },
  },
  data() {
    return {
      englishSentences: [
        {
          englishVersionOfSentence:
            "My name is Paweł and I have been learning front end for almost two years",
          polishVersionOfSentence:
            "Nazywam się Paweł i od prawie dwóch lat uczę się frontendu",
        },
        {
          englishVersionOfSentence: "The technology I focus on most is vue js",
          polishVersionOfSentence:
            "Najbardziej skupiam się na technologii Vue.js",
        },
        {
          englishVersionOfSentence:
            "I like its architecture, the way of writing code based on single file component, Vue has extensive documentation and a large community focused around it. I like the fact that it constantly challenges my brain",
          polishVersionOfSentence:
            "Podoba mi się jej architektura, sposób pisania kodu oparty na komponentach w pojednym pliku, Vue posiada obszerną dokumentację i dużą społeczność skupioną wokół niego. Podoba mi się fakt, że stale stawia mi wyzwania",
        },
        {
          englishVersionOfSentence:
            "The more you write code, the more you understand there are problems you have never faced, the more you realize you don't know",
          polishVersionOfSentence:
            "Im więcej piszesz kodu, tym bardziej zdajesz sobie sprawę, że są problemy, z którymi nigdy się nie spotkałeś, tym bardziej zdajesz sobie sprawę, że wiele rzeczy nie wiesz",
        },
        {
          englishVersionOfSentence:
            "I like the idea that I can create something that other people use and enjoy.",
          polishVersionOfSentence:
            "Podoba mi się pomysł, że mogę tworzyć coś, czego inni ludzie używają i cieszą się z tego.",
        },
        {
          englishVersionOfSentence:
            "I also love that I can create things from my imagination and see them come to life for others as well as for myself.",
          polishVersionOfSentence:
            "Uwielbiam także to, że mogę tworzyć rzeczy na podstawie mojej wyobraźni i widzieć, jak ożywają dla innych, a także dla mnie.",
        },
        {
          englishVersionOfSentence:
            "I don't know any other profession with such a big and active community that is so willing to help. The feeling you get from creating something out of nothing.",
          polishVersionOfSentence:
            "Nie znam żadnej innej profesji z tak dużą i aktywną społecznością, która jest tak chętna do pomocy. To uczucie, które otrzymujesz, tworząc coś z niczego.",
        },
      ],
      activeSentence: null,
    };
  },
  watch: {
    englishSentences: {
      immediate: true,
      handler(sentences) {
        if (sentences.length > 0) {
          this.activeSentence = sentences[0];
        }
      },
    },
  },
  created() {
    this.randomSentence(); // Dodane wywołanie randomSentence po utworzeniu komponentu
  },
};
</script>
