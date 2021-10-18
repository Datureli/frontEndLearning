<template>
    <v-card
      class="mx-auto mt-15 d-flex"
      max-width="944"
      height="370"
      elevation="10"
    >
      <div class="ml-15 mt-15">
        <v-card-title class="text-h4">Ucz się poprzez fiszki!</v-card-title>
        <v-card-text>
          <div class="text--primary">
            Fiszki jest to efektywny sposób nauki,<br />
            ułatwia systematyczną naukę haseł
          </div>
        
            <v-btn rounded color="success" class="mt-4">
              <router-link  :to="{ name: 'FlashCards' }"
              class="text-decoration-none white--text">
                Learn More
              </router-link>
            </v-btn>
        
        </v-card-text>
      </div>
      <v-spacer></v-spacer>
      <v-img
        src="../assets/logo.png"
        class="mr-10"
        max-height="350"
        max-width="350"
      ></v-img>
    </v-card>
</template>
