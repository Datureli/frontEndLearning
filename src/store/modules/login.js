export default {
  namespaced: true,

  state: {
    loginRules: [(value) => !!value || "login is required"],
    passwordRules: [(value) => !!value || "password is required"],
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
};
