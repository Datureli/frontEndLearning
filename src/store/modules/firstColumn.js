export default {
namespaced: true,

state: {
    firstColumn: [
        {
          title: "Html",
          link: "/about/htmlquestions",
          icon: "mdi-language-html5",
          id: 1,
        },
        {
          title: "Css",
          link: "/about/cssquestions",
          icon: "mdi-language-css3",
          id: 2
        },
        {
          title: "Javascript",
          link: "/about/javascript",
          icon: "mdi-language-javascript",
          id: 3,
        },
        {
          title: "Vue",
          link: "/about/vue",
          icon: "mdi-vuejs",
          id: 4,
        },
        {
          title: "React",
          link: "/about/react",
          icon: "mdi-react",
          id: 5,
        },
        {
          title: "Typescript",
          link: "/about/typescript",
          icon: "mdi-language-typescript",
          id: 6
        },
        {
          title: "Git",
          link: "/about/gitquestions",
          icon: "mdi-git",
          id: 7
        },
        {
          title: "Ogólne",
          link: "/about/general",
          icon: "mdi-account-circle",
          id: 8
        },
        {
          title: "Testowanie",
          link: "/about/bootstrap",
          icon: "mdi-account-circle",
          id: 9
        },
      ],
},
mutations: {
  removeItemFromFirstColumn: (state, payload) => {
    const i = state.firstColumn.map(item => item.id).indexOf(payload);
    state.firstColumn.splice(i, 1);
  },
},
actions: {
  removeItemFromFirstColumn(context) {
    context.commit('removeItemFromFirstColumn')
  },
}

}