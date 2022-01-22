<template>
  <v-card height="540" class="triangle d-flex">
    <v-spacer></v-spacer>

    <materialCard
      class="mt-2"
      :class="{ active: isActive }"
      @click="toggleClass('app', 'flashing')"
    >
      <Slot title="tab1" class="tab1 mx-auto text-h5">Video</Slot>
    </materialCard>
    <materialCard class="mt-7 text-center">
      <Slot title="tab2" class="mx-auto text-h5">Książki</Slot>
    </materialCard>
    <materialCard class="mt-16">
      <Slot title="tab3" style="word-break: break-word" class="mx-auto text-h5"
        >Strony internetowe</Slot
      >
    </materialCard>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script setup>
import MaterialCard from "../components/MaterialCard.vue";
import Slot from "../components/Slot.vue";
export default {
  firstColumnClicked: false,
  secondColumnClicked: false,
  ThirdColumnClicked: false,
  isActive: false,
  components: {
    MaterialCard,
    Slot,
  },
  methods: {
    myFilter() {
      this.isActive = !this.isActive;
      // some code to filter users
    },
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
  text-align: center;
}
.flashing {
  animation: flash 2.5s;
  background: brown;
}
@keyframes flash {
  0% {
    background-color: none;
  }
  50% {
    background-color: green;
  }
  100% {
    background-color: none;
  }
}
</style>
