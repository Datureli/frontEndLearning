<template>
  <v-card class="mt-13 mx-auto pa-6 module-border-wrap " height="350" width="800">
    <v-list-item-group class="grid mt-10 module-border-wrap  ">
      <v-list-item
      class=""
        v-for="firstColumn in firstColumn"
        :key="firstColumn.id"
        :to="firstColumn.link"
        :value="index"
      >
        <v-icon class="text-h1 noBg " elevation="0" :color="firstColumn.color">{{
          firstColumn.icon
        }}</v-icon>
      </v-list-item>
    </v-list-item-group>
  </v-card>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
  },
  methods: {
    ...mapActions("firstColumn", ["removeItemFromFirstColumn", "deleteItem"]),
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  gap: 21px;
  grid-template-columns: repeat(5, 1fr);
}
.noBg:hover {
    transform: scale(1.3);
}

.module-border-wrap {
  border-radius: 15px;
  background: linear-gradient(to right, red, purple);
}
</style>
