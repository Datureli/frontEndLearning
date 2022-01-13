export default {
  namespaced: true,

  state: {
    items: [],
    loginRules: [(value) => !!value || "login is required"],
    passwordRules: [(value) => !!value || "password is required"],
    username: null,
    password: null,
    dialog: false,
  },
};
