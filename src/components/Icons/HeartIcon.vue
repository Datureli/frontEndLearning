<template>
  <v-btn color="transparent" width="50" elevation="0">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="transparent" outlined v-bind="attrs" v-on="on">
          <v-icon
            :disabled="!isHeartActive"
            x-large
            @click="addToFavorite(htmlQuestions)"
            >mdi-heart</v-icon
          >
        </v-btn>
      </template>
      <span>You need to be logged in</span>
    </v-tooltip>
  </v-btn>
</template>
