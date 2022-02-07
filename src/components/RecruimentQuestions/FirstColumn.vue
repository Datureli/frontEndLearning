<template>
  <v-card width="278" class="mt-8 ml-16" color="transparent" elevation="0">
    <v-list color="transparent">
      <v-list-item-group style="font-size: 23px" active-class="blue--text">
        <v-list-item
          v-for="(firstColumn, index) in firstColumn"
          :key="index"
          :to="firstColumn.link"
          class="mx-auto"
          style="text-decoration: none;"
        >
          <v-icon>{{ firstColumn.icon }}</v-icon>
          <v-list-item-title>{{ firstColumn.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      firstColumn: [
        {
          title: "Html",
          link: "/about/htmlquestions",
          icon: "mdi-language-html5",
        },
        {
          title: "Css",
          link: "/about/cssquestions",
          icon: "mdi-language-css3",
        },
        {
          title: "Javascript",
          link: "/about/javascript",
          icon: "mdi-language-javascript",
        },
        {
          title: "Vue",
          link: "/about/vue",
          icon: "mdi-vuejs",
        },
        {
          title: "React",
          link: "/about/react",
          icon: "mdi-react",
        },
        {
          title: "Typescript",
          link: "/about/typescript",
          icon: "mdi-language-typescript",
        },
        {
          title: "Git",
          link: "/about/gitquestions",
          icon: "mdi-git",
        },
        {
          title: "Ogólne",
          link: "/about/general",
          icon: "mdi-account-circle",
        },
        {
          title: "Testowanie",
          link: "/about/bootstrap",
          icon: "mdi-account-circle",
        },
      ],
    };
  },
  methods: {
    ...mapActions("questions", [
      "randomHtmlQuestion",
      "randomCssQuestion",
      "randomVueQuestion",
      "randomGitQuestion",
      "randomQuestion",
      "randomReactQuestion",
    ]),
  },
};
</script>
