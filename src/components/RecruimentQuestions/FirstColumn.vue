<template>
  <v-card width="300" outlined color="transparent" elevation="0">

    <v-list>
      <v-list-item>
        <v-icon>mdi-home</v-icon>
<router-link :to="{ name: 'HtmlQuestions'}">
        <v-list-item-title
        class="mr-8">Html</v-list-item-title>
        </router-link>
      </v-list-item>
      

      <v-list-item>
        <v-icon>mdi-account-circle</v-icon>

        <v-list-item-title class="mr-8">Css</v-list-item-title>
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>

        <v-list-item-title class="mr-8">Javascript</v-list-item-title>
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>

        <v-list-item-title class="mr-8">Vue</v-list-item-title>
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>

        <v-list-item-title class="mr-8">React</v-list-item-title>
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>

        <v-list-item-title class="mr-8">Bootstrap</v-list-item-title>
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>

        <v-list-item-title class="mr-8">Scss</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
 
  }),
     methods: {
      htmlOnClick() {
      this.$emit('htmlIsClicked')
      }
    }
};
</script>

<style></style>
