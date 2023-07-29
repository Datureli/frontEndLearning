<template>
  <v-container fluid class="module full-height" style="height: 90vh; ">
    <v-row class="mt-12">
      <v-col>
        <v-card class="module">
          <img
            width="600"
            height="300"
            src="../../assets/it.webp"
            alt="Course Image"
          />
          <h1 class="mt-3">Kurs podstaw html</h1>
        </v-card>
      </v-col>
      <v-col>
        <p class="text-left white--text font-weight-bold">
          Kurs podstaw HTML to wprowadzenie do języka znaczników używanego do
          tworzenia stron internetowych. W tym kursie uczestnicy zdobędą wiedzę
          na temat różnych elementów HTML i nauczą się, jak budować strony
          internetowe od podstaw. Omówione zostaną podstawowe znaczniki, takie
          jak nagłówki, akapity, listy, linki i obrazy, a także wykorzystanie
          ich do organizowania treści na stronie. Kurs skupi się również na
          tworzeniu poprawnej struktury HTML oraz zasadach semantyki, które
          pomogą uczestnikom zrozumieć znaczenie i cel użytych elementów.
        </p>
        <v-dialog
          v-model="dialog"
          fullscreen
          @keydown.esc="closeModal"
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              width="100%"
              class="custom-styled-button font-weight-bold"
              color="#ff5722"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Zacznij naukę
            </v-btn>
          </template>
          <v-card color="darkGradient">
            <v-progress-linear
              value="15"
              bg-color="pink-lighten-3"
              color="red"
            ></v-progress-linear>
            <div class="d-flex">
              <CourseChapters />
              <v-btn
                x-large
                style="right: 1%"
                icon
                dark
                @click="closeModal"
                absolute
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>

            <v-container class="mt-5 custom-height">
              <HtmlCourseSlides />
              <p>dsadsadsa</p>
            </v-container>

            <v-divider class="mt-10"></v-divider>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import HtmlCourseSlides from "./HtmlCourseSlides.vue";
import CourseChapters from "./CourseChapters.vue";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    HtmlCourseSlides,
    CourseChapters,
  },
  methods: {
    closeModal() {
      this.dialog = false;
    },
  },
  computed: {
    ...mapState("htmlCourse", ["htmlSlides"]),
  },
};
</script>

<style scoped>
.module {
  background: #222;
  height: 420px;
  color: white;
  padding: 2rem;
}
.custom-height {
  height: calc(70vh - 30px);
}
</style>
