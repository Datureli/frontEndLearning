<template>
  <v-container-fluid>
    <v-app-bar :color="color">
      <v-app-bar-nav-icon color="white" @click="drawer = true" />
      <v-dialog v-model="drawer" hide-overlay>
        <v-navigation-drawer floating v-model="drawer" absolute>
          <v-toolbar color="darkGradient" elevation="0">
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModal">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list color="black" height="500" nav class="green--text">
            <v-list-item-group>
              <v-list-item
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
          <v-icon color="red">mdi-dots-vertical</v-icon>
        </v-btn>
      </v-card>
      <h1 class="mx-auto d-none">--{{ currentRouteName }}--</h1>
    </v-app-bar>
    <v-slide-x-transition mode="out-in">
      <router-view></router-view>
    </v-slide-x-transition>
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
    ...mapState(["disable", "favorite"]),
    currentRouteName() {
      return this.$route.name;
    },
    color() {
      switch (this.$route.name) {
        case "Home":
          return "black";
        case "About":
          return "darkGradient";
        case "CssQuestions":
          return "darkGradient";
        case "Materials":
          return "black";
        case "games":
          return "red";
        case "English":
          return "orange";
      }
    },
  },
  methods: {
    pushToFavorite() {
      this.$router.push({ name: "login" });
    },
    closeModal() {
      this.drawer = false;
    },
  },
};
</script>
