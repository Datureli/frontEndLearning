<template>
  <v-container-fluid class="mx-auto overflow-hidden">
    <v-app-bar class="overflow-hidden" :color="color" elevation="0">
      <v-app-bar-nav-icon
        id="test"
        color="white"
        @click.stop="drawer = !drawer"
      />
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
      </v-card>
    </v-app-bar>
    <v-navigation-drawer temporary v-model="drawer" absolute>
      <v-toolbar color="primary" elevation="0">
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn id="closeButton" icon dark @click="closeModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-list nav dense color="primary" height="520" class="green--text">
        <v-list-item-group v-model="group">
          <v-list-item
            color="green"
            class="white--text text-h4"
            v-for="(toolbarItem, index) in toolbarItems"
            :key="index"
            :to="toolbarItem.link"
          >
            <v-list-item-title id="navi">{{
              toolbarItem.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <router-view></router-view>
  </v-container-fluid>
</template>

<script>
import { mapState } from "vuex";
import Login from "./login/Login.vue";
import SignUp from "./login/SignUp.vue";
export default {
  components: { Login, SignUp },
  data: () => ({
    drawer: false,
    toolbarItems: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Pytania rekrutacyjne",
        link: "/recruitment-questions",
      },
      {
        title: "Materiały",
        link: "/materials",
      },
      {
        title: "Angielski",
        link: "/english",
      },
      {
        title: "Kurs front-end",
        link: "/course",
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
      const name  = this.$route.name;

      switch (true) {
        case name === "Home":
        case name === "Materials":
          return "black";
        case name === "English":
          return "orange";
        case name === "RecruitmentQuestions":
          return "darkGradient";
        default:
          return "darkGradient";
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
