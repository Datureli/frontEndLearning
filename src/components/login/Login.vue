<template>
  <v-row justify="center">
    <v-dialog
      eager
      v-model="dialog"
      fullscreen
      @keydown.esc="dialog = false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="transparent" dark v-bind="attrs" v-on="on">
          {{ !loggedIn ? "login" : "my account" }}
        </v-btn>
      </template>

      <v-card color="darkGradient">
        <v-toolbar class="mb-0" elevation="0" dark color="#2c3e50">
          <v-toolbar-title>Ucz się frontu</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="closeModal">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <div class="d-flex" >
          <v-card
            v-show="loggedIn && !elementVisible"
            height="100%"
            max-width="300"
            min-width="300"
            dark
            color="#2c3e50"
          >
            <!--  <p class="rotingtxt">original</p> -->
            <v-list color="transparent">
              <v-list-item-group
                style="font-size: 20px"
                color="primary"
                active-class="blue--text"
              >
                <v-list-item
                  v-for="(loginSection, index) in loginSections"
                  :key="index"
                  :to="loginSection.link"
                  elevation="0"
                  class="text-deocration-none mx-auto"
                >
                  <v-list-item-title>{{
                    loginSection.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>

            <v-btn class="mt-10 mb-10" @click="logOut">Logout</v-btn>
          </v-card>
          <FavoriteSection v-if="this.$route.path === '/login/favorite'" />
          <MyInformation
            v-show="loggedIn && !elementVisible"
            v-if="this.$route.path === '/login'"
          />
          <ChangePassword v-if="this.$route.path === '/password'" />
          <MessageSection v-if="this.$route.path === '/messages'" />
        </div>

        <v-container>
          <div v-show="elementVisible && loggedIn">
            <h1 class="mt-10">Welcome to your user panel {{ username }}</h1>
            <login-animation />
          </div>

          <v-card
            color="darkGradient"
            v-if="!loggedIn"
            width="460"
            class="mx-auto mt-15 pr-4 pl-4"
          >
            <v-card-title>
              <h1 class="display-1 mx-auto white--text">
                Login
              </h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  hide-details="auto"
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
                rounded
                class="mx-auto ma-2"
                @click="isUserLogin"
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
import { mapState } from "vuex";
import FavoriteSection from "./FavoriteSection.vue";
import loginAnimation from "./LoginAnimation.vue";
import MyInformation from "./MyInformation.vue";
import ChangePassword from "./ChangePassword.vue";
import MessageSection from "./MessageSection.vue";
export default {
  components: {
    loginAnimation,
    MyInformation,
    FavoriteSection,
    ChangePassword,
    MessageSection,
  },
  data: () => ({
    username: "",
    password: "",
    elementVisible: true,
    dialog: false,
    showPassword: false,
    loggedIn: false,
  }),
  computed: {
    ...mapState("login", ["loginRules", "passwordRules", "loginSections"]),
    ...mapState("register", ["registeredUsers"]),
  },

  methods: {
    logOut() {
      this.loggedIn = !this.loggedIn;
    },
    closeModal() {
      this.dialog = false;
      this.$router.push({ path: "/" });
    },
    isUserLogin() {
      if (this.username.length > 0 && this.password.length > 0) {
        this.loggedIn = true;
        this.$router.push({ path: "login" });
      }
    },
  },
  created() {
    setTimeout(() => (this.elementVisible = false), 3000);
  },
};
</script>

<style>
.rotingtxt {
  -webkit-transform: rotate(331deg);
  -moz-transform: rotate(331deg);
  -o-transform: rotate(331deg);
  transform: rotate(331deg);
  font-size: 12em;
  color: rgba(255, 5, 5, 0.17);
  position: absolute;
  font-family: "Denk One", sans-serif;
  text-transform: uppercase;
}
</style>
