<template>
  <v-card class="mx-auto mt-4" height="320" color="blue" max-width="550" >
    <v-toolbar
      outlined
      color="transparent"
      dark
      elevation="0"
      class="text--primary mx auto"
      >  
      next
      prev
      <router-view></router-view>
    </v-toolbar>


        <v-card class="text-h1"
         @click="randomizeQuestionCard()" 
         height="260"
          v-for="(item,index) in items.slice(0,1)" 
          :key="index">
          <v-list-item :key="item.question">
            <v-list-item-content >
              <v-list-item-subtitle 
                class="text--primary text-h3 "
                v-text="item.question"
              ></v-list-item-subtitle>

              <v-list-item-subtitle class="text-h5 text-wrap"  v-text="item.answer"></v-list-item-subtitle>
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
        question: "Brunch this weekend?",
        answer: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
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
        question: "Birthday gift",
        answer:
          "Have any ideas about what we should get Heidi for her birthday?",
        title: "Trevor Hansen",
      },
    ],
  }),
  methods: {
      randomizeQuestionCard() {
      this.items.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    },
  }
};
</script>


