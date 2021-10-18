<template>
  <v-card class="mx-auto mt-10" height="80" color="blue" width="750">
    <v-toolbar color="transparent" elevation="0" class="text--primary mx auto">
    </v-toolbar>
    <router-view></router-view>
    <CssQuestions v-if="this.$route.path === '/about/cssquestions'" />
    <htmlQuestions v-if="this.$route.path === '/about/htmlquestions'" />

    <v-carousel>
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-sheet :items="item" height="330" tile>
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
  </v-card>
</template>

<script>
import htmlQuestions from './htmlQuestions.vue'
import CssQuestions from "./CssQuestions.vue";
export default {
  data: () => ({
    components: {
      htmlQuestions,
      CssQuestions,
    },
  }),
};
</script>
