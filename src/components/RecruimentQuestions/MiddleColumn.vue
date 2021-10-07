<template>
  <v-card class="mx-auto" max-width="600">
    <v-toolbar
      outlined
      color="transparent"
      dark
      elevation="0"
      class="text--primary mx auto"
      >  <h2>{{ $route.params.id }}</h2>
      <router-view></router-view>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group v-model="selected" active-class="pink--text" multiple>
        <template v-for="(item, index) in items">
          <v-list-item :key="item.question">
            <v-list-item-content>
              <v-list-item-subtitle
                class="text--primary"
                v-text="item.question"
              ></v-list-item-subtitle>

              <v-list-item-subtitle v-text="item.answer"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
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
};
</script>

<style></style>
