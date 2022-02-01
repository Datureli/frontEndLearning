import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about/",
    name: "About",
    component: () => import("../views/About.vue"),
    children: [
      {
        path: "cssquestions",
        component: () =>
          import("../components/RecruimentQuestions/CssQuestions.vue"),
        name: "CssQuestions",
      },
      {
        path: "javascript",
        component: () =>
          import("../components/RecruimentQuestions/JavascriptQuestions.vue"),
        name: "JavascriptQuestions",
      },
      {
        path: "vue",
        component: () =>
          import("../components/RecruimentQuestions/VueQuestions.vue"),
        name: "VueQuestions",
      },
      {
        path: "react",
        component: () =>
          import("../components/RecruimentQuestions/ReactQuestions.vue"),
        name: "ReactQuestions",
      },
      {
        path: "bootstrap",
        component: () =>
          import("../components/RecruimentQuestions/BootstrapQuestions.vue"),
        name: "BootstrapQuestions",
      },
      {
        path: "typescript",
        component: () =>
          import("../components/RecruimentQuestions/TypeScriptQuestions.vue"),
        name: "TypeScriptQuestions",
      },
      {
        path: "general",
        component: () =>
          import("../components/RecruimentQuestions/GeneralQuestions.vue"),
        name: "GeneralQuestions",
      },

      {
        path: "htmlquestions",
        component: () =>
          import("../components/RecruimentQuestions/HtmlQuestions"),
        name: "HtmlQuestions",
      },
      {
        path: "gitquestions",
        component: () =>
          import("../components/RecruimentQuestions/GitQuestions.vue"),
        name: "GitQuestions",
      },
    ],
  },

  {
    path: "/flashcards",
    name: "FlashCards",
    component: () => import("../views/FlashCards.vue"),
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/Games"),
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: () => import("../components/games/Quiz"),
  },
  {
    path: "/materials",
    name: "Materials",
    component: () => import("../views/Materials.vue"),
  },
  {
    path: "/interview",
    name: "Interview",
    component: () => import("../components/IntervievSimulation/InterviewSimulation.vue")
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../components/login/SignUp.vue")
  },
  {
    path: "/login/",
    name: "Login",
    component: () => import("../components/login/Login.vue"),
    children: [
      {
        path: "favorite",
        name: "Favorite",
        component: () => import("../components/login/FavoriteSection.vue"),
      },
      {
        path: "password",
        name: "Password",
        component: () => import("../components/login/ChangePassword.vue"),
      },
      {
        path: "messages",
        name: "Messages",
        component: () => import("../components/login/MessageSection.vue"),
      }
    ]
  },
  {
    path: "/english",
    name: "English",
    component: () => import("../components/EnglishSection/English.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
