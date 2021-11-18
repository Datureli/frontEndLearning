<template>
  <v-card height="430" class="triangle d-flex mt-7">
    <v-spacer></v-spacer>
    
     <materialCard> 
      <Slot title="tab1" class="tab1">Video</Slot>
    </materialCard>
      <materialCard> 
      <Slot title="tab2">Książki</Slot>
    </materialCard>
      <materialCard> 
      <Slot title="tab3">Strony internetowe</Slot>
    </materialCard>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script setup>
import MaterialCard from "../components/MaterialCard.vue";
import Slot from '../components/Slot.vue';
export default {
  components: {
    MaterialCard,
  },
};
    Slot
</script>

<style scoped>
.triangle {
  width: 100%;
  height: calc(340vw / 10);
  background: linear-gradient(
    to bottom right,
    #fff 0%,
    #fff 50%,
    #afa565 50%,
    #dbd8c1 100%
  );
}
.tab1 {
  color: rebeccapurple;
  margin-top: 20vh;
  height: 200px;
}
</style>
