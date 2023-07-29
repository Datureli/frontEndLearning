<template>
  <v-card
    class="mx-auto ml-15 module-border-wrap"
    height="350"
    width="300"
    max-height="350"
  >
    <v-card class="module">
      <slot> </slot>
    </v-card>
  </v-card>
</template>

<style scoped>
.module-border-wrap {
  max-width: 250px;
  background: linear-gradient(to right, red, purple);
  padding: 3px;
}

.module {
  background: #222;
  height: 100%;
  color: white;
  padding: 2rem;
}
</style>
