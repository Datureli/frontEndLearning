<template>
  <v-card height="540" class="d-flex" color="black" >
    <v-spacer></v-spacer>
    <v-card class="d-flex mt-5" color="transparent">
      <materialCard class="mt-5">
        <Slot title="tab1" class="tab1 mx-auto text-h5">Video</Slot>
      </materialCard>
      <materialCard class="mt-10 text-center">
        <Slot title="tab2" class="mx-auto text-h5">Książki</Slot>
      </materialCard>
      
      <materialCard class="mt-16">
        
          <Slot
            title="tab3"
            style="word-break: break-word"
            class="mx-auto text-h5"
            >Strony internetowe</Slot
          >
      </materialCard>
    </v-card>

    <v-spacer></v-spacer>
  </v-card>
</template>

<script setup>
import MaterialCard from "../components/materials/MaterialCard.vue";
import Slot from "../components/materials/Slot.vue";
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
    },
  },
};
</script>

<style scoped>
.tab1 {
  color: rebeccapurple;
  height: 100px;
  text-align: center;
}
</style>
