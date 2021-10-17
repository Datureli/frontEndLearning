<template>
  <v-card class="mx-auto mt-10" height="100" color="blue" width="750">
    <v-toolbar color="transparent" elevation="0" class="text--primary mx auto">
    </v-toolbar>
    <router-view></router-view>

        <v-sheet :items="item" height="300" tile>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle
                class="text--primary text-h4 text-wrap "
                v-text="item.question"
              ></v-list-item-subtitle>

              <v-list-item-subtitle
                class="text-h5 text-wrap"
                v-text="item.answer"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-sheet>
  </v-card>
</template>