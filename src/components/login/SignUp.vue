<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    @keydown.esc="dialog = false"
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="transparent" dark v-bind="attrs" v-on="on">
        Sign up
      </v-btn>
    </template>
    <v-card color="darkGradient">
      <v-btn
        x-large
        style="right: 1%"
        icon
        dark
        @click="dialog = false"
        absolute
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card
        v-if="isSubmitted"
        width="500"
        class="mx-auto pr-10 pl-10 "
        color="darkGradient"
      >
        <v-form class="white--text pt-15" v-model="formValidity">
          <v-card-title>
            Sign up
          </v-card-title>
          <div v-for="inputDate in inputDate" :key="inputDate.id">
            <v-text-field
              :label="inputDate.inputLabel"
              :type="inputDate.inputType"
              v-model="inputDate.inputModel"
              :rules="inputDate.inputRules"
              :prepend-icon="inputDate.inputIcon"
            >
            </v-text-field>
            {{ inputDate.inputModel }}
          </div>

          <v-checkbox
            class="pa-0"
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
        class="mt-12 green darken-1 text-center justify-center mx-auto  white--text"
      >
        <h1>congratulation</h1>
        <p class="m-0">email confirmation has been send</p>
        <v-icon class="mb-5">mdi-checkbox-marked-circle</v-icon>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      isSubmitted: true,
      formValidity: false,
    };
  },
  computed: {
    ...mapState("register", ["inputDate", "agreeToTerms", "agreeToTermsRules"]),
  },
};
</script>
