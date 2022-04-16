import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
    meta: {
      title: "Front-end learning platform"
    }
  },
  {
    path: "/about/",
    name: "About",
    component: () => import("../views/About"),
    children: [
      {
        path: "cssquestions",
        component: () =>
          import("../components/RecruimentQuestions/CssQuestions"),
        name: "CssQuestions",
      },
      {
        path: "javascript",
        component: () =>
          import("../components/RecruimentQuestions/JavascriptQuestions"),
        name: "JavascriptQuestions",
      },
      {
        path: "vue",
        component: () =>
          import("../components/RecruimentQuestions/VueQuestions"),
        name: "VueQuestions",
      },
      {
        path: "react",
        component: () =>
          import("../components/RecruimentQuestions/ReactQuestions"),
        name: "ReactQuestions",
      },
      {
        path: "test",
        component: () =>
          import("../components/RecruimentQuestions/TestQuestions"),
        name: "TestQuestions",
      },
      {
        path: "typescript",
        component: () =>
          import("../components/RecruimentQuestions/TypeScriptQuestions"),
        name: "TypeScriptQuestions",
      },
      {
        path: "general",
        component: () =>
          import("../components/RecruimentQuestions/GeneralQuestions"),
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
          import("../components/RecruimentQuestions/GitQuestions"),
        name: "GitQuestions",
      },
    ],
  },

  {
    path: "/flashcards",
    name: "FlashCards",
    component: () => import("../views/FlashCards"),
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
    component: () => import("../views/Materials"),
    children: [
      {
        path: "video",
        name: "Video",
        component: () => import("../components/login/FavoriteSection"),
      },
      {
        path: "favorite",
        name: "Favorite",
        component: () => import("../components/login/FavoriteSection"),
      },
      {
        path: "favorite",
        name: "Favorite",
        component: () => import("../components/login/FavoriteSection"),
      },
    ]
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../components/login/SignUp")
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
      }
    ]
  },
  {
    path: "/english",
    name: "English",
    component: () => import("../components/EnglishSection/English"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router;
