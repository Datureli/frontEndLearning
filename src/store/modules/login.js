export default {
  namespaced: true,

  state: {
    loginRules: [(value) => !!value || "login is required"],
    passwordRules: [(value) => !!value || "password is required"],
    username: "",
    password: "",
    loggedIn: false,
    loginSections: [
      { title: "Profil", link: "/login" },
      { title: "Password", link: "/password" },
      { title: "Messages", link: "/messages" },
      { title: "Friends", link: "/friends" },
      { title: "Stwórz pytania", link: "/createquestions" },
      { title: "Ulubione", link: "/favorite" },
      { title: "Osiągnięcia", link: "/archivments" },
      { title: "Ustawienia", link: "/settings" },
    ],
  },

  mutations: {
    logOut: (state) => (state.loggedIn = !state.loggedIn),
    updateUsername(state, username) {
      state.username = username;
    },
    updatePassword(state, password) {
      state.password = password;
    },
    updateLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn
    },
    isUserLogin(state) {
      if (state.username.length > 0 && state.password.length > 0) {
        state.loggedIn = true;
        this.$router.push({ path: "login" });
      }
    },
  },
  actions: {
    isUserLogin(context) {
      context.commit("isUserLogin");
    },
  },
};
