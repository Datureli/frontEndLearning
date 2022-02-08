<template>
  <v-container elevation="10" color="transparent">
    <template>
      <v-card
        color="transparent"
        class="mx-auto"
        max-width="800"
        height="400"
        flat
      >
        <v-card
          color="transparent"
          max-width="800"
          height="50px"
          class="d-flex pr-3"
        >
          <v-icon color="white" large class="ml-1">mdi-account-circle</v-icon>
          <v-spacer></v-spacer>
          <v-icon color="green" class="mr-2">mdi-phone</v-icon>
          <v-icon color="green" class="mr-2">mdi-cctv</v-icon>
          <v-icon color="green">mdi-information</v-icon>
        </v-card>
        <v-card
          color="transparent"
          class="mx-auto"
          max-width="800"
          height="400"
        ></v-card>

        <v-spacer></v-spacer>
        <v-card
          color="transparent"
          max-width="800"
          height="50px"
          class="d-flex"
          elevation="10"
        >
          <v-icon color="white" class="ml-3">mdi-plus-thick</v-icon>
          <v-icon color="white" class="ml-3">mdi-image-multiple</v-icon>
          <v-icon color="white" class="ml-3">mdi-export-variant</v-icon>
          <v-icon color="white" class="ml-3">mdi-volume-mute</v-icon>
          <v-text-field
            class="ml-5 mx-auto"
            width="100"
            height="30"
            label="write your message..."
          />
        </v-card>
      </v-card>
    </template>
  </v-container>
</template>
