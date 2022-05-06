<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item
      v-for="(gitQuestions, index) in gitQuestions"
      :key="index"
      max-width="700"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            class="text--primary   font-weight-black  text-h4 text-wrap "
            v-text="gitQuestions.question"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="white--text text-justify text-h6 text-wrap"
            v-show="disable"
            v-text="
              page === 1
                ? gitQuestions.answer
                : page === 2
                ? gitQuestions.secondAnswer
                : gitQuestions.thirdPartOfAnswer
            "
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>

  </v-carousel>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      page: null
    }
  },
  computed: {
    ...mapState(["disable"]),
    ...mapState("gitQuestions", ["gitQuestions"]),
  },
};
</script>
