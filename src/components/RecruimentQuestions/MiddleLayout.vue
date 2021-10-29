<template>
  <v-card class="mx-auto mt-13" height="80" color="blue" width="550">
    <v-toolbar color="transparent" elevation="0" class="text--primary mx auto">
    </v-toolbar>
      <v-carousel>
    <v-carousel-item>
      <v-sheet
        height="330"
        style="box-shadow: inset 1px 0px 47px 3px rgba(66, 68, 90, 1);"
        tile
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle
\\
            ></v-list-item-subtitle>

            <v-list-item-subtitle
              class="text-h5 text-wrap"
              v-if="page === 1"
              v-text="cssItem.answer"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              class="text-h5 text-wrap"
              v-if="page === 2"
              v-text="cssItem.secondAnswer"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="3"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </v-carousel-item>
  </v-carousel>
 

  </v-card>
</template>

<script>
export default {
  data: () => ({
    page: 1,
  }),
};
</script>