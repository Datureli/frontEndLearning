<template>
  <v-container fluid>
    <div class="d-flex">
      <v-app-bar
        :style="{ position: changePositionProperty, top: 0, zIndex: 5 }"
        :color="color"
        elevation="0"
      >
        <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />
        <v-list
          class="d-flex mx-auto justify-center pt-5 font-weight-bold"
          color="transparent"
          v-if="$route.path.startsWith('/recruitment-questions')"
        >
          <FirstColumn />
          <RightColumn />
       <!--   <TestingCourse /> -->
        </v-list>
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

        <v-list nav color="primary" height="100vh">
          <v-list-item-group>
            <v-list-item
              color="green"
              class="white--text text-h6"
              v-for="(toolbarItem, index) in toolbarItems"
              :key="index"
              :to="toolbarItem.link"
            >
              <v-list-item-title>{{ toolbarItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>

    <router-view></router-view>
  </v-container>
</template>

<script>
import FirstColumn from "../components/RecruitmentQuestionsLayout/FirstColumn.vue";
import RightColumn from "../components/RecruitmentQuestionsLayout/RightColumn";
import TestingCourse from "../components/RecruitmentQuestionsLayout/TestingCourse.vue";
import { mapState } from "vuex";
export default {
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
    ],
  }),
  watch: {
    $route() {
      this.drawer = false;
    },
  },
  computed: {
    ...mapState(["favorite"]),
    color() {
      const name = this.$route.name;

      switch (true) {
        case name === "Home":
          return "transparent";
        case name === "Materials":
          return "black";
        case name === "English":
          return "orange";
        case name === "RecruitmentQuestions":
          return "darkGradient";
        case name === "HtmlCourse":
          return "#222";
        default:
          return "darkGradient";
      }
    },
    changePositionProperty() {
      const name = this.$route.name;
      if (name === "Home") {
        return "absolute";
      } else {
        return "relative";
      }
    },
  },
  methods: {
    closeModal() {
      this.drawer = false;
    },
  },
  components: {
    RightColumn,
    FirstColumn,
    TestingCourse,
  },
};
</script>

<style>
.v-navigation-drawer__content {
  overflow: hidden !important;
}
</style>
