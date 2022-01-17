<template>
  <v-card height="540" class="triangle d-flex">
    <v-spacer></v-spacer>

    <materialCard class="rounded-circle" height="100">
      <Slot title="tab1" class="tab1">Video</Slot>
    </materialCard>
    <materialCard class="rounded-circle">
      <Slot title="tab2">Książki</Slot>
    </materialCard>
    <materialCard class="rounded-circle">
      <Slot title="tab3">Strony internetowe</Slot>
    </materialCard>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script setup>
import MaterialCard from "../components/MaterialCard.vue";
import Slot from "../components/Slot.vue";
export default {
  components: {
    MaterialCard,
    Slot
  },
};

</script>

<style scoped>
.triangle {
  width: 100%;
  height: calc(340vw / 10);
  background: linear-gradient(
    to bottom right,
    #2c3e50 0%,
    rgb(0, 0, 0) 50%,
    #afa565 50%,
    #000000 100%
  );
}
.tab1 {
  color: rebeccapurple;
  height: 100px;
}
</style>
