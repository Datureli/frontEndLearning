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
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Sing up</v-toolbar-title>
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
          outlined
          elevation="10"
          class="mx-auto mb-5 mt-5 pr-10 pl-10"
        >
          <v-form v-model="formValidity">
            <v-card-title>
              <h1 class="display-1 mx-auto">Sign up</h1>
            </v-card-title>
            <v-text-field
              label="Name"
              type="name"
              required
              :rules="nameRules"
              prepend-icon="mdi-pencil"
            >
            </v-text-field>
            <v-text-field
              label="Email"
              type="email"
              v-model="email"
              :rules="emailRules"
              required
              prepend-icon="mdi-email"
            >
            </v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              required
              :rules="passwordRules"
              prepend-icon="mdi-lock-question"
            >
            </v-text-field>

            <v-menu
              v-model="menu2"
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
              <v-date-picker
                v-model="date"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
            <v-autocomplete
              label="where u hear about us?"
              prepend-icon="mdi-call-split"
              :items="hearOptions"
            ></v-autocomplete>

            <div class="text-center justify-center d-flex">
              <v-checkbox
                v-model="agreeToTerms"
                :rules="agreeToTermsRules"
                required
                label="Agree to terms i condition."
              ></v-checkbox>
            </div>

            <div class="text-center">
              <v-btn
                class="mx-auto mb-5"
                @click="submitted"
                type="submit"
                color="primary"
                :disabled="!formValidity"
                >Submit
              </v-btn>
            </div>
          </v-form>

      
        </v-card>
            <v-card v-else width="400"  class="mt-16 green darken-1 text-center justify-center mx-auto  white--text">
            <h1>congrtulation</h1>
            <p class="m-0">email confirmation has been send</p>
          <v-icon class="mb-5">mdi-checkbox-marked-circle</v-icon>
          </v-card>
            
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      formValidity: false,
      isSubmitted: true,
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      menu2: false,
      agreeToTerms: false,
      agreeToTermsRules: [
        (value) => !!value || "you must agree to terms and conditions",
      ],
      birthday: "",
      hearOptions: ["Internet", "newspapper", "family", "radio"],
      email: "",
      nameRules: [
        (value) => !!value || "Name is required",
        (value) =>
          value.match(/[^0-9]/i) || "email should contain only letters",
      ],
      passwordRules: [
        (value) => !!value || "password is required",
        (value) =>
          value.length >= 5 || "password must contain at least 5 characters",
      ],
      emailRules: [
        (value) => !!value || "Email is required",
        (value) => value.indexOf("@") !== 0 || "Email should have a username",
        (value) => value.includes("@") || "Email should include an @ symbol",
        (value) =>
          value.indexOf(".") - value.indexOf("@") > 1 ||
          "Email should contain a valid domain",
        (value) =>
          value.indexOf(".") <= value.length - 3 ||
          "Email should contain a valid extension",
      ],
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = !this.isSubmitted;
    },
  },
};
</script>
