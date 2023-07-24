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
    children: [
      {
        path: "cssquestions",
        component: () =>
          import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
        name: "RecruitmentQuestion",
      },
      {
        path: "javascript",
        component: () =>
          import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
        name: "JavascriptQuestions",
      },
      {
        path: "vue",
        component: () =>
          import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
        name: "VueQuestions",
      },
      {
        path: "react",
        component: () =>
          import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
        name: "ReactQuestions",
      },
      {
        path: "test",
        component: () =>
          import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
        name: "TestQuestions",
      },
      {
        path: "typescript",
        component: () =>
          import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
        name: "TypeScriptQuestions",
      },
      {
        path: "general",
        component: () =>
          import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
        name: "GeneralQuestions",
      },

      {
        path: "htmlquestions",
        component: () =>
          import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
        name: "HtmlQuestions",
      },
      {
        path: "gitquestions",
        component: () =>
          import("../components/RecruimentQuestions/RecruitmentQuestion.vue"),
        name: "GitQuestions",
      },
      {
        path: "test-knowledge",
        component: () =>
          import("../components/RecruimentQuestions/TestYourKnowledge"),
        name: "TestYourKnowledge",
      },
    ],
  },

  {
    path: "/book/",
    name: "Book",
    component: () => import("../components/materials/Books/Book"),
    children: [
      {
        path: "html",
        name: "Html",
        component: () => import("../components/materials/Books/HtmlBook"),
      },
      {
        path: "css",
        name: "Css",
        component: () => import("../components/materials/Books/CssBook"),
      },
      {
        path: "javascript",
        name: "Javascript",
        component: () => import("../components/materials/Books/JavascriptBook"),
      },
      {
        path: "vue",
        name: "Vue",
        component: () => import("../components/materials/Books/VueBook"),
      },
      {
        path: "react",
        name: "React",
        component: () => import("../components/materials/Books/ReactBook"),
      },
      {
        path: "typescript",
        name: "Typescript",
        component: () => import("../components/materials/Books/TypescriptBook"),
      },
      {
        path: "git",
        name: "Git",
        component: () => import("../components/materials/Books/GitBook"),
      },
      {
        path: "general",
        name: "General",
        component: () => import("../components/materials/Books/GeneralBook"),
      },
      {
        path: "tests",
        name: "Tests",
        component: () => import("../components/materials/Books/TestBook"),
      },
    ],
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
    path: "/signup",
    name: "SignUp",
    component: () => import("../components/login/SignUp"),
  },
  {
    path: "/login/",
    name: "Login",
    component: () => import("../components/login/Login"),
    children: [
      {
        path: "favorite",
        name: "Favorite",
        component: () => import("../components/login/FavoriteSection"),
      },
      {
        path: "password",
        name: "Password",
        component: () => import("../components/login/ChangePassword"),
      },
      {
        path: "messages",
        name: "Messages",
        component: () => import("../components/login/MessageSection"),
      },
    ],
  },
  {
    path: "/course",
    name: "Course",
    component: () => import("../views/Course.vue"),
    children: [
     
    ],
  },
  {
    path: "/podstawy-html",
    name: "HtmlCourse",
    component: () => import("../components/courses/HtmlCourse.vue"),
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
