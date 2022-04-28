<template>
  <div>
    <v-carousel hide-delimiters>
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
          </v-list-item-content>
        </v-list-item>
        <v-list color="transparent" class="d-grid">
          <v-list-item class="answerDesign">A) {{cssQuestions.trueAnswer}}</v-list-item>
          <v-list-item class="answerDesign">B) {{first}}</v-list-item>
          <v-list-item class="answerDesign">C)</v-list-item>
          <v-list-item class="answerDesign">D)</v-list-item>
        </v-list>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
