<template>
  <v-container-fluid>
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
          <v-list-item>
            <v-list-item-title
              class="text-h5 font-weight-bold"
              @click="openQuestionsModal"
              >Kategoria pytań</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              class="text-h5 font-weight-bold"
              @click="openKnowledgeTestModal"
              >Test wiedzy</v-list-item-title
            >
          </v-list-item>
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

    <v-dialog v-model="isQuestionsModalOpen" max-width="900">
      <v-card>
        <v-card-title class="font-weight-bold">Wybierz kategorię pytań</v-card-title>
        <FirstColumn />
        <v-card-actions>
          <v-btn @click="isQuestionsModalOpen = false">Zamknij</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="isDialogOpen" max-width="900">
      <v-card>
        <v-card-title>Przetestuj swoją wiedze</v-card-title>
        <RightColumn />
        <v-card-actions>
          <v-btn @click="isDialogOpen = false">Zamknij</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <router-view></router-view>
  </v-container-fluid>
</template>

<script>
import FirstColumn from "../components/RecruitmentQuestionsLayout/FirstColumn.vue";
import RightColumn from "../components/RecruitmentQuestionsLayout/RightColumn";
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: false,
    isDialogOpen: false,
    isQuestionsModalOpen: false,
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
    openKnowledgeTestModal() {
      this.isDialogOpen = true;
    },
    openQuestionsModal() {
      this.isQuestionsModalOpen = true;
    },
  },
  components: {
    RightColumn,
    FirstColumn,
  },
};
</script>

<style>
.v-navigation-drawer__content {
  overflow: hidden !important;
}
</style>
