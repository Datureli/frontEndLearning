<template>
  <v-container fluid style="padding: 0;">
    <v-container
      fluid
      style="background: black; height: 100vh; overflow: hidden;"
    >
      <v-parallax class="mx-auto" src="../assets/lightbulb.jpg">
        <h1 class="white--text mt-15">
          First polish front-end learning platform
        </h1>
      </v-parallax>
    </v-container>

    <v-container
      fluid
      style="
        background-color: grey;
        height: 700px;
        transform: translateY(-15%);
        position: relative;
      "
    >
      <h2 class="white--text mt-15">Second Section</h2>
    </v-container>
  </v-container>
</template>

<style>
.v-container {
  padding: 0;
}
.v-parallax__image-container {
  
}
</style>
