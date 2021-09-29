<template>
  <v-card
    class="mx-auto grid"
    tile
    width="300"
    height="300"
    outlined
    color="transparent"
  >
    <div class="d-grid">
      <div>
        <v-icon>mdi-arrow-up-bold</v-icon>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-icon>mdi-arrow-down-bold</v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "My Files", icon: "mdi-folder" },
      { text: "Shared with me", icon: "mdi-account-multiple" },
      { text: "Starred", icon: "mdi-star" },
      { text: "Recent", icon: "mdi-history" },
      { text: "Offline", icon: "mdi-check-circle" },
      { text: "Uploads", icon: "mdi-upload" },
      { text: "Backups", icon: "mdi-cloud-upload" },
    ],
  }),
};
</script>

<style></style>
