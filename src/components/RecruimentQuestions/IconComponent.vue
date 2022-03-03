<template>
  <v-row class="hidden-sm-and-down">
    <v-icon
      large
      @click="globalRandomQuestion"
      style="position: absolute; bottom:3%; right:73%;"
      >mdi-dice-multiple</v-icon
    >

    <v-icon
      x-large
      @click="randomLoop"
      style="position: absolute; bottom:3%; right:70%;"
      >mdi-autorenew</v-icon
    >

    <v-icon
      large 
      @click="disableAnswers"
      style="position: absolute; bottom:3%; right:20%;"
      >mdi-comment-off-outline</v-icon
    >
      <v-icon
      x-large
      @click="randomLoop"
      style="position: absolute; bottom:3%; right:27%;"
      >mdi-music</v-icon
    >
           <div class="controls">
          <button class="prev" @click="prev">Prev</button>
          <button class="play" v-if="!isPlaying" @click="play">Play</button>
          <button class="pause" v-else @click="pause">Pause</button>
          <button class="next" @click="next">Next</button>
        </div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="position: absolute; bottom:3%; right:22%;"
          color="transparent"
          outlined
          v-bind="attrs"
          v-on="on"
        >
          <v-icon
            :disabled="!isHeartActive"
            x-large
            @click="addToFavorite(htmlQuestions)"
            >mdi-heart</v-icon
          >
        </v-btn>
      </template>
      <span>You need to be logged in</span>
    </v-tooltip>
  </v-row>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  data() {
    return {
      disableLoop: false,
       current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: 'Grateful',
          artist: 'Neffex',
          src: require('@/assets/drake.mp3')
        },
        {
          title: 'Invincible',
          artist: 'Deaf Kev',
          src: require('@/assets/drake.mp3')
        }
      ],
      player: new Audio()
    }
  },
  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
  computed: {
    ...mapState(["disable", "favorite", "isHeartActive"]),
  },
  methods: {
     play (song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }
        this.current = this.songs[this.index];
        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
    next () {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev () {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    globalRandomQuestion() {
      switch (this.$route.path) {
        case "/about/htmlquestions":
          return this.randomHtmlQuestion();
        case "/about/cssquestions":
          return this.randomCssQuestion();
        case "/about/javascript":
          return this.randomQuestion();
        case "/about/vue":
          return this.randomVueQuestion();
        case "/about/react":
          return this.randomReactQuestion();
        case "/about/typescript":
          return this.randomTypescriptQuestion();
        case "/about/gitQuestions":
          return this.randomGitQuestion();
        case "/about/general":
          return this.randomGeneralQuestion();
        case "/about/bootstrap":
          return this.randomGeneralQuestion();
      }
    },
    randomLoop() {
      switch (this.$route.path) {
        case "/about/htmlquestions":
          return this.htmlQuestionLoop();
        case "/about/cssquestions":
          return this.cssQuestionLoop();
        case "/about/javascript":
          return this.questionLoop();
        case "/about/vue":
          return this.vueQuestionLoop();
        case "/about/react":
          return this.reactQuestionLoop();
        case "/about/typescript":
          return this.typescriptQuestionLoop();
        case "/about/gitQuestions":
          return this.gitQuestionLoop();
        case "/about/general":
          return this.generalQuestionLoop();
        case "/about/bootstrap":
          return this.GeneralQuestion();
      }
    },
    ...mapActions({
      htmlQuestions: ["randomHtmlQuestion"],
    }),
    ...mapActions("htmlQuestions", ["htmlQuestionLoop", "randomHtmlQuestion"]),
    ...mapActions("cssQuestions", ["cssQuestionLoop", "randomCssQuestion"]),
    ...mapActions("generalQuestions", [
      "generalQuestionLoop",
      "randomGeneralQuestion",
    ]),
    ...mapActions("gitQuestions", ["gitQuestionLoop", "randomGitQuestion"]),
    ...mapActions("questions", ["questionLoop", "randomQuestion"]),
    ...mapActions("reactQuestions", [
      "reactQuestionLoop",
      "randomReactQuestion",
    ]),
    ...mapActions("typescriptQuestions", [
      "typescriptQuestionLoop",
      "randomTypescriptQuestion",
    ]),
    ...mapActions("vueQuestions", ["vueQuestionLoop", "randomVueQuestion"]),
    ...mapActions(["disableAnswers", "addToFavorite"]),
  },
}
</script>
