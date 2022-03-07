<template>
  <v-menu class="" top :close-on-content-click="closeOnContentClick">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="transparent" v-bind="attrs" v-on="on">
        <v-icon x-large>mdi-brightness-4</v-icon>
      </v-btn>
    </template>

    <v-list color="primary">
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
      { title: "mdi-brightness-4", id: 1, fontColor: "black" },
      { title: "mdi-brightness-4", id: 2, fontColor: "green" },
      { title: "mdi-brightness-4", id: 3, fontColor: "yellow" },
      { title: "mdi-brightness-4", id: 4, fontColor: "silver" },
    ],
    closeOnContentClick: true,
  }),
};
</script>
