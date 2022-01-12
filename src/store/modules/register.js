export default {
  namespaced: true,

  state: {
    name: "",
    password: "",
    email: "",
    agreeToTerms: false,
    isSubmitted: true,
    registeredUsers: [
      {
        login: "Datureli",
        userPassword: "keepcalm",
      },
    ],
    agreeToTermsRules: [
      (value) => !!value || "you must agree to terms and conditions",
    ],
    hearOptions: ["Internet", "newspapper", "family", "radio"],

    nameRules: [
      (value) => !!value || "Name is required",
      (value) =>
        value.match(/[^0-9]/i) || "username should contain only letters",
    ],
    passwordRules: [
      (value) => !!value || "password is required",
      (value) =>
        value.length >= 5 || "password must contain at least 5 characters",
    ],
    emailRules: [
      (value) => !!value || "Email is required",
      (value) => value.indexOf("@") !== 0 || "Email should have a username",
      (value) => value.includes("@") || "Email should include an @ symbol",
      (value) =>
        value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email should contain a valid domain",
      (value) =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid extension",
    ],
  },
  mutations: {
    updateName(state, name) {
      state.name = name;
    },
    updatePassword(state, password) {
      state.password = password;
    },
    updateFormValidity(state, formValidity) {
      state.formValidity = formValidity;
    },
    updateAgreeToTerms(state, agreeToTerms) {
      state.agreeToTerms = agreeToTerms;
    },
    updateEmail(state, email) {
      state.email = email;
    },
    addUser(state, name, email, password) {
      state.name = name
      state.email = email
      state.password = password
      state.isSubmitted = !state.isSubmitted;
      state.registeredUsers.push(
        name,
        email,
        password,
      );
    },
  },

  actions: {
    addUser(context) {
      context.commit("addUser");
    },
    closeDialog(context) {
      context.commit("closeDialog");
    },
  },
};
