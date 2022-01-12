export default {
  namespaced: true,

  state: {
    message: 'dsada',
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
    agreeToTermsRules: [
      (value) => !!value || "you must agree to terms and conditions",
    ],
    birthday: "",
    hearOptions: ["Internet", "newspapper", "family", "radio"],
    email: "",
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
  getters: {
    agreeToTerms: state => {
      return state.agreeToTerms
    },
      authDate: state => {
        return state.date
      }
    },
  mutations: {
    updateMessage(state,message) {
      state.message = message
    },
    updateName(state, name) {
      state.name = name
    },
    updatePassword(state, password) {
      state.password = password
    },
    addUser() {
     state.isSubmitted = !state.isSubmitted;
      state.registeredUsers.push(
       state.name,
       state.email,
       state.password,
       state.birthday,
       state.menu2
      )
    },
    closeDialog: (state) => (state.dialog = !state.dialog),
  },

  actions: {
    addUser(context) {
      context.commit("addUser");
    },
    closeDialog(context) {
      context.commit("closeDialog")
    },
}
}
