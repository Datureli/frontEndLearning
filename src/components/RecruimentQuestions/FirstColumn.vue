<template>
  <v-card width="278" class="mt-8 ml-16" color="transparent" elevation="0">
    <v-list color="transparent">
      <v-list-item-group
        style="font-size: 23px"
        color="primary"
        active-class="blue--text"
      >
        <v-list-item @click="randomHtmlQuestion">
          <v-icon>mdi-language-html5</v-icon>

          <router-link
            :to="{ name: 'HtmlQuestions' }"
            class="mx-auto"
            style="text-decoration: none;"
          >
            Html
          </router-link>
        </v-list-item>

        <v-list-item @click="randomCssQuestion">
          <v-icon>mdi-language-css3</v-icon>
          <router-link
            :to="{ name: 'CssQuestions' }"
            class="mx-auto"
            style="text-decoration: none;"
          >
            Css
          </router-link>
        </v-list-item>
        <v-list-item @click="randomQuestion">
          <v-icon>mdi-language-javascript</v-icon>
          <router-link
            :to="{ name: 'JavascriptQuestions' }"
            class=" mx-auto"
            style="text-decoration: none;"
          >
            Javascript
          </router-link>
        </v-list-item>
        <v-list-item @click="randomVueQuestion">
          <v-icon>mdi-vuejs</v-icon>
          <router-link
            :to="{ name: 'VueQuestions' }"
            class="mx-auto"
            style="text-decoration: none;"
          >
            Vue
          </router-link>
        </v-list-item>
        <v-list-item @click="randomGitQuestion">
          <v-icon>mdi-git</v-icon>
          <router-link
            :to="{ name: 'GitQuestions' }"
            class="mx-auto"
            style="text-decoration: none;"
          >
            Git
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-react</v-icon>
          <router-link
            :to="{ name: 'ReactQuestions' }"
            class="mx-auto"
            style="text-decoration: none;"
          >
            React
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-language-typescript</v-icon>
          <router-link
            :to="{ name: 'TypeScriptQuestions' }"
            class="mx-auto"
            style="text-decoration: none;"
          >
            Typescript
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'GeneralQuestions' }"
            class="mx-auto"
            style="text-decoration: none;"
          >
            Ogólne
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'BootstrapQuestions' }"
            class="mx-auto"
            style="text-decoration: none;"
          >
            Testowanie
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
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
