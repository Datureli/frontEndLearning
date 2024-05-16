import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
    meta: {
      title: "Front-end learning platform",
    },
  },
  {
    path: "/recruitment-questions/",
    name: "RecruitmentQuestions",
    component: () => import("../views/RecruitmentQuestions.vue"),
    children: generateRecruitmentQuestionRoutes([
      "htmlquestions",
      "cssquestions",
      "javascript",
      "vue",
      "react",
      "test",
      "typescript",
      "general",
      "gitquestions",
      "test-knowledge",
      "cypress",
      "postman",
      "sql",
      "wordpress",
      "cybersecurity",
      "cloud",
      "cicd",
      "backend",
    ]),
  },
  {
    path: "/book/",
    name: "Book",
    component: () => import("../components/materials/Books/Book"),
  },
  {
    path: "/wideo",
    name: "Wideo",
    component: () => import("../components/materials/Video"),
  },
  {
    path: "/website",
    name: "Website",
    component: () => import("../components/materials/Website"),
  },
  {
    path: "/materials",
    name: "Materials",
    component: () => import("../views/Materials"),
  },
  {
    path: "/english",
    name: "English",
    component: () => import("../views/English"),
  },
  {
    path: "*",
    component: () => import("../views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;

function generateRecruitmentQuestionRoutes(categories) {
  return categories.map((category) => ({
    path: category,
    component: () =>
      import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
    name: capitalizeFirstLetter(category) + "Questions",
  }));
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
