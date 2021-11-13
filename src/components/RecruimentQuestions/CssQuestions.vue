<template>
  <v-carousel @change="page = 1" hide-delimiters>
    <v-carousel-item v-for="(cssQuestions, index) in cssQuestions" :key="index">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary  text-h4 text-wrap "
            v-text="cssQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 1"
            v-text="cssQuestions.answer"
          ></v-list-item-subtitle>
          
          <v-list-item-subtitle
            class="text-h5 text-wrap"
            v-if="page === 2"
            v-text="cssQuestions.secondAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-pagination
        style="position: absolute; bottom: 30%; right:35%"
        v-model="page"
        :length="3"
      ></v-pagination>
      <v-icon @click="cycle">
dsa
      </v-icon>
      
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
    cssQuestions() {
      return this.$store.state.questions.cssQuestions
    },
  }
};
</script>
<style>
code { background-color: red; }

pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
  max-width: 300px;
}
</style>