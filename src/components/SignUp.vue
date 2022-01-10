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
            <v-btn icon dark @click="closeDialog">
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
          <v-form :value="formValidity" @input="updateFormValidity">
            <v-card-title>
              <h1 class="display-1 mx-auto">Sign up</h1>
            </v-card-title>
            <v-text-field
              label="Name"
              type="name"
              v-model="name"
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
                @click="addUser"
                type="submit"
                color="primary"
                :disabled="!formValidity"
                >Submit
              </v-btn>
            </div>
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
        {{ registeredUsers }}
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
     date: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    ...mapActions("register", ["addUser","closeDialog"]),
 
  },
  computed: {
      formValidity: {
    get () {
      return this.$store.register.state.obj.formValidity
    },
    set (value) {
      this.$store.register.commit('updateMessage', value)
    },
      date: {
     set(value) {
       this.updateDate(value)
     },
     get() {
       return this.$store.state.register.date
     }
   }
  },
    ...mapState("register", [
      "name",
      "registeredUsers",
      "password",
      "formValidity",
      "isSubmitted",
      "dialog",
      "date",
      "modal",
      "menu2",
      "agreeToTerms",
      "agreeToTermsRules",
      "birthday",
      "email",
      "nameRules",
      "passwordRules",
      "emailRules",
      "hearOptions"
    ]),
  },
};
</script>
