<template>
  <div>
    <div v-for="course in courses" :key="course.id">
        <p>{{ course.name }}</p>
    </div>
    <h2>Strefa kursów</h2>
  </div>
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
          linkToCourse: "",
        },
        {
          name: "Podstawy Css",
          image: "",
          numberOfLessons: 5,
          linkToCourse: "",
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
      ],
    };
  },
};
</script>
