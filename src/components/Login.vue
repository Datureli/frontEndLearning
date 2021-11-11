<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      @keydown.esc="dialog = false"
      transition="dialog-bottom-transition"
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
            <v-btn icon dark @click="dialog = false">
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
              <v-list>
                <v-list-item v-for="([icon, text], i) in items" :key="i" link>
                  <v-list-item-icon>
                    <v-icon>{{ icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-btn class="mt-15" @click="logOut">Logout</v-btn>
            </v-navigation-drawer>
          </v-card>
          <MyInformation v-show="loggedIn && !elementVisible" />
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
import loginAnimation from "./LoginAnimation.vue";
import MyInformation from "./MyInformation.vue";
export default {
  components: {
    loginAnimation,
    MyInformation,
  },
  data: () => ({
    items: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Password"],
      ["mdi-clock-start", "Payment methods"],
      ["mdi-clock-start", "Favorite"],
      ["mdi-clock-start", "Account settings"],
      ["mdi-clock-start", "Premium"],
    ],
    elementVisible: true,
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
      }
    },
  },
  methods: {
    logOut() {
      this.loggedIn = false;
    },
  },
  created() {
    setTimeout(() => (this.elementVisible = false), 5000);
  },
};
</script>
