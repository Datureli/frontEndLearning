<template>
  <v-menu top :close-on-content-click="closeOnContentClick">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="transparent" dark v-bind="attrs" v-on="on">
        <v-icon x-large>mdi-brightness-4</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-icon x-large>{{ item.title }}</v-icon>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "mdi-brightness-4"  },
      { title: "mdi-brightness-4" },
      { title: "mdi-brightness-4" },
      { title: "mdi-brightness-4" },
    ],
    closeOnContentClick: true,
  }),
};
</script>
