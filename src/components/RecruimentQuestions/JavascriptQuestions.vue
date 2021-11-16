<template>
  <v-carousel @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(javascriptQuestions, index) in javascriptQuestions"
      :key="index"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary   font-weight-black  text-h4 text-wrap "
            v-text="javascriptQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="javascriptQuestions.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 2"
            v-show="disable"
            v-text="javascriptQuestions.secondAnswer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="javascriptQuestions.thirdPartOfAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="d-flex">
        <v-pagination
          style="position: absolute; bottom: 25%; right:35%"
          v-model="page"
          :length="3"
        ></v-pagination>
              <v-icon
        @click="addToFavorite(javascriptQuestions)"
        color="red"
     style="position: absolute; bottom: 27%; right:1%; font-size:40px;"
        >mdi-heart</v-icon
      >
      </div>

    </v-carousel-item>
    
  </v-carousel>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    disable() {
      return this.$store.state.disable;
    },
    favorite() {
      return this.$store.state.favorite;
    },
    javascriptQuestions() {
      return this.$store.state.questions.javascriptQuestions;
    },
  },

  methods: {
    questionLoop() {
      this.$store.dispatch("questions/questionLoop");
    },
    addToFavorite(javascriptQuestions) {
      this.$store.state.favorite.push(javascriptQuestions);
    },
  },
};
</script>
