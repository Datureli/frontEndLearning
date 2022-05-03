<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(generalQuestions, index) in generalQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary font-weight-black  text-h4 text-wrap "
            v-text="generalQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text  text-h6 text-wrap"
            v-show="disable"
            v-text="
              page === 1
                ? generalQuestions.answer
                : page === 2
                ? generalQuestions.secondAnswer
                : generalQuestions.thirdPartOfAnswer
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
  data() {
    return {
      page: null
    }
  },
  computed: {
    ...mapState(["disable", "favorite"]),
    ...mapState("generalQuestions", ["generalQuestions"]),
  },
};
</script>
