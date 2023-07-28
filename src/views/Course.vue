<template>
  <v-container fluid class="darkGradient full-height">
    <h2 class="text-left text-h2 mb-5 ml-2">Strefa kursów</h2>
    <div class="course-container">
      <router-link 
        v-for="course in courses"
        :key="course.id"
        :to="course.linkToCourse"
        class="course-item"
      >
        <img :src="course.image" alt="Course Image" />
        <div class="course-title">
          <h3>{{ course.name }}</h3>
        </div>
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
          image: require("../assets/it.webp"),
          numberOfLessons: 5,
          linkToCourse: "/podstawy-html",
        },
        {
          name: "Podstawy Css",
          image: require("../assets/it2.jpg"),
          numberOfLessons: 5,
          linkToCourse: "/about",
        },
        {
          name: "Logika w JavaScript",
          image: require("../assets/it3.jpg"),
          numberOfLessons: 5,
          linkToCourse: "",
        },
        {
          name: "Podstawy Terminala",
          image: require("../assets/it4.jpg"),
          numberOfLessons: 5,
          linkToCourse: "",
        },
        {
          name: "Algorytmy w javascript",
          image: require("../assets/it5.jpg"),
          numberOfLessons: 5,
          linkToCourse: "",
        },
        {
          name: "Narzędzia na front-endzie",
          image: require("../assets/it6.jpg"),
          numberOfLessons: 5,
          linkToCourse: "",
        },
        {
          name: "Inne umiejętności ważne dla front-end developera",
          image: require("../assets/it6.jpg"),
          numberOfLessons: 5,
          linkToCourse: "",
        },
        {
          name: "Kurs typescript",
          image: require("../assets/it.webp"),
          numberOfLessons: 5,
          linkToCourse: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.course-container {
  display: flex;
  flex-wrap: wrap;
}

.course-item {
  flex: 1 0 calc(33.33% - 10px);
  margin: 5px;
  margin-bottom: 60px;
  max-width: calc(33.33% - 10px);
  height: 200px;
  border-radius: 15px;
  position: relative;
}

img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 250px;
  border-radius: 15px;
}

.course-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000b3;
  padding: 10px;
  color: white;
}
</style>
