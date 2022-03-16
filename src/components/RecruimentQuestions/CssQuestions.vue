<template>
  <v-carousel eager hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(cssQuestions, index) in cssQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="text--primary font-weight-black text-h4 text-wrap "
            v-text="cssQuestions.question"
          ></v-list-item-title>

          <v-list-item-subtitle
            class="white--text text-justify text-h6 text-wrap"
            v-show="disable"
            v-text="
              page === 1
                ? cssQuestions.answer
                : page === 2
                ? cssQuestions.secondAnswer
                : cssQuestions.thirdPartOfAnswer
            "
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
       <v-pagination
       circle
          style="position: absolute; bottom: 18%; right:36%"
          v-model="page"
          :length="3"
        ></v-pagination>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    ...mapState(["disable", "favorite"]),
    ...mapState("cssQuestions", ["cssQuestions"]),
  },
};
</script>