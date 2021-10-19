<template>
  <v-container-fluid>
    <v-card class="overflow-hidden mx-auto">
      <v-app-bar color="#6A76AB">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <v-btn color="transparent" outlined>
          <Login />
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
                >Home</router-link
              ></v-tab
            >
            <v-tab>
              <router-link
                :to="{ name: 'About' }"
                class="text-decoration-none white--text"
                >Pytania rekrutacyjne</router-link
              ></v-tab
            >
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-tab
                  v-bind="attrs"
                  v-on="on"
                  class="text-decoration-none white--text"
                >
                  Gry
                </v-tab>
              </template>
              <v-list>
                <router-link
                  v-for="(item, index) in items"
                  :key="index"
                  :to="item.routeUrl"
                  class="text-decoration-none white--text"
                >
                  <v-list-item>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list>
            </v-menu>

            <v-tab>
              <router-link
                :to="{ name: 'Materials' }"
                class="text-decoration-none white--text"
                >Materiały</router-link
              ></v-tab
            >
                  <v-tab>
              <router-link
                :to="{ name: 'Interview' }"
                class="text-decoration-none white--text"
                >Interview</router-link
              ></v-tab
            >
          </v-tabs>
        </template>
      </v-app-bar>

      <router-view></router-view>
    </v-card>
  </v-container-fluid>
</template>

<script>
import Login from "./Login.vue";
export default {
  components: { Login },
  data: () => ({
    items: [
      { title: "Fiszki", routeUrl: "/intoflashcards" },
      { title: "Quiz", routeUrl: "/quiz" },
    ],
  }),
};
</script>
