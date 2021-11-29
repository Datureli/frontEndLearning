<template>
  <v-card
    style="background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);"
    v-if="!loggedIn"
    width="560"
    height="auto"
    class="mx-auto mt-15 pr-4 pl-4"
  >
    <v-card-title>
      <h1 class="display-1 mx-auto white--text">Change Password</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Password"
          v-model="username"
          :rules="loginRules"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field
          label="Repeat Password"
          v-model="password"
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
        >Change Password</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
