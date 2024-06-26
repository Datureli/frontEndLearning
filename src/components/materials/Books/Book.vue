<template>
  <v-container fluid height="100vh" class="mx-auto pa-14 module-border-wrap ">
    <v-card
      class="mt-13 mx-auto pa-6 module-border-wrap "
      height="350"
      width="800"
    >
      <v-list-item-group
        v-if="this.$route.path === '/book'"
        class="grid mt-10 module-border-wrap  "
      >
        <v-list-item
          v-for="firstColumn in firstColumn"
          :key="firstColumn.id"
          :to="firstColumn.bookLink"
          :value="index"
        >
          <v-icon class="text-h1 noBg " :color="firstColumn.color">{{
            firstColumn.icon
          }}</v-icon>
        </v-list-item>
      </v-list-item-group>

    </v-card>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("firstColumn", ["firstColumn"]),
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
  background: linear-gradient(to right, red, purple);
}
</style>
