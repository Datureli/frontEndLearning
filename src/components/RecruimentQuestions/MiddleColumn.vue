<template>
  <v-card class="mx-auto mt-15" height="320" color="blue" max-width="750">
    <v-toolbar color="transparent" elevation="0" class="text--primary mx auto">
      <router-view></router-view>
    </v-toolbar>

    <v-card
      class="text-h1"
      @click="randomizeQuestionCard()"
      height="260"
      v-for="(item, index) in items.slice(0, 1)"
      :key="item"
    >
      <v-btn @click.native="nextCos()">next</v-btn>
      <v-btn @click="move(index, index - 1)">prev</v-btn>
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
    </v-card>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selected: [2],
    items: [
      {
        question: "Do czego służy atrybut role?",
        answer: `Jest to znacznik, który określa znaczenie elementu. Głównie do celów dostępności (ang. accessibility). Jest częścią specyfikacji ARIA. Został też dodany do HTML5.`,
        title: "Ali Connors",
      },
      {
        question: "Summer BBQ",
        answer: `Wish I could come, but I'm out of town this weekend.`,
        title: "me, Scrott, Jennifer",
      },
      {
        question: "Oui oui",
        answer: "Do you have Paris recommendations? Have you ever been?",
        title: "Sandra Adams",
      },
      {
        question: "Do czego służy znacznik Main?",
        answer: "Znacznik Main służy do umieszczania głównej części strony",
      },
    ],
  }),
  methods: {
    randomizeQuestionCard() {
      this.items.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    },
    nextItem() {},
    move(from, to) {
      this.items.move(from, to);
    },
    nextCos() {
      var copy = this.items.slice(0);
      return function() {
         if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
      }
    }
  },
  computed: {
    move(from, to) {
      this.splice(to, 0, this.splice(from, 1)[0]);
      return this;
    },
  },
};
</script>
