export default {
  namespaced: true,

  state: {
    inputDate: [
      {
        inputLabel: "Name",
        inputType: "name",
        inputIcon: "mdi-pencil",
        inputModel: "",
        inputRules: [
          (value) => !!value || "Name is required",
          (value) =>
            value.match(/[^0-9]/i) || "username should contain only letters",
        ],
      },
      {
        inputLabel: "Email",
        inputType: "email",
        inputIcon: "mdi-email",
        inputModel: "",
        inputRules: [
          (value) => !!value || "Email is required",
          (value) => /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(value) || "Invalid email format",
        ],
      },
      {
        inputLabel: "Password",
        inputType: "password",
        inputIcon: "mdi-lock-question",
        inputModel: "",
        inputRules: [
          (value) => !!value || "password is required",
          (value) =>
            value.length >= 5 || "password must contain at least 5 characters",
        ],
      },
        {
          inputLabel: "Repeat password",
          inputType: "password",
          inputIcon: "mdi-lock-question",
          inputModel: "",
          inputRules: [
            (value) => !!value || "repeat password is required",
            function(value) {
              return value === this.inputDate[1].inputModel || "Passwords do not match";
            },
          ],
        },
    ],
    agreeToTerms: false,
    isSubmitted: true,
    agreeToTermsRules: [
      (value) => !!value || "you must agree to terms and conditions",
    ],
  },
  getters: {
    repeatPasswordRules: state => [
      (value) => !!value || "Repeat password is required",
      function(value) {
        return value === state.inputDate[1].inputModel || "Passwords do not match";
      },
    ],
  },
};