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
        path: 'html',
        name: 'Html',
        component: () => import("../components/materials/Books/HtmlBook")
      },
      {
        path: 'css',
        name: 'Css',
        component: () => import("../components/materials/Books/CssBook")
      },
      {
        path: 'javascript',
        name: 'Javascript',
        component: () => import("../components/materials/Books/JavascriptBook")
      },
      {
        path: 'vue',
        name: 'Vue',
        component: () => import("../components/materials/Books/VueBook")
      },
      {
        path: 'react',
        name: 'React',
        component: () => import("../components/materials/Books/ReactBook")
      },
      {
        path: 'typescript',
        name: 'Typescript',
        component: () => import("../components/materials/Books/TypescriptBook")
      },
      {
        path: 'git',
        name: 'Git',
        component: () => import("../components/materials/Books/GitBook")
      },
      {
        path: 'general',
        name: 'General',
        component: () => import("../components/materials/Books/GeneralBook")
      },
      {
        path: 'tests',
        name: 'Tests',
        component: () => import("../components/materials/Books/TestBook")
      },
    ]
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
    component: () => import("../views/English"),
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
