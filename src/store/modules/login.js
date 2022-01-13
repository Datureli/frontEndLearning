export default {
  namespaced: true,

  state: {
    loginRules: [(value) => !!value || "login is required"],
    passwordRules: [(value) => !!value || "password is required"],
    username: null,
    password: null,
    loggedIn: false,
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
    isUserLogin(state, username, password, loggedIn) {
      state.username = username;
      state.password = password;
      state.loggedIn = loggedIn;
      if (username.length > 0 && password.length > 0) {
        loggedIn = true;
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
