<template>
  <v-card width="320" class="mt-15 ml-12" color="transparent" elevation="0">
    <v-list color="transparent">
      <v-list-item-group
        style="font-size: 25px"
        color="primary"
        active-class="blue--text"
      >
        <v-list-item @click="randomHtmlQuestion">
          <v-icon>mdi-language-html5</v-icon>

          <router-link
            :to="{ name: 'HtmlQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Html
          </router-link>
        </v-list-item>

        <v-list-item @click="randomCssQuestion">
          <v-icon>mdi-language-css3</v-icon>
          <router-link
            :to="{ name: 'CssQuestions' }"
            class="mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Css
          </router-link>
        </v-list-item>
        <v-list-item @click="randomQuestion">
          <v-icon>mdi-language-javascript</v-icon>
          <router-link
            :to="{ name: 'JavascriptQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Javascript
          </router-link>
        </v-list-item>
        <v-list-item @click="randomVueQuestion">
          <v-icon>mdi-vuejs</v-icon>
          <router-link
            :to="{ name: 'VueQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Vue
          </router-link>
        </v-list-item>
        <v-list-item @click="randomGitQuestion">
          <v-icon>mdi-git</v-icon>
          <router-link
            :to="{ name: 'GitQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Git
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-react</v-icon>
          <router-link
            :to="{ name: '' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            React
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-language-typescript</v-icon>
          <router-link
            :to="{ name: 'TypeScriptQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Typescript
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'GeneralQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Ogólne
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'BootstrapQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
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
    ]),
  },
};
</script>
