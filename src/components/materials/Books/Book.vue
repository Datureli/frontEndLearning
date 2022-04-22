<template>
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
    <HtmlBook v-if="this.$route.path === '/book/html'" />
    <CssBook v-if="this.$route.path === '/book/css'" />
    <JavascriptBook v-if="this.$route.path === '/book/javascript'" />
    <VueBook v-if="this.$route.path === '/book/vue'" />
    <ReactBook v-if="this.$route.path === '/book/react'" />
    <TypescriptBook v-if="this.$route.path === '/book/typescript'" />
    <GitBook v-if="this.$route.path === '/book/git'" />
    <GeneralBook v-if="this.$route.path === '/book/general'" />
    <TestBook v-if="this.$route.path === '/book/tests'" />
  </v-card>
</template>
<script>
import {
  HtmlBook,
  CssBook,
  JavascriptBook,
  VueBook,
  ReactBook,
  TypescriptBook,
  GitBook,
  GeneralBook,
  TestBook,
} from "./index";
import { mapState } from "vuex";
export default {
  components: {
    HtmlBook,
    CssBook,
    JavascriptBook,
    VueBook,
    ReactBook,
    TypescriptBook,
    GitBook,
    GeneralBook,
    TestBook,
  },
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
  border-radius: 15px;
  background: linear-gradient(to right, red, purple);
}
</style>
