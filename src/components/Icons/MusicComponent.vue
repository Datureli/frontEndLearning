<template>
  <v-row>
    <v-icon
      x-large
      @click="prev"
      style="position: absolute; bottom:3%; right:50%;"
      >mdi-skip-previous</v-icon
    >
    <v-icon
      v-if="!isPlaying"
      x-large
      @click="play"
      style="position: absolute; bottom:3%; right:47%;"
      >mdi-music</v-icon
    >
    <v-icon
      v-else
      x-large
      @click="pause"
      style="position: absolute; bottom:3%; right:47%;"
      >mdi-music-off</v-icon
    >
    <v-icon
      x-large
      @click="next"
      style="position: absolute; bottom:3%; right:44%;"
      >mdi-skip-next</v-icon
    >
  </v-row>
</template>


<script>
export default {
    data() {
        return {
                current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: "Grateful",
          artist: "Neffex",
          src: require("@/assets/drake.mp3"),
        },
        {
          title: "Invincible",
          artist: "Deaf Kev",
          src: require("@/assets/drake.mp3"),
        },
      ],
      player: new Audio(),
        }
    },
      created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
  methods: {
       play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener(
        "ended",
        function() {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
}
</script>
