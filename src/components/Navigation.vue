<template>
  <v-container-fluid>
    <v-app-bar :color="color" elevation="0">
      <v-app-bar-nav-icon color="white" @click="drawer = true" />

      <v-dialog v-model="drawer" hide-overlay>
        <v-navigation-drawer v-model="drawer" absolute>
          <v-toolbar color="primary" elevation="0">
            <v-spacer></v-spacer>

            <v-toolbar-items>
              <v-btn icon dark @click="closeModal">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-list color="primary" height="520" class="green--text trans">
            <v-list-item-group>
              <v-list-item
                color="green"
                class="white--text text-h4"
                v-for="(toolbarItem, index) in toolbarItems"
                :key="index"
                :to="toolbarItem.link"
              >
                <v-list-item-title>{{ toolbarItem.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-dialog>

      <v-spacer></v-spacer>

      <v-card color="transparent" outlined>
        <v-btn color="transparent" outlined>
          <Login />
        </v-btn>

        <v-btn color="transparent" outlined>
          <SignUp />
        </v-btn>

        <v-btn @click="pushToFavorite" color="transparent">
          <v-icon color="red">mdi-heart</v-icon>

          <p class="white--text" v-if="favorite.length > 0">
            {{ favorite.length }}
          </p>
        </v-btn>

        <v-btn icon>
          <v-icon color="white">mdi-dots-vertical</v-icon>
        </v-btn>
      </v-card>
    </v-app-bar>

    <v-slide-x-reverse-transition
      width="inherit"
      mode="out-in"
      :duration="{ enter: 50, leave: 50 }"
    >
      <router-view></router-view>
    </v-slide-x-reverse-transition>
  </v-container-fluid>
</template>

<script>
import { mapState } from "vuex";
import Login from "./login/Login.vue";
import SignUp from "./login/SignUp.vue";
import About from "../views/About.vue";
export default {
  components: { Login, SignUp, About },
  data: () => ({
    drawer: false,
    toolbarItems: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Pytania rekrutacyjne",
        link: "/about",
      },
      {
        title: "Gry",
        link: "/games",
      },
      {
        title: "Materiały",
        link: "/materials",
      },
      {
        title: "Angielski",
        link: "/english",
      },
    ],
  }),
  watch: {
    $route(to, from) {
      this.drawer = false;
    },
  },
  computed: {
    ...mapState(["favorite"]),
    color() {
      switch (this.$route.name) {
        case "Home":
          return "black";
        case "About":
        case "CssQuestions":
        case "HtmlQuestions":
        case "VueQuestions":
        case "GitQuestions":
        case "ReactQuestions":
        case "TypeScriptQuestions":
        case "JavascriptQuestions":
        case "GeneralQuestions":
        case "TestQuestions":
          return "darkGradient";
        case "Materials":
        case "Book":
        case "Wideo":
        case "Website":
        case "Html":
        case "Css":
        case "Javascript":
        case "Vue":
        case "React":
        case "Typescript":
        case "Git":
        case "General":
        case "Test":
          return "black";
        case "Games":
          return "darkGradient";
        case "English":
          return "orange";
      }
    },
  },
  methods: {
    closeModal() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.trans {
  transition: 0.2s;
}
</style>
