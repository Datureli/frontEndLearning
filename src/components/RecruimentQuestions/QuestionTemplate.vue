<template>
  <v-carousel hide-delimiters @change="page = 1" class="mt-1">
    <v-carousel-item  >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
          ></v-list-item-subtitle>

          <v-list-item-subtitle
  
          ></v-list-item-subtitle>
          <v-list-item-subtitle 
          ></v-list-item-subtitle>
          <v-list-item-subtitle
            class="white--text text-justify text-h5 text-wrap"
            v-if="page === 3"
            v-show="disable"
            v-text="htmlQuestions.thirdPartOfAnswer"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-carousel-item>
    <v-sheet class="d-flex">
      <v-row justify="spacer-around" class="hidden-sm-and-down">
        <v-icon
          large
          @click="randomHtmlQuestion"
          color="brown"
          style="position: absolute; bottom: 26%; right:90%;"
          >mdi-dice-multiple</v-icon
        >

        <v-icon
          x-large
          @click="htmlQuestionLoop"
          color="white"
          style="position: absolute; bottom: 26%; right:85%;"
          >mdi-autorenew</v-icon
        >

        <v-pagination
          style="position: absolute; bottom: 18%; right:36%"
          v-model="page"
          :length="3"
        ></v-pagination>
        <v-icon
          large
          @click="disableAnswers"
          style="position: absolute; bottom: 26%; right:10%;"
          >mdi-comment-off-outline</v-icon
        >

        <v-icon
          class="hidden-sm-and-down"
          :disabled="!isHeartActive"
          x-large
          @click="addToFavorite(htmlQuestions)"
          color="red"
          style="position: absolute; bottom: 26%; right:4%;"
          >mdi-heart</v-icon
        >
      </v-row>
    </v-sheet>
  </v-carousel>
</template>