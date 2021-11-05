<template>
  <v-card
    width="320"
    class="ml-5 mt-10"
    outlined
    color="transparent"
    elevation="0"
  >
    <v-list color="transparent">
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
        active-class="blue--text"
      >
        <v-list-item>
          <v-icon>mdi-home</v-icon>
          <router-link
            :to="{ name: 'HtmlQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Html
          </router-link>
        </v-list-item>

        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'CssQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Css
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'JavascriptQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Javascript
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'VueQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Vue
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'HtmlQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            React
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'HtmlQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Bootstrap
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-circle</v-icon>
          <router-link
            :to="{ name: 'HtmlQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Scss
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
            :to="{ name: 'StupidQuestions' }"
            class="text-deocration-none mx-auto"
            style="text-decoration: none; color: #a55c1b;"
          >
            Pytania o ciebie
          </router-link>
          
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
  methods: {
    emitCss() {
      this.$emit("css");
    },
  },
};
</script>
