<template>
  <div>
    <v-card
      width="750"
      height="370"
      class=" text-h6 mx-auto pa-5"
      color="orange"
    >
      <div
        v-for="englishSentence in englishSentences.slice(0, 5)"
        :key="englishSentence"
      >
        {{ englishSentence.sentence }}
      </div>
    </v-card>
    <v-btn class="mt-1" @click="randomSentence">random</v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    joinStrings() {
this.englishSentences.reduce((a, b) => `${a.sentence || a}, ${b.sentence}`);
    }
  },
  methods: {
    randomSentence() {
      this.englishSentences.sort(() => {
        return Math.round(Math.random()) - 0.5;
      });
    },
  },
  data() {
    return {
      englishSentences: [
        {
          sentence:
            "My name is Paweł and I have been learning front end for almost two years",
        },
        {
          sentence: "The technology I focus on most is vue js",
        },
        {
          sentence:
            "I like its architecture, the way of writing code based on single file component, vue has extensive documentation and a large community focused around her I like the fact that it’s constantly challenging my brain",
        },
        {
          sentence:
            "  The more you write code, the more you understand there are problems you have never faced, the more you realize you don’t know",
        },
        {
          sentence:
            "I like the idea that I can create something that other people use, and enjoy.",
        },
        {
          sentence:
            "  I also love that I can create things from my imagination and see them come to life for others as well as for me.",
        },
        {
          sentence:
            " andcommunity I don’t know any other profession with a community so big andactive and willing to help.The feeling you get from creating something from nothing.",
        },
      ],
    };
  },
};
</script>
