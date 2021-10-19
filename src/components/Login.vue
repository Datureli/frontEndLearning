<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template  v-slot:activator="{ on, attrs }">
        <v-btn color="transparent" dark v-bind="attrs" v-on="on">
          login
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <div v-if="loggedIn">
            <h1>You are succesfuly loggin in {{ username }}</h1>
            <v-btn @click="logOut">Logout</v-btn>
          </div>
          <v-card v-else width="460" class="mx-auto mt-15 pr-4 pl-4">
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
                @click="logginIn(loggedIn)"
                color="info"
                >Login</v-btn
              >
            </v-card-actions>
            <v-card-text class="text-center">
              Not a member yet?
              <router-link :to="{ name: 'signup' }">
                Sign up
              </router-link>
              now.
            </v-card-text>
          </v-card>
          <v-card-title> </v-card-title>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    username: null,
    password: null,
    loggedIn: false,
    showPassword: false,
    loginRules: [(value) => !!value || "login is required"],
    passwordRules: [(value) => !!value || "password is required"],
  }),
  methods: {
    logginIn(loggedIn) {
      this.$emit("logged", loggedIn);
      if (this.username.length > 0 && this.password.length > 0) {
        this.loggedIn = true;
      }
      store.user = this.username;
      const redirectPath = this.$route.query.redirect || "/";
      this.$router.push(redirectPath);
    },
    logOut() {
      this.loggedIn = false;
    },
  },
};
</script>
