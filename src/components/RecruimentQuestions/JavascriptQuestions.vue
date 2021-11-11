<template>
  <v-carousel @change="page = 1">
    <v-carousel-item
      v-for="(javascriptQuestions, index) in javascriptQuestions"
      :key="index"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary  text-h4 text-wrap "
            v-text="javascriptQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 1"
            v-show="disable"
            v-text="javascriptQuestions.answer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 2"
            v-show="disable"
            v-text="javascriptQuestions.secondAnswer"
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="javascriptQuestions.thirdPartOfAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="d-flex">
        <v-pagination
          style="position: absolute; bottom: 30%; right:35%"
          v-model="page"
          :length="3"
        ></v-pagination>
        <v-btn
          style="position: absolute; bottom: 30%; right:5%"
          @click="disableAnswers"
          >Disable answers</v-btn
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
     javascriptQuestions() {
      return this.$store.state.questions.javascriptQuestions
    },
  },
};
</script>
