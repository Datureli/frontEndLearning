<template>
  <v-container>
    <v-card color="transparent" elevation="5" class="mt-10 ml-5 d-flex">
      <v-avatar size="150" class="ml-7">
        <v-icon dark large style="font-size:130px;">
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <div class="mt-15">
        <h2 class="mr-15">Soleris1</h2>
        <h2>soleris1@gmail.com</h2>
      </div>
      <h2 class="text-right mt-5">Free Account</h2>
    </v-card>

    <v-toolbar class="mb-0" elevation="0" dark color="transparent">
     
    </v-toolbar>
    <v-sheet color="white" class="mx-auto" height="0" width="97%"> </v-sheet>
    <div class="d-flex mt-10">
      <v-sheet
        height="200"
        width="50%"
        style="border-left: none;"
        color="transparent"
      >
        <h2>Last activity</h2>
      </v-sheet>
      <v-sheet width="50%" color="transparent">
        <h2>Notification</h2>
      </v-sheet>
    </div>
  </v-container>
</template>

<style scoped>
.v-card.v-sheet.theme--light {
  border-left: 5px solid red !important;
}
.v-sheet {
  border-bottom: 3px solid white;
}
h2 {
    color: white;
}
</style>
