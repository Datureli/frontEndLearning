<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      @keydown.esc="dialog = false"
      transition="dialog-bottom-transition"
      height="100%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="transparent" dark v-bind="attrs" v-on="on">
          login
        </v-btn>
      </template>

      <v-card
        style="background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);"
        height="100%"
      >
        <v-toolbar class="mb-0" dark color="#2c3e50">
          <v-toolbar-title>Login</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="closeModal">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="d-flex">
          <v-card
            after-sticky
            v-show="loggedIn && !elementVisible"
            height="38em"
            width="310"
          >
            <v-navigation-drawer
              dark
              color="#2c3e50"
              width="100%"
              height="100%"
            >
              <v-list color="transparent">
                <v-list-item-group
                  v-model="selectedItem"
                  style="font-size: 20px"
                  color="primary"
                  active-class="blue--text"
                >
                  <v-list-item>
                    <v-icon>mdi-home</v-icon>
                    <router-link
                      :to="{ name: 'HtmlQuestions' }"
                      class="text-deocration-none mx-auto"
                      style="text-decoration: none;"
                    >
                      Html
                    </router-link>
                  </v-list-item>

                  <v-list-item>
                    <v-icon>mdi-account-circle</v-icon>
                    <router-link
                      :to="{ name: 'CssQuestions' }"
                      class="mx-auto"
                      style="text-decoration: none;"
                    >
                      Css
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <v-icon>mdi-account-circle</v-icon>
                    <router-link
                      :to="{ name: 'JavascriptQuestions' }"
                      class="text-deocration-none mx-auto"
                      style="text-decoration: none;"
                    >
                      Javascript
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <v-icon>mdi-account-circle</v-icon>
                    <router-link
                      :to="{ name: 'VueQuestions' }"
                      class="text-deocration-none mx-auto"
                      style="text-decoration: none;"
                    >
                      Vue
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <v-icon>mdi-account-circle</v-icon>
                    <router-link
                      :to="{ name: 'HtmlQuestions' }"
                      class="text-deocration-none mx-auto"
                      style="text-decoration: none;"
                    >
                      React
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <v-icon>mdi-account-circle</v-icon>
                    <router-link
                      :to="{ name: 'Favorite' }"
                      class="text-deocration-none mx-auto"
                      style="text-decoration: none;"
                    >
                      Favorite
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <v-icon>mdi-account-circle</v-icon>
                    <router-link
                      :to="{ name: 'GeneralQuestions' }"
                      class="text-deocration-none mx-auto"
                      style="text-decoration: none;"
                    >
                      Ogólne
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <v-icon>mdi-account-circle</v-icon>
                    <router-link
                      :to="{ name: 'StupidQuestions' }"
                      class="text-deocration-none mx-auto"
                      style="text-decoration: none;"
                    >
                      Pytania o ciebie
                    </router-link>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

              <v-btn class="mt-15" @click="logOut">Logout</v-btn>
            </v-navigation-drawer>
          </v-card>
          <FavoriteSection v-if="this.$route.path === '/login/favorite'" />
          <MyInformation
            v-show="loggedIn && !elementVisible"
            v-if="this.$route.path === '/login'"
          />
        </div>

        <v-container>
          <div v-show="elementVisible && loggedIn">
            <h1 class="mt-10">Welcome to your user panel {{ username }}</h1>
            <login-animation />
          </div>

          <v-card
            style="background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);"
            v-if="!loggedIn"
            width="460"
            class="mx-auto mt-15 pr-4 pl-4"
          >
            <v-card-title>
              <h1 class="display-1 mx-auto">Login</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Username"
                  v-model="username"
                  :rules="loginRules"
                  prepend-icon="mdi-account-circle"
                />
                <v-text-field
                  label="Password"
                  v-model="password"
                  :rules="passwordRules"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                block
                v-if="loginButton"
                rounded
                class="mx-auto ma-2"
                @click="isUserLogin()"
                color="info"
                >Login</v-btn
              >
            </v-card-actions>
            <v-card-text class="text-center">
              Not a member yet?
              <router-link :to="{ name: 'SignUp' }">
                Sign up
              </router-link>
              now.
            </v-card-text>
          </v-card>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import FavoriteSection from "./FavoriteSection.vue";
import loginAnimation from "./LoginAnimation.vue";
import MyInformation from "./MyInformation.vue";
export default {
  components: {
    loginAnimation,
    MyInformation,
    FavoriteSection,
  },
  data: () => ({
    showFavorite: false,
    elementVisible: true,
    loginButton: true,
    dialog: false,
    username: null,
    password: null,
    loggedIn: false,
    showPassword: false,
    loginRules: [(value) => !!value || "login is required"],
    passwordRules: [(value) => !!value || "password is required"],
  }),
  computed: {
    Login() {
      return this.$store.state.loginStatus;
    },
    isUserLogin() {
      if (this.username.length > 0 && this.password.length > 0) {
        this.loggedIn = true;
        this.$router.push({ path: "login" });
      }

    },
  },
  methods: {
    logOut() {
      this.loggedIn = false;
    },

    closeModal() {
      this.dialog = false;
      this.$router.push({ path: "/" });
    },
  },
  created() {
    setTimeout(() => (this.elementVisible = false), 5000);
  },
};
</script>
