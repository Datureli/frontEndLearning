<template>
  <div>
    <v-icon x-large @click="prev">mdi-skip-previous</v-icon>
    <v-icon v-if="!isPlaying" x-large @click="play">mdi-music</v-icon>
    <v-icon v-else x-large @click="pause">mdi-music-off</v-icon>
    <v-icon x-large @click="next">mdi-skip-next</v-icon>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MusicComponent extends Vue {

  current = {};
  index = 0;
  isPlaying = false;
  songs = [
    {
      title: "Grateful",
      artist: "Neffex",
      src: require("@/assets/drake.mp3"),
    },
    {
      title: "Invincible",
      artist: "Deaf Kev",
      src: require("@/assets/hack.mp3"),
    },
  ];
  player = new Audio();

  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }

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
  }
  pause() {
    this.player.pause();
    this.isPlaying = false;
  }
  next() {
    this.index++;
    if (this.index > this.songs.length - 1) {
      this.index = 0;
    }
    this.current = this.songs[this.index];
    this.play(this.current);
  }
  prev() {
    let index = this.index;
    let songs = this.songs;
    let current = this.current;
    index--;
    if (index < 0) {
      index = songs.length - 1;
    }
    current = songs[index];
    this.play(current);
  }
}
</script>
