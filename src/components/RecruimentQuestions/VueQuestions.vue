<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(vueQuestions, index) in vueQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary font-weight-black text-h4 text-wrap "
            v-text="vueQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            style="text-align:justify; word-spacing:-2px;"
            class="white--text  text-h6 text-wrap"
            v-show="disable"
            v-text="
              page === 1
                ? vueQuestions.answer
                : page === 2
                ? vueQuestions.secondAnswer
                : vueQuestions.thirdPartOfAnswer
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
    ...mapState("vueQuestions", ["vueQuestions"]),
  },
};
</script>
