<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(reactQuestions, index) in reactQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary font-weight-black  text-h4 text-wrap "
            v-text="reactQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-show="disable"
            v-text="
              page === 1
                ? reactQuestions.answer
                : page === 2
                ? reactQuestions.secondAnswer
                : reactQuestions.thirdPartOfAnswer
            "
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
      <v-pagination
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
    ...mapState("reactQuestions", ["reactQuestions"]),
  },
};
</script>
