export default {
namespaced: true,

state: {
    firstColumn: [
        {
          title: "Html",
          link: "/about/htmlquestions",
          icon: "mdi-language-html5",
        },
        {
          title: "Css",
          link: "/about/cssquestions",
          icon: "mdi-language-css3",
        },
        {
          title: "Javascript",
          link: "/about/javascript",
          icon: "mdi-language-javascript",
        },
        {
          title: "Vue",
          link: "/about/vue",
          icon: "mdi-vuejs",
        },
        {
          title: "React",
          link: "/about/react",
          icon: "mdi-react",
        },
        {
          title: "Typescript",
          link: "/about/typescript",
          icon: "mdi-language-typescript",
        },
        {
          title: "Git",
          link: "/about/gitquestions",
          icon: "mdi-git",
        },
        {
          title: "Ogólne",
          link: "/about/general",
          icon: "mdi-account-circle",
        },
        {
          title: "Testowanie",
          link: "/about/bootstrap",
          icon: "mdi-account-circle",
        },
      ],
},
mutations: {
  removeItemFromFirstColumn: (state, payload) => {
    const i = state.firstColumn.map(item => item.id).indexOf(payload.id);
    state.firstColumn.splice(i, 1);
  }
},
actions: {
  removeItemFromFirstColumn(context) {
    context.commit(removeItemFromFirstColumn)
  }
}

}