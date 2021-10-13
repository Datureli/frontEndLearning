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
        path: "htmlquestions",
        component: () =>
          import("../components/RecruimentQuestions/htmlQuestions.vue"),
        name: "HtmlQuestions",
        children: [
          {
            path: "semanthic",
            component: () =>
              import("../components/RecruimentQuestions/Semanthic.vue"),
            name: "Semanthic",
          },
        ],
      },
    ],
  },

  {
    path: "/flashcards",
    name: "FlashCards",
    component: () => import("../views/FlashCards.vue"),
  },
  {
    path: "/intoflashcards",
    name: "IntoFlashCards",
    component: () => import("../components/IntoFlashCards.vue"),
  },
  {
    path: "/materials",
    name: "Materials",
    component: () => import("../views/Materials.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
