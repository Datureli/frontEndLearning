<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="transparent" dark v-bind="attrs" v-on="on">
          Sign up
        </v-btn>
      </template>
      <v-card color="darkGradient">
        <v-toolbar dark elevation="0" color="#2c3e50">
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card
          v-if="isSubmitted"
          width="600"
          elevation="0"
          outlined
          class="mx-auto pr-10 pl-10"
          color="#2c3e50"
        >
          <v-form v-model="formValidity">
            <v-card-title>
              <h1 class="mx-auto white--text">Sign up</h1>
            </v-card-title>
            <v-text-field
              label="Name"
              type="name"
              :value="name"
              @input="updateName"
              :rules="nameRules"
              prepend-icon="mdi-pencil"
            >
            </v-text-field>
            <v-text-field
              label="Email"
              type="email"
              :value="email"
              @input="updateEmail"
              :rules="emailRules"
              required
              prepend-icon="mdi-email"
            >
            </v-text-field>
            <v-text-field
              label="Password"
              type="password"
              :value="password"
              @input="updatePassword"
              required
              :rules="passwordRules"
              prepend-icon="mdi-lock-question"
            >
            </v-text-field>

            <v-menu
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker without buttons"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date"></v-date-picker>
            </v-menu>
            <v-autocomplete
              label="where u hear about us?"
              prepend-icon="mdi-call-split"
              :items="hearOptions"
            ></v-autocomplete>

            <v-checkbox
              class="pa-0 "
              v-model="agreeToTerms"
              :rules="agreeToTermsRules"
              required
              label="Agree to terms i condition."
            ></v-checkbox>

            <v-btn
              class="mx-auto mb-5"
              @click="addUser"
              type="button"
              color="primary"
              :disabled="!formValidity"
              >Submit
            </v-btn>
          </v-form>
        </v-card>
        <v-card
          v-else
          width="400"
          class="mt-16 green darken-1 text-center justify-center mx-auto  white--text"
        >
          <h1>congrtulation</h1>
          <p class="m-0">email confirmation has been send</p>
          <v-icon class="mb-5">mdi-checkbox-marked-circle</v-icon>
        </v-card>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dialog: false,
      isSubmitted: true,
      formValidity: false,
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("register/addUser");
    },
    addRegister() {
      this.$store.state.register.registeredUsers.push(updateName);
    },
    updateName(e) {
      this.$store.commit("register/updateName", e.target.value);
    },
    updatePassword() {
      this.$store.commit("register/updatePassword", e.target.value);
    },
    updateEmail() {
      this.$store.commit("register/updateEmail", e.target.value);
    },
  },
  computed: {
    email() {
      return this.$store.register.state.email;
    },
    name() {
      return this.$store.register.state.name;
    },
    password() {
      return this.$store.register.state.password;
    },
    ...mapState("register", [
      "agreeToTerms",
      "name",
      "registeredUsers",
      "password",
      "agreeToTermsRules",
      "email",
      "nameRules",
      "passwordRules",
      "emailRules",
      "hearOptions",
    ]),
  },
};
</script>
