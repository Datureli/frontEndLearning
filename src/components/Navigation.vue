<template>
  <v-container-fluid>
    <v-card class="overflow-hidden mx-auto">
      <v-app-bar
        color="#6A76AB"
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
          <v-tabs fixed-tabs class="mx-auto" align-with-title>
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
                >Pytania rekrutacyjne</router-link
              ></v-tab
            >

            <v-tab>
              <router-link
                :to="{ name: 'IntoFlashCards' }"
                class="text-decoration-none white--text"
                >Flash Cards</router-link
              ></v-tab
            >
            <v-tab>
              <router-link
                :to="{ name: 'Materials' }"
                class="text-decoration-none white--text"
                >Materiały</router-link
              ></v-tab
            >
          </v-tabs>
        </template>
      </v-app-bar>

     <router-view></router-view>
    </v-card>
    <bottom-navbar />
  </v-container-fluid>
</template>

<script>
import BottomNavbar from './BottomNavbar.vue';
export default {
  components: { BottomNavbar },
  data: () => ({
    collapseOnScroll: true,
  }),
};
</script>
