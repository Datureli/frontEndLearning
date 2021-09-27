<template>
  <v-container-fluid>
    <v-card class="overflow-hidden">
      <v-app-bar
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>
              <router-link
                :to="{ name: 'Home' }"
                class="text-decoration-none white--text"
                >postać</router-link
              ></v-tab
            >
            <v-tab>
              <router-link
                :to="{ name: 'About' }"
                class="text-decoration-none white--text"
                >walka</router-link
              ></v-tab
            >

           <v-tab>
              <router-link
                :to="{ name: 'IntoFlashCards' }"
                class="text-decoration-none white--text"
                >Flash Cards</router-link
              ></v-tab
            >
          </v-tabs>
        </template>
      </v-app-bar>

      <v-container style="height: 1000px;">
        <router-view></router-view>
      </v-container>
    </v-card>
  </v-container-fluid>
</template>

<script>
export default {};
</script>

<style></style>
