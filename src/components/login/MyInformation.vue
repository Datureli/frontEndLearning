<template>
  <v-container>
    <v-card color="transparent" elevation="3" class="mt-10 mx-auto d-flex">
      <v-avatar size="150">
        <v-icon dark large style="font-size:130px;">
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <h2 class="mt-5">Free Account</h2>
    </v-card>

    <v-sheet class="mx-auto mt-10" width="97%"> </v-sheet>
    <div class="d-flex mt-10">
      <v-sheet height="200" width="50%" color="transparent">
        <h2>Last activity</h2>
      </v-sheet>
      <v-sheet width="50%" color="transparent">
        <h2>Notification</h2>
      </v-sheet>
    </div>
  </v-container>
</template>

<style scoped>
.v-sheet {
  border-bottom: 3px solid white;
}
h2 {
  color: white;
}
</style>
