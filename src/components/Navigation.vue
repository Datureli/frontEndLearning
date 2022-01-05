<template>
  <v-container-fluid>
    <v-card class="overflow-hidden mx-auto">
      <v-app-bar
        app
        style="background-color: #000000;
        background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);"
      >
        <v-app-bar-nav-icon
          color="white"
          @click="drawer = true"
          class="d-flex d-sm-none"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
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
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs fixed-tabs align-with-title>
            <v-tab
              class="text-decoration-none white--text"
              v-for="toolbarItem in toolbarItems"
              :key="toolbarItem"
              :to="toolbarItem.link"
            >
              {{ toolbarItem.title }}
            </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <router-view></router-view>
    </v-card>
  </v-container-fluid>
</template>

<script>
import { mapState } from "vuex";
import Login from "./login/Login.vue";
import SignUp from "./SignUp.vue";
import About from "../views/About.vue";
export default {
  components: { Login, SignUp, About },
  data: () => ({
    toolbarItems: [
      {
        title: "Home",
        link: "/home",
      },
      {
        title: "Pytania rekrutacyjne",
        link: "/about",
      },
      {
        title: "Gry",
        link: "/home",
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
  computed: {
    ...mapState(["disable", "favorite"]),
    ...mapState("questions", ["javascriptQuestions"]),
  },
  methods: {
    pushToFavorite() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
