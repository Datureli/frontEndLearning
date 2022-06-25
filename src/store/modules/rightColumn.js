export default {
  namespaced: true,

  state: {
    category: "",
    categoryRules: [(value) => !!value || "Category is required"],
    numberOfQuestionsRules: [(value) => !!value || "this field is required"],
    difficultyRules: [(value) => !!value || "difficulty is required"],
    timeRules: [(value) => !!value || "time is required"],
    numberOfQuestions: [10, 15, 20, 25],
    difficulty: [{ name: "easy" }, { name: "medium" }, { name: "hard" }],
    time: [10, 20, 30, 40],
  },
};
