<template>
  <v-card
    color="darkGradient"
    dark
    v-if="!loggedIn"
    width="560"
    height="400"
    class="mx-auto mt-15 pr-4 pl-4"
  >
    <v-card-title>
      <h1 class="display-1 mt-10 mx-auto white--text">Change Password</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Password" v-model="ChangePassword" :rules="rules" />
        <v-text-field

          label="Repeat Password"
          v-model="repeatPassword"
          hide-details="auto"
          :rules="rules"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn block rounded class="mx-auto ma-2" color="info"
        >Change Password</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      changePassword: "",
      repeatPassword: "",
        rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
        value => (value === this.repeatPassword) || 'password must match',
      ],
    }
  },

};
</script>
