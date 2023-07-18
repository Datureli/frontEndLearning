<template>
  <v-container fluid class="darkGradient full-height">
    <h2>Strefa kursów</h2>
    <div class="course-container">
      <router-link v-for="course in courses" :key="course.id" :to="course.linkToCourse" class="course-item">
        <p color="red">{{ course.name }}</p>
      </router-link>
    </div>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      courses: [
        {
          name: "Podstawy Html",
          image: "",
          numberOfLessons: 5,
          linkToCourse: "/course/podstawy-html",
        },
        {
          name: "Podstawy Css",
          image: "",
          numberOfLessons: 5,
          linkToCourse: "/about",
        },
        {
          name: "Logika w JavaScript",
          image: "",
          numberOfLessons: 5,
          linkToCourse: "",
        },
        {
          name: "Podstawy Terminala",
          image: "",
          numberOfLessons: 5,
          linkToCourse: "",
        },
        {
          name: "Algorytmy w javascript",
          image: "",
          numberOfLessons: 5,
          linkToCourse: "",
        },
        {
          name: "Narzędzia na front-endzie",
          image: "",
          numberOfLessons: 5,
          linkToCourse: "",
        },
        {
          name: "Inne umiejętności ważne dla front-end developera",
          image: "",
          numberOfLessons: 5,
          linkToCourse: "",
        },
                {
          name: "Kurs typescript",
          image: "",
          numberOfLessons: 5,
          linkToCourse: "",
        },
      ],
    };
  },
};
</script>

<style>
.course-container {
  display: flex;
  flex-wrap: wrap;
}

.course-item {
  flex: 1 0 calc(33.33% - 10px);
  margin: 5px;
  max-width: calc(33.33% - 10px);
  height: 200px;
  border: 2px solid red;
}
</style>
