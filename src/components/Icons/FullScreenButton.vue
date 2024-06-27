<template>
  <v-btn
    @click="toggleFullscreen"
    class="fullscreen-btn"
    :class="{ 'no-background': isFullscreen }"
  >
    <v-icon v-if="isFullscreen">mdi-close</v-icon>
    <span v-else>Pełny Ekran</span>
  </v-btn>
</template>

<script>
export default {
  name: "FullscreenButton",
  data() {
    return {
      isFullscreen: false,
    };
  },
  methods: {
    toggleFullscreen() {
      if (!document.fullscreenElement) {
        this.openFullscreen();
        this.isFullscreen = true;
      } else {
        this.closeFullscreen();
        this.isFullscreen = false;
      }
    },
    openFullscreen() {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        // IE/Edge
        elem.msRequestFullscreen();
      }
    },
    closeFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    },
    updateFullscreenStatus() {
      this.isFullscreen = !!document.fullscreenElement;
    },
  },
  mounted() {
    document.addEventListener("fullscreenchange", this.updateFullscreenStatus);
  },
  beforeDestroy() {
    document.removeEventListener(
      "fullscreenchange",
      this.updateFullscreenStatus
    );
  },
};
</script>

<style scoped>
.fullscreen-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
}

.no-background {
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>
