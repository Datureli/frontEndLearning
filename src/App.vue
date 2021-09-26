<template>
  <div>
    <header>
      <Navigation />
    </header>
    <transition name="slide" mode="out-in">
      <question-card />
    </transition>

    <random-card />
  </div>
</template>
<script>
import QuestionCard from "./components/QuestionCard.vue";
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
    QuestionCard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  width: 100%;
  height: 60px;
}
</style>