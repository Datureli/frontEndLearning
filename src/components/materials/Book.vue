<template>
  <v-card class="mt-13 mx-auto module-border-wrap " height="350" width="800">
    <v-list-item-group class="grid mx-auto pa-6 module-border-wrap  ">
      <v-list-item
        v-for="firstColumn in firstColumn"
        :key="firstColumn.id"
        :to="firstColumn.link"
        :value="index"
      >
        <v-icon class="text-h1 " :color="firstColumn.color">{{
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
  gap: 1px;
  grid-template-columns: repeat(4, 1fr);
}
.module-border-wrap {
  padding: 1rem;
  border-radius: 15px;
  position: relative;
  background: linear-gradient(to right, red, purple);
  padding: 3px;
}
</style>
