<template>
  <v-carousel @change="page = 1">
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
      </div>
      <v-btn @click="randomQuestion">sss</v-btn>
      <v-btn @click="window.print()">Asss</v-btn>
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
  methods: {
    randomQuestion() {

      this.javascriptQuestions.sort(function() {
        return Math.round(Math.random()) - 0.5;
      });
    
    },
    shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
  },
};
</script>
