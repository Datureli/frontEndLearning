export default {
  namespaced: true,

  state: {
    registeredUsers: [
      {
        login: "Datureli",
        userPassword: "keepcalm",
      },
    ],
    newUsers: [],
    registerName: "",
    registerPassword: "",
  },

  mutations: {
    addUser() {
      state.registeredUsers.push(registeredUsers, userPassword);
    },
  },

  actions: {
    addUser(context) {
      context.commit("addUser");
    },
  },
};
