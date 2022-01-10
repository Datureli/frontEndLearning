export default {
  namespaced: true,

  state: {
    name: '',
    password: '',
    formValidity: false,
    isSubmitted: true,
    dialog: false,
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    menu2: '',
    agreeToTerms: false,
    registeredUsers: [
      {
        login: "Datureli",
        userPassword: "keepcalm",
      },
    ],
  },

  mutations: {
    addUser() {
      this.isSubmitted = !this.isSubmitted;
      state.registeredUsers.push(
        this.name,
        this.email,
        this.password,
        this.birthday,
        this.menu2
      )
    },
  },

  actions: {
    addUser(context) {
      context.commit("addUser");
    },
  },
};
