export default {
  namespaced: true,

  state: {
    firstColumn: [
      {
        title: "Html",
        link: "/about/htmlquestions",
        bookLink: '/book/html',
        icon: "mdi-language-html5",
        color: "orange",
        id: 1,
      },
      {
        title: "Css",
        link: "/about/cssquestions",
        bookLink: '/book/css',
        icon: "mdi-language-css3",
        color: "blue",
        id: 2,
      },
      {
        title: "Javascript",
        link: "/about/javascript",
        bookLink: '/book/javascript',
        icon: "mdi-language-javascript",
        color: "yellow",
        id: 3,
      },
      {
        title: "Vue",
        link: "/about/vue",
        bookLink: '/book/vue',
        icon: "mdi-vuejs",
        color: "green",
        id: 4,
      },
      {
        title: "React",
        link: "/about/react",
        bookLink: '/book/react',
        icon: "mdi-react",
        color: "blue",
        id: 5,
      },
      {
        title: "Typescript",
        link: "/about/typescript",
        bookLink: '/book/typescript',
        icon: "mdi-language-typescript",
        color: "blue",
        id: 6,
      },
      {
        title: "Git",
        link: "/about/gitquestions",
        bookLink: '/book/git',
        icon: "mdi-git",
        color: "black",
        id: 7,
      },
      {
        title: "Ogólne",
        link: "/about/general",
        bookLink: '/book/general',
        icon: "mdi-account-circle",
        color: "white",
        id: 8,
      },
      {
        title: "Testowanie",
        link: "/about/test",
        bookLink: '/book/test',
        icon: "mdi-wrench-outline",
        color: "grey",
        id: 9,
      },
    ],
  },
  getters: {
    firstColumnGet(state) {
      return state.firstColumn.filter((firstColumn) => firstColumn.id);
    },
  },
  mutations: {
    removeItemFromFirstColumn: (state, payload) => {
      const i = state.firstColumn.map((item) => item.id).indexOf(payload);
      state.firstColumn.splice(i, 1);
    },
  },
  actions: {
    removeItemFromFirstColumn(context) {
      context.commit("removeItemFromFirstColumn");
    },
  },
};
